module.exports = function longestConsecutiveLength(array) {
  const set = new Set();
  let longest = 0;
  let number;
  let counter;
  for (let i = 0, len = array.length; i < len; i++){
    // check for consecutive numbers in set
    number = array[i];
    counter = 1;
    while (set.has(number - 1)){
      counter++;
      number--;
    }
    number = array[i];
    while (set.has(number + 1)){
      counter++;
      number++;
    }
    if (counter > longest){
      longest = counter;
    }
    set.add(array[i]);
  }
  return longest;
}
