function alternateCase(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      let char = str.charAt(i);
      if (char === char.toUpperCase()) {
        result += char.toLowerCase();
      } else {
        result += char.toUpperCase();
      }
    }
    return result;
  }

let str = "abc";
console.log(alternateCase(str));

/* 
- Looping setiap karakter dalam str
- Cek apakah karakter sekarang adalah huruf besar
- Tambahkan karakter skrg sebagai huruf kecil ke result
- Tambahkan karakter skrg sebagai huruf besar ke result
*/