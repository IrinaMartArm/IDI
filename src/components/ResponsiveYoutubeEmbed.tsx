"use client";

import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Theme } from "../style/Theme";
import { font } from "../style/Common";
import { lockBodyScroll, unlockBodyScroll } from "../shared/lib/bodyScrollLock";

type ResponsiveYoutubeEmbedProps = {
  previewAlign?: "start" | "end";
  previewLabel?: string;
  previewTitle?: string;
  src: string;
  title: string;
};

export const ResponsiveYoutubeEmbed = ({
  previewAlign = "end",
  previewTitle,
  src,
  title,
}: ResponsiveYoutubeEmbedProps) => {
  const { t } = useTranslation("common");
  const [open, setOpen] = useState(false);
  const videoId = useMemo(() => extractYoutubeVideoId(src), [src]);
  const thumbnailSrc = videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : "";
  const embedSrc = useMemo(() => buildEmbedSrc(src), [src]);

  useEffect(() => {
    if (!open) {
      return;
    }

    lockBodyScroll();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      unlockBodyScroll();
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <PreviewButton type="button" aria-label={title} onClick={() => setOpen(true)}>
        {thumbnailSrc ? <PreviewImage src={thumbnailSrc} alt={title} /> : null}
        <PreviewBlur aria-hidden="true" />
        <PreviewShade aria-hidden="true" />
        <PreviewContent $align={previewAlign}>
          <PlayButton aria-hidden="true">
            <PlayTriangle />
          </PlayButton>
            <PreviewMeta $align={previewAlign}>
              <PreviewLabel>{t("videoLabel")}</PreviewLabel>
              <PreviewTitle>{previewTitle ?? title}</PreviewTitle>
            </PreviewMeta>
        </PreviewContent>
      </PreviewButton>

      <ModalOverlay $open={open} type="button" aria-label={t("videoCloseAria")} onClick={() => setOpen(false)} />
      <Modal $open={open} role="dialog" aria-modal="true" aria-label={title}>
        <ModalHeader>
          <strong>{title}</strong>
          <CloseButton type="button" aria-label={t("videoCloseAria")} onClick={() => setOpen(false)}>
            <span />
            <span />
          </CloseButton>
        </ModalHeader>
        <ModalBody>
          {open ? (
            <Frame
              src={embedSrc}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : null}
        </ModalBody>
      </Modal>
    </>
  );
};

function extractYoutubeVideoId(src: string) {
  const match = src.match(/embed\/([^?]+)/);
  return match?.[1] ?? "";
}

function buildEmbedSrc(src: string) {
  const separator = src.includes("?") ? "&" : "?";
  return `${src}${separator}autoplay=1&rel=0`;
}

const PreviewButton = styled.button`
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 560px;
  aspect-ratio: 16 / 9;
  border-radius: 28px;
  background: linear-gradient(180deg, rgba(18, 52, 59, 0.2), rgba(18, 52, 59, 0.34));
  box-shadow: ${Theme.shadow.soft};
  transition: ${Theme.animations.transition};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 22px 42px rgba(18, 52, 59, 0.16);
  }
`;

const PreviewImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PreviewBlur = styled.div`
  position: absolute;
  inset: auto 0 0 0;
  height: 52%;
  background: linear-gradient(180deg, rgba(18, 52, 59, 0), rgba(18, 52, 59, 0.62));
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;

const PreviewShade = styled.div`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 30% 22%, rgba(255, 255, 255, 0.14), transparent 24%),
    linear-gradient(180deg, rgba(18, 52, 59, 0.08), rgba(18, 52, 59, 0.2));
  transition: ${Theme.animations.transition};

  ${PreviewButton}:hover & {
    background:
      radial-gradient(circle at 30% 22%, rgba(255, 255, 255, 0.18), transparent 24%),
      linear-gradient(180deg, rgba(18, 52, 59, 0.12), rgba(18, 52, 59, 0.28));
  }
`;

const PreviewContent = styled.div<{ $align: "start" | "end" }>`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: end;
  justify-content: ${(props) => (props.$align === "start" ? "flex-start" : "space-between")};
  gap: 16px;
  padding: 22px;
  @media ${Theme.media.mobile} {
    padding: 18px;
  }
`;

const PlayButton = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 74px;
  height: 74px;
  flex: 0 0 74px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.26);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 18px 30px rgba(18, 52, 59, 0.22);
  transition: ${Theme.animations.transition};

  ${PreviewButton}:hover & {
    transform: scale(1.04);
    background: rgba(255, 255, 255, 0.22);
  }

  @media ${Theme.media.mobile} {
    width: 64px;
    height: 64px;
    flex-basis: 64px;
  }
`;

const PlayTriangle = styled.span`
  width: 0;
  height: 0;
  margin-left: 4px;
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
  border-left: 18px solid ${Theme.colors.white};
`;

const PreviewMeta = styled.div<{ $align: "start" | "end" }>`
  display: grid;
  gap: 6px;
  justify-items: ${(props) => (props.$align === "start" ? "start" : "end")};
  text-align: ${(props) => (props.$align === "start" ? "left" : "right")};
  max-width: 28ch;
`;

const PreviewLabel = styled.span`
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.74);
  ${font({ weight: 700, fmax: 12, fmin: 11, color: Theme.colors.white })};
`;

const PreviewTitle = styled.span`
  max-width: 22ch;
  line-height: 1.25;
  color: ${Theme.colors.white};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.18);
  ${font({ weight: 700, fmax: 18, fmin: 14, color: Theme.colors.white })};
`;

const ModalOverlay = styled.button<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 1400;
  background: rgba(11, 24, 28, 0.72);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  opacity: ${(props) => (props.$open ? 1 : 0)};
  visibility: ${(props) => (props.$open ? "visible" : "hidden")};
  pointer-events: ${(props) => (props.$open ? "auto" : "none")};
  transition: ${Theme.animations.transition};
`;

const Modal = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1401;
  width: min(1080px, calc(100vw - 32px));
  padding: 14px;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: linear-gradient(180deg, rgba(20, 42, 48, 0.96), rgba(11, 24, 28, 0.98));
  box-shadow: 0 28px 80px rgba(0, 0, 0, 0.34);
  opacity: ${(props) => (props.$open ? 1 : 0)};
  visibility: ${(props) => (props.$open ? "visible" : "hidden")};
  pointer-events: ${(props) => (props.$open ? "auto" : "none")};
  transform: translate(-50%, ${(props) => (props.$open ? "-50%" : "-46%")}) scale(${(props) => (props.$open ? 1 : 0.98)});
  transition: ${Theme.animations.transition};

  @media ${Theme.media.mobile} {
    width: calc(100vw - 20px);
    padding: 10px;
    border-radius: 24px;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 6px 6px 12px;

  strong {
    color: ${Theme.colors.white};
    ${font({ weight: 700, fmax: 18, fmin: 14, color: Theme.colors.white })};
  }
`;

const CloseButton = styled.button`
  position: relative;
  width: 42px;
  height: 42px;
  flex: 0 0 42px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 16px;
    height: 2px;
    border-radius: 999px;
    background: ${Theme.colors.white};
  }

  span:first-child {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  span:last-child {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

const ModalBody = styled.div`
  overflow: hidden;
  border-radius: 22px;
  aspect-ratio: 16 / 9;
  background: #081216;
`;

const Frame = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;
