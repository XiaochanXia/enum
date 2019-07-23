# enum
## Usage:
```javascript
// Used simple object
const enum1 = Enum({
  A: 1,
  B: 2,
  C: 3,
});

// Used array
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

// Used Those object
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
```