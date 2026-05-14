import { ReactNode } from "react";

export type ProductAdvantageItem = {
  title: string;
  text: string;
};

export type ProductFeatureItem = {
  label: string;
  value: string;
};

export type ProductChipGroupItem = {
  label: string;
  values: string[];
};

export type ProductProcessStep = {
  number: string;
  title: string;
  text: string;
  featured?: boolean;
  cardVariant?: "default" | "soft";
  numberVariant?: "plain" | "pill";
  textTone?: "default" | "muted";
};

export type ProductAdvantagesProps = {
  title: string;
  lead?: string;
  items: ProductAdvantageItem[];
};

export type ProductSectionBlockProps = {
  title: string;
  lead?: string;
  children: ReactNode;
};

export type ProductDetailsPanelProps = {
  title: string;
  lead: string;
  features: ProductFeatureItem[];
  chipGroups?: ProductChipGroupItem[];
};

export type ProductDetailsProps = ProductDetailsPanelProps & {
  media: ReactNode;
};

export type ProductProcessProps = {
  title: string;
  workflowSteps: ProductProcessStep[];
};

export type ProductProcessCardProps = ProductProcessStep;

export type ProductVideoSectionProps = {
  sectionTitle: string;
  sectionLead?: string;
  src: string;
  title: string;
};

export type ProductFinalCtaProps = {
  title: string;
  lead?: string;
};
