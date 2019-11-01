var ab = 0
var aww = 0
var arw = 0
var av = 0
var bb = 0

function Bier() {
	ab = prompt("voer hier het aantal bier in");
		document.getElementById("ab").innerHTML = ab + ' biertjes';
}

function Witte_Wijn() {
	aww = prompt("voer hier het aantal Witte wijn in");
		document.getElementById("aww").innerHTML = aww + ' witte wijn';
}
function Rode_Wijn() {
	arw = prompt("voer hier het aantal Rode wijn in");
		document.getElementById("arw").innerHTML = arw + ' rode wijn';
}

function Vodka() {
	av = prompt("voer hier het aantal Vodka in");
		document.getElementById("av").innerHTML = av + ' vodka';
}

function Bitterballen() {
	bb = prompt("Hoeveel porties bitterballen zou je willen?");
		document.getElementById("bb").innerHTML = bb + ' bitterballen';
}

function bestellen() {
	var prijs = Number(ab) * 2.30 + Number(aww) * 2.70 + Number(arw) * 2.70 + Number(av) * 3.40;
	if (isNaN(prijs)) {
		alert('Voer aub een geldig getal in.')
	}
	document.getElementById("prijs").innerHTML = 'uw totaal prijs is: €' + prijs + ',-';
}
