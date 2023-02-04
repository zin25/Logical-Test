function solution(num) {
    let result = 0;
    for (let i = 3; i < num; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        result += i;
      }
    }
    return result;
  }


console.log(solution(20))

/* 
-  Perulangan dimulai dari 3 hingga num (input dari fungsi), increment.
- cek kondisi jika i habis di bagi 3 atau i habis di bagi 5 
- tambah nilai i ke variable result
*/