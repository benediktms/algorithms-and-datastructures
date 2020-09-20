const linearSearch = (arr, val) => {
  let index = -1;
  arr.forEach((element, i) => {
    if (element == val) {
      index = i;
    }
  });
  console.log(index);
  return index;
};

linearSearch([10, 15, 20, 25, 30, 35], 14);
