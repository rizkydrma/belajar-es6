// HIGH ORDER FUNCTION

// Function yang memiliki function di dalamnya = HIGH ORDER FUNCTION
// Function yang menjadi parameter di sebut CALLBACK

cetakTugas = (matakuliah, selesai) =>{
    console.log(`Mulai mengerjakan tugas ${matakuliah}..`);
    selesai();
}
selesai =()=>{
    console.log('Selesai Mengerjakan Tugas!');
}

cetakTugas('Web II',selesai);

// CONTOH HIGH ORDER FUNCTION
// .proto.map()
// .proto.filter()
// .proto.reduce()

// FILTER MENGHASILKAN ARRAY BARU
// MAP MENGHASILKAN ARRAY BARU DAN MENGHASILKAN HAL BARU
// REDUCE MENYATUKAN ARRAY MENJADI ARRAY BARU

const angka = [1,2,3,4,5,6,7,1,3,4,5,10];
// mencari angka >= 3
// ==========DENGAN METODE Looping===============
// const newAngka = [];
// for(let i = 0; i< angka.length; i++){
//     if(angka[i] >= 3){
//         newAngka.push(angka[i]);
//     }
// }

// =========DENGAN FILTER ===============
const newAngka = angka.filter((a) => (a>=3));
console.log(newAngka);

// ========= MAP =============
const angkaX2 = angka.map(data => data*2);
console.log(angkaX2);

range = (awal,akhir) =>{
    let j=0 , result = [];
    for(let i = awal; i<=akhir; i++){
        result[j] = i;
        j++;
    }
    return result;
}

// REDUCE 2 PARAMATER 
// PADA SAAT RETURN REDUCE MEMILIKI NILAI AWAL DEFAULT 0
// EX:     return result.reduce((acc,cur)=> acc+cur,nilai awal);

sum = (result) =>{
    return result.reduce((acc,cur)=> acc+cur);
}
console.log(sum(range(1,10)));

// METHOD CHAINING
// MENGGABUNGKAN FUNGSI FUNGSI HIGH ORDER FUNCTION
// PADA SAA SATU KALI EKSEKUSI

const hasil = angka.filter(data => data >2 )
    .map(data => data * 2)
    .reduce((acc,cur) => acc+cur, 0);
console.log(hasil);