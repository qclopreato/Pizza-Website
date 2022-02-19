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
    } else if(pep.checked !== true && sau.checked   !== true && mus.checked !== true) {
        final.innerHTML = "No Pizza Toppings Selected";
        dollars = 0;
        taxDollars = 0;
        document.getElementById(`dollars`).innerHTML = "$" + dollars;
        document.getElementById(`plusdollars`).innerHTML = "$" + taxDollars;
        return;
    }
}

function submitSides(){
    if(fries.checked == true && buf.checked == true && bbq.checked == true){
        finalSides.innerHTML = "French Fries, Buffalo Wings, and BBQ Wings";
        dollars += costFries + costBuf + costBbq;
        taxDollars = dollars * 1.06;
        document.getElementById(`dollars`).innerHTML = `$` + dollars;
        document.getElementById(`plusdollars`).innerHTML = `$` + Math.round(taxDollars * 100)/100;
        return;
    } else if(fries.checked == true && buf.checked == true && bbq.checked !== true){
        finalSides.innerHTML = "French Fries and Buffalo Wings";
        dollars += costFries + costBuf;
        taxDollars = dollars * 1.06;
        document.getElementById(`dollars`).innerHTML = `$` + dollars;
        document.getElementById(`plusdollars`).innerHTML = `$` + Math.round(taxDollars * 100)/100;
        return;
    } else if(fries.checked == true && buf.checked !== true && bbq.checked !== true){
        finalSides.innerHTML = "French Fries";
        dollars += costFries;
        taxDollars = dollars * 1.06;
        document.getElementById(`dollars`).innerHTML = `$` + dollars;
        document.getElementById(`plusdollars`).innerHTML = `$` + Math.round(taxDollars * 100)/100;
        return;
    } else if(fries.checked !== true && buf.checked == true && bbq.checked !== true){
        finalSides.innerHTML = "Buffalo Wings";
        dollars += costBuf;
        taxDollars = dollars * 1.06;
        document.getElementById(`dollars`).innerHTML = `$` + dollars;
        document.getElementById(`plusdollars`).innerHTML = `$` + Math.round(taxDollars * 100)/100;
        return;
    } else if(fries.checked !== true && buf.checked !== true && bbq.checked == true){
        finalSides.innerHTML = "BBQ Wings";
        dollars += costBbq;
        taxDollars = dollars * 1.06;
        document.getElementById(`dollars`).innerHTML = `$` + dollars;
        document.getElementById(`plusdollars`).innerHTML = `$` + Math.round(taxDollars * 100)/100;
        return;
    } else if(fries.checked !== true && buf.checked == true && bbq.checked == true){
        finalSides.innerHTML = "Buffalo Wings and BBQ Wings";
        dollars += costBuf + costBbq;
        taxDollars = dollars * 1.06;
        document.getElementById(`dollars`).innerHTML = `$` + dollars;
        document.getElementById(`plusdollars`).innerHTML = `$` + Math.round(taxDollars * 100)/100;
        return;
    } else if(fries.checked == true && buf.checked !== true && bbq.checked == true){
        finalSides.innerHTML = "French Fries and BBQ Wings";
        dollars += costFries + costBbq;
        taxDollars = dollars * 1.06;
        document.getElementById(`dollars`).innerHTML = `$` + dollars;
        document.getElementById(`plusdollars`).innerHTML = `$` + Math.round(taxDollars * 100)/100;
        return;
    } else if(fries.checked !== true && buf.checked !== true && bbq.checked !== true){
        finalSides.innerHTML = "No Sides Selected";
        dollars = 0;
        taxDollars = 0;
        document.getElementById(`dollars`).innerHTML = `$` + dollars;
        document.getElementById(`plusdollars`).innerHTML = `$` + taxDollars;
        return;
    }
}

function submitDesserts(){
    if(cherry.checked == true && mango.checked == true){
        finalDesserts.innerHTML = "Dessert Pizza with Cherry and Mango";
        dollars += costCherry + costMango;
        taxDollars = dollars * 1.06;
        document.getElementById(`dollars`).innerHTML = `$` + dollars;
        document.getElementById(`plusdollars`).innerHTML = `$` + Math.round(taxDollars * 100)/100;
        return;
    } else if(cherry.checked == true && mango.checked !== true){
        finalDesserts.innerHTML = "Dessert Pizza with Cherry";
        dollars += costCherry;
        taxDollars = dollars * 1.06;
        document.getElementById(`dollars`).innerHTML = `$` + dollars;
        document.getElementById(`plusdollars`).innerHTML = `$` + Math.round(taxDollars * 100)/100;
        return;
    } else if(cherry.checked !== true && mango.checked == true){
        finalDesserts.innerHTML = "Dessert Pizza with Mango";
        dollars += costMango;
        taxDollars = dollars * 1.06;
        document.getElementById(`dollars`).innerHTML = `$` + dollars;
        document.getElementById(`plusdollars`).innerHTML = `$` + Math.round(taxDollars * 100)/100;
        return;
    } else if(cherry.checked !== true && mango.checked !== true){
        finalDesserts.innerHTML = "No Desserts Selected";
        dollars += 0;
        taxDollars = 0;
        document.getElementById(`dollars`).innerHTML = `$` + dollars;
        document.getElementById(`plusdollars`).innerHTML = `$` + taxDollars;
        return;
    }
}

function myFunction(){
    submitToppings();
    submitSides();
    submitDesserts();
    return;
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
    final.innerHTML = ` `;
    finalSides.innerHTML = ` `;
    finalDesserts.innerHTML = ` `;
    dollars = 0;
    document.getElementById(`dollars`).innerHTML = `$` + dollars;
    taxDollars = dollars;
    document.getElementById(`plusdollars`).innerHTML = `$` + taxDollars;
}
