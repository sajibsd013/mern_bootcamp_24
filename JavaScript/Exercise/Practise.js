//map , filter, reduce
//var , let, const,
//for loop, for of, for in loop, forEach
const namesOfFriens=[

    {id:1, name:'Johir', deparment:'CSE'},
    {id:2, name:'Jakir', deparment:'BBA'},
    {id:2, name:'Jakir', deparment:'BBA'},
    {id:2, name:'Jakir', deparment:'BBA'},
    {id:2, name:'Jakir', deparment:'BBA'},
    {id:2, name:'Jakir', deparment:'BBA'},
]
const friends=namesOfFriens.filter(names=>names.deparment!='CSE');
console.log(friends)



