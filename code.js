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

    heavyCreamLS = [37, 37, 39, 35];
    heavyCreamSS = [60, 30, 31, 0];
    mixLS = [53, 58, 67, 50];
    mixSS = [85, 46, 54, 0];
    additiveLS = [22, 17, 7, 25];
    additiveSS = [35, 14, 5, 0];

    if (sconeType === 'blueberry') {

    totalCream = ((largeSconeQuantity * heavyCreamLS[0]) + (smallSconeQuantity * heavyCreamSS[0]));
    document.getElementById('cream').innerHTML = cream + totalCream + g;
    
    totalMix = ((largeSconeQuantity * mixLS[0]) + (smallSconeQuantity * mixSS[0]));
    document.getElementById('mix').innerHTML = mix + totalMix + g;

    totalAdd = ((largeSconeQuantity * additiveLS[0]) + (smallSconeQuantity * additiveSS[0]));
    document.getElementById('ingredient').innerHTML = blue + totalAdd + g;

    } else if (sconeType === 'cinnamon'){
    
    totalCream = ((largeSconeQuantity * heavyCreamLS[1]) + (smallSconeQuantity * heavyCreamSS[1]));
    document.getElementById('cream').innerHTML = cream + totalCream + g;
    
    totalMix = ((largeSconeQuantity * mixLS[1]) + (smallSconeQuantity * mixSS[1]));
    document.getElementById('mix').innerHTML = mix + totalMix + g;

    totalAdd = ((largeSconeQuantity * additiveLS[1]) + (smallSconeQuantity * additiveSS[1]));
    document.getElementById('ingredient').innerHTML = cinn + totalAdd + g;

    } else if (sconeType === 'orange'){
    
        totalCream = ((largeSconeQuantity * heavyCreamLS[2]) + (smallSconeQuantity * heavyCreamSS[2]));
        document.getElementById('cream').innerHTML = cream + totalCream + g;
        
        totalMix = ((largeSconeQuantity * mixLS[2]) + (smallSconeQuantity * mixSS[2]));
        document.getElementById('mix').innerHTML = mix + totalMix + g;
    
        totalAdd = ((largeSconeQuantity * additiveLS[2]) + (smallSconeQuantity * additiveSS[2]));
        document.getElementById('ingredient').innerHTML = or + totalAdd + g;

        } else if (sconeType === 'apple'){

            if (smallSconeQuantity > 0) {
                alert("WARNING: You can not calculate mini scones for apple! Quantity set to zero.");
                document.getElementById("smallScone").value = 0;
        }
    
            totalCream = (largeSconeQuantity * heavyCreamLS[3]);
            document.getElementById('cream').innerHTML = cream + totalCream + g;
            
            totalMix = (largeSconeQuantity * mixLS[3]);
            document.getElementById('mix').innerHTML = mix + totalMix + g;
        
            totalAdd = (largeSconeQuantity * additiveLS[3]);
            document.getElementById('ingredient').innerHTML = ap + totalAdd + g;

            }
}