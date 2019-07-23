const Enum = require('..');

const enum1 = Enum({
  A: 1,
  B: 2,
  C: 3,
});

const enum2 = Enum([{
  key: 'A',
  value: 1,
  name: 'GetA',
  code: 'A',
}, {
  key: 'B',
  value: 2,
  name: 'GetB',
  code: 'B',
}, {
  key: 'C',
  value: 3,
  name: 'GetC',
  code: 'C',
}]);

const enum3 = Enum({
  A: {
    key: 'A', 
    name: 'GetA',
    value: 1,
    code: 'A',
  },
  B: {
    key: 'B', 
    name: 'GetB',
    value: 2,
    code: 'B',
  },
  C: {
    key: 'C', 
    name: 'GetC',
    value: 3,
    code: 'C',
  },
});

test('Enum can return {} if opts is not array or object', () => {
  const temp = Enum(null);
  expect(temp).toStrictEqual({});
  expect(Enum(undefined)).toStrictEqual({});
  expect(Enum('')).toStrictEqual({});
  expect(Enum('123')).toStrictEqual({});
  expect(Enum(2)).toStrictEqual({});
  expect(Enum(true)).toStrictEqual({});
  expect(Enum(false)).toStrictEqual({});
  expect(Enum(NaN)).toStrictEqual({});
});

test('Enum can be used by new and function call', () => {
  const exampleObj = { A: 1 };
  expect(Enum(exampleObj)).toEqual(new Enum(exampleObj));
});

test('Enum can be produced by object', () => {
  expect(enum1.A).toBe(1);
  expect(enum1.B).toBe(2);
  expect(enum1.C).toBe(3);
});

test('enum1 can get all props by value', () => {
  expect(enum1.getPropsByValue(1).key).toBe('A');
  expect(enum1.getPropsByValue(1).value).toBe(1);
  expect(enum1.getPropsByValue(1).name).toBe('A');
});

test('enum1 can get all props by key', () => {
  expect(enum1.getPropsByValue('A').key).toBe('A');
  expect(enum1.getPropsByValue('A').value).toBe(1);
  expect(enum1.getPropsByValue('A').name).toBe('A');
});

test('Enum can be produced by array', () => {
  expect(enum2.A).toBe(1);
  expect(enum2.B).toBe(2);
  expect(enum2.C).toBe(3);
});

test('enum2 can get all props by value', () => {
  expect(enum2.getPropsByValue(1).key).toBe('A');
  expect(enum2.getPropsByValue(1).value).toBe(1);
  expect(enum2.getPropsByValue(1).name).toBe('GetA');
  expect(enum2.getPropsByValue(1).code).toBe('A');
});

test('enum2 can get all props by key', () => {
  expect(enum2.getPropsByKey('A').key).toBe('A');
  expect(enum2.getPropsByKey('A').value).toBe(1);
  expect(enum2.getPropsByKey('A').name).toBe('GetA');
  expect(enum2.getPropsByKey('A').code).toBe('A');
});

test('enum3 can get all props by . operator', () => {
  expect(enum3.A.value).toBe(1);
  expect(enum3.A.key).toBe('A');
  expect(enum3.A.name).toBe('GetA');
  expect(enum3.A.code).toBe('A');
});
