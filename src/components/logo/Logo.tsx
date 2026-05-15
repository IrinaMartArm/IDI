import React from "react";
import { S } from "../../layout/header/Header_styles";

export const Logo = () => {
    return (
        <>
            <S.LogotipDesktop src="/logo.svg" alt="IDI" />
            <S.LogotipMobile src="/s_logo.svg" alt="IDI" />
        </>
    );
}
