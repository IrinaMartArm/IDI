import React from 'react';
import Image from "next/image";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import img from "../../images/svg/404.svg";

export const NotFoundPage = () => {
	const { t } = useTranslation("common");

	return (
		<Box>
			<ImgBox>
				<Image
					src={img}
					alt={t("notFoundAlt")}
					priority
					style={{width: "100%", height: "auto"}}
				/>
			</ImgBox>
		</Box>
	);
}

const Box = styled.div`
  max-width: 1900px;
  width: 100%;
  height: 100vh;
`
const ImgBox = styled.div`
  max-width: 1900px;
  width: 100%;
  padding-top: 50px;
`
