import { getCareerByName } from '..';
import { CAREERS } from '../data';

describe('getCareerByName', () => {
  it('should return the career with the specified name', () => {
    const careerName = CAREERS[0].alias[0];
    const career = getCareerByName(careerName);
    expect(career).toBe(CAREERS[0]);
  });

  it('should throw an error if no career with the specified name is found', () => {
    const careerName = 'Nonexistent Career';
    expect(() => getCareerByName(careerName)).toThrow('Career not Found');
  });

  it('should handle names with different casing and accents', () => {
    const careerName = 'Actuaría';
    const career = getCareerByName(careerName);
    expect(career.alias).toContain('ACTUARIA');
  });

  it('should be include career name in alias', () => {
    CAREERS.forEach((career) => {
      const careerName = career.name;
      const careerFound = getCareerByName(careerName);
      expect(careerFound).toBe(career);
    });
  });
});
