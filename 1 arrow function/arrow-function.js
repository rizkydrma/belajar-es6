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

// Constructor Function
// tidak dapat di ubah menjadi arrow function tetapi method
// didalam constructor function bisa di ubah

const Mahasiswa = function (nama = "Nama kosong",umur = "Nim kosong") {
    this.nama = nama;
    this.umur = umur;
    // ARROW FUNCTION
    this.cetak = () => {
        return `Nama : ${this.nama}, NIM : ${this.umur}`;
    }
    
    // let tambahUmur = setInterval(()=>{
    //     this.umur++;
    //     console.log(this.cetak());
    //     (this.umur == 60) ? clearInterval(tambahUmur) : null ;
    // },500);
    

    // FUNCTION DECLARATION BIASA KENA HOISTING JADI THIS MENCARI DI GLOBAL SCOPE 
    // SEDANGKAN ARROW FUNCTION MENCARI DI LEXICAL SCOPE
}
const mhs1 = new Mahasiswa('Rizky Darma','20');
console.log(mhs1.cetak());




// CONTOH DENGAN OBJEK
const circle = document.querySelector('.circle');
circle.addEventListener('click', function(){

    let size = 'size' , caption  = "caption";
    if(this.classList.contains(size)){
        [size,caption] = [caption,size];
    }

    this.classList.toggle(size);
    setTimeout(()=>{
        this.classList.toggle(caption);
    },600)
})