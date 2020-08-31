import { repleceHttpToHttps } from '../index';

it('Should replace http to https',
  () => {
    expect(repleceHttpToHttps('http://swapi.dev/api/people/?page=3'))
      .toBe('https://swapi.dev/api/people/?page=3');
  });
