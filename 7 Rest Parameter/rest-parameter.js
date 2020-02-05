// REST PARAMETER

function myFunc(...rest){
    return rest
}
console.log(myFunc(1,2,3,4,5,6,7,8));

totalHitung = (...angka) =>{
    return angka.reduce((acc,cur) => acc+cur,0)
}

console.log(totalHitung(1,2,3,4,5))



// ARRAY
const kelompok = [
    ['Rizky','Darma','Razak','Velvet','Laphicet'],
    ['Eizen','Rokuro','Razak','Velvet','Laphicet'],
    ['Magilo','Eleanor','Razak','Velvet','Laphicet']
];

console.log(kelompok);

function organisasi(people){
    const [ketua,wakil,...anggota] = people
    return {
        ketua: ketua,
        wakil: wakil,
        anggota: [anggota]
    }
}
const semuaKelompok = [];

for(let i=0; i<3; i++){
    semuaKelompok.push(organisasi(kelompok[i]))
}
console.log(semuaKelompok)

// OBJECT

const team = {
    pm: 'Rizky',
    frontend: 'darma',
    backend: 'razak',
    ui: 'angga'
}

const {ui,...myTeam} = team

console.log(ui)





// FILTERING
function filter(...values){
    return values.map(data => typeof data)
}

console.log(filter('number',1,2,3,false,'darma'));

function filterBy(type,...values){
    return values.filter(data => typeof data === type)
}

console.log(filterBy('string',1,2,3,false,'darma'));
