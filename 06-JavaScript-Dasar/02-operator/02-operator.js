/// Soal - 01
/// Dibawah ini akan ditampilkan daftar pengeluaran bulan ini beserta gaji yang akan diterima, tugas-mu adalah untuk menghitung gaji yang tersisa

/// Pegeluaran
/// gundam = 750000
/// makan = 2000000
/// kost = 1000000
/// subscription = 250000

/// Gaji
/// gajiPokok = 5000000
/// gajiBonus = 10% dari gajiPokok
/// gajiLembur = 5% dari gajiPokok

//pengeluaran
let gundam = 750000
let makan = 2000000
let kost = 1000000
let subscription = 250000
//gaji
const gajiPokok = 5000000
const gajiBonus = (gajiPokok*0.1)
const gajiLembur = (gajiPokok*0.05)
const gajiTotal = (gajiPokok + gajiBonus + gajiLembur);
const pengeluaran = (gundam + makan + kost + subscription)

/// Sisa Gaji
const sisaGaji = (gajiTotal - pengeluaran);
console.log(sisaGaji) 


/// Soal - 02
/// Gunakan operator yang tepat untuk mengetahui apakah 2 variable dibawah ini memiliki nilai yang sama (tipe data tidak termasuk)
const oneInString = "1";
const oneInNumber = 1;
const isSame = oneInString == oneInNumber;
console.log(isSame);


/// Soal - 03
/// Gunakan operator yang tepat untuk mengetahui apakah studentA memiliki nilai yang lebih tinggi atau sama dengan studentB
const studentA = 75;
const studentB = 80;
const isHigher= studentA>=studentB;
console.log(isHigher);



/// Soal - 04
/// Gunakan operator yang tepat untuk membedakan 2 buah variable yang terdapat pada soal-02 berdasarkan value-nya (tipe data juga dihitung)
const final = oneInString === oneInNumber;
console.log(final);
