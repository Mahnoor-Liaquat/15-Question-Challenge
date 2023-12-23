// Question no 8: Sort the array in ascending and descending without built-in methods.

function bubbleSortAscending(arr) {
    let len = arr.length;
    let swapped;
  
    do {
      swapped = false;
      for (let i = 0; i < len - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
  
    return arr;
  }
  
  const myArray = [5, 3, 8, 2, 1];
  const sortedAscending = bubbleSortAscending(myArray);
  console.log("Array sorted in ascending order:", sortedAscending);

  function bubbleSortDescending(arr) {
    let len = arr.length;
    let swapped;
  
    do {
      swapped = false;
      for (let i = 0; i < len - 1; i++) {
        if (arr[i] < arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
  
    return arr;
  }
  
  const sortedDescending = bubbleSortDescending(myArray);
  console.log("Array sorted in descending order:", sortedDescending);