let pep = document.getElementById(`pepperoni`);
let sau = document.getElementById(`sausage`);
let mus = document.getElementById(`mushrooms`);
let fries = document.getElementById(`fries`);
let buf = document.getElementById(`buffaloWings`);
let bbq = document.getElementById(`bbqWings`);
let cherry = document.getElementById(`cherryPizza`);
let mango = document.getElementById(`mangoPizza`);
let final = document.getElementById(`final`);
let finalSides = document.getElementById(`finalSides`);
let finalDesserts = document.getElementById(`finalDesserts`);
let dollars = 0;
let taxDollars = 0;
var costPep = 1.75;
var costSau = 1.50;
var costMus = 1.00;
var costFries = 2.00;
var costBuf = 6.00;
var costBbq = 6.00;
var costCherry = 1.50;
var costMango = 2.00;

function submitToppings(){
    if (pep.checked == true && sau.checked == true && mus.checked == true){
        final.innerHTML = "Pizza with Pepperoni, Sausage, and Mushrooms";
        dollars += costPep + costSau + costMus;
        taxDollars = dollars * 1.06;
        document.getElementById(`dollars`).innerHTML = "$" + dollars;
        document.getElementById(`plusdollars`).innerHTML = "$" + Math.round(taxDollars * 100)/100;
        return;
    } else if(pep.checked == true && sau.checked == true && mus.checked !== true) {
        final.innerHTML = "Pizza with Pepperoni and Sausage";
        dollars += costPep + costSau;
        taxDollars = dollars * 1.06;
        document.getElementById(`dollars`).innerHTML = "$" + dollars;
        document.getElementById(`plusdollars`).innerHTML = "$" + Math.round(taxDollars * 100)/100;
        return;
    } else if(pep.checked == true && sau.checked !== true && mus.checked == true) {
        final.innerHTML = "Pizza with Pepperoni and Mushrooms";
        dollars += costPep + costMus;
        taxDollars = dollars * 1.06;
        document.getElementById(`dollars`).innerHTML = "$" + dollars;
        document.getElementById(`plusdollars`).innerHTML = "$" + Math.round(taxDollars * 100)/100;
        return;
    } else if(pep.checked == true && sau.checked !== true && mus.checked !== true) {
        final.innerHTML = "Pizza with Pepperoni";
        dollars += costPep;
        taxDollars = dollars * 1.06;
        document.getElementById(`dollars`).innerHTML = "$" + dollars;
        document.getElementById(`plusdollars`).innerHTML = "$" + Math.round(taxDollars * 100)/100;
        return;
    } else if(pep.checked !== true && sau.checked == true && mus.checked == true) {
        final.innerHTML = "Pizza with Sausage and Mushrooms";
        dollars += costSau + costMus;
        taxDollars = dollars * 1.06;
        document.getElementById(`dollars`).innerHTML = "$" + dollars;
        document.getElementById(`plusdollars`).innerHTML = "$" + Math.round(taxDollars * 100)/100;
        return;
    } else if(pep.checked !== true && sau.checked == true && mus.checked !== true) {
        final.innerHTML = "Pizza with Sausage";
        dollars += costSau;
        taxDollars = dollars * 1.06;
        document.getElementById(`dollars`).innerHTML = "$" + dollars;
        document.getElementById(`plusdollars`).innerHTML = "$" + Math.round(taxDollars * 100)/100;
        return;
    } else if(pep.checked !== true && sau.checked !== true && mus.checked == true) {
        final.innerHTML = "Pizza with Mushrooms";
        dollars += costMus;
        taxDollars = dollars * 1.06;
        document.getElementById(`dollars`).innerHTML = "$" + dollars;
        document.getElementById(`plusdollars`).innerHTML = "$" + Math.round(taxDollars * 100)/100;
        return;
    }
}

function resetToppings(){
    pep.checked = false;
    sau.checked = false;
    mus.checked = false;
    fries.checked = false;
    buf.checked = false;
    bbq.checked = false;
    cherry.checked = false;
    mango.checked = false;
    final.innerHTML = " ";
}
