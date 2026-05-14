import React from 'react';
import styled from "styled-components";
import {Container} from "../../../../components/Container";
import {ProductPageHero} from "../../../../components/ProductPageHero";
import {
	ProductAdvantages,
	ProductDetails,
	ProductFinalCta,
	ProductSceneMedia,
	ProductVideoSection,
} from "../../../../components/molecules";
import {useTranslation} from "react-i18next";
import {getAssetSrc} from "../../../../shared/lib/getAssetSrc";
import {S} from './_ProductStyles'
import drill_hero from '../../../../images/pictures/drill/drill_hero.png'
import {SwiperForDrill} from "./SwiperForDrill";

const getAdvantageCards = (t: (key: string) => string) => [
	{title: t("turboAdvantage1Title"), text: t("turboAdvantage1Text")},
	{title: t("turboAdvantage2Title"), text: t("turboAdvantage2Text")},
	{title: t("turboAdvantage3Title"), text: t("turboAdvantage3Text")},
];

const getDetailFeatures = (t: (key: string) => string) => [
	{label: t("turboFeature1Label"), value: t("turboFeature1Value")},
	{label: t("turboFeature2Label"), value: t("turboFeature2Value")},
	{label: t("turboFeature3Label"), value: t("turboFeature3Value")},
	{label: t("turboFeature4Label"), value: t("turboFeature4Value")},
];

const getChipGroups = (t: (key: string) => string) => [
	{
		label: t("turboAvailableLengthsLabel"),
		values: t("turboAvailableLengthsValue").split(" / "),
	},
	{
		label: t("turboAvailableDiametersLabel"),
		values: t("turboAvailableDiametersValue").split(" / "),
	},
];

export const TurboDrill = () => {
	const {t} = useTranslation("turbo-drill");
	const advantageCards = getAdvantageCards(t);
	const detailFeatures = getDetailFeatures(t);
	const chipGroups = getChipGroups(t);

	return (
		<S.ProductBox>
			<Container>
				<ProductPageHero
					title={t("turboHeroTitle")}
					customEyebrow="TURBOdrill"
					description={t("turboHeroLead")}
					bullets={[
						t("turboHeroBullet1"),
						t("turboHeroBullet2"),
						t("turboHeroBullet3"),
					]}
					imageSrc={getAssetSrc(drill_hero)}
					imageAlt="TURBOdrill"
					pdfHref="/turbo-drill.pdf"
					imageMaxHeight="520px"
					imageMobileMaxHeight="280px"
				/>
			</Container>
			<Container>
				<ProductAdvantages
					title={t("turboAdvantagesTitle")}
					items={advantageCards}
				/>
			</Container>
			<Container>
				<ProductDetails
					media={(
						<SliderSceneMedia>
							<SwiperForDrill />
						</SliderSceneMedia>
					)}
					title={t("turboDetailsTitle")}
					lead={t("turboDetailsLead")}
					features={detailFeatures}
					chipGroups={chipGroups}
				/>
			</Container>
			<Container>
				<ProductVideoSection
					sectionTitle={t("turboVideoTitle")}
					sectionLead={t("turboVideoLead")}
					src="https://www.youtube.com/embed/jm4q7_nbJ88?si=ENsWaubqrkRWZwGc"
					title="TURBOdrill"
				/>
			</Container>
			<Container>
				<ProductFinalCta
					title={t("turboFinalCtaTitle")}
					lead={t("turboFinalCtaText")}
				/>
			</Container>
		</S.ProductBox>
	);
}

const SliderSceneMedia = styled(ProductSceneMedia)`
  max-width: 360px;
`;
