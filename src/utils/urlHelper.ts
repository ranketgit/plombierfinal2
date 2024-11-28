export function normalizeUrl(str: string): string {
  return str
    .toLowerCase()
    .replace(/é/g, 'e')
    .replace(/è/g, 'e')
    .replace(/ê/g, 'e')
    .replace(/ë/g, 'e')
    .replace(/à/g, 'a')
    .replace(/â/g, 'a')
    .replace(/ä/g, 'a')
    .replace(/ô/g, 'o')
    .replace(/ö/g, 'o')
    .replace(/û/g, 'u')
    .replace(/ü/g, 'u')
    .replace(/ï/g, 'i')
    .replace(/î/g, 'i')
    .replace(/ç/g, 'c')
    .replace(/œ/g, 'oe')
    .replace(/æ/g, 'ae')
    .replace(/ /g, '-');
}