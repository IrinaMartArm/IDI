import React from 'react';
import styled from "styled-components";
import {Container} from "../../../../components/Container";
import {ProductPageHero} from "../../../../components/ProductPageHero";
import {
	ProductAdvantages,
	ProductDetails,
	ProductFinalCta,
	ProductProcess, ProductSceneMedia,
} from "../../../../components/molecules";
import {useTranslation} from "react-i18next";
import {S} from './_ProductStyles'
import {font, headingFont} from "../../../../style/Common";
import {Theme} from "../../../../style/Theme";
import {getAssetSrc} from "../../../../shared/lib/getAssetSrc";
import p0 from '../../../../images/pictures/osteosinus/osteo_.png'
import osteosinusKit from '../../../../images/pictures/osteosinus/osteosinus-kit.png'
import p2 from '../../../../images/pictures/osteosinus/osteo_1.png'
import p3 from '../../../../images/pictures/osteosinus/osteo_2.png'
import p4 from '../../../../images/pictures/osteosinus/osteo_3.png'
import p5 from '../../../../images/pictures/osteosinus/osteo_4.png'
import p6 from '../../../../images/pictures/osteosinus/osteo_5.png'
import t1 from '../../../../images/pictures/osteosinus/t2.png'

const getProcessSteps = (t: (key: string) => string) => [
	{
		number: "01",
		title: t("osteoStep1Title"),
		text: t("osteoStep1Text"),
		numberVariant: "pill" as const,
	},
	{
		number: "02",
		title: t("osteoStep2Title"),
		text: t("osteoStep2Text"),
		numberVariant: "pill" as const,
	},
	{
		number: "03",
		title: t("osteoStep3Title"),
		text: t("osteoStep3Text"),
		numberVariant: "pill" as const,
	},
	{
		number: "04",
		title: t("osteoStep4Title"),
		text: t("osteoStep4Text"),
		numberVariant: "pill" as const,
	},
];

const getBenefitCards = (t: (key: string) => string) => [
	{
		title: t("osteoAdvantage1Title"),
		text: t("osteoAdvantage1Text"),
	},
	{
		title: t("osteoAdvantage2Title"),
		text: t("osteoAdvantage2Text"),
	},
	{
		title: t("osteoAdvantage3Title"),
		text: t("osteoAdvantage3Text"),
	},
];

const getDetailFeatures = (t: (key: string) => string) => [
	{label: t("osteoDetailFeature1Label"), value: t("osteoDetailFeature1Value")},
	{label: t("osteoDetailFeature2Label"), value: t("osteoDetailFeature2Value")},
	{label: t("osteoDetailFeature3Label"), value: t("osteoDetailFeature3Value")},
	{label: t("osteoDetailFeature4Label"), value: t("osteoDetailFeature4Value")},
];

const getToolCards = (t: (key: string) => string) => [
	{
		title: "RECTISINUS®",
		subtitle: t("osteoTool1Subtitle"),
		description: t("osteoTool1Text"),
		image: p2,
	},
	{
		title: "ANGULOSINUS®",
		subtitle: t("osteoTool2Subtitle"),
		description: t("osteoTool2Text"),
		image: p3,
	},
	{
		title: "FORSINUS®",
		subtitle: t("osteoTool3Subtitle"),
		description: t("osteoTool3Text"),
		image: p4,
	},
	{
		title: "TREPANOSINUS®",
		subtitle: t("osteoTool4Subtitle"),
		description: t("osteoTool4Text"),
		image: p5,
	},
	{
		title: "DISKOSINUS®",
		subtitle: t("osteoTool5Subtitle"),
		description: t("osteoTool5Text"),
		image: p6,
	},
];

export const OsteoSinus = () => {
	const {t} = useTranslation("osteosinus");
	const processSteps = getProcessSteps(t);
	const benefitCards = getBenefitCards(t);
	const detailFeatures = getDetailFeatures(t);
	const toolCards = getToolCards(t);

	return (
		<S.ProductBox>
			<Container>
				<ProductPageHero
					title={t("osteoHeroTitle")}
					customEyebrow="Osteosinus Kit"
					description={t("osteoHeroLead")}
					bullets={[
						t("osteoHeroBullet1"),
						t("osteoHeroBullet2"),
						t("osteoHeroBullet3"),
					]}
					imageSrc={getAssetSrc(p0)}
					imageAlt={t("osteoHeroImageAlt")}
					pdfHref="/IDI_Osteosinus.pdf"
					imageMaxHeight="520px"
					imageMobileMaxHeight="280px"
				/>
			</Container>

			<Container>
				<ProductAdvantages
					title={t("osteoAdvantagesTitle")}
					items={benefitCards}
				/>
			</Container>

			<Container>
				<ProductDetails
					media={(
						<ProductSceneMedia>
							<DetailImage src={getAssetSrc(osteosinusKit)} alt={t("osteoDetailImageAlt")} />
						</ProductSceneMedia>
					)}
					title={t("osteoDetailsTitle")}
					lead={t("osteoDetailsLead")}
					features={detailFeatures}
				/>
			</Container>
			<Container>
				<ProductProcess
					title={t("osteoHowTitle")}
					workflowSteps={processSteps}
				/>
			</Container>

			<Container>
				<SectionBlock>
					<SectionHeader>
						<SectionTitle>{t("osteoSystemTitle")}</SectionTitle>
						<SectionLead>{t("osteoSystemLead")}</SectionLead>
					</SectionHeader>
					<ToolsGrid>
						{toolCards.map((card) => (
							<ToolCard key={card.title}>
								<ToolMedia>
									<ToolImage src={getAssetSrc(card.image)} alt={card.title} />
								</ToolMedia>
								<ToolBody>
									<ToolTitle>{card.title}</ToolTitle>
									<ToolSubtitle>{card.subtitle}</ToolSubtitle>
									<ToolDescription>{card.description}</ToolDescription>
								</ToolBody>
							</ToolCard>
						))}
					</ToolsGrid>
				</SectionBlock>
			</Container>

			<Container>
				<SectionBlock>
					<SectionHeader>
						<SectionTitle>{t("osteoSizesTitle")}</SectionTitle>
					</SectionHeader>
					<SizesBlock>
						<SizesText>
							<SizeLine><strong>{t("osteoSizesDiameterLabel")}</strong> <SizeAccent>{t("osteoSizesDiameterValue")}</SizeAccent></SizeLine>
							<SizeLine><strong>{t("osteoSizesLengthsLabel")}</strong> <SizeAccent>{t("osteoSizesLengthsValue")}</SizeAccent></SizeLine>
							<SizeLine>{t("osteoSizesNote")}</SizeLine>
						</SizesText>
						<SizesVisual>
							<SizesImage src={getAssetSrc(t1)} alt={t("osteoSizesImageAlt")} />
						</SizesVisual>
					</SizesBlock>
				</SectionBlock>
			</Container>

			<Container>
				<SafetyBlock>
					<SectionTitle>{t("osteoSafetyTitle")}</SectionTitle>
					<SafetyText>{t("osteoSafetyText")}</SafetyText>
				</SafetyBlock>
			</Container>

			<Container>
				<ProductFinalCta
					title={t("osteoFinalCtaTitle")}
					lead={t("osteoFinalCtaText")}
				/>
			</Container>
		</S.ProductBox>
	);
}

const DetailImage = styled.img`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 360px;
  object-fit: contain;
  filter:
    drop-shadow(0 12px 18px rgba(255, 255, 255, 0.42))
    drop-shadow(0 26px 34px rgba(14, 31, 40, 0.18))
    drop-shadow(0 40px 56px rgba(14, 31, 40, 0.12));
`;

const SectionBlock = styled.section`
  display: grid;
  gap: 24px;
  margin-top: 22px;
  padding: 30px 28px;
  border-radius: ${Theme.radius.large};
  border: 1px solid rgba(111, 143, 168, 0.14);
  background:
    radial-gradient(circle at top right, rgba(111, 143, 168, 0.12), transparent 28%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.97), rgba(242, 247, 250, 0.94));
  box-shadow: ${Theme.shadow.soft};

  @media (max-width: 900px) {
    padding: 24px 20px;
  }
`;

const SectionHeader = styled.div`
  display: grid;
  gap: 10px;
`;

const SectionTitle = styled.h2`
  margin: 0;
  color: ${Theme.colors.primaryDeep};
  ${font({family: headingFont, weight: 700, fmax: 34, fmin: 24, color: Theme.colors.primaryDeep})};
`;

const SectionLead = styled.p`
  margin: 0;
  max-width: 72ch;
  line-height: 1.65;
  color: rgba(24, 49, 63, 0.76);
  ${font({weight: 400, fmax: 18, fmin: 15, color: "rgba(24, 49, 63, 0.76)"})};
`;

const ToolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const ToolCard = styled.article`
  display: grid;
  grid-template-columns: minmax(180px, 220px) minmax(0, 1fr);
  gap: 20px;
  align-items: center;
  padding: 22px;
  border-radius: 24px;
  background: white;
  border: 1px solid rgba(111, 143, 168, 0.14);
  box-shadow: 0 14px 32px rgba(18, 52, 59, 0.06);

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const ToolMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 180px;
  border-radius: 20px;
  background:
    radial-gradient(circle at 50% 36%, rgba(255, 255, 255, 0.94), rgba(255, 255, 255, 0) 42%),
    linear-gradient(180deg, rgba(242, 247, 250, 0.96), rgba(228, 237, 243, 0.82));
`;

const ToolImage = styled.img`
  max-width: 210px;
  width: 100%;
  object-fit: contain;
  filter:
    drop-shadow(0 12px 14px rgba(255, 255, 255, 0.18))
    drop-shadow(0 26px 34px rgba(14, 31, 40, 0.18));
`;

const ToolBody = styled.div`
  display: grid;
  gap: 8px;
`;

const ToolTitle = styled.h3`
  margin: 0;
  color: ${Theme.colors.primaryDeep};
  ${font({family: headingFont, weight: 700, fmax: 24, fmin: 20, color: Theme.colors.primaryDeep})};
`;

const ToolSubtitle = styled.p`
  margin: 0;
  color: ${Theme.colors.primary500};
  ${font({weight: 700, fmax: 17, fmin: 15, color: Theme.colors.primary500})};
`;

const ToolDescription = styled.p`
  margin: 0;
  line-height: 1.6;
  color: rgba(24, 49, 63, 0.78);
  ${font({weight: 400, fmax: 16, fmin: 14, color: "rgba(24, 49, 63, 0.78)"})};
`;

const SizesBlock = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(240px, 0.7fr);
  gap: 24px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const SizesText = styled.div`
  display: grid;
  gap: 12px;
`;

const SizeLine = styled.p`
  margin: 0;
  line-height: 1.6;
  color: rgba(24, 49, 63, 0.8);
  ${font({weight: 500, fmax: 18, fmin: 15, color: "rgba(24, 49, 63, 0.8)"})};
`;

const SizeAccent = styled.span`
  color: ${Theme.colors.primaryDeep};
  ${font({family: headingFont, weight: 700, fmax: 26, fmin: 18, color: Theme.colors.primaryDeep})};
`;

const SizesVisual = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-radius: 24px;
  //background: rgba(247, 249, 251, 0.92);
  background: #fff;
  border: 1px solid rgba(111, 143, 168, 0.12);
`;

const SizesImage = styled.img`
  width: 100%;
  max-width: 360px;
  border-radius: 14px;
`;

const SafetyBlock = styled.section`
  display: grid;
  gap: 14px;
  margin-top: 22px;
  padding: 32px 30px;
  border-radius: ${Theme.radius.large};
  //background:
  //  radial-gradient(circle at top right, rgba(255, 255, 255, 0.16), transparent 28%),
  //  linear-gradient(135deg, rgba(78, 106, 125, 0.98), rgba(101, 132, 152, 0.92));
	background-color: #F4F6F8;
  border: 1px solid rgba(111, 143, 168, 0.2);
  box-shadow: ${Theme.shadow.medium};

  @media (max-width: 900px) {
    padding: 24px 20px;
  }
`;

const SafetyText = styled.p`
  margin: 0;
  max-width: 72ch;
  line-height: 1.55;
  white-space: pre-line;
  ${font({weight: 500, fmax: 19, fmin: 16})};
`;
