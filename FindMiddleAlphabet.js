function letterMiddle(a, b) {
    let abjad1 = Alphabet.indexOf(a);
    let abjad2 = Alphabet.indexOf(b);
    let tengah = (abjad1 + abjad2) / 2;
    let pabjad;

    if (tengah % 2 == 0.5) {
        pabjad = 2;
    } else {
        pabjad = 1;
    }

    return Alphabet.substring(tengah, tengah + pabjad);
}

const Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

console.log(letterMiddle("Q", "U"));  

/* 
- variabel abjad1 sebagai huruf a dalam string Alphabet
- deklarasikan variabel tengah sebagai hasil dari penjumlahan abjad1 dan abjad2 dibagi 2
- jika hasil dari modulo tengah dengan 2 sama dengan 0.5
- mengembalikan sebuah substring dari string Alphabet 
yang dimulai dari posisi tengah dan memiliki panjang sesuai dengan nilai dari pabjad
*/