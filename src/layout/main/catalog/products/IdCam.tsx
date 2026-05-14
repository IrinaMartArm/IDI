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
} from "../../../../components/molecules";
import {useTranslation} from "react-i18next";
import {getAssetSrc} from "../../../../shared/lib/getAssetSrc";
import {S} from './_ProductStyles'
import p1 from '../../../../images/pictures/pages/id_cam.png'
import id_cam from '../../../../images/pictures/pages/creativefabrica-ai-image-editor-2-bot copy.png'

const getAdvantageCards = (t: (key: string) => string) => [
	{title: t("idCamAdvantage1Title"), text: t("idCamAdvantage1Text")},
	{title: t("idCamAdvantage2Title"), text: t("idCamAdvantage2Text")},
	{title: t("idCamAdvantage3Title"), text: t("idCamAdvantage3Text")},
];

const getDetailFeatures = (t: (key: string) => string) => [
	{label: t("idCamFeature1Label"), value: t("idCamFeature1Value")},
	{label: t("idCamFeature2Label"), value: t("idCamFeature2Value")},
	{label: t("idCamFeature3Label"), value: t("idCamFeature3Value")},
	{label: t("idCamFeature4Label"), value: t("idCamFeature4Value")},
];

const getChipGroups = (t: (key: string) => string) => [
	{
		label: t("idCamPlatformsLabel"),
		values: t("idCamPlatformsValue").split(" / "),
	},
	{
		label: t("idCamLengthsLabel"),
		values: t("idCamLengthsValue").split(" / "),
	},
];

export const IdCam = () => {
	const {t} = useTranslation("idcam");
	const advantageCards = getAdvantageCards(t);
	const detailFeatures = getDetailFeatures(t);
	const chipGroups = getChipGroups(t);

	return (
		<S.ProductBox>
			<Container>
				<ProductPageHero
					title={t("idCamHeroTitle")}
					customEyebrow="ID CAM"
					description={t("idCamHeroLead")}
					bullets={[
						t("idCamHeroBullet1"),
						t("idCamHeroBullet2"),
						t("idCamHeroBullet3"),
					]}
					imageSrc={getAssetSrc(p1)}
					imageMaxHeight="500px"
					imageMobileMaxHeight="300px"
					imageAlt={t("idCamHeroImageAlt")}
					pdfHref="/IDCAM.pdf"
				/>
			</Container>
			<Container>
				<ProductAdvantages
					title={t("idCamAdvantagesTitle")}
					items={advantageCards}
				/>
			</Container>
			<Container>
				<ProductDetails
					media={(
						<ProductSceneMedia>
							<ImplantImage src={getAssetSrc(id_cam)} alt={t("idCamDetailImageAlt")} />
						</ProductSceneMedia>
					)}
					title={t("idCamDetailsTitle")}
					lead={t("idCamDetailsLead")}
					features={detailFeatures}
					chipGroups={chipGroups}
				/>
			</Container>
			<Container>
				<ProductFinalCta
					title={t("idCamFinalCtaTitle")}
					lead={t("idCamFinalCtaText")}
				/>
			</Container>
		</S.ProductBox>
	);
}

const ImplantImage = styled(ProductSceneImage)`
  max-width: 330px;
  padding: 48px 0 22px;
`;
