"use client";

import styled from "styled-components";
import { font, headingFont } from "../../../style/Common";
import { Theme } from "../../../style/Theme";
import { ResponsiveYoutubeEmbed } from "../../ResponsiveYoutubeEmbed";
import { ProductVideoSectionProps } from "./types";

export const ProductVideoSection = ({ sectionTitle, sectionLead, src, title }: ProductVideoSectionProps) => {
  return (
    <VideoSection>
      <VideoSectionHead>
        <VideoSectionTitle>{sectionTitle}</VideoSectionTitle>
        {sectionLead ? <VideoSectionLead>{sectionLead}</VideoSectionLead> : null}
      </VideoSectionHead>
      <VideoPreviewWrap>
        <ResponsiveYoutubeEmbed src={src} title={title} previewAlign="end" />
      </VideoPreviewWrap>
    </VideoSection>
  );
};

const VideoSection = styled.section`
  margin-top: 22px;
  display: grid;
  gap: 24px;
  padding: 30px 28px 28px;
  border-radius: ${Theme.radius.large};
  border: 1px solid rgba(201, 18, 93, 0.14);
  background:
    radial-gradient(circle at top right, rgba(201, 18, 93, 0.12), transparent 28%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.97), rgba(248, 237, 242, 0.94));
  box-shadow: ${Theme.shadow.soft};

  @media (max-width: 900px) {
    padding: 24px 18px 20px;
    margin-top: 14px;
  }
`;

const VideoSectionHead = styled.div`
  display: grid;
  gap: 8px;
  text-align: left;
`;

const VideoSectionTitle = styled.h2`
  margin: 0;
  color: ${Theme.colors.primaryDeep};
  ${font({ family: headingFont, weight: 700, fmax: 28, fmin: 22, color: Theme.colors.primaryDeep })};
`;

const VideoSectionLead = styled.p`
  margin: 0;
  max-width: 64ch;
  line-height: 1.6;
  color: rgba(86, 16, 45, 0.72);
  ${font({ weight: 400, fmax: 18, fmin: 15, color: Theme.colors.textMuted })};
`;

const VideoPreviewWrap = styled.div`
  width: 100%;
  max-width: 640px;
`;
