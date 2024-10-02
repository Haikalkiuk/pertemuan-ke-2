const animals = [
    "sapi","monyet","kambing","kuda"
];
console.log (animals[0], animals[2])

for (let i=0; i< animals.length; i++){
     console.log(`List hewan ${animals[i]}`)
}

for( const hewan of animals) {
    console.log(`hewan ${hewan}`);
}