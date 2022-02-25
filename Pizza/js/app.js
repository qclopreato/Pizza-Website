let pep = document.getElementById(`pepperoni`);
let sau = document.getElementById(`sausage`);
let mus = document.getElementById(`mushrooms`);
let sml = document.getElementById(`small`);
let med = document.getElementById(`medium`);
let lrg = document.getElementById(`large`);
let final = document.getElementById(`final`);
let dollars = 0;
let taxDollars = 0;
const costPep = 1.75;
const costSau = 1.50;
const costMus = 1.00;
const costSml = 5.00;
const costMed = 6.50;
const costLrg = 7.00;

function confirmationFunction(){
    document.location.href = `confirmation.html`;
}

document.querySelectorAll(`.carousel`).forEach(carousel => {
    const items = carousel.querySelectorAll(`.carousel__item`);
    const buttonsHtml = Array.from(items, () => {
        return `<span class="carousel__button"></span>`;
    });

    carousel.insertAdjacentHTML("beforeend", `
        <div class="carousel__nav">
            ${ buttonsHtml.join("")}
        </div>
    `);
    
    const buttons = carousel.querySelectorAll(`.carousel__button`);

    buttons.forEach((button, i) => {
        button.addEventListener(`click`, () => {
            //un-select all the items
            items.forEach(item => item.classList.remove(`carousel__item--selected`));
            buttons.forEach(button => button.classList.remove(`carousel__button--selected`));

            items[i].classList.add(`carousel__item--selected`);
            button.classList.add(`carousel__button--selected`);
        });
    });

    //Select the first item on the pages
    items[0].classList.add(`carousel__item--selected`);
    buttons[0].classList.add(`carousel__button--selected`);
});

function submitPizza(){
var discount = document.getElementById(`codeSubmission`).value;
if (sml.checked == true){
    if (pep.checked == true && sau.checked == true && mus.checked == true){
        final.innerHTML = "Small pizza with pepperoni, sausage, and mushrooms";
        dollars += costPep + costSau + costMus + costSml;
        taxDollars = dollars * 1.06;
        document.getElementById(`dollars`).innerHTML = "$" + Math.round(dollars * 100)/100;
        document.getElementById(`plusdollars`).innerHTML = "$" + Math.round(taxDollars * 100)/100;
        return;
    }
    else if(pep.checked == true && sau.checked == true && mus.checked !== true) {
        final.innerHTML = "Small pizza with pepperoni and sausage";
        dollars += costPep + costSau + costSml;
        taxDollars = dollars * 1.06;
        document.getElementById(`dollars`).innerHTML = "$" + Math.round(dollars * 100)/100;
        document.getElementById(`plusdollars`).innerHTML = "$" + Math.round(taxDollars * 100)/100;
        return;
    } else if(pep.checked == true && sau.checked !== true && mus.checked == true) {
        final.innerHTML = "Small pizza with pepperoni and mushrooms";
        dollars += costPep + costMus + costSml;
        taxDollars = dollars * 1.06;
        document.getElementById(`dollars`).innerHTML = "$" + Math.round(dollars * 100)/100;
        document.getElementById(`plusdollars`).innerHTML = "$" + Math.round(taxDollars * 100)/100;
        return;
    } else if(pep.checked == true && sau.checked !== true && mus.checked !== true) {
        final.innerHTML = "Small pizza with pepperoni";
        if (discount == `PEP22`){
            dollars += (costPep + costSml) * 0.8;
            taxDollars = dollars * 1.06;
            document.getElementById(`dollars`).innerHTML = "$" + Math.round(dollars * 100)/100;
            document.getElementById(`plusdollars`).innerHTML = "$" + Math.round(taxDollars * 100)/100;
            return;
        } else if (discount !== `PEP22`){
            dollars += costPep + costSml;
            taxDollars = dollars * 1.06;
            document.getElementById(`dollars`).innerHTML = "$" + Math.round(dollars * 100)/100;
            document.getElementById(`plusdollars`).innerHTML = "$" + Math.round(taxDollars * 100)/100;
            return;
        }
    } else if(pep.checked !== true && sau.checked == true && mus.checked == true) {
        final.innerHTML = "Small pizza with sausage and mushrooms";
        dollars += costSau + costMus + costSml;
        taxDollars = dollars * 1.06;
        document.getElementById(`dollars`).innerHTML = "$" + Math.round(dollars * 100)/100;
        document.getElementById(`plusdollars`).innerHTML = "$" + Math.round(taxDollars * 100)/100;
        return;
    } else if(pep.checked !== true && sau.checked == true && mus.checked !== true) {
        final.innerHTML = "Small pizza with sausage";
        if (discount == `SAU22`){
            dollars += (costSau + costSml) * 0.8;
            taxDollars = dollars * 1.06;
            document.getElementById(`dollars`).innerHTML = "$" + Math.round(dollars * 100)/100;
            document.getElementById(`plusdollars`).innerHTML = "$" + Math.round(taxDollars * 100)/100;
        return;
        } else if(discount !== `SAU22`){
            dollars += costSau + costSml;
            taxDollars = dollars * 1.06;
            document.getElementById(`dollars`).innerHTML = "$" + Math.round(dollars * 100)/100;
            document.getElementById(`plusdollars`).innerHTML = "$" + Math.round(taxDollars * 100)/100;
            return;
        }
    } else if(pep.checked !== true && sau.checked !== true && mus.checked == true) {
        final.innerHTML = "Small pizza with mushrooms";
        dollars += costMus + costSml;
        taxDollars = dollars * 1.06;
        document.getElementById(`dollars`).innerHTML = "$" + Math.round(dollars * 100)/100;
        document.getElementById(`plusdollars`).innerHTML = "$" + Math.round(taxDollars * 100)/100;
        return;
    } else if(pep.checked !== true && sau.checked   !== true && mus.checked !== true) {
        final.innerHTML = "No Pizza Toppings Selected";
        dollars = 0;
        taxDollars = 0;
        document.getElementById(`dollars`).innerHTML = "$" + Math.round(dollars * 100)/100;
        document.getElementById(`plusdollars`).innerHTML = "$" + taxDollars;
        return;
    }
}else if (med.checked == true){
    if (pep.checked == true && sau.checked == true && mus.checked == true){
        final.innerHTML = "Medium pizza with pepperoni, sausage, and mushrooms";
        dollars += costPep + costSau + costMus + costMed;
        taxDollars = dollars * 1.06;
        document.getElementById(`dollars`).innerHTML = "$" + Math.round(dollars * 100)/100;
        document.getElementById(`plusdollars`).innerHTML = "$" + Math.round(taxDollars * 100)/100;
        return;
    }
    else if(pep.checked == true && sau.checked == true && mus.checked !== true) {
        final.innerHTML = "Medium pizza with pepperoni and sausage";
        dollars += costPep + costSau + costMed;
        taxDollars = dollars * 1.06;
        document.getElementById(`dollars`).innerHTML = "$" + Math.round(dollars * 100)/100;
        document.getElementById(`plusdollars`).innerHTML = "$" + Math.round(taxDollars * 100)/100;
        return;
    } else if(pep.checked == true && sau.checked !== true && mus.checked == true) {
        final.innerHTML = "Medium pizza with pepperoni and mushrooms";
        dollars += costPep + costMus + costMed;
        taxDollars = dollars * 1.06;
        document.getElementById(`dollars`).innerHTML = "$" + Math.round(dollars * 100)/100;
        document.getElementById(`plusdollars`).innerHTML = "$" + Math.round(taxDollars * 100)/100;
        return;
    } else if(pep.checked == true && sau.checked !== true && mus.checked !== true) {
        final.innerHTML = "Medium pizza with pepperoni";
        if (discount == `PEP22`){
            dollars += (costPep + costMed) * 0.8;
            taxDollars = dollars * 1.06;
            document.getElementById(`dollars`).innerHTML = "$" + Math.round(dollars * 100)/100;
            document.getElementById(`plusdollars`).innerHTML = "$" + Math.round(taxDollars * 100)/100;
            return;
        } else if(discount !== `PEP22`){
            dollars += costPep + costMed;
            taxDollars = dollars * 1.06;
            document.getElementById(`dollars`).innerHTML = "$" + Math.round(dollars * 100)/100;
            document.getElementById(`plusdollars`).innerHTML = "$" + Math.round(taxDollars * 100)/100;
            return;
        }
    } else if(pep.checked !== true && sau.checked == true && mus.checked == true) {
        final.innerHTML = "Medium pizza with sausage and mushrooms";
        dollars += costSau + costMus + costMed;
        taxDollars = dollars * 1.06;
        document.getElementById(`dollars`).innerHTML = "$" + Math.round(dollars * 100)/100;
        document.getElementById(`plusdollars`).innerHTML = "$" + Math.round(taxDollars * 100)/100;
        return;
    } else if(pep.checked !== true && sau.checked == true && mus.checked !== true) {
        final.innerHTML = "Medium pizza with sausage";
        if (discount == `SAU22`){
            dollars += (costSau + costMed) * 0.8;
            taxDollars = dollars * 1.06;
            document.getElementById(`dollars`).innerHTML = "$" + Math.round(dollars * 100)/100;
            document.getElementById(`plusdollars`).innerHTML = "$" + Math.round(taxDollars * 100)/100;
            return;
        } else if(discount !== `SAU22`){
            dollars += costSau + costMed;
            taxDollars = dollars * 1.06;
            document.getElementById(`dollars`).innerHTML = "$" + Math.round(dollars * 100)/100;
            document.getElementById(`plusdollars`).innerHTML = "$" + Math.round(taxDollars * 100)/100;
            return;
        }
    } else if(pep.checked !== true && sau.checked !== true && mus.checked == true) {
        final.innerHTML = "Medium pizza with mushrooms";
        dollars += costMus + costMed;
        taxDollars = dollars * 1.06;
        document.getElementById(`dollars`).innerHTML = "$" + Math.round(dollars * 100)/100;
        document.getElementById(`plusdollars`).innerHTML = "$" + Math.round(taxDollars * 100)/100;
        return;
    } else if(pep.checked !== true && sau.checked   !== true && mus.checked !== true) {
        final.innerHTML = "No Pizza Toppings Selected";
        dollars = 0;
        taxDollars = 0;
        document.getElementById(`dollars`).innerHTML = "$" + Math.round(dollars * 100)/100;
        document.getElementById(`plusdollars`).innerHTML = "$" + taxDollars;
        return;
    }
}else if (lrg.checked == true){
    if (pep.checked == true && sau.checked == true && mus.checked == true){
        final.innerHTML = "Large pizza with pepperoni, sausage, and mushrooms";
        dollars += costPep + costSau + costMus + costLrg;
        taxDollars = dollars * 1.06;
        document.getElementById(`dollars`).innerHTML = "$" + Math.round(dollars * 100)/100;
        document.getElementById(`plusdollars`).innerHTML = "$" + Math.round(taxDollars * 100)/100;
        return;
    }
    else if(pep.checked == true && sau.checked == true && mus.checked !== true) {
        final.innerHTML = "Large pizza with pepperoni and sausage";
        dollars += costPep + costSau + costLrg;
        taxDollars = dollars * 1.06;
        document.getElementById(`dollars`).innerHTML = "$" + Math.round(dollars * 100)/100;
        document.getElementById(`plusdollars`).innerHTML = "$" + Math.round(taxDollars * 100)/100;
        return;
    } else if(pep.checked == true && sau.checked !== true && mus.checked == true) {
        final.innerHTML = "Large pizza with pepperoni and mushrooms";
        dollars += costPep + costMus + costLrg;
        taxDollars = dollars * 1.06;
        document.getElementById(`dollars`).innerHTML = "$" + Math.round(dollars * 100)/100;
        document.getElementById(`plusdollars`).innerHTML = "$" + Math.round(taxDollars * 100)/100;
        return;
    } else if(pep.checked == true && sau.checked !== true && mus.checked !== true) {
        final.innerHTML = "Large pizza with pepperoni";
        if (discount == `PEP22`){
            dollars += (costPep + costLrg) * 0.8;
            taxDollars = dollars * 1.06;
            document.getElementById(`dollars`).innerHTML = "$" + Math.round(dollars * 100)/100;
            document.getElementById(`plusdollars`).innerHTML = "$" + Math.round(taxDollars * 100)/100;
            return;
        } else if(discount !== `PEP22`){
            dollars += costPep + costLrg;
            taxDollars = dollars * 1.06;
            document.getElementById(`dollars`).innerHTML = "$" + Math.round(dollars * 100)/100;
            document.getElementById(`plusdollars`).innerHTML = "$" + Math.round(taxDollars * 100)/100;
            return;
        }
    } else if(pep.checked !== true && sau.checked == true && mus.checked == true) {
        final.innerHTML = "Large pizza with sausage and mushrooms";
        dollars += costSau + costMus + costLrg;
        taxDollars = dollars * 1.06;
        document.getElementById(`dollars`).innerHTML = "$" + Math.round(dollars * 100)/100;
        document.getElementById(`plusdollars`).innerHTML = "$" + Math.round(taxDollars * 100)/100;
        return;
    } else if(pep.checked !== true && sau.checked == true && mus.checked !== true) {
        final.innerHTML = "Large pizza with sausage";
        if (discount == `SAU22`){
            dollars += (costSau + costLrg) * 0.8;
            taxDollars = dollars * 1.06;
            document.getElementById(`dollars`).innerHTML = "$" + Math.round(dollars * 100)/100;
            document.getElementById(`plusdollars`).innerHTML = "$" + Math.round(taxDollars * 100)/100;
            return;
        } else if(discount !== `SAU22`){
            dollars += costSau + costLrg;
            taxDollars = dollars * 1.06;
            document.getElementById(`dollars`).innerHTML = "$" + Math.round(dollars * 100)/100;
            document.getElementById(`plusdollars`).innerHTML = "$" + Math.round(taxDollars * 100)/100;
            return;
        }
    } else if(pep.checked !== true && sau.checked !== true && mus.checked == true) {
        final.innerHTML = "Large pizza with mushrooms";
        dollars += costMus + costLrg;
        taxDollars = dollars * 1.06;
        document.getElementById(`dollars`).innerHTML = "$" + Math.round(dollars * 100)/100;
        document.getElementById(`plusdollars`).innerHTML = "$" + Math.round(taxDollars * 100)/100;
        return;
    } else if(pep.checked !== true && sau.checked   !== true && mus.checked !== true) {
        final.innerHTML = "No Pizza Toppings Selected";
        dollars = 0;
        taxDollars = 0;
        document.getElementById(`dollars`).innerHTML = "$" + Math.round(dollars * 100)/100;
        document.getElementById(`plusdollars`).innerHTML = "$" + taxDollars;
        return;
    }
}
}

function myFunction(){
    document.getElementById(`submit`).disabled = true;
    submitPizza();
}

function resetToppings(){
    sml.checked = false;
    med.checked = false; 
    lrg.checked = false;
    pep.checked = false;
    sau.checked = false;
    mus.checked = false;
    final.innerHTML = ` `;
    dollars = 0;
    document.getElementById(`dollars`).innerHTML = `$` + dollars;
    taxDollars = dollars;
    document.getElementById(`plusdollars`).innerHTML = `$` + taxDollars;
    document.getElementById(`submit`).disabled = false;
}
