"use client";

import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Image from "next/image";
import up from '../../images/svg/up-arrow-svgrepo-com.svg'
import {Theme} from "../../style/Theme";
import { useTranslation } from "react-i18next";

export const GoTop = () => {
	const { t } = useTranslation("common");
	const [show, setShow] = useState(false)
	useEffect(() => {
		const toggleVisibility = () => {
			const nextShow = window.scrollY > 300;
			setShow((prevShow) => (prevShow === nextShow ? prevShow : nextShow));
		};

		const handleScroll = () => {
			toggleVisibility();
		};

		toggleVisibility();
		window.addEventListener("scroll", handleScroll, { passive: true })
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<>
			{show && (
				<GoTopBtn aria-label={t("goTopAria")} onClick={() => {
					window.scrollTo({top: 0, behavior: "smooth"})
				}}>
					<StyledImg src={up} alt={t("goTopAlt")} width={30} height={30}/>
				</GoTopBtn>)}
		</>
	);
}

const GoTopBtn = styled.button`
  position: fixed;
  bottom: 140px;
  right: 30px;
  z-index: 999;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  //border: 2px solid ${Theme.colors.primary600};
  border-radius: 999px;
  background: transparent;
  box-shadow: 0 10px 22px rgba(18, 52, 59, 0.1);
  cursor: pointer;
  transition: ${Theme.animations.transition};

  &:hover {
    transform: translateY(-2px);
    border-color: ${Theme.colors.primaryDeep};
    box-shadow: 0 14px 28px rgba(18, 52, 59, 0.14);
  }
`
const StyledImg = styled(Image)`
  width: 30px;
  height: 30px;
  filter: brightness(0) saturate(100%) invert(49%) sepia(16%) saturate(498%) hue-rotate(161deg) brightness(90%) contrast(90%);
`
