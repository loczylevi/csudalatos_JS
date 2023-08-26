

// adatbekérés JS-ben a felhasználotól

// egyszerű modon

let nev = window.prompt("Befizetted az internet számlát? (igen/nem)");  // végülis input() függvény csak JS-ben

console.log(nev);


// nehezebb modon

let username;

let szoveg = "Üdvözöljük "

let vege =  "!"

document.getElementById("gombocska").onclick = function(){

    username = document.getElementById("szöveg_doboz").value;
    console.log(username);
    document.getElementById("kijelzo").innerHTML = szoveg + username + vege;
    
}

