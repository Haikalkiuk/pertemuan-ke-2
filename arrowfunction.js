const getAge = (age,name) =>{
    const year = 2022;
    const age2 = year - age;
    return `${name} ${age2}`;

}

console.log (getAge(2002, "kiuk"));
console.log (getAge(1975, "kautsar"));
console.log (getAge(1958, "haikal"));