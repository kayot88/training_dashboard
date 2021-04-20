function LISsolveDP(arr) {
  // Create an array for longest increasing substrings lengths and
  // fill it with 1s. This means that each element of the arr
  // is itself a minimum increasing subsequence.
  const lengthsArr = Array(arr.length).fill(1);

  let prevElIdx = 0;
  let currElIdx = 1;
  let seq = [];

  while (currElIdx < arr.length) {
    if (arr[prevElIdx] < arr[currElIdx]) {
      // If current element is bigger then the previous one. then
      // it is a part of increasing subsequence where length is
      // by 1 bigger then the length of increasing subsequence
      // for the previous element.
      const newLen = lengthsArr[prevElIdx] + 1;
      if (newLen > lengthsArr[currElIdx]) {
        // Increase only if previous element would give us a
        // bigger subsequence length then we already have for
        // current element.
        lengthsArr[currElIdx] = newLen;
      }
      
    }
    // Move previous element index right.
    prevElIdx += 1;
    
    // If previous element index equals to current element index then
    // shift current element right and reset previous element index to zero.
    if (prevElIdx === currElIdx) {
      currElIdx += 1;
      prevElIdx = 0;
    }
    // console.log(ress) 
    seq.push(arr[prevElIdx]);
  }

  // Find the largest element in lengthsArr, as it
  // will be the biggest length of increasing sequence.
  let longestIncreasingLength = 0;
  
  for (let i = 0; i < lengthsArr.length; i += 1) {
    if (lengthsArr[i] > longestIncreasingLength) {
      longestIncreasingLength = lengthsArr[i];
    }
  }
  console.log(longestIncreasingLength);
  return longestIncreasingLength;
}

const arr = [1, 2, 3, 1, 5, 3];
LISsolveDP(arr);
