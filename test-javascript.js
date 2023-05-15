// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
  // Your Code Here
  let median;
  let num = input.sort();
  let len = num.length;

  if (len % 2 == 0) {
    median = (num[len / 2 - 1] + num[len / 2]) / 2;
  } 
  
  else {
    median = num[(len + 1) / 2 - 1];
  }

  return median;
}

console.log(result(input));
