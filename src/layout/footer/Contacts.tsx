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
			text: `Краснодарский край, г. Краснодар, ул. Уральская, д. 71, к. 1, помещение123/1`
		},
		{
			img: mail,
			name: 'email',
			text: `info@med-systema.ru`
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

			<S.Phones>
				<Image src={tel} alt="" width={22} height={22}/>
				<S.Social>
					<S.Contact2 href="tel:+79183661754">
						<p>+79183661754</p>
					</S.Contact2>
					<S.Contact2 href="tel:+79384779500">
						<p>+79384779500</p>
					</S.Contact2>
				</S.Social>
			</S.Phones>

		</S.ContactsBox>
	)
}
