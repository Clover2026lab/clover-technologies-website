export interface Product {
  id: string;
  name: string;
  description: string;
  icon: string;
  href: string;
}

export const products: Product[] = [
  {
    id: "n3t2s",
    name: "N3T2S ERP",
    description:
      "A modern enterprise resource planning platform that integrates finance, HR, procurement, inventory and operations into one intelligent system.",
    icon: "Boxes",
    href: "/products/n3t2s",
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    description:
      "Governance, Risk & Compliance, SOC services, security assessments and cyber resilience solutions.",
    icon: "Shield",
    href: "/products/cybersecurity",
  },
  {
    id: "ai",
    name: "Artificial Intelligence",
    description:
      "AI assistants, intelligent automation and business insights powered by machine learning.",
    icon: "Bot",
    href: "/products/ai",
  },
  {
    id: "automation",
    name: "Business Automation",
    description:
      "Workflow automation and integrations that eliminate repetitive tasks and improve productivity.",
    icon: "Workflow",
    href: "/products/automation",
  },
];