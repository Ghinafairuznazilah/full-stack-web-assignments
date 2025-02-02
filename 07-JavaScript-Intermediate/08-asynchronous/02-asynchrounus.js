// Kamu diminta untuk membuat sebuah fungsi yang akan melakukan pengecekan apakah seseorang sudah memasuki usia dewasa atau tidak, berikut adalah deskripsi fungsi tersebut:

// name => isR18Plus
// parameter
// age [Number] => usia user dalam satuan tahun
// return value => Promise
// mengembalikan "anda sudah dewasa" menggunakan resolve apabila age user sudah melebihi 18 tahun
// mengembalikan "anda masih dibawah umur" menggunakan reject apabila age user sudah kurang dari 18 tahun
// clue
// gunakan Promise
// resolve dapat kita gunakan untuk mengembalikan hasil yang benar
// reject dapat kita gunakan untuk mengembalikan hasil yang salah
// Error dapat kita gunakan untuk mengembalikan nilai berupa reject

const isR18Plus = (age) => {
    const tmp = age > 18;
    return new Promise((resolve, reject) => {
        if(tmp){
            resolve("Anda sudah dewasa");
        } else{
            reject("anda masih dibawah umur");
        }
    })
}

const printR18Plus = async () => {
    const underAge = await isR18Plus(10).then(tmp => tmp).catch(tmp => tmp);
    const properAge = await isR18Plus(19).then(tmp => tmp).catch(tmp => tmp);

    console.log(underAge);
    console.log(properAge);
}

printR18Plus();