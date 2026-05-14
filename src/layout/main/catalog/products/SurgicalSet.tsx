import React from 'react';
import styled from "styled-components";
import {Container} from "../../../../components/Container";
import {ProductPageHero} from "../../../../components/ProductPageHero";
import {
	ProductAdvantages,
	ProductBulletItem,
	ProductBulletList,
	ProductCardCopy,
	ProductCardSubtitle,
	ProductCardTitle, ProductDetails,
	ProductFinalCta,
	ProductGridThree,
	ProductProcess, ProductSceneImage, ProductSceneMedia,
	ProductSectionBlock,
	ProductVideoSection
} from "../../../../components/molecules";
import {useTranslation} from "react-i18next";
import {S} from './_ProductStyles'
import {font, headingFont} from "../../../../style/Common";
import {Theme} from "../../../../style/Theme";
import {getAssetSrc} from "../../../../shared/lib/getAssetSrc";
import turboBox from '../../../../images/pictures/pages/turbo-box.png'

const getFeatureCards = (t: (key: string) => string) => [
	{
		title: t("surgicalSetFeature1Title"),
		text: t("surgicalSetFeature1Text"),
	},
	{
		title: t("surgicalSetFeature2Title"),
		text: t("surgicalSetFeature2Text"),
	},
	{
		title: t("surgicalSetFeature3Title"),
		text: t("surgicalSetFeature3Text"),
	},
];

const getKitItems = (t: (key: string) => string) => [
	{
		title: t("surgicalSetKit1Title"),
		subtitle: t("surgicalSetKit1Subtitle"),
		points: [t("surgicalSetKit1Point1"), t("surgicalSetKit1Point2")],
		accent: "drills" as const,
	},
	{
		title: t("surgicalSetKit2Title"),
		subtitle: t("surgicalSetKit2Subtitle"),
		points: [t("surgicalSetKit2Point1"), t("surgicalSetKit2Point2")],
		accent: "precision" as const,
	},
	{
		title: t("surgicalSetKit3Title"),
		subtitle: t("surgicalSetKit3Subtitle"),
		points: [t("surgicalSetKit3Point1"), t("surgicalSetKit3Point2")],
		accent: "accessories" as const,
	},
];

const getWorkflowSteps = (t: (key: string) => string) => [
	{
		number: "01",
		title: t("surgicalSetStep1Title"),
		text: t("surgicalSetStep1Text"),
		numberVariant: "pill" as const,
	},
	{
		number: "02",
		title: t("surgicalSetStep2Title"),
		text: t("surgicalSetStep2Text"),
		numberVariant: "pill" as const,
	},
	{
		number: "03",
		title: t("surgicalSetStep3Title"),
		text: t("surgicalSetStep3Text"),
		featured: true,
		numberVariant: "pill" as const,
	},
	{
		number: "04",
		title: t("surgicalSetStep4Title"),
		text: t("surgicalSetStep4Text"),
		numberVariant: "pill" as const,
	},
];

const getDetailFeatures = (t: (key: string) => string) => [
	{label: t("surgicalSetDetailFeature1Label"), value: t("surgicalSetDetailFeature1Value")},
	{label: t("surgicalSetDetailFeature2Label"), value: t("surgicalSetDetailFeature2Value")},
	{label: t("surgicalSetDetailFeature3Label"), value: t("surgicalSetDetailFeature3Value")},
	{label: t("surgicalSetDetailFeature4Label"), value: t("surgicalSetDetailFeature4Value")},
];

export const SurgicalSet = () => {
	const {t} = useTranslation("surgical-set");
	const featureCards = getFeatureCards(t);
	const kitItems = getKitItems(t);
	const workflowSteps = getWorkflowSteps(t);
	const detailFeatures = getDetailFeatures(t);

	return (
		<S.ProductBox>
			<Container>
				<ProductPageHero
					title={t("surgicalSetHeroTitle")}
					customEyebrow={t("surgicalSetHeroEyebrow")}
					description={t("surgicalSetHeroLead")}
					bullets={[
						t("surgicalSetHeroBullet1"),
						t("surgicalSetHeroBullet2"),
						t("surgicalSetHeroBullet3"),
					]}
					flipImage
					imageMobileMaxHeight="300px"
					imageSrc={getAssetSrc(turboBox)}
					imageAlt={t("surgicalSetHeroImageAlt")}
					pdfHref="/IDPRO.pdf"
				/>
			</Container>

			<Container>
				<ThoughtBlock>
					<ThoughtText>{t("surgicalSetThought")}</ThoughtText>
				</ThoughtBlock>
			</Container>

			<Container>
				<ProductAdvantages
					title={t("surgicalSetFeaturesTitle")}
					lead={t("surgicalSetFeaturesLead")}
					items={featureCards}
				/>
			</Container>

			<Container>
				<ProductDetails
					media={(
						<ProductSceneMedia>
							<ProductSceneImage src={getAssetSrc(turboBox)} alt={t("surgicalSetDetailImageAlt")} />
						</ProductSceneMedia>
					)}
					title={t("surgicalSetDetailsTitle")}
					lead={t("surgicalSetDetailsLead")}
					features={detailFeatures}
				/>
			</Container>

			<Container>
				<ProductSectionBlock title={t("surgicalSetCompositionTitle")}>
					<ProductGridThree>
						{kitItems.map((item, index) => (
							<KitCard key={item.title} $accent={item.accent} $featured={index === 0}>
								<KitIcon $accent={item.accent} aria-hidden="true">
									<KitIconCore $accent={item.accent} />
								</KitIcon>
								<ProductCardCopy>
									<ProductCardTitle>{item.title}</ProductCardTitle>
									<ProductCardSubtitle>{item.subtitle}</ProductCardSubtitle>
									<ProductBulletList>
										{item.points.map((point) => (
											<ProductBulletItem key={point} $tone="muted">
												{point}
											</ProductBulletItem>
										))}
									</ProductBulletList>
								</ProductCardCopy>
							</KitCard>
						))}
					</ProductGridThree>
				</ProductSectionBlock>
			</Container>

			<Container>
				<ProductProcess
					title={t("surgicalSetWorkflowTitle")}
					workflowSteps={workflowSteps}
				/>
			</Container>

			<Container>
				<ProductVideoSection
					sectionTitle={t("surgicalSetVideoTitle")}
					sectionLead={t("surgicalSetVideoLead")}
					src="https://www.youtube.com/embed/2mgn_ouqs7A?si=vugcinm1MQDj0U81"
					title="Surgical Set"
				/>
			</Container>

			<Container>
				<ProductFinalCta
					title={t("surgicalSetFinalCtaTitle")}
					lead={t("surgicalSetFinalCtaText")}
				/>
			</Container>
		</S.ProductBox>
	);
}

const ThoughtBlock = styled.section`
	display: grid;
	margin-top: 22px;
	padding: 28px 30px;
	border-radius: ${Theme.radius.large};
	background:
		radial-gradient(circle at top right, rgba(111, 143, 168, 0.1), transparent 28%),
		linear-gradient(180deg, rgba(255, 255, 255, 0.97), rgba(242, 247, 250, 0.94));
	border: 1px solid rgba(111, 143, 168, 0.14);
	box-shadow: ${Theme.shadow.soft};

	@media (max-width: 900px) {
		padding: 22px 20px;
	}
`;

const ThoughtText = styled.p`
	margin: 0;
	max-width: 30ch;
	color: ${Theme.colors.primaryDeep};
	line-height: 1.2;
	${font({family: headingFont, weight: 700, fmax: 28, fmin: 20, color: Theme.colors.primaryDeep})};
`;

const KitCard = styled.article<{ $accent: "drills" | "precision" | "accessories"; $featured?: boolean }>`
	position: relative;
	overflow: hidden;
	display: flex;
	gap: 16px;
	padding: 22px 18px;
	border-radius: 24px;
	border: 1px solid rgba(111, 143, 168, 0.14);
	background: rgba(255, 255, 255, 0.94);
	box-shadow: ${(props) =>
		props.$featured
			? "0 20px 40px rgba(18, 52, 59, 0.1), 0 8px 18px rgba(111, 143, 168, 0.08)"
			: "0 14px 30px rgba(18, 52, 59, 0.05)"};

	&::before {
		content: "";
		position: absolute;
		inset: 0;
		background: ${(props) =>
			props.$accent === "drills"
				? "linear-gradient(180deg, rgba(111, 143, 168, 0.12), rgba(111, 143, 168, 0.03))"
				: props.$accent === "precision"
					? "linear-gradient(180deg, rgba(47, 111, 115, 0.12), rgba(47, 111, 115, 0.03))"
					: "linear-gradient(180deg, rgba(199, 169, 107, 0.12), rgba(199, 169, 107, 0.03))"};
		opacity: ${(props) => (props.$featured ? 1 : 0.7)};
	}

	> * {
		position: relative;
		z-index: 1;
	}
`;

const KitIcon = styled.span<{ $accent: "drills" | "precision" | "accessories" }>`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	min-width: 54px;
	height: 54px;
	border-radius: 18px;
	background: ${(props) =>
		props.$accent === "drills"
			? "rgba(111, 143, 168, 0.14)"
			: props.$accent === "precision"
				? "rgba(47, 111, 115, 0.14)"
				: "rgba(199, 169, 107, 0.18)"};
`;

const KitIconCore = styled.span<{ $accent: "drills" | "precision" | "accessories" }>`
	width: 18px;
	height: 18px;
	border-radius: ${(props) => (props.$accent === "precision" ? "6px" : "50%")};
	background: ${(props) =>
		props.$accent === "drills"
			? Theme.colors.primary600
			: props.$accent === "precision"
				? Theme.colors.accent
				: Theme.colors.accentWarm};
	box-shadow: 0 0 0 7px rgba(255, 255, 255, 0.74);
`;
