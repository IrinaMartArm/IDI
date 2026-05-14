import React from 'react';
import styled from "styled-components";
import id3 from '../../../../images/pictures/pages/id_3_schema.png'
import id3_hero from '../../../../images/pictures/pages/id_3.png'
import {S} from './_ProductStyles'
import {Container} from "../../../../components/Container";
import {ProductPageHero} from "../../../../components/ProductPageHero";
import {
	ProductAdvantages,
	ProductDetails,
	ProductFinalCta,
	ProductSceneImage,
	ProductSceneMedia,
	ProductVideoSection
} from "../../../../components/molecules";
import {useTranslation} from "react-i18next";
import {getAssetSrc} from "../../../../shared/lib/getAssetSrc";

const getAdvantageCards = (t: (key: string) => string) => [
	{title: t("id3Advantage1Title"), text: t("id3Advantage1Text")},
	{title: t("id3Advantage2Title"), text: t("id3Advantage2Text")},
	{title: t("id3Advantage3Title"), text: t("id3Advantage3Text")},
];

const getDetailFeatures = (t: (key: string) => string) => [
	{label: t("id3DetailFeature1Label"), value: t("id3DetailFeature1Value")},
	{label: t("id3DetailFeature2Label"), value: t("id3DetailFeature2Value")},
	{label: t("id3DetailFeature3Label"), value: t("id3DetailFeature3Value")},
	{label: t("id3DetailFeature4Label"), value: t("id3DetailFeature4Value")},
];

const getChipGroups = (t: (key: string) => string) => [
	{
		label: t("id3AvailableLengthsLabel"),
		values: t("id3AvailableLengthsValue").split(" / "),
	},
];

export const Id3 = () => {
	const {t} = useTranslation("id3");
	const advantageCards = getAdvantageCards(t);
	const detailFeatures = getDetailFeatures(t);
	const chipGroups = getChipGroups(t);

	return (
		<S.ProductBox>
			<Container>
				<ProductPageHero
					title={t("productHeroId3Title")}
					customEyebrow="ID3"
					description={t("productHeroId3Lead")}
					bullets={[
						t("productHeroId3Bullet1"),
						t("productHeroId3Bullet2"),
						t("productHeroId3Bullet3"),
					]}
					imageSrc={getAssetSrc(id3_hero)}
					imageAlt={t("id3HeroImageAlt")}
					imageMobileMaxHeight="300px"
					pdfHref="/ID3.pdf"
				/>
			</Container>
			<Container>
				<ProductAdvantages
					title={t("id3AdvantagesTitle")}
					items={advantageCards}
				/>
			</Container>
			<Container>
				<ProductDetails
					media={(
						<ProductSceneMedia>
							<HeroSceneImage src={getAssetSrc(id3)} alt={t("id3DetailImageAlt")} />
						</ProductSceneMedia>
					)}
					title={t("id3DetailsTitle")}
					lead={t("id3DetailsLead")}
					features={detailFeatures}
					chipGroups={chipGroups}
				/>
			</Container>
			<Container>
				<ProductVideoSection
					sectionTitle={t("id3VideoTitle")}
					sectionLead={t("id3VideoLead")}
					src="https://www.youtube.com/embed/bM9X0hoQQbM?si=VLCOCfs9zgk3YzRb"
					title="ID3"
				/>
			</Container>
			<Container>
				<ProductFinalCta
					title={t("id3FinalCtaTitle")}
				/>
			</Container>
		</S.ProductBox>
	);
}

const HeroSceneImage = styled(ProductSceneImage)`
  max-width: 330px;
  padding: 48px 0 22px;
`;
