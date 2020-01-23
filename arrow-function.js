// FUNCTION EXPRESSION
const tampilNama = (nama) =>{
    return `Halo , ${nama}`;
}
console.log(tampilNama('Rizky Darma'));

// IMPLISIT RETURN 
const implisit = param => `return, ${param}`;
console.log(implisit('implisit'));

// Contoh, Menggunakan fungsi map & implisit return
let mahasiswa = ['Rizky Darma','M Abdul Nasir','Syarifah Dewi'];

let jumlahHuruf = mahasiswa.map((nama) => nama.length);
console.log(jumlahHuruf);

// Contoh, Mengembalikan nilai menjadi object menggunakan ({isi})
let potongHuruf = mahasiswa.sort().map(nama => ({
    nama: nama,
    jumlahHuruf: nama.length
}));
console.log(potongHuruf);