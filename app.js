function vypocetohmovazakona() {

    let U = parseFloat(document.getElementById('napeti').value);

    let I = parseFloat(document.getElementById('proud').value);

    let R = parseFloat(document.getElementById('odpor').value);

    let result = "";

    let error = "";


    if (!isNaN(U) && !isNaN(I)) {

        R = U / I;

        result = "Odpor (R) = " + R.toFixed(2) + " Ω";

        document.getElementById('odpor').value = R.toFixed(2);

    } else if (!isNaN(U) && !isNaN(R)) {

        I = U / R;

        result = "Proud (I) = " + I.toFixed(2) + " A";

        document.getElementById('proud').value = I.toFixed(2);

    } else if (!isNaN(I) && !isNaN(R)) {

        U = I * R;

        result = "Napětí (U) = " + U.toFixed(2) + " V";

        document.getElementById('napeti').value = U.toFixed(2);

    } else {

        document.getElementById('chyba').innerHTML = "bhcdzsudhbsahbjdas";
        console.log("jsme tady ?");

    }
}