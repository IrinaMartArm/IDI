import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import amCatalog from "../../public/locales/am/catalog.json";
import amCommon from "../../public/locales/am/common.json";
import amHome from "../../public/locales/am/home.json";
import amId3 from "../../public/locales/am/id3.json";
import amIdcam from "../../public/locales/am/idcam.json";
import amOsteosinus from "../../public/locales/am/osteosinus.json";
import amProsthetic from "../../public/locales/am/prosthetic.json";
import amSurgicalGuide from "../../public/locales/am/surgical-guide.json";
import amSurgicalKits from "../../public/locales/am/surgical-kits.json";
import amSurgicalSet from "../../public/locales/am/surgical-set.json";
import amTurboDrill from "../../public/locales/am/turbo-drill.json";
import enCatalog from "../../public/locales/en/catalog.json";
import enCommon from "../../public/locales/en/common.json";
import enHome from "../../public/locales/en/home.json";
import enId3 from "../../public/locales/en/id3.json";
import enIdcam from "../../public/locales/en/idcam.json";
import enOsteosinus from "../../public/locales/en/osteosinus.json";
import enProsthetic from "../../public/locales/en/prosthetic.json";
import enSurgicalGuide from "../../public/locales/en/surgical-guide.json";
import enSurgicalKits from "../../public/locales/en/surgical-kits.json";
import enSurgicalSet from "../../public/locales/en/surgical-set.json";
import enTurboDrill from "../../public/locales/en/turbo-drill.json";
import ruCatalog from "../../public/locales/ru/catalog.json";
import ruCommon from "../../public/locales/ru/common.json";
import ruHome from "../../public/locales/ru/home.json";
import ruId3 from "../../public/locales/ru/id3.json";
import ruIdcam from "../../public/locales/ru/idcam.json";
import ruOsteosinus from "../../public/locales/ru/osteosinus.json";
import ruProsthetic from "../../public/locales/ru/prosthetic.json";
import ruSurgicalGuide from "../../public/locales/ru/surgical-guide.json";
import ruSurgicalKits from "../../public/locales/ru/surgical-kits.json";
import ruSurgicalSet from "../../public/locales/ru/surgical-set.json";
import ruTurboDrill from "../../public/locales/ru/turbo-drill.json";

const namespaces = [
    "common",
    "catalog",
    "home",
    "id3",
    "idcam",
    "osteosinus",
    "prosthetic",
    "surgical-guide",
    "surgical-kits",
    "surgical-set",
    "turbo-drill",
];

const resources = {
    am: {
        common: amCommon,
        catalog: amCatalog,
        home: amHome,
        id3: amId3,
        idcam: amIdcam,
        osteosinus: amOsteosinus,
        prosthetic: amProsthetic,
        "surgical-guide": amSurgicalGuide,
        "surgical-kits": amSurgicalKits,
        "surgical-set": amSurgicalSet,
        "turbo-drill": amTurboDrill,
    },
    en: {
        common: enCommon,
        catalog: enCatalog,
        home: enHome,
        id3: enId3,
        idcam: enIdcam,
        osteosinus: enOsteosinus,
        prosthetic: enProsthetic,
        "surgical-guide": enSurgicalGuide,
        "surgical-kits": enSurgicalKits,
        "surgical-set": enSurgicalSet,
        "turbo-drill": enTurboDrill,
    },
    ru: {
        common: ruCommon,
        catalog: ruCatalog,
        home: ruHome,
        id3: ruId3,
        idcam: ruIdcam,
        osteosinus: ruOsteosinus,
        prosthetic: ruProsthetic,
        "surgical-guide": ruSurgicalGuide,
        "surgical-kits": ruSurgicalKits,
        "surgical-set": ruSurgicalSet,
        "turbo-drill": ruTurboDrill,
    },
};


i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        cleanCode: true,
        resources,
        ns: namespaces,
        defaultNS: "common",
        fallbackNS: "common",
        detection: {
            order: ['localStorage', 'navigator'],
            lookupLocalStorage: 'sarmed-language',
            caches: ['localStorage']
        },
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        },
        initImmediate: false,
        fallbackLng: 'en',
        load: 'currentOnly',
        supportedLngs: ['am', 'en', 'ru'],
    })


export default i18n;
