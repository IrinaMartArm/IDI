import React, {useState, MouseEvent, useEffect, useRef} from "react";
import {S} from './_CatalogButton'
import {useTranslation} from "react-i18next";
import { usePathname } from "next/navigation";
import { productCards } from "../../data/products";
import { lockBodyScroll, unlockBodyScroll } from "../../shared/lib/bodyScrollLock";

export const CatalogButton = () => {
	const {t} = useTranslation(["common", "catalog"]);
	const [isOpen, setIsOpen] = useState(false)
	const pathname = usePathname()
	const rootRef = useRef<HTMLDivElement | null>(null)

	const buttonHandler = (e:MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation()
		setIsOpen((value) => !value);
	}

	useEffect(() => {
		if (!isOpen) {
			return;
		}

		lockBodyScroll();

		return () => {
			unlockBodyScroll();
		};
	}, [isOpen]);

	useEffect(() => {
		if (!isOpen) {
			return;
		}

		const handlePointerDown = (event: PointerEvent) => {
			if (!rootRef.current?.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setIsOpen(false);
			}
		};

		document.addEventListener("pointerdown", handlePointerDown);
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("pointerdown", handlePointerDown);
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen]);

	return (
		<S.CatalogBtnBox ref={rootRef}>
			<S.Overlay isOpen={isOpen} type="button" aria-label={t("catalogMenuCloseAria")} onClick={() => setIsOpen(false)} />
			<S.Button onClick={buttonHandler}>
				{t('title3')}
			</S.Button>


			<S.MenuWrapper isOpen={isOpen}>
				<S.MenuHeader>
					<strong>{t('title3')}</strong>
					<S.CloseButton type="button" aria-label={t("catalogMenuCloseAria")} onClick={() => setIsOpen(false)}>
						<span />
						<span />
					</S.CloseButton>
				</S.MenuHeader>
					<S.CatalogItems>
					{productCards.map((el) => {
							return (
								<S.CatalogItem $active={pathname === el.path} key={el.path}>
									<S.CatalogLink $active={pathname === el.path} href={el.path} onClick={() => setIsOpen(false)}>
										{t(el.titleKey, { ns: "catalog" })}
									</S.CatalogLink>
								</S.CatalogItem>
							)
						})}
				</S.CatalogItems>
			</S.MenuWrapper>
		</S.CatalogBtnBox>
	)
}
