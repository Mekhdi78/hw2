// задание 1

let list = "putin zelenskiy biden trump"
let name = prompt('как вас зовут?').toLocaleLowerCase().trim()
if (name === "putin" || name === "zelenskiy" || name === "biden" || name === "trump") {
 console.log(
     "добро пожаловать " + name
 )
}else{
    "вас нет в списке "
}

//задание 2

let number = prompt('any number').trim()
if (number % 2 === 0){
    console.log(
        'even'
    );
} if (number % 2 === 1){
    console.log(
        "odd"
    );
}
    
