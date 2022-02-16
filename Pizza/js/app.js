var pep = document.getElementById(`pepperoni`);
var sau = document.getElementById(`sausage`);
var mus = document.getElementById(`mushrooms`);
var final = document.getElementById(`final`);

function submitToppings(){
    if (pep.checked == true && sau.checked == true && mus.checked == true){
        final.innerHTML = "Pizza with Pepperoni, Sausage, and Mushrooms";
    } else if(pep.checked == true && sau.checked == true && mus.checked !== true) {
        final.innerHTML = "Pizza with Pepperoni and Sausage";
    } else if(pep.checked == true && sau.checked !== true && mus.checked == true) {
        final.innerHTML = "Pizza with Pepperoni and Mushrooms";
    } else if(pep.checked == true && sau.checked !== true && mus.checked !== true) {
        final.innerHTML = "Pizza with Pepperoni";
    } else if(pep.checked !== true && sau.checked == true && mus.checked == true) {
        final.innerHTML = "Pizza with Sausage and Mushrooms";
    } else if(pep.checked !== true && sau.checked == true && mus.checked !== true) {
        final.innerHTML = "Pizza with Sausage";
    } else if(pep.checked !== true && sau.checked !== true && mus.checked == true) {
        final.innerHTML = "Pizza with Mushrooms";
    }
}

function resetToppings(){
    pep.checked = false;
    sau.checked = false;
    mus.checked = false;
    final.innerHTML = "Blank";
}
