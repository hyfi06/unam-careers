/**
 * @hyfi06/unam-careers
 * @copyright Copyright (c) 2023 Héctor Olvera Vital
 * @license MIT
 */

import { CAREERS, CareerItem } from './data';
import { sanitizeStr } from '@hyfi06/str-utils';

/**
 * Retrieves a career by its `id`.
 *
 * @param {number} id - The ID of the career to retrieve.
 * @returns {CareerItem} The career with the specified ID.
 * @throws {Error} If no career with the specified ID is found.
 *
 * @example
 * const id = 101;
 * const career = getCareerById(id);
 * // career is { id: 101, name: 'Actuaría', alias: ['ACTUARIA', 'ACT'], siassId: 1, dgeciId: 11 }
 */
function getCareerById(id: number): CareerItem {
  const career = CAREERS.find((career) => career.id == id);
  if (!career) {
    throw new Error('Career not Found');
  }
  return career;
}

/**
 * Retrieves a career by its name. It sanitizes the input string by removing accents and converting to uppercase before comparing it with the career aliases.
 *
 * @param {string} careerName - The name of the career to retrieve.
 * @returns {CareerItem} The career with the specified name.
 * @throws {Error} If no career with the specified name is found.
 *
 * @example
 * const careerName = 'Actuaría';
 * const career = getCareerByName(careerName);
 * // career is { id: 101, name: 'Actuaría', alias: ['ACTUARIA', 'ACT'], siassId: 1, dgeciId: 11 }
 */
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

export type { CareerItem };
export { getCareerById, getCareerByName };
