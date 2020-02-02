var drinkAmmount;
var orderList = [""];

var totalPrize = 0;

const formatter = new Intl.NumberFormat('it-NL', {
    style: 'currency',
    currency: 'EUR'
  })


function addDrink(Name, prize){

        drinkAmmount = prompt("Hoeveel " + Name + " wilt U toevoegen aan uw bestelling?");
        drinkAmmount = parseFloat(drinkAmmount);
        
        if(drinkAmmount != null && !isNaN(drinkAmmount)){
            prize = prize * drinkAmmount;
            orderList.push("Naam: " + Name + "<br> Hoeveelheid: " + drinkAmmount + "<br> Prijs: " + formatter.format(prize) +"<br><br>");//€
            totalPrize += prize;
        
            updateOrder();
        
            console.log("NEW ORDER -> naam: " + Name + " Hoeveelheid: " + drinkAmmount);
        }else{
            alert("ERROR: uw invoer was incorrect!\n Voer een cijfer in.")
        }
}

function addPortion(Name, prize, portionSize){
    portionAmmount = prompt("Hoeveel " + Name + " wilt U toevoegen aan uw bestelling?");
    portionAmmount = parseFloat(portionAmmount);
    if(portionAmmount != null && !isNaN(portionAmmount)){
        prize = prize * portionAmmount;
        orderList.push("Naam: " + Name + "<br> Hoeveelheid: " + portionAmmount + "porties, " + "(" + (portionAmmount * portionSize) + " bitter ballen)" + "<br> Prijs: " + formatter.format(prize) +"<br><br>");//€
        totalPrize += prize;
    
        updateOrder();
    
        console.log("NEW ORDER -> naam: " + Name + " Hoeveelheid: " + portionAmmount);
    }else{
        alert("ERROR: uw invoer was incorrect!\n Voer een cijfer in.")
    }
}

function payOrder(){
    var pay = prompt("Wilt U betalen met pin of contant?\n \nTyp 1 voor contant\n\nTyp 2 voor Pin\n\nTyp 3 om te annuleren");
    if(pay == 1){
        alert("De prijs die betaald moet worden is: " + formatter.format(totalPrize))
        pay = prompt("Hoveel euro heeft U ontvangen?");
        pay = parseFloat(pay);
        if(pay != NaN && pay >= totalPrize){
            alert("De klant krijgt nog " + formatter.format(totalPrize - pay) + " terug")
            alert("De bestelling is betaald!");
            totalPrize = 0;
            orderList = [""];
            updateOrder();
        }else if(pay <= totalPrize){
            alert("ERROR: " + pay + "is lager dan de totale prijs. Totaale prijs: " + formatter.format(totalPrize));
            payOrder();
        }else{
            alert("ERROR: " + pay + "is geen nummer");
            payOrder();
        }
    }else if(pay == 2){
        alert("Voer hier uw pin in");
        
    }else if(pay ==3){
        
    }else{
        alert("ERROR: typ 1 of 2 om te kiezen");
        payOrder();
    }
}


function updateOrder(){
    document.getElementById("ORDER_LIST").innerHTML = "";
    document.getElementById("TOTAL_PRIZE").innerHTML = "Totaal: " + formatter.format(totalPrize);

    for(var i = 0; i <= (orderList.length - 1); i++){
        document.getElementById("ORDER_LIST").innerHTML += orderList[i];
    }
}