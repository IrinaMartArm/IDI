"use client";

import { ProductSectionBlockProps } from "./types";
import { SharedSection, SharedSectionHead, SharedSectionLead, SharedSectionTitle } from "./shared";

export const ProductSectionBlock = ({ title, lead, children }: ProductSectionBlockProps) => {
  return (
    <SharedSection>
      <SharedSectionHead>
        <SharedSectionTitle>{title}</SharedSectionTitle>
        {lead ? <SharedSectionLead>{lead}</SharedSectionLead> : null}
      </SharedSectionHead>
      {children}
    </SharedSection>
  );
};
