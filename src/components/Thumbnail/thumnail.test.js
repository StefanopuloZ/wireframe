import React from 'react';

function sum(a, b) {
  return a + b;
}

test('sum 2 + 2 = 4', () => {
  expect(sum(2, 2)).toBe(4);
});

test('object equal', () => {
  const obj = { a: 1 };

  obj.b = 2;

  expect(obj).toEqual({ a: 1, b: 2 });
  expect(obj).not.toEqual({ a: 1, b: 3 });
});

// test('the data is peanut butter', () => {
//   return NewsApi.getTopArticles({country: 'us'}).then(data => {
//     console.log('data', data[0]);
//     // expect(data).toBe('peanut butter');
//   });
// });
