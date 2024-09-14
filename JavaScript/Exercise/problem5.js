//Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then find out  The Remaining People To An Array Of Names. Print The Final Result.

const persons=[

    {name:'Nusrat', age:'22', gender:'Female'},
    {name:'Sujoy', age:'22', gender:'Male'},
    {name:'Srabonti', age:'22', gender:'Female'},
    {name:'Turjo', age:'22', gender:'Male'}

]
function filterFemale(){
const filterdFemale=persons.filter(person=>person.gender!=='Female');
const remainingPeople=filterdFemale.map(person=>person.name);
return remainingPeople;
}
console.log(filterFemale())