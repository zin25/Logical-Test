function nearestFibonacci(arr) {
    let sum = arr.reduce((a, b) => a + b, 0); 
    let a = 0, b = 1, c = a + b; 
    while (c < sum) {
      a = b;
      b = c;
      c = a + b;
    }
    return (Math.abs(c - sum) <= Math.abs(b - sum)) ? c - sum : b - sum;
  }
  




console.log(nearestFibonacci([15,1,3]))

/*
- a, b, dan c diinisialisasi untuk deret Fibonacci, dimulai dengan 0, 1, dan 1
- loop c lebih besar dari sum
- Nilai a + b diteruskan ke c untuk menghitung angka Fibonacci berikutnya
- menghitung selisih antara sum dan c atau b yg mana yg lebih dekat
- math.abs menghitung nilai dari nol agar hasilnya positif.
*/