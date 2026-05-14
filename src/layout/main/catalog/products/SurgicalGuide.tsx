import React from 'react';
import styled from "styled-components";
import {Container} from "../../../../components/Container";
import {ProductPageHero} from "../../../../components/ProductPageHero";
import {
	ProductAdvantages,
	ProductDetails,
	ProductFinalCta, ProductProcess,
	ProductSceneImage,
	ProductSceneMedia, ProductSectionBlock,
	ProductVideoSection
} from "../../../../components/molecules";
import {useTranslation} from "react-i18next";
import {getAssetSrc} from "../../../../shared/lib/getAssetSrc";
import {S} from './_ProductStyles'
import surgicl_guide_hero from '../../../../images/pictures/guide/surgical_guide_hero1.png'
import surgicl_guide from '../../../../images/pictures/guide/surgicl_guide.png'

const getAdvantageCards = (t: (key: string) => string) => [
	{title: t("guideAdvantage1Title"), text: t("guideAdvantage1Text")},
	{title: t("guideAdvantage2Title"), text: t("guideAdvantage2Text")},
	{title: t("guideAdvantage3Title"), text: t("guideAdvantage3Text")},
];

const getDetailFeatures = (t: (key: string) => string) => [
	{label: t("guideFeature1Label"), value: t("guideFeature1Value")},
	{label: t("guideFeature2Label"), value: t("guideFeature2Value")},
	{label: t("guideFeature3Label"), value: t("guideFeature3Value")},
	{label: t("guideFeature4Label"), value: t("guideFeature4Value")},
];

const getClinicalScenarios = (t: (key: string) => string) => [
	{number: "01", title: t("guideScenario1Title"), text: t("guideScenario1Text"), numberVariant: "pill" as const},
	{number: "02", title: t("guideScenario2Title"), text: t("guideScenario2Text"), numberVariant: "pill" as const},
	{number: "03", title: t("guideScenario3Title"), text: t("guideScenario3Text"), numberVariant: "pill" as const},
];

export const SurgicalGuide = () => {
	const {t} = useTranslation("surgical-guide");
	const advantageCards = getAdvantageCards(t);
	const detailFeatures = getDetailFeatures(t);
	const clinicalScenarios = getClinicalScenarios(t);

	return (
		<S.ProductBox>
			<Container>
				<ProductPageHero
					title={t("guideHeroTitle")}
					customEyebrow="Surgical Guide"
					description={t("guideHeroLead")}
					bullets={[
						t("guideHeroBullet1"),
						t("guideHeroBullet2"),
						t("guideHeroBullet3"),
					]}
					flipImage
					imageSrc={getAssetSrc(surgicl_guide_hero)}
					imageAlt="Surgical Guide"
					pdfHref="/idguide.pdf"
					imageMaxHeight="560px"
					imageMobileMaxHeight="300px"
				/>
			</Container>
			<Container>
				<ProductAdvantages
					title={t("guideAdvantagesTitle")}
					items={advantageCards}
				/>
			</Container>
			<Container>
				<ProductDetails
					media={(
						<ProductSceneMedia>
							<GuideImage src={getAssetSrc(surgicl_guide)} alt="Surgical Guide" />
						</ProductSceneMedia>
					)}
					title={t("guideDetailsTitle")}
					lead={t("guideDetailsLead")}
					features={detailFeatures}
				/>
			</Container>

			<Container>
				<ProductProcess
					title={t("guideScenariosTitle")}
					workflowSteps={clinicalScenarios}
				/>
			</Container>

			<Container>
				<ProductVideoSection
					sectionTitle={t("guideVideoTitle")}
					sectionLead={t("guideVideoOverlayText")}
					src="https://www.youtube.com/embed/1uriJ9yK4wA?si=7SRFT_ZfBBcgOss_"
					title="Surgical Guide"
					// title={t("guideVideoOverlayText")}
				/>
			</Container>
			<Container>
				<ProductFinalCta
					title={t("guideFinalCtaTitle")}
					lead={t("guideFinalCtaText")}
				/>
			</Container>
		</S.ProductBox>
	);
}

const GuideImage = styled(ProductSceneImage)`
  max-width: 360px;
  padding: 48px 0 22px;
`;
