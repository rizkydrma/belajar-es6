// // DESTRUCTURING ARRAY
// const perkenalan = ['Halo','nama','saya','Diablo'];

// // SKIP VARIABLE DENGAN MENGKOSONGKAN
// const [salam,,subject,nama] = perkenalan;
// console.log(nama);

// // SWAP VARIABLE
// let a = 1;
// let b = 2;
// console.log(a);
// [a,b] = [b,a]
// console.log(a);

// // RETURN VALUE PADA FUNCTION
// coba = () =>{
//     return [1,2];
// }
// const [x,z] = coba();
// console.log(x,z)

// // MENGGUNAKAN REST PARAMETER, REST PARAMETER DI TANDAI DENGAN ...
// const [angka1,angka2, ...angkaLain] = [1,2,3,4,5,6,7];
// console.log(angka1);
// console.log(angkaLain);


// DESTRUCTURING OBJECT
// OBJECT LITERALS
const mahasiswa = {
    nama: 'Rizky Darma',
    nim: '0203171077'
}
const {nama,nim} = mahasiswa;
console.log(nama);

// ASSIGNMENT TANPA OBJECT
({judul,penyanyi} = { judul: 'We Are', penyanyi: 'One Ok Rock'});
console.log(`${penyanyi} : ${judul}`);


// ASSINGMENT KE VARIBALE BARU dengan : (titik dua)
const properti = {
    rumah : 'La vonta Keronya',
    mobil: 'Ferari'
}
const {rumah : r, mobil: m} = properti;
console.log(`${r} dan ${m}`);

// MEMBERIKAN DEFAULT VALUE
const topi = {
    warna : 'biru',
    size: 'L'
}
const {warna, size ,model = 'Biasa'} = topi;
console.log(warna+size+model)


// MENGAMBIL FIELD PADA OBJECK, SETELAH DIKIRIM SEBAGAI PARAMETER UNTUK FUNCTION
const mhs = {
    id: 12,
    nama: 'Razak',
    umur: '20'
}
function getIdMhs({id,nama}){
    return `${id} dan ${nama}`
}
console.log(getIdMhs(mhs));