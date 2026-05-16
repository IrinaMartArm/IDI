import drill from "../images/pictures/main/drill.png";
import guide from "../images/pictures/main/osteo.png";
import id3 from "../images/pictures/main/q2.png";
import idcam from "../images/pictures/main/q5.png";
import osteo from "../images/pictures/main/q8.png";
import surgicalSet from "../images/pictures/main/surgicalSet.png";
import elements from "../images/pictures/main/prosthatic.png";
import surgicalKits from "../images/pictures/main/q11.png";
import { getAssetSrc } from "../shared/lib/getAssetSrc";

export type ProductCategory = "all" | "Implants" | "kit";

export type ProductCard = {
  altKey: string;
  category: ProductCategory;
  descriptionKey: string;
  image: string;
  path: string;
  titleKey: string;
};

export const productCards: ProductCard[] = [
  {
    titleKey: "catalogCard1Title",
    category: "Implants",
    path: "/ID_CAM",
    image: getAssetSrc(idcam),
    descriptionKey: "catalogCard1Text",
    altKey: "catalogCard1Alt",
  },
  {
    titleKey: "catalogCard2Title",
    category: "Implants",
    path: "/ID3",
    image: getAssetSrc(id3),
    descriptionKey: "catalogCard2Text",
    altKey: "catalogCard2Alt",
  },
  {
    titleKey: "catalogCard3Title",
    category: "Implants",
    path: "/ProstheticElements",
    image: getAssetSrc(elements),
    descriptionKey: "catalogCard3Text",
    altKey: "catalogCard3Alt",
  },
  {
    titleKey: "catalogCard4Title",
    category: "Implants",
    path: "/TurboDrill",
    image: getAssetSrc(drill),
    descriptionKey: "catalogCard4Text",
    altKey: "catalogCard4Alt",
  },
  {
    titleKey: "catalogCard5Title",
    category: "kit",
    path: "/SurgicalSet",
    image: getAssetSrc(surgicalSet),
    descriptionKey: "catalogCard5Text",
    altKey: "catalogCard5Alt",
  },
  {
    titleKey: "catalogCard6Title",
    category: "kit",
    path: "/OsteoSinus",
    image: getAssetSrc(osteo),
    descriptionKey: "catalogCard6Text",
    altKey: "catalogCard6Alt",
  },
  {
    titleKey: "catalogCard7Title",
    category: "kit",
    path: "/SurgicalGuide",
    image: getAssetSrc(guide),
    descriptionKey: "catalogCard7Text",
    altKey: "catalogCard7Alt",
  },
  {
    titleKey: "catalogCard8Title",
    category: "kit",
    path: "/SurgicalKits",
    image: getAssetSrc(surgicalKits),
    descriptionKey: "catalogCard8Text",
    altKey: "catalogCard8Alt",
  },
];
