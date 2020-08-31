import { unifyCrew } from '../index';

it('Should selecet maximum value from interval',
  () => {
    expect(unifyCrew('25-150')).toBe(150);
  });

it('Should convert unknown to 0',
  () => {
    expect(unifyCrew('unknown')).toBe(0);
  });

it('Should remove comma and convert to number',
  () => {
    expect(unifyCrew('1,2')).toBe(12);
  });

it('Should remove all commas and convert to number',
  () => {
    expect(unifyCrew('1,2,3')).toBe(123);
  });

it('Should convert string to number',
  () => {
    expect(unifyCrew('425')).toBe(425);
  });
