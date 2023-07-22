import { CAREERS } from '..';

describe('CAREERS', () => {
  it('should not change unintentionally', () => {
    expect(CAREERS).toMatchSnapshot();
  });
});
