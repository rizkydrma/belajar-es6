// SPREAD OPERATOR

// MENGGABUNGKAN 2 ARRAY
const mahasiswa = ['darma','rizky','razak','abi'];
const dosen = ['velvet','laphicet'];
console.log([...mahasiswa,...dosen])

let people = [];
for(let i=0; i<mahasiswa.length; i++){
    if(mahasiswa[i]){
        people.push(mahasiswa[i]);
    }
    if(dosen[i]){
        people.push(dosen[i]);
    }
}
console.log(people);

// MENGCOPY ARRAY KE VARIABEL BARU
const newMahasiswa = [...mahasiswa];
newMahasiswa.push('Rokuro')
console.log(mahasiswa);
console.log(newMahasiswa);



// LATIHAN
const nama = document.querySelector('.nama');
const pecahHuruf = [...nama.textContent]
                    .map(el => `<span>${el}</span>`)
                    .join(' ');

nama.innerHTML = pecahHuruf;



const name = [{
    nama: 'abc',
    umur: 12
}]

name.push({
    size: 12
})
console.log(name)