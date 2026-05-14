import React from 'react';
import styled from "styled-components";
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
import {font, headingFont} from "../../../../style/Common";
import {Theme} from "../../../../style/Theme";
import {S} from './_ProductStyles'
import abatm_1 from '../../../../images/pictures/prosthetic/abatm_1.png'
import abatm_2 from '../../../../images/pictures/prosthetic/abatm_2.png'
import abatm_hero from '../../../../images/pictures/prosthetic/abatm_hero.png'

const getAdvantageCards = (t: (key: string) => string) => [
	{title: t("prostheticAdvantage1Title"), text: t("prostheticAdvantage1Text")},
	{title: t("prostheticAdvantage2Title"), text: t("prostheticAdvantage2Text")},
	{title: t("prostheticAdvantage3Title"), text: t("prostheticAdvantage3Text")},
];

const getDetailFeatures = (t: (key: string) => string) => [
	{label: t("prostheticFeature1Label"), value: t("prostheticFeature1Value")},
	{label: t("prostheticFeature2Label"), value: t("prostheticFeature2Value")},
	{label: t("prostheticFeature3Label"), value: t("prostheticFeature3Value")},
	{label: t("prostheticFeature4Label"), value: t("prostheticFeature4Value")},
];

const getChipGroups = (t: (key: string) => string) => [
	{
		label: t("prostheticUseCasesLabel"),
		values: t("prostheticUseCasesValue").split(" / "),
	},
];

export const ProstheticElements = () => {
	const {t} = useTranslation("prosthetic");
	const advantageCards = getAdvantageCards(t);
	const detailFeatures = getDetailFeatures(t);
	const chipGroups = getChipGroups(t);

	return (
		<S.ProductBox>
			<Container>
				<ProductPageHero
					title={t("prostheticHeroTitle")}
					customEyebrow="Prosthetic Elements"
					description={t("prostheticHeroLead")}
					bullets={[
						t("prostheticHeroBullet1"),
						t("prostheticHeroBullet2"),
						t("prostheticHeroBullet3"),
					]}
					imageSrc={getAssetSrc(abatm_hero)}
					imageAlt="Prosthetic Elements"
					imageMaxHeight="520px"
					imageMobileMaxHeight="280px"
				/>
			</Container>
			<Container>
				<ProductAdvantages
					title={t("prostheticAdvantagesTitle")}
					items={advantageCards}
				/>
			</Container>
			<Container>
				<ProductDetails
					media={(
						<ProductSceneMedia>
							<ElementsImage src={getAssetSrc(abatm_1)} alt="Prosthetic Elements" />
							<ElementsImage src={getAssetSrc(abatm_2)} alt="Prosthetic Elements" />
						</ProductSceneMedia>
					)}
					title={t("prostheticDetailsTitle")}
					lead={t("prostheticDetailsLead")}
					features={detailFeatures}
					chipGroups={chipGroups}
				/>
			</Container>
			<Container>
				<ProductVideoSection
					sectionTitle={t("prostheticVideoTitle")}
					sectionLead={t("prostheticVideoLead")}
					src="https://www.youtube.com/embed/2mgn_ouqs7A?si=vugcinm1MQDj0U81"
					title="Prosthetic Elements"
				/>
			</Container>
			<Container>
				<ProductFinalCta
					title={t("prostheticFinalCtaTitle")}
					lead={t("prostheticFinalCtaText")}
				/>
			</Container>
		</S.ProductBox>
	);
}

const ElementsImage = styled(ProductSceneImage)`
  max-width: 270px;
  padding: 30px 0 22px;
  filter: none;
`;
