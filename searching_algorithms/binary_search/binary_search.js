const binarySearch = (arr, val) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== val && start <= end) {
    if (val < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  console.log(arr[middle] === val ? middle : -1);
  return arr[middle] === val ? middle : -1;
};

binarySearch([5, 10, 15, 20, 25, 30, 35], 17);
binarySearch([5, 10, 15, 20, 25, 30, 35], 15);
