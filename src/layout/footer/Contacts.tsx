import Image from "next/image";
import {S} from "./FooterStyle";
import loc from "../../images/svg/loc.svg"
import tel from "../../images/svg/tel.svg"
import mail from "../../images/svg/Messages.svg"
import {useTranslation} from "react-i18next";

export const Contacts = () => {
	const {t} = useTranslation("common");
	const data = [
		{
			img: loc,
			name: 'address',
			text: `${t("footerAddressValue")}`
		},
		{
			img: mail,
			name: 'email',
			text: `sarmed@gmail.com`
		},
	]

	return (
		<S.ContactsBox>
			<S.SectionTitle>{t("footerContactsTitle")}</S.SectionTitle>
			{data.map((el) => {
				return (
					<S.Contact key={el.name}>
						<Image src={el.img} alt={el.name} width={22} height={22}/>
						<p>{el.text}</p>
					</S.Contact>)
			})}
			<S.Contact2 href="tel:+37491001421">
				<Image src={tel} alt="" width={22} height={22}/>
				<p>{t("footerPhoneValue")}</p>
			</S.Contact2>
		</S.ContactsBox>
	)
}
