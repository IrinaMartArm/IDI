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
	ProductCardTitle,
	ProductDetails,
	ProductFinalCta,
	ProductGridThree,
	ProductProcess, ProductSceneImage, ProductSceneMedia,
	ProductSectionBlock
} from "../../../../components/molecules";
import {ResponsiveYoutubeEmbed} from "../../../../components/ResponsiveYoutubeEmbed";
import {useTranslation} from "react-i18next";
import {S} from './_ProductStyles'
import {font, headingFont} from "../../../../style/Common";
import {Theme} from "../../../../style/Theme";
import {getAssetSrc} from "../../../../shared/lib/getAssetSrc";
import kits1 from '../../../../images/pictures/surgicalKits/ID-PARA.png'
import kits2 from '../../../../images/pictures/surgicalKits/ID-SPASSOR.png'
import kits3 from '../../../../images/pictures/surgicalKits/surgical_kits_3.png'
import kit_hero from '../../../../images/pictures/surgicalKits/ID_PARA_HERO.png'
import kit_ from '../../../../images/pictures/surgicalKits/kit_2.png'

const getFeatureCards = (t: (key: string) => string) => [
	{
		title: t("surgicalKitsFeatureCard1Title"),
		text: t("surgicalKitsFeatureCard1Text"),
	},
	{
		title: t("surgicalKitsFeatureCard2Title"),
		text: t("surgicalKitsFeatureCard2Text"),
	},
	{
		title: t("surgicalKitsFeatureCard3Title"),
		text: t("surgicalKitsFeatureCard3Text"),
	},
];

const getBenefitCards = (t: (key: string) => string) => [
	{
		label: t("surgicalKitsDetailCard1Title"),
		value: t("surgicalKitsDetailCard1Text"),
	},
	{
		label: t("surgicalKitsDetailCard2Title"),
		value: t("surgicalKitsDetailCard2Text"),
	},
	{
		label: t("surgicalKitsDetailCard3Title"),
		value: t("surgicalKitsDetailCard3Text"),
	},
	{
		label: t("surgicalKitsDetailCard4Title"),
		value: t("surgicalKitsDetailCard4Text"),
	},
];

const getKitCards = (t: (key: string) => string) => [
	{
		title: "ID-PARA",
		label: t("surgicalKitsCard1Label"),
		points: [t("surgicalKitsCard1Point1"), t("surgicalKitsCard1Point2")],
		image: kits1,
		featured: true,
	},
	{
		title: "ID-PRO",
		label: t("surgicalKitsCard2Label"),
		points: [t("surgicalKitsCard2Point1"), t("surgicalKitsCard2Point2")],
		image: kits3,
	},
	{
		title: "ID-SPASSOR",
		label: t("surgicalKitsCard3Label"),
		points: [t("surgicalKitsCard3Point1"), t("surgicalKitsCard3Point2")],
		image: kits2,
	},
];

const getWorkflowSteps = (t: (key: string) => string) => [
	{
		number: "01",
		title: t("surgicalKitsStep1Title"),
		text: t("surgicalKitsStep1Text"),
		numberVariant: "pill" as const,
	},
	{
		number: "02",
		title: t("surgicalKitsStep2Title"),
		text: t("surgicalKitsStep2Text"),
		numberVariant: "pill" as const,
	},
	{
		number: "03",
		title: t("surgicalKitsStep3Title"),
		text: t("surgicalKitsStep3Text"),
		numberVariant: "pill" as const,
	},
	{
		number: "04",
		title: t("surgicalKitsStep4Title"),
		text: t("surgicalKitsStep4Text"),
		numberVariant: "pill" as const,
	},
];

const MEDIA_ITEMS = [
	{
		title: "ID-PARA",
		src: "https://www.youtube.com/embed/YiPvuivhQZE?si=5WS-qJ2VIr_xsYiA",
	},
	{
		title: "ID-SPASSOR",
		src: "https://www.youtube.com/embed/o-6AzDuLMIU?si=FS8Qv3dV8p2vb2x2",
	},
];

export const SurgicalKits = () => {
	const {t} = useTranslation("surgical-kits");

	const featureCards = getFeatureCards(t)
	const benefitCards = getBenefitCards(t);
	const kitCards = getKitCards(t);
	const workflowSteps = getWorkflowSteps(t);

	return (
		<S.ProductBox>
			<Container>
				<ProductPageHero
					title={t("surgicalKitsHeroTitle")}
					customEyebrow={t("surgicalKitsHeroEyebrow")}
					description={t("surgicalKitsHeroLead")}
					bullets={[
						t("surgicalKitsHeroBullet1"),
						t("surgicalKitsHeroBullet2"),
						t("surgicalKitsHeroBullet3"),
					]}
					imageAlt={t("surgicalKitsHeroEyebrow")}
					flipImage
					imageSrc={getAssetSrc(kit_hero)}
					pdfHref="/idpara.pdf"
					imageMobileMaxHeight="300px"
				/>
			</Container>

			<Container>
				<ProductAdvantages
					title={t("surgicalKitsAdvantagesTitle")}
					lead={t("surgicalKitsAdvantagesLead")}
					items={featureCards}
				/>
			</Container>

			<Container>
				<ProductDetails
					media={(
						<ProductSceneMedia>
							<ProductSceneImage src={getAssetSrc(kit_)} alt="surgical kits" />
						</ProductSceneMedia>
					)}
					title={t("surgicalKitsDetailTitle")}
					lead={t("surgicalKitsDetailLead")}
					features={benefitCards}
				/>
			</Container>

			<Container>
				<ProductSectionBlock
					title={t("surgicalKitsCompositionTitle")}
					lead={t("surgicalKitsCompositionLead")}
				>
					<ProductGridThree $tabletColumns={2} $tabletBreakpoint={1180} $mobileBreakpoint={760}>
						{kitCards.map((card) => (
							<KitCard key={card.title} $featured={card.featured}>
								<KitVisual>
									<KitImage src={getAssetSrc(card.image)} alt={card.title} />
								</KitVisual>
								<ProductCardCopy>
									<ProductCardTitle $tone="neutral">{card.title}</ProductCardTitle>
									<ProductCardSubtitle $tone="muted" $weight={500} $size="sm">
										{card.label}
									</ProductCardSubtitle>
									<ProductBulletList>
										{card.points.map((point) => (
											<ProductBulletItem
												key={point}
												$tone="neutral"
												$bulletTone="muted"
												$weight={400}
												$size="sm"
											>
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
					title={t("surgicalKitsWorkflowTitle")}
					workflowSteps={workflowSteps}
				/>
			</Container>

			<Container>
				<ProductSectionBlock
					title={t("surgicalKitsVideoTitle")}
					lead={t("surgicalKitsVideoLead")}
				>
					<MediaGrid>
						{MEDIA_ITEMS.map((item) => (
							<MediaCard key={item.title}>
								<MediaTitle>{item.title}</MediaTitle>
								<ResponsiveYoutubeEmbed src={item.src} title={item.title} />
							</MediaCard>
						))}
					</MediaGrid>
				</ProductSectionBlock>
			</Container>

			<Container>
				<ProductFinalCta
					title={t("surgicalKitsFinalCtaTitle")}
					lead={t("surgicalKitsFinalCtaText")}
				/>
			</Container>
		</S.ProductBox>
	);
}

const KitCard = styled.article<{ $featured?: boolean }>`
  display: grid;
  grid-template-rows: auto auto;
  align-content: start;
  width: 100%;
  gap: 12px;
  padding: 24px;
  border-radius: 18px;
  background: ${(props) =>
    props.$featured
      ? "linear-gradient(180deg, #F8FBFF 0%, #FFFFFF 100%)"
      : "#ffffff"};
  border: 1px solid ${(props) => (props.$featured ? "#D1E3FF" : "#EAECEF")};
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.05);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.08);
  }
`;

const KitVisual = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 150px;
  padding: 10px 8px 14px;
  overflow: hidden;
  border-bottom: 1px solid #EAECEF;
  background:
    radial-gradient(circle at 50% 36%, rgba(255, 255, 255, 0.94), rgba(255, 255, 255, 0) 42%),
    linear-gradient(180deg, rgba(255, 249, 252, 0.96), rgba(247, 235, 241, 0.92));

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 76%;
    height: 72%;
    transform: translate(-50%, -48%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(201, 18, 93, 0.16) 0%, rgba(201, 18, 93, 0.08) 38%, rgba(201, 18, 93, 0.02) 68%, transparent 82%);
    filter: blur(20px);
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 10px;
    width: 58%;
    height: 18px;
    transform: translateX(-50%);
    border-radius: 999px;
    background: radial-gradient(circle, rgba(14, 31, 40, 0.2) 0%, rgba(14, 31, 40, 0.08) 52%, transparent 82%);
    filter: blur(10px);
    pointer-events: none;
  }
`;

const KitImage = styled.img`
  position: relative;
  z-index: 1;
  max-width: 100%;
  max-height: 150px;
  object-fit: contain;
  filter:
    drop-shadow(0 8px 12px rgba(255, 255, 255, 0.24))
    drop-shadow(0 18px 24px rgba(14, 31, 40, 0.12))
    drop-shadow(0 30px 42px rgba(14, 31, 40, 0.08));
`;


const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const MediaCard = styled.article`
  display: grid;
  gap: 12px;
  padding: 22px;
  border-radius: 24px;
`;

const MediaTitle = styled.h3`
  margin: 0;
  color: ${Theme.colors.primaryDeep};
  ${font({family: headingFont, weight: 700, fmax: 22, fmin: 18, color: Theme.colors.primaryDeep})};
`;
