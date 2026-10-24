export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://said-hammoudi.vercel.app").replace(/\/$/, "");

export const SITE = {
  name: "Said Hammoudi",
  legalName: "Mohamed-Said Hammoudi",
  email: "hammoudi.pro6@gmail.com",
  linkedin: "https://linkedin.com/in/mohamed-said-hammoudi",
  github: "https://github.com/Hammoudi-Said",
  cv: "/cv-said-hammoudi.pdf",
} as const;
