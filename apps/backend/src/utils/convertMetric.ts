type ConversionFunction = (distance: number) => number;

interface ConversionTable {
  [unit: string]: ConversionFunction;
}

const conversionTable: ConversionTable = {
  ym: (distance) => distance * 1e24,
  zm: (distance) => distance * 1e21,
  am: (distance) => distance * 1e18,
  fm: (distance) => distance * 1e15,
  pm: (distance) => distance * 1e12,
  nm: (distance) => distance * 1e9,
  μm: (distance) => distance * 1e6,
  mm: (distance) => distance * 1e3,
  cm: (distance) => distance * 1e2,
  dm: (distance) => distance * 1e1,
  m: (distance) => distance,
  dam: (distance) => distance * 1e-1,
  hm: (distance) => distance * 1e-2,
  km: (distance) => distance * 1e-3,
  Mm: (distance) => distance * 1e-6,
  Gm: (distance) => distance * 1e-9,
  Tm: (distance) => distance * 1e-12,
  Pm: (distance) => distance * 1e-15,
  Em: (distance) => distance * 1e-18,
  Zm: (distance) => distance * 1e-21,
  Ym: (distance) => distance * 1e-24,
  in: (distance) => distance * 39.3701,
  ft: (distance) => distance * 3.28084,
  yd: (distance) => distance * 1.09361,
  mi: (distance) => distance * 0.000621371,
  nmi: (distance) => distance * 0.000539957,
  AU: (distance) => distance * 6.68459e-9,
  ly: (distance) => distance * 1.057e-13,
  pc: (distance) => distance * 3.24078e-14,
};

const units: string[] = Object.keys(conversionTable);

function convertDistance(distance: number, fromUnit: string): Record<string, number> {
  const conversions: Record<string, number> = {};

  if (!units.includes(fromUnit)) {
    throw new Error(`Invalid fromUnit: ${fromUnit}`);
  }

  const conversionFactor = conversionTable[fromUnit](1); // Convert from 1 unit of fromUnit

  for (const unit of units) {
    conversions[unit] = conversionTable[unit](distance / conversionFactor);
  }

  return conversions;
}





export default convertDistance;

// ex.
// const distance: number = 2.5; // 2.5 meters
// const unit: string = 'm';
// const result: Record<string, number> = convertDistance(distance, unit);
// console.log(result);
