// HIGH ORDER FUNCTION

// Function yang memiliki function di dalamnya = HIGH ORDER FUNCTION
// Function yang menjadi parameter di sebut CALLBACK

cetakTugas = (matakuliah, selesai) =>{
    console.log(`Mulai mengerjakan tugas ${matakuliah}..`);
    selesai();
}
selesai = () =>{
    alert('Selesai Mengerjakan Tugas!');
}

cetakTugas('Web II',cetakTugas('VB',selesai));