import React, { useState } from "react";
import { St } from "./_CatalogStyles";
import { Title } from "../../../components/Title";
import { Item } from "./Item";
import {Menu, StatusType} from "./Menu";
import { AnimatePresence, motion } from "framer-motion"
import {useTranslation} from "react-i18next";
import { productCards } from "../../../data/products";

const catigories: Array<{status: StatusType, title: string}> = [
  {
    title: 'sort1',
    status: 'all'
  },
  {
    title: 'sort2',
    status: 'Implants'
  },
  {
    title: 'sort3',
    status: 'kit'
  },
  // {
  //   title: 'Headlamp',
  //   status: 'bil'
  // },
];

export const Catalog: React.FC = () => {
  const {t} = useTranslation("catalog");
  const [status, setStatus] = useState('all')
  let filteredItems = productCards
  if(status === 'Implants') {
    filteredItems = productCards.filter(work => work.category === 'Implants')
  }
  if(status === 'kit') {
    filteredItems = productCards.filter(work => work.category === 'kit')
  }


  function changeStatus(value: StatusType) {
    setStatus(value)
  }
  
  return (
    <St.Items id="catalog">
      <St.HeaderRow>
        <Title>{t('productTitle')}</Title>
        <Menu items={catigories}
              changeStatus={changeStatus}
              status={status}
        />
      </St.HeaderRow>

      <St.Grid>
        <AnimatePresence mode='wait'>
          {filteredItems.map((el) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 18 }}
                transition={{ duration: 0.24 }}
                key={el.path}
                layout
                style={{ height: "100%" }}
              >
                  <St.CardLink href={el.path}>
                  <Item title={t(el.titleKey)} text={t(el.descriptionKey)} image={el.image} alt={t(el.altKey)}/>
                  </St.CardLink>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </St.Grid>
    </St.Items>
  );
};
