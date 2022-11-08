/* Creazione di un biglietto del treno in base all'età dell'user e in base ai km che deve percorrere con un prezzo base di 0.21€/km se l'user ha meno di 18 anni allora bisogna applicare uno sconto del 20%, se invece a più di 65 anni bisogna applicare uno sconto del 40% */

/*Nota bene il prezzo finale del biglietto non deve contenere più di 2 cifre decimali */

// nome
const msNameUser = document.getElementById("ms_name_user");

const msSlotName = document.getElementById("ms_slot_name");

// cognome
const msSecondNameUser = document.getElementById("ms_second_name_user");

const msSlotSecondName = document.getElementById("ms_slot_second_name");

// indirizzo
const msAddressUser = document.getElementById("ms_address_user");

const msSlotAddress = document.getElementById("ms_slot_address");

// numero di cellulare
const msCelUser = document.getElementById("ms_cel_user");

const msSlotCel = document.getElementById("ms_slot_cel");

// Calcolare il prezzo del biglietto in base ai dati inseriti dall'user

const msPriceTicket = document.getElementById("ms_price_ticket");

const myButton = document.querySelector("#ms_make_ticket");

myButton.addEventListener("click",

    function(){

        // regole per far apparire il biglietto
        document.querySelector(".ms_ticket_slot").style.display = "block";

        // regole per inserire i dati dell'user nei campi del biglietto
        msSlotName.innerHTML = msNameUser.value;

        msSlotSecondName.innerHTML= msSecondNameUser.value;

        msSlotAddress.innerHTML = msAddressUser.value;

        msSlotCel.innerHTML = msCelUser.value;

        // numero carrozza
        const msCarriage = document.querySelector(".ms_carriage");

        let carriage = Math.floor((Math.random() * 10) + 1);

        msCarriage.innerHTML = carriage;

        // codice cp
        const msCodCp = document.querySelector(".ms_cod_cp");

        let codCp = Math.floor ((Math.random() * 100000) + 1);

        msCodCp.innerHTML = codCp;

        // dati per creazione biglietto
        let msAgeUser = document.getElementById("ms_age_user").value;

        let kmUser = document.getElementById("ms_km_user").value;

        let priceKm = 0.21;

        let price, finalPrice;

        // creazione prezzo biglietto
        if (msAgeUser === "minorenne") { // se l'età dell'user è < di 18 allora applica uno sconto del 20%

            price = kmUser * priceKm;

            price -= price * 0.2;

            finalPrice = price.toFixed(2);

        } else if (msAgeUser === "maggiorenne") { // se l'età dell'user è >= a 18 e <= a 65 allora il prezzo per km è 0.21€/km

            price = kmUser * priceKm;

            finalPrice = price.toFixed(2);

        } else if(msAgeUser === "senior") { // se l'età dell'user è > di 65 allora applica uno sconto del 40%

            price = kmUser * priceKm;

            price -= price * 0.4;

            finalPrice = price.toFixed(2);

        }

        msPriceTicket.innerHTML = finalPrice + "€";

    }

);

// reset biglietto
const myReset = document.getElementById("ms_reset_ticket");

myReset.addEventListener("click",

    function() {

        // regole per far scomparire il biglietto
        document.querySelector(".ms_ticket_slot").style.display = "none";

        // regole per resettare il form
        document.getElementById("ms_my_form").reset();

    }

)