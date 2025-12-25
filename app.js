let arr = [2, 9, 4, 5, 1, 12];
let narr = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 5) {
    narr.push(arr[i]);      
  } else {
    narr.unshift(arr[i]);  
  }
}

console.log(narr);