let Array1 = [];
let Array2 = [];
let Array3 = [];
let Array4 = [];
let Array5 = [];
let B = false,
    I = false,
    N = false,
    G = false,
    O = false;
function newNumber(maxNumber) {
let loop1 = true;
let loop2 = true;
let loop3 = true;
let loop4 = true;
let loop5 = true;

while (loop1) {
    let x = Math.floor(Math.random() * maxNumber) + 1;
    if (x <= 15){
        if (!Array1.includes(x)) {
            Array1.push(x);
            document.querySelector("#td1").textContent = Array1[0];
            document.querySelector("#td6").textContent = Array1[1];
            document.querySelector("#td11").textContent = Array1[2];
            document.querySelector("#td16").textContent = Array1[3];
            document.querySelector("#td21").textContent = Array1[4];
            if (Array1.length == 5) {
                B = true;
            loop1 = false;
            //BNumber = Array1;
            console.log(`New number ${x} belong to "B"`)
            }
            
          }
    }
}

while (loop2) {
    let x = Math.floor(Math.random() * maxNumber) + 1;
    if (x >= 16 && x <= 30){

        if (!Array2.includes(x)) {
            Array2.push(x);
            
            document.querySelector("#td2").textContent = Array2[0];
            document.querySelector("#td7").textContent = Array2[1];
            document.querySelector("#td12").textContent = Array2[2];
            document.querySelector("#td17").textContent = Array2[3];
            document.querySelector("#td22").textContent = Array2[4];
          }
          if (Array2.length == 5) {
            I = true;
        loop2 = false;
        // INumber = Array2;
        console.log(`New number ${x} belong to "I"`)
        }
        
    }
}

while (loop3) {
    let x = Math.floor(Math.random() * maxNumber) + 1;
    if (x >= 31 && x <= 45){
        if (!Array3.includes(x)) {
            Array3.push(x);
            document.querySelector("#td3").textContent = Array3[0];
            document.querySelector("#td8").textContent = Array3[1];
            document.querySelector("#td18").textContent = Array3[3];
            document.querySelector("#td23").textContent = Array3[4];
          }
          if (Array3.length == 5) {
            N = true;
        loop3 = false;
        // NNumber = Array3;
        console.log(`New number ${x} belong to "N"`)
        }
        
    }
}

while (loop4) {
    let x = Math.floor(Math.random() * maxNumber) + 1;
    if (x >= 46 && x <= 60){

        if (!Array4.includes(x)) {
            Array4.push(x);
            document.querySelector("#td4").textContent = Array4[0];
            document.querySelector("#td9").textContent = Array4[1];
            document.querySelector("#td14").textContent = Array4[2];
            document.querySelector("#td19").textContent = Array4[3];
            document.querySelector("#td24").textContent = Array4[4];
          }
          if (Array4.length == 5) {
            G = true;
        loop4 = false;
        // GNumber = Array4;
        console.log(`New number ${x} belong to "G"`)
        }
        
    }
}

while (loop5) {

    let x = Math.floor(Math.random() * maxNumber) + 1;
    if (x >= 61 && x <= 75){

        if (!Array5.includes(x)) {
            Array5.push(x);
            document.querySelector("#td5").textContent = Array5[0];
            document.querySelector("#td10").textContent = Array5[1];
            document.querySelector("#td15").textContent = Array5[2];
            document.querySelector("#td20").textContent = Array5[3];
            document.querySelector("#td25").textContent = Array5[4];
          }
          if (Array5.length == 5) {
            loop5 = false;
            O = true;
            // ONumber = Array5;
        console.log(`New number ${x} belong to "O"`)
        }
        
    }
}

if (B == true && I == true && N == true && G == true && O == true) {
    console.log(`BINGOOOOO!!!`);
    console.table({
        B: BNumber,
        I: INumber,
        N: NNumber,
        G: GNumber,
        O: ONumber,
    });
}
}

while (!B || !I || !N || !G || !O) {
    newNumber(75);
    if (B || I || N || G || O) {
        console.log(`BINGOOOO!!!`);
    }
}