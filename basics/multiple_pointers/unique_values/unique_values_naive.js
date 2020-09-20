const countUniqueValues = arr => {
  if (arr.length === 0) {
    console.log(0);
    return 0;
  }

  let mutator = 0;
  let inspector = 1;

  /**
   ** if arr[mutator] === arr[inspector]
   ** inspector++
   ** else
   ** mutator++
   ** arr[mutator] = arr[inspector]
   ** return mutator + 1
   **/

  while (inspector < arr.length) {
    if (arr[mutator] === arr[inspector]) {
      inspector++;
    } else {
      mutator++;
      arr[mutator] = arr[inspector];
    }
  }
  console.log(mutator + 1);
};

countUniqueValues([]);
