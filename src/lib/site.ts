export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? `https://hammoudi-said.github.io${BASE_PATH}`
).replace(/\/$/, "");

/** Prefix a public/ asset path with the deploy base path (next/image and plain <a> do not add it). */
export const asset = (path: string) => `${BASE_PATH}${path}`;

export const SITE = {
  name: "Said Hammoudi",
  legalName: "Mohamed-Said Hammoudi",
  email: "hammoudi.pro6@gmail.com",
  linkedin: "https://linkedin.com/in/mohamed-said-hammoudi",
  github: "https://github.com/Hammoudi-Said",
  cv: "/cv-said-hammoudi.pdf",
} as const;
