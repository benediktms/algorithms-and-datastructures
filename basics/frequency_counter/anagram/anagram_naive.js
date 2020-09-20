const isValidAnagram = (word1, word2) => {
  if (word1.length !== word2.length) {
    console.log('false: not same length');
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  word1.split('').forEach(val => {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  });
  word2.split('').forEach(val => {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  });

  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      console.log(`false: the letter '${key}' is not present in '${word2}'`);
      return false;
    }
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      console.log(
        `false: the letter count for '${key}' in '${word2}' does not match letter count in '${word1}'`
      );
      return false;
    }
  }
  console.log(true);
  return true;
};

isValidAnagram('anagram', 'nagaram');
isValidAnagram('rat', 'car');
isValidAnagram('aaz', 'zza');
