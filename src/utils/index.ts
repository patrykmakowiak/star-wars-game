export const randCard = (numberOfCards: number):
  number => Math.floor(Math.random() * numberOfCards);

export const unifyCrew = (crew: string): number => {
  if (crew.includes(',')) {
    return +(crew.replace(/,/, ''));
  }
  if (crew.includes('-')) {
    const indexDash = crew.indexOf('-') + 1;
    return +(crew.substr(indexDash));
  }
  if (crew === 'unknown') {
    return 0;
  }
  return +crew;
};

export const unifyMass = (mass: string): number => (mass === 'unknown' ? 0 : +mass);
