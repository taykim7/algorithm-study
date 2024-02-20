// 📝 forEach
a = [10, 11, 12, 13, 14, 15];
a.forEach(element => {
  return element;
});
// => undefined

// 📝 map
a = [10, 11, 12, 13, 14, 15];
a.map((element) => {
  return element % 2 === 0;
})
// => (6) [true, false, true, false, true, false]

// 📝 filter
a = [10, 11, 12, 13, 14, 15];
a.filter((element) => {
  return element % 2 === 0;
})
// => (3) [10, 12, 14]

// 📝 reduce
a = [10, 11, 12, 13, 14, 15];
a.reduce((element, val) => {
  return element + val;
})
// => 75
