import { CAREERS, CareerItem } from './data';
import { sanitizeStr } from '@hyfi06/str-utils';

function getCareerById(id: number): CareerItem {
  const career = CAREERS.find((career) => career.id == id);
  if (!career) {
    throw new Error('Career not Found');
  }
  return career;
}

function getCareerByName(careerName: string): CareerItem {
  const career = CAREERS.find((career) =>
    career.alias.includes(
      sanitizeStr(careerName, { removeAccents: true, toUpperCase: true }),
    ),
  );
  if (!career) {
    throw new Error('Career not Found');
  }
  return career;
}

export { getCareerById, getCareerByName };
