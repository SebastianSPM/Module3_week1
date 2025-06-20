
//created variables
let edad, nombre, mensaje, result, number_1, number_2;

//array with message
mensaje = ["¡Sigue aprendiendo y disfrutando del código!", "¡Prepárate para grandes oportunidades en el mundo de la programación!", "Error, Por favor, ingresa una edad válida en números.", "Esa edad no existe.", "Tienes una edad bastante avanzada, pero sigue aprendiendo."]

alert("✖️✖️✖️✖️✖️✖️✖️✖️✖️✖️✖️✖️✖️✖️✖️✖️✖️✖️✖️✖️✖️\n✖️✖️✖️✖️ SISTEMA DE MENSAJE ✖️✖️✖️✖️\n✖️✖️✖️✖️✖️✖️✖️✖️✖️✖️✖️✖️✖️✖️✖️✖️✖️✖️✖️✖️✖️")

//created variable
nombre = prompt("\nEnter from keyboard your name: ")
edad = prompt("\nEnter from keyboard your age: ")
number_1 = parseInt(prompt("\nEnter from keyboard your number one:"))
number_2 = parseInt(prompt("\nEnter from keyboard your number two:"))
result = number_1 + number_2

if(isNaN(edad)){
    console.error(mensaje[2])
}else if(edad >= 18 && edad < 110){
    alert(`\nHola ${nombre}, eres mayor de edad ✅ ` + mensaje[1])
    if(edad >= 80 && edad < 110){
        alert(`\nHola ${nombre}, ${mensaje[4]}`)
    }
}else if(edad < 18 && edad > 0){
    alert(`\nHola ${nombre}, eres menor de edad ${mensaje[0]} 😔`)
}else{
    alert(`\nHola ${nombre}, ${mensaje[3]} ❌`)
}
