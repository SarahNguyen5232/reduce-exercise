
function extractValue(arr, key) {
    return arr.map(function (obj) {
        return obj[key];
      });
}

function vowelCount(str) {
    const count = {};
    const lowerStr = str.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let char of lowerStr) {
        if (vowels.includes(char)) {
          counts[char] = (counts[char] || 0) + 1;
        }
      }
    
      return counts;
    }

function addKeyAndValue(arr, key, value) {
    return arr.map(function (obj) {
        return { ...obj, [key]: value };
      });
}

function partition(arr, callback) {
    const trueArray = [];
    const falseArray = [];
  
    arr.forEach(function (value) {
      if (callback(value)) {
        trueArray.push(value);
      } else {
        falseArray.push(value);
      }
    });
  
    return [trueArray, falseArray];
  }

