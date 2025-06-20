
//created variables
let age_user, name_usuario, message_user;

//array with message
menssage_usuario = ["¡Sigue aprendiendo y disfrutando del código!", "¡Prepárate para grandes oportunidades en el mundo de la programación!", "Error, Por favor, ingresa una edad válida en números.", "Esa edad no existe.", "Tienes una edad bastante avanzada, pero sigue aprendiendo."]

alert("**************************************\n **** SISTEMA DE MENSAJE **** \n **************************************")

//created variable
name_usuario = prompt("\nEnter from keyboard your name: ");
age_user = prompt("\nEnter from keyboard your age: ");

//Condition of the age
if(isNaN(age_user)){
    console.error(message_user[2]);
}else if(age_user >= 18 && age_user < 110){
    alert(`\nHola ${name_usuario}, eres mayor de edad ✅ ` + message_user[1]);
    if(age_user >= 80 && age_user < 110){
        alert(`\nHola ${name_usuario}, ${message_user[4]}`);
    }
}else if(age_user < 18 && age_user > 0){
    alert(`\nHola ${name_usuario}, eres menor de edad ${message_user[0]} 😔`);
}else{
    alert(`\nHola ${name_usuario}, ${message_user[3]} ❌`);
}
