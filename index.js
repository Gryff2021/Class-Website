let name_1;
let name_2;
let combinaison;
let combinaison_rv;
let me_12;
let me_22;
let rng;
let results_int = 0;
const body = document.getElementsByTagName("body")[0].style;
let message = document.getElementById("message");
let dict = {
    "test": 90
}
console.log(dict["test"]);

const check = document.getElementById("check");
const results = document.getElementById("results");

function myLoop() {
    setTimeout(function() {
        if (results_int < rng) {
            myLoop();
            results_int += 1;
            results.textContent = results_int;
        }

    }, 10)
}

check.addEventListener("click", function() {
    body.backgroundColor = "white";
    name_1 = document.getElementById("name_1").value;
    name_2 = document.getElementById("name_2").value;
    me_12 = name_1.toLowerCase();
    me_22 = name_2.toLowerCase();
    combinaison = me_12 + me_22;
    combinaison_rv = me_22 + me_12;
    combinaison_rv = combinaison_rv.replaceAll(" ", "");
    combinaison = combinaison.replaceAll(" ", "");


    if (Object.keys(dict).includes(combinaison)) {
        results.textContent = dict[combinaison];
        rng = results.textContent;
    }
    if (Object.keys(dict).includes(combinaison_rv)) {
        results.textContent = dict[combinaison_rv];
        rng = results.textContent;
    }
    else {
        results.textContent = 0;
        results_int = 0;
        rng = 0;
        rng = Math.floor(Math.random() * (100 + 1));
        console.log(rng);
        myLoop();
        dict[combinaison] = rng;
        dict[combinaison_rv] = rng;
        console.log(combinaison);
        console.log(dict);
    }

    if (rng <= 9) {
        body.backgroundColor = "red";
        message.textContent = "Non, abandonnez 😑";
    }
    else if (rng <= 19) {
        body.backgroundColor = "#ec2020";
        message.textContent = "C'est pas une bonne idée 😐";
    }
    else if (rng <= 29) {
        body.backgroundColor = "#ef283c";
        message.textContent = "Bof 🤷‍♂️";
    }
    else if (rng <= 39) {
        body.backgroundColor = "#e84364";
        message.textContent = "Hum, à tenter 🫢";
    }
    else if (rng <= 49) {
        body.backgroundColor = "#ee2b86";
        message.textContent = "Ça peut marcher 😶";
    }
    else if (rng <= 59) {
        body.backgroundColor = "#c970a8";
        message.textContent = "Y a des chances 🙂";
    }
    else if (rng <= 69) {
        body.backgroundColor = "#b85895";
        message.textContent = "Autant essayer 😊";
    }
    else if (rng <= 79) {
        body.backgroundColor = "#c3599c";
        message.textContent = "Ce n'est plus qu'une question de temps 😀";
    }
    else if (rng <= 89) {
        body.backgroundColor = "#f060bb";
        message.textContent = "Cupidon est passé par là 💘";
    }
    else if (rng <= 99) {
        body.backgroundColor = "#E843AC";
        message.textContent = "L'amour fou 😍";
    }
    else if (rng == 100) {
        body.backgroundColor = "#f423a8";
        message.textContent = "À quand le mariage 👰";
    }
})