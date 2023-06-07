// this function search for "word" (string) in "letters" (2-d array), 
// either horizontally, or vertically, and returns true if "word" 
// is found

// Import Alice's previous code to dry out the function...
const transpose = function(matrix) {
  const output = [];
  for (let i = 0; i < matrix[0].length; i++) {
    output.push([]);
  }
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      output[c].push(matrix[r][c]);
    }
  }
  return output;
};

const wordSearch = (letters, word) => {
  // create a second copy of the puzzle, and transpose it..
  lettersTranspose = transpose(letters);
  // combine all the letters in each row/column into an array of strings
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = lettersTranspose.map(ls => ls.join(''));
  // run through the ROWS...
  for (let row of horizontalJoin) {
    // .. and check for the word, if found DONE!
    if (row.includes(word)) return true;
  }
  // run through th COLUMNS, if found DONE!
  for (let row of verticalJoin) {
    if (row.includes(word)) return true;
  }
  // word NOT found, so return false...
  return false;
};

module.exports = wordSearch;
