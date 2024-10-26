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

/* ================================================================================================ */

/**
 * Obtiene el número de bandas según el tipo de producto y la resolución.
 * 
 * @param {string} productTypes - Tipo de producto, como "MULTISPECTRAL", "DAY" o "SAR".
 * @param {number} gsd - Resolución espacial en unidades de micrómetros.
 * 
 * @returns {number} - Número de bandas correspondiente al tipo de producto y la resolución.
 * 
 * Si es "MULTISPECTRAL": retorna 12 u 8 bandas dependiendo del gsd.
 */
export const getBandCount = (productTypes, gsd) => {
  switch (productTypes) {
    case "MULTISPECTRAL":
      return gsd > 900 ? 12 : 8;
    case "DAY":
      return 4
    case "SAR":
      return 1;
  }
}