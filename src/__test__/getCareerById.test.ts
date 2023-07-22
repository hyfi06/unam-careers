import { CAREERS } from '../data';
import { getCareerById } from '..';

describe('getCareerById', () => {
  it('should return the career with the specified id', () => {
    const id = CAREERS[0].id;
    const career = getCareerById(id);
    expect(career).toBe(CAREERS[0]);
  });

  it('should throw an error if no career with the specified id is found', () => {
    const id = -1;
    expect(() => getCareerById(id)).toThrow('Career not Found');
  });

  it('should return the career with any id', () => {
    CAREERS.forEach((career) => {
      const id = career.id;
      const careerFound = getCareerById(id);
      expect(careerFound).toBe(career);
    });
  });
});
