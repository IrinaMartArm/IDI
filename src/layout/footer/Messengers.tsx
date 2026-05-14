import React from 'react';
import Image from "next/image";
import {S} from "./FooterStyle";
import whatsapp from "../../images/pictures/messengers/whatsapp.svg"
import viber from "../../images/pictures/messengers/viber.svg"
import telegram from "../../images/pictures/messengers/telegram.svg"

const socialIconsData = [
	// {
	// 	iconId: viber,
	// 	name: 'viber',
	// 	href: "viber://chat?number=37491001521"
	// },
	{
		iconId: whatsapp,
		name: 'whatsapp',
		href: "https://wa.me/37491001421"
	},

];
export const Messengers = () => {
	return (
		<S.Social>
			<S.SocialList>
				{socialIconsData.map((i) => {
					return (
							<S.SocialLink key={i.name}>
								<a href={i.href} target="_blank" rel="noreferrer">
									<Image src={i.iconId} alt={i.name} width={22} height={22}/>
								</a>
							</S.SocialLink>
					);
				})}
			</S.SocialList>
			<S.Copyright>© 2024 SARMED</S.Copyright>
		</S.Social>
	);
}

export default Messengers;
