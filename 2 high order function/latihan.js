// AMBIL SEMUA ELEMEN VIDEO
const videos = Array.from(document.querySelectorAll('li[data-duration]'));

// PILIH HANYA JAVASCRIPT
let javascript = videos.filter(video => video.textContent.includes('Javascript'))

// AMBIL DURASI MASING MASING VIDEO, attribut data-duration dengan dataset.duration
    .map(data => data.dataset.duration)
// UBAH DURASI MENJADI FLOAT, MENIT MENJADI DETIK
    .map(data =>{
        const parts = data.split(':').map(part => parseFloat(part));
        console.log(parts);
        return (parts[0] * 60) + parts[1];
    })
// JUMLAHKAN SEMUA DETIK
    .reduce((acc,cur) => acc + cur,0);

// UBAH FORMAT JADI JAM MENIT DETIK
    const jam = Math.floor(javascript / 3600);
    javascript = javascript - jam * 3600;
    const menit = Math.floor(javascript / 60);
    const detik = javascript - menit * 60;
// SIMPAN DI DOM

// Jumlah Video
    const jmlVideo = videos.filter(video => video.textContent.includes('Javascript')).length;
    const durasi = document.querySelector('.total-durasi');
    durasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;
    const pVideo =document.querySelector('.jumlah-video');
    pVideo.textContent = `${jmlVideo} Video`

console.log(jmlVideo);