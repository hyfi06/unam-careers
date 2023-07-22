# @hyfi06/unam-careers

A utility package for retrieving career information from UNAM.

## Install

You can install this package using npm:

```bash
npm install --save @hyfi06/unam-careers
```

## Usage

Here is an example of how to use the getCareerById function:

```javascript
const { getCareerById } = require('@hyfi06/unam-careers');

const id = 101;
const career = getCareerById(id);

console.log(career); 
// Prints the career with id 101 { id: 101, name: 'Actuaría', alias: ['ACTUARIA', 'ACT'], siassId: 1, dgeciId: 11 }
```

And here is an example of how to use the getCareerByName function:

```javascript
Copy code
const { getCareerByName } = require('@hyfi06/unam-careers');

const careerName = 'Actuaría';
const career = getCareerByName(careerName);

console.log(career); 
// Prints the career with name 'Actuaría' { id: 101, name: 'Actuaría', alias: ['ACTUARIA', 'ACT'], siassId: 1, dgeciId: 11 }
```

## Functions

- [`getCareerById(id: number): CareerItem`](#function-getcareerbyid): Retrieves a career from the `CAREERS` array by its `id`. Throws an error if no career with the specified ID is found.

- [`getCareerByName(careerName: string): CareerItem`](#function-getcareerbyname): Retrieves a career from the `CAREERS` array by its name. It sanitizes the input string by removing accents and converting to uppercase before comparing it with the career aliases. Throws an error if no career with the specified name is found.

### Function: getCareerById

The `getCareerById` function retrieves a career by its `id`.

#### Parameters

- `id` (number): The ID of the career to retrieve.

#### Returns

- (CareerItem): The career with the specified ID.

#### Throws

- (Error): If no career with the specified ID is found.

#### Example

```javascript
const id = 101;
const career = getCareerById(id);
// career is { id: 101, name: 'Actuaría', alias: ['ACTUARIA', 'ACT'], siassId: 1, dgeciId: 11 }
```

### Function: getCareerByName

The `getCareerByName` function retrieves a career from the `CAREERS` array by its name. It sanitizes the input string by removing accents and converting to uppercase before comparing it with the career aliases.

#### Parameters

- `careerName` (string): The name of the career to retrieve.

#### Returns

- (CareerItem): The career with the specified name.

#### Throws

- (Error): If no career with the specified name is found.

#### Example

```javascript
const careerName = 'Actuaría';
const career = getCareerByName(careerName);
// career is { id: 101, name: 'Actuaría', alias: ['ACTUARIA', 'ACT'], siassId: 1, dgeciId: 11 }
```

## Copyright

Copyright (c) 2023 Héctor Olvera Vital

## License

This project is licensed under the [MIT License](LICENSE), which means you are free to use, modify, and distribute the code for both commercial and non-commercial purposes. However, the software is provided "as is," without any warranty or guarantee of its effectiveness or suitability for your specific needs. [Please review the license file for more details](LICENSE).
