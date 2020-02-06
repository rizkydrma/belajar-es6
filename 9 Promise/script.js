// PROMISE
// OBJECT yabg mempresntasikan keberhasil / kegagalan event yang asynchronous
// janji di javascript di sebut states
// states memiliki keadaan (fulfilled/rejected/pending)
// untuk menjalankan states menggunakan callback
// resolve / rejected /finally

// PROMISE DI GUNAKAN UNTUK REQUEST KE API

// Contoh 1
let ditepati = false;
const janji1 = new Promise((resolve, reject) => {
  if(ditepati){
    resolve('Janji di tepati')
  }else{
    reject('Janji di Ingkari')
  }
})

janji1
  .then(response => console.log('OK :' + response))
  .catch(error => console.log('Not Ok :' + error))


let berjanji = true
const janji2 = new Promise((resolve, reject) => {
  if(berjanji){
    setTimeout(() => {
      resolve('Ditepati setelah beberapa waktu')
    }, 2000)
  }else{
    setTimeout(() => {
      reject('Tidak di tepati setelah beberapa waktu')
    }, 2000)
  }
})

console.log('mulai')
console.log(janji2.then(() => console.log(janji2)))

// method finally dijalankan ketika promise sudah tidak pending , finnaly dijalankan terlebih dahulu dibanding then/catch
janji2
  .finally(() => console.log('Selesai menunggu'))
  .then(response => console.log('OK :' + response))
  .catch(error => console.log('Not Ok :' + error))
console.log('selesai')

// Promise All

const film = new Promise( resolve => {
  setTimeout(() => {
    resolve([{
      judul: 'Dilan',
      actor: ['iqbal','milea'],
      penulis: 'pidi baik'
    }])
  },1000)
})

const cuaca = new Promise( resolve => {
  setTimeout(() => {
    resolve([{
      kota: 'bandung',
      suhu: '26c'
    }])
  },500)
})

// film.then(response => console.log(response))
// cuaca.then(response => console.log(response))

// dengan promise all kita dapat menjalankan beberapa promise sekaligus
Promise.all([film,cuaca])
  // .then(response => console.log(response))
  .then(response => {
    const [film,cuaca] = response
    console.log(film)
    console.log(cuaca)
  })