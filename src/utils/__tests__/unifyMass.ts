import { unifyMass } from '../index';

it('Should convert unknown to 0',
  () => {
    expect(unifyMass('unknown')).toBe(0);
  });

it('Should convert string to number',
  () => {
    expect(unifyMass('153')).toBe(153);
  });
