const g = ' grams';
const cream = 'Cream: ';
const mix = 'Mix: ';
const blue = 'Blueberries: ';
const cinn = 'Cinnamon Chips: ';
const or = 'Orange Zest: ';
const ap = 'Apple Filling: ';

let largeSconeQuantity;
let smallSconeQuantity;

let heavyCreamLS;
let heavyCreamSS;
let mixLS;
let mixSS;
let additiveLS;
let additiveSS;

let totalCream;
let totalMix;
let totalAdd;

function recipe(sconeType) {
    largeSconeQuantity =  document.getElementById('largeScone').value;
    smallSconeQuantity = document.getElementById('smallScone').value;

    heavyCreamLS = [37];
    heavyCreamSS = [60];
    mixLS = [53];
    mixSS = [85];
    additiveLS = [22];
    additiveSS = [35];

    if (sconeType === 'blueberry') {

    totalCream = ((largeSconeQuantity * heavyCreamLS[0]) + (smallSconeQuantity * heavyCreamSS[0]));
    document.getElementById('cream').innerHTML = cream + totalCream + g;
    
    totalMix = ((largeSconeQuantity * mixLS[0]) + (smallSconeQuantity * mixSS[0]));
    document.getElementById('mix').innerHTML = mix + totalMix + g;

    totalAdd = ((largeSconeQuantity * additiveLS[0]) + (smallSconeQuantity * additiveSS[0]));
    document.getElementById('ingredient').innerHTML = blue + totalAdd + g;
    }
}