"use client";

import React, { useState } from "react";
import { Cloud, Shield, Server, Network, Lock, Activity, GitBranch, CheckCircle2, Copy, Check } from "lucide-react";

interface NodeData {
  id: string;
  name: string;
  category: "network" | "compute" | "security" | "observability" | "governance";
  icon: React.ElementType;
  description: string;
  adr: string;
  securityGuardrails: string[];
  terraformSnippet: string;
}

export function LandingZoneVisualizer() {
  const [cloudProvider, setCloudProvider] = useState<"gcp" | "aws">("gcp");
  const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);
  const [copied, setCopied] = useState(false);

  const gcpNodes: NodeData[] = [
    {
      id: "org-policies",
      name: "Org Policies & Governance",
      category: "governance",
      icon: Shield,
      description: "Root-level guardrails enforcing IAM restrictions, location constraints (europe-west1), and private service access.",
      adr: "ADR-001: Enforce constraint `compute.vmExternalIpAccess` to prevent any VM from having public IPs; all ingress routed through Cloud Armor.",
      securityGuardrails: ["Resource location restricted to EU", "No public IPs on backend VMs/instances", "Enforced uniform bucket-level access on Cloud Storage"],
      terraformSnippet: `resource "google_project_organization_policy" "location_restriction" {
  project    = var.project_id
  constraint = "gcp.resourceLocations"
  list_policy {
    allow { values = ["in:europe-west1-locations"] }
  }
}`,
    },
    {
      id: "hub-vpc",
      name: "Hub Shared VPC",
      category: "network",
      icon: Network,
      description: "Centralized networking project hosting Cloud Interconnect, Shared VPC host, Cloud NAT, and Private Service Connect (PSC).",
      adr: "ADR-004: Centralize all egress and interconnects inside a dedicated host VPC project to streamline firewall governance and reduce IP overlap.",
      securityGuardrails: ["Hierarchical firewall rules", "Centralized Cloud NAT for private internet egress", "VPC Flow Logs enabled for audit trail"],
      terraformSnippet: `resource "google_compute_shared_vpc_host_project" "hub" {
  project = "prj-hub-network-prod"
}

resource "google_compute_router_nat" "central_nat" {
  name                               = "nat-central-gateway"
  router                             = google_compute_router.hub_router.name
  nat_ip_allocate_option             = "AUTO_ONLY"
  source_subnetwork_ip_ranges_to_nat = "ALL_SUBNETWORKS_ALL_IP_RANGES"
}`,
    },
    {
      id: "cloud-run-api",
      name: "Platform APIs (Cloud Run)",
      category: "compute",
      icon: Server,
      description: "Internal self-service provisioning microservices written in Python 3.13 & FastAPI with Serverless VPC Access connector.",
      adr: "ADR-012: Migrate provisioning workloads from Cloud Functions to Cloud Run for persistent concurrency, Docker reproducibility, and strict scale-to-zero FinOps control.",
      securityGuardrails: ["Ingress internal & Load Balancer only", "Dedicated fine-grained service account", "Automatic SSL via managed certs"],
      terraformSnippet: `resource "google_cloud_run_v2_service" "provisioning_api" {
  name     = "cloud-provisioner-api"
  location = "europe-west1"
  ingress  = "INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER"

  template {
    scaling {
      min_instance_count = 0
      max_instance_count = 10
    }
    vpc_access {
      connector = google_vpc_access_connector.connector.id
      egress    = "ALL_TRAFFIC"
    }
    containers {
      image = "europe-west1-docker.pkg.dev/prod/api:v3.13"
    }
  }
}`,
    },
    {
      id: "vault-secrets",
      name: "HashiCorp Vault Secrets",
      category: "security",
      icon: Lock,
      description: "Zero-trust secrets management with dynamic credentials for cloud infrastructure provisioning and short-lived tokens.",
      adr: "ADR-007: Eliminate static cloud credentials by issuing short-lived Google Cloud IAM OAuth tokens backed by HashiCorp Vault.",
      securityGuardrails: ["Dynamic credentials rotated every 60 minutes", "Audit logging to Cloud Storage", "mTLS communication across all pods"],
      terraformSnippet: `resource "vault_gcp_secret_backend" "gcp" {
  path        = "gcp"
  description = "Dynamic GCP service account credentials"
  credentials = file("vault-sa.json")
}`,
    },
    {
      id: "datadog-sre",
      name: "Datadog & Cloud Logging",
      category: "observability",
      icon: Activity,
      description: "Full-stack observability with automated SLO monitors, synthetic checks on provisioning APIs, and structured JSON logs.",
      adr: "ADR-019: Export all VPC Flow Logs and Cloud Run request metrics to Datadog via Google Pub/Sub forwarder with automated alerts on P99 latency > 200ms.",
      securityGuardrails: ["PII redaction filter on log sinks", "Automated anomaly detection monitors", "Alert routing to PagerDuty/Slack"],
      terraformSnippet: `resource "google_logging_project_sink" "datadog" {
  name        = "datadog-log-sink"
  destination = "pubsub.googleapis.com/\${google_pubsub_topic.datadog.id}"
  filter      = "resource.type = cloud_run_revision OR resource.type = gce_subnetwork"
}`,
    },
    {
      id: "github-actions-pool",
      name: "CI/CD & Ephemeral Testing",
      category: "compute",
      icon: GitBranch,
      description: "Automated delivery pipeline using GitHub Actions with `terraform test` and pytest running in isolated test namespaces.",
      adr: "ADR-023: Replace 3-day manual validation checklists with automated parallelized terraform test suites, cutting cycle to 30 mins.",
      securityGuardrails: ["Workload Identity Federation (no static keys in GitHub)", "Pre-merge Dependabot & Trivy security scans", "Automated plan diff review in PR comments"],
      terraformSnippet: `resource "google_iam_workload_identity_pool" "github_pool" {
  workload_identity_pool_id = "github-actions-pool"
  description               = "OIDC federation for GitHub Actions"
}`,
    },
  ];

  const awsNodes: NodeData[] = [
    {
      id: "aws-control-tower",
      name: "Control Tower & SCPs",
      category: "governance",
      icon: Shield,
      description: "Multi-account foundation managed by AWS Control Tower and Service Control Policies (SCPs).",
      adr: "ADR-002: Deny root user access and mandate KMS customer managed keys (CMK) across all S3 buckets and EBS volumes.",
      securityGuardrails: ["Region lock to eu-west-3 (Paris)", "Mandatory IMDSv2 on all EC2 instances", "GuardDuty & AWS Config continuous compliance"],
      terraformSnippet: `resource "aws_organizations_policy" "deny_leave_org" {
  name        = "DenyLeaveOrganization"
  description = "Prevents member accounts from leaving the AWS Organization"
  content     = jsonencode({
    Version   = "2012-10-17"
    Statement = [{ Effect = "Deny", Action = "organizations:LeaveOrganization", Resource = "*" }]
  })
}`,
    },
    {
      id: "aws-tgw",
      name: "Transit Gateway Hub",
      category: "network",
      icon: Network,
      description: "Centralized routing hub interconnecting Spoke VPCs, Shared Services VPC, and on-premises Direct Connect.",
      adr: "ADR-005: Use AWS Transit Gateway with route domain separation (Core, Non-Prod, Prod) to prevent cross-environment blast radius.",
      securityGuardrails: ["Route table segregation", "VPC Flow Logs to CloudWatch Logs", "Egress filtered through central Network Firewall"],
      terraformSnippet: `resource "aws_ec2_transit_gateway" "hub" {
  description                     = "Central Hub Transit Gateway"
  default_route_table_association = "disable"
  default_route_table_propagation = "disable"
}`,
    },
    {
      id: "aws-fargate-api",
      name: "Internal APIs (ECS Fargate)",
      category: "compute",
      icon: Server,
      description: "Serverless containerized provisioning microservices behind private Application Load Balancer.",
      adr: "ADR-014: Standardize on AWS Fargate with ARM64 Graviton instances for 20% cost efficiency and zero OS patching.",
      securityGuardrails: ["Private subnets with zero internet gateway route", "IAM Task Execution Role least privilege", "Automated container vulnerability scanning in ECR"],
      terraformSnippet: `resource "aws_ecs_task_definition" "api" {
  family                   = "cloud-provisioner"
  requires_compatibilities = ["FARGATE"]
  cpu                      = "512"
  memory                   = "1024"
  network_mode             = "awsvpc"
}`,
    },
    {
      id: "aws-kms",
      name: "AWS KMS & Secrets",
      category: "security",
      icon: Lock,
      description: "Envelope encryption with AWS KMS Customer Managed Keys (CMKs) and automatic annual rotation.",
      adr: "ADR-008: Enforce encryption in transit (TLS 1.3) and encryption at rest with customer-managed keys.",
      securityGuardrails: ["Annual key rotation enabled", "Strict key policy preventing unauthorized deletion", "Audit trails via CloudTrail"],
      terraformSnippet: `resource "aws_kms_key" "landing_zone_key" {
  description             = "Landing Zone CMK for sensitive secrets"
  deletion_window_in_days = 30
  enable_key_rotation     = true
}`,
    },
    {
      id: "aws-datadog",
      name: "CloudWatch & Datadog",
      category: "observability",
      icon: Activity,
      description: "Centralized metric streaming via Amazon Kinesis Firehose directly into Datadog SRE dashboards.",
      adr: "ADR-021: Forward CloudWatch alarms directly to unified Datadog dashboards for single-pane-of-glass multi-cloud monitoring.",
      securityGuardrails: ["Encrypted Firehose delivery streams", "Custom FinOps dashboards for cost anomaly alerts", "P99 SLA alert thresholds"],
      terraformSnippet: `resource "aws_kinesis_firehose_delivery_stream" "datadog" {
  name        = "datadog-metrics-stream"
  destination = "http_endpoint"
}`,
    },
    {
      id: "aws-cicd",
      name: "CI/CD & Terratest",
      category: "compute",
      icon: GitBranch,
      description: "GitHub Actions runner fleet with AWS IAM OpenID Connect (OIDC) authentication.",
      adr: "ADR-024: Zero hardcoded AWS Access Keys; authenticates via GitHub OIDC tokens for ephemeral deployment sessions.",
      securityGuardrails: ["OIDC role assumption limited to repository branch", "Automated plan linting with tflint & tfsec", "Pull request automated approvals"],
      terraformSnippet: `resource "aws_iam_role" "github_actions" {
  name = "github-actions-deployer"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect = "Allow"
      Principal = { Federated = aws_iam_openid_connect_provider.github.arn }
      Action = "sts:AssumeRoleWithWebIdentity"
    }]
  })
}`,
    },
  ];

  const activeNodes = cloudProvider === "gcp" ? gcpNodes : awsNodes;

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Visualizer Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Cloud className="w-5 h-5 text-sky-400" />
            Interactive Multi-Cloud Landing Zone Visualizer
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Click on any architecture node to inspect its Architecture Decision Record (ADR), security guardrails, and production Terraform snippet.
          </p>
        </div>

        {/* Cloud Switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-lg bg-slate-950 border border-slate-800">
          <button
            onClick={() => {
              setCloudProvider("gcp");
              setSelectedNode(null);
            }}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all flex items-center gap-1.5 ${
              cloudProvider === "gcp"
                ? "bg-sky-500 text-slate-950 shadow-md font-bold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <span>Google Cloud (GCP)</span>
            <span className="text-[10px] bg-slate-900/30 px-1.5 py-0.5 rounded">Primary</span>
          </button>
          <button
            onClick={() => {
              setCloudProvider("aws");
              setSelectedNode(null);
            }}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all flex items-center gap-1.5 ${
              cloudProvider === "aws"
                ? "bg-amber-500 text-slate-950 shadow-md font-bold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <span>AWS Foundation</span>
          </button>
        </div>
      </div>

      {/* Grid of Architecture Nodes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {activeNodes.map((node) => {
          const Icon = node.icon;
          const isSelected = selectedNode?.id === node.id;
          return (
            <button
              key={node.id}
              onClick={() => setSelectedNode(node)}
              className={`p-4 rounded-xl text-left transition-all relative overflow-hidden border ${
                isSelected
                  ? "bg-slate-900/90 border-sky-400 shadow-lg shadow-sky-500/10 ring-1 ring-sky-400/50"
                  : "bg-slate-900/40 hover:bg-slate-900/80 border-slate-800/80 hover:border-slate-700"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sky-400">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                  {node.category}
                </span>
              </div>

              <div className="mt-3">
                <h4 className="text-sm font-bold text-white group-hover:text-sky-300 flex items-center justify-between">
                  <span>{node.name}</span>
                  {isSelected && <CheckCircle2 className="w-4 h-4 text-sky-400" />}
                </h4>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2">{node.description}</p>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-mono text-sky-400/90">Click to view Terraform ➔</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Node Details Drawer / Inspector */}
      {selectedNode && (
        <div className="p-5 rounded-2xl bg-slate-950 border border-sky-500/30 shadow-2xl space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex items-start justify-between border-b border-slate-800/80 pb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400">
                <selectedNode.icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <span>{selectedNode.name}</span>
                  <span className="text-xs font-mono uppercase bg-slate-800 text-sky-400 px-2 py-0.5 rounded">
                    {selectedNode.category}
                  </span>
                </h4>
                <p className="text-xs text-slate-400">{selectedNode.description}</p>
              </div>
            </div>

            <button
              onClick={() => setSelectedNode(null)}
              className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-900 border border-slate-800"
            >
              Close
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Architecture Decision Record & Guardrails */}
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="text-xs font-mono font-bold text-sky-400 mb-1">Architecture Decision Record (ADR)</div>
                <p className="text-xs text-slate-300 leading-relaxed">{selectedNode.adr}</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="text-xs font-mono font-bold text-emerald-400 mb-1.5">Enforced Security Guardrails</div>
                <ul className="space-y-1">
                  {selectedNode.securityGuardrails.map((g, i) => (
                    <li key={i} className="text-xs text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Production Terraform Code Snippet */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
                <span>Production Terraform Definition:</span>
                <button
                  onClick={() => handleCopy(selectedNode.terraformSnippet)}
                  className="flex items-center gap-1 text-[11px] text-sky-400 hover:text-sky-300"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied!" : "Copy code"}</span>
                </button>
              </div>

              <pre className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 font-mono text-[11px] text-sky-200 overflow-x-auto leading-relaxed max-h-60">
                <code>{selectedNode.terraformSnippet}</code>
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
