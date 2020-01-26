// HTML FRAGMENTS

// CONTOH 1
const mahasiswa = {
    nama: 'Rizky Darma',
    umur: 20,
    nim: '0203171077',
    email: 'rizky.darmarazak@gmail.com'
};

const el = `
    <div class="mhs">
        <h2>${mahasiswa.nama}</h2>
        <span class="nrp">${mahasiswa.nim}</span>
    </div>
`;

// CONTOH 2
const mhs = [
    {
        nama: 'Rizky Darma',
        umur: 20,
        nim: '0203171077',
        email: 'rizky.darmarazak@gmail.com'
    },
    {
        nama: 'Razak Darma',
        umur: 20,
        nim: '0203171077',
        email: 'rizky.darmarazak@gmail.com'
    },
    {
        nama: 'Rizky Soleh',
        umur: 20,
        nim: '0203171077',
        email: 'rizky.darmarazak@gmail.com'
    }
]

const elements = `
    <div class="mhs">
        ${mhs.map(data => `<ul class="">
            <li>${data.nama}</li>
            <li>${data.nim}</li>
            <li>${data.umur}</li>
            <li>${data.email}</li>
        </ul>`).join('')}
    </div>
`;

// CONTOH 3
const lagu = {
    judul: 'We Are',
    penyanyi: 'One OK Rock',
    feat: 'Avril Lavigne'
}

const elLagu = `
    <div class="lagu">
        <ul>
            <li>${lagu.judul}</li>
            <li>${lagu.penyanyi} ${lagu.feat ? `(feat. ${lagu.feat})` : ``}</li>
        </ul>
    </div>
`;

// CONTOH 4
// HTML FRAGMENTS BERSARANG
const siswa = {
    nama : 'Rizky Darma',
    kelas: 12,
    mataPelajaran: [
        'WEB',
        'APSIO',
        'SIM',
        'B.Indonesia'
    ]
};

function cetakMataPelajaran(mataPelajaran){
    return `
        <ol>
            ${mataPelajaran.map(mp => `<li>${mp}</li>`).join('')}
        </ol>
    `
}

const elSiswa = `
    <div class="siswa">
        <h2>${siswa.nama}</h2>
        <span class="kelas">Kelas : ${siswa.kelas}</span>
        <h4>Mata Pelajaran</h4>
        ${cetakMataPelajaran(siswa.mataPelajaran)}
    </div>
`
document.body.innerHTML = elSiswa;