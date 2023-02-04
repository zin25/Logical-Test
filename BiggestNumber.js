function biggestNumber(num) {
    if (num < 100 || num > 999) {
      return null;
    }
    let numStr = num.toString();
    let numArr = numStr.split("");
    numArr.sort(function(a, b) { return b - a });
    return parseInt(numArr.join(""));

  }

console.log(biggestNumber(99));


/* 
- cek jika "num" kurang dari 100 atau "num" lebih dari 999, return null
- Rubah "num" ke string dengan .toString()
- Pecah string menjadi array
- urutkan dengan fungsi sort secara descending
- digit berubah menjadi string dan di ubah menjadi integer
*/