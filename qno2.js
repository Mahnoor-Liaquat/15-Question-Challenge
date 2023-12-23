// Question no 2: Count the number of vowels in a given string.
const countvowel = (str) => {
    let count = 0;
    for (const char of str) {
      if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u"
      ) {
        count++;
      }
    }
    return count;
  };
  console.log(countvowel("Mahnoor Liaquat Ali"));