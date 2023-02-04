function productArray(num){
    let result = [];
    for (let i = 0; i < num.length; i++) {
      let tamp = 1
      for (let j = 0; j < num.length; j++) {      
        if (j != i) {
          tamp = tamp * num[j]
        }
      }
      result.push(tamp)    
    }
    return result;
  }
  
console.log(productArray([3,27,4,2]));

/* 
- Looping 1 untuk melooping semua element atau angka dalam 'num'
- tamp untuk menampung element saat ini kecuali element ke 1 = 3
- Menemukan semua element kecuali element saat ini
*/