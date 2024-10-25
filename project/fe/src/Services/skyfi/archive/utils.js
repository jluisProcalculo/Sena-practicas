/* Filtros generales para obtener las imagenes respectivas en Commercial y Open */

export const filters = {
  productTypes: [
    "DAY", "NIGHT", "VIDEO", "SAR", "HYPERSPECTRAL", "MULTISPECTRAL", "STEREO",
  ],
  providers: [
    "SIWEI", "SATELLOGIC", "UMBRA", "TAILWIND", "GEOSAT", "SENTINEL2",
    "SENTINEL2_CREODIAS", "PLANET", "IMPRO", "URBAN_SKY", "NSL", "VEXCEL",
  ],
};

export const filtersOpen = {
  resolutions: [
    "LOW"
  ],
  productTypes: [
    "DAY", "MULTISPECTRAL",
  ],
  openData: "true"
};

export const filtersCommercial = {
  resolutions: [
    "MEDIUM", "HIGH", "VERY HIGH", "SUPER HIGH", "ULTRA HIGH",
  ],
  openData: "false"
};