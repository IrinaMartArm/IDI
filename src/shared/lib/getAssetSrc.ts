type AssetWithSrc = {
  src: string;
};

export const getAssetSrc = (asset: string | AssetWithSrc) =>
  typeof asset === "string" ? asset : asset.src;
