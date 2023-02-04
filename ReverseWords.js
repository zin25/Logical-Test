function reverseWords(str) {
    let kata = str.split(" ");
    let reversed = "";
  
    for (let word of kata) {
      let firstkata = word[0];
      let sisakata = word.substr(1);
      let reversedWord = firstkata + sisakata.split("").reverse().join("");
      reversed += reversedWord + " ";
    }
  
    return reversed.trim();
  }
  
  console.log(reverseWords('I ma A Taerg namuh')); // "I ma A Taerg namuh"

/* 
- memecah string str menjadi array of kata dengan pemisah spasi
- looping untuk setiap word dalam array kata
- word[0] mendeklarasikan variabel firstkata sebagai huruf pertama
- word.substr(1) mendeklarasikan variabel sisakata sebagai bagian dari word setelah huruf pertama.
- variabel reversedWord = gabungan dari firstkata dan sisakata yang sudah dibalik urutannya.
- add reversedWord dan spasi " " ke variabel reversed
- return isi dari reversed (hilangkan spasi di awal dan akhir string)
*/