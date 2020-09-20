const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    console.log('false: not same length');
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  arr1.forEach(val => {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  });
  arr2.forEach(val => {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  });

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      console.log('false: not same frequency');
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      console.log('false: not same frequency');
      return false;
    }
  }
  console.log(true);
  return true;
};

same([1, 2, 3, 4, 5], [1, 5, 9, 16, 33]);
