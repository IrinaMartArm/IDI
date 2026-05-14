import React from "react";
import { St } from "./_CatalogStyles";
import { useTranslation } from "react-i18next";


type WorkPropsType = {
    image: string
    title: string
    text: string
    alt: string
}

export const Item: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    const { t } = useTranslation("catalog");
    return (  
        <St.Item>
            <St.ImgBox>
                <St.Image src={props.image} alt={props.alt}/>
            </St.ImgBox>
            <St.ItemTitle>
                <St.Title>{props.title}</St.Title>
                <St.Text>{props.text}</St.Text>
                <St.Button>{t("catalogViewProduct")}</St.Button>
            </St.ItemTitle>
        </St.Item>
    );
}
