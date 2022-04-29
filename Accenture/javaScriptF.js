window.addEventListener("load", inizio(), false);

var arr = null;
var lista = null;

function inizio() {
    chiamaServer();
}


function chiamaServer(idScheda) {
    fetch('http://localhost:8081/flights')
        .then(response => {
            if (response.ok) {
                response.json()
                    .then(function (data) {
                        if (idScheda == null) {
                            creaSchede(data);
                        } else {
                            visualizza(idScheda, data);
                        }
                    }
                    );
            } else {
                console.log('Errore num: ' + this.status);
            }
        })
        .catch(function (err) {
            console.log('Server non raggiungibile');
        });
}

function creaSchede(arr) {
    var i;
    document.querySelector("#main").innerHTML = "";

    var informazioni = document.createElement("div");
    informazioni.id = "informazioni";
    informazioni.className = "informazioni";

    informazioni.innerHTML = '<div class="indietro"> <a class="prova" href="flights.html"> <img src="freccia.png" style="width:42px;height:42px;"></a></div>'
    document.querySelector("#main").appendChild(informazioni);

    var grigliaSchede = document.createElement("div");
    grigliaSchede.id = "grigliaSchede";

    var dettagliinfo = document.createElement("div");
    dettagliinfo.className = "dettinfo";
    document.querySelector(".informazioni").appendChild(dettagliinfo);


    for (i = 0; i < arr.length; i++) {

        /* Box Preview */
        var box_preview = document.createElement("div");
        box_preview.className = "scheda";

        /* Box Header */
        var box_preview_header = document.createElement("div");
        box_preview_header.className = "titoloScheda";
        box_preview_header_text = document.createTextNode(arr[i].name);
        box_preview_header.appendChild(box_preview_header_text);

        box_preview.appendChild(box_preview_header);

        var box_preview_tabellaScheda = document.createElement("div");
        box_preview_tabellaScheda.className = "tabellaScheda";

        box_preview.appendChild(box_preview_tabellaScheda);

        var box_preview_dettaglioData = document.createElement("div");
        box_preview_dettaglioData.className = "dettaglioScheda";
        box_preview_dettaglioData_text = document.createTextNode("Date: " + arr[i].departure.date);
        box_preview_dettaglioData.appendChild(box_preview_dettaglioData_text);

        box_preview_tabellaScheda.appendChild(box_preview_dettaglioData);

        var box_preview_dettaglioDataArrivo = document.createElement("div");
        box_preview_dettaglioDataArrivo.className = "dettaglioScheda";
        box_preview_dettaglioDataArrivo_text = document.createTextNode(arr[i].arrival.date);
        box_preview_dettaglioDataArrivo.appendChild(box_preview_dettaglioDataArrivo_text);

        box_preview_tabellaScheda.appendChild(box_preview_dettaglioDataArrivo);


        var box_preview_dettaglioAri1 = document.createElement("div");
        box_preview_dettaglioAri1.className = "dettaglioScheda";
        box_preview_dettaglioAri1_text = document.createTextNode("Airport: " + arr[i].departure.airport);
        box_preview_dettaglioAri1.appendChild(box_preview_dettaglioAri1_text);

        box_preview_tabellaScheda.appendChild(box_preview_dettaglioAri1);

        var box_preview_dettaglioAereoPortoArrivo = document.createElement("div");
        box_preview_dettaglioAereoPortoArrivo.className = "dettaglioScheda";
        box_preview_dettaglioAereoPortoArrivo_text = document.createTextNode(arr[i].arrival.airport);
        box_preview_dettaglioAereoPortoArrivo.appendChild(box_preview_dettaglioAereoPortoArrivo_text);

        box_preview_tabellaScheda.appendChild(box_preview_dettaglioAereoPortoArrivo);


        var box_preview_dettaglioTime = document.createElement("div");
        box_preview_dettaglioTime.className = "dettaglioScheda";
        box_preview_dettaglioTime_text = document.createTextNode("Time: " + arr[i].departure.time);
        box_preview_dettaglioTime.appendChild(box_preview_dettaglioTime_text);

        box_preview_tabellaScheda.appendChild(box_preview_dettaglioTime);

        var box_preview_dettaglioDataArrivo = document.createElement("div");
        box_preview_dettaglioDataArrivo.className = "dettaglioScheda";
        box_preview_dettaglioDataArrivo_text = document.createTextNode(arr[i].arrival.time);
        box_preview_dettaglioDataArrivo.appendChild(box_preview_dettaglioDataArrivo_text);

        box_preview_tabellaScheda.appendChild(box_preview_dettaglioDataArrivo);


        var box_preview_dettaglioEmail_bottone = document.createElement("div");
        box_preview_dettaglioEmail_bottone.className = "dettaglioScheda2";
        box_preview_dettaglioEmail_bottone.innerHTML = '<button class="bottoneScheda" onclick="chiamaServer(\'' + arr[i].id + '\')">View More</button>';
        box_preview.appendChild(box_preview_dettaglioEmail_bottone);

        grigliaSchede.appendChild(box_preview);

    }

    document.querySelector("#main").appendChild(grigliaSchede);


}

function visualizza(idScheda, listaSchede) {
    for (i = 0; i < listaSchede.length; i++) {
        if (idScheda == listaSchede[i].id) {
            document.querySelector("#grigliaSchede").style.display = "none";
            document.querySelector("#informazioni").style.display = "block";

            var box_preview_tabellaGriglia = document.createElement("div");
            box_preview_tabellaGriglia.className = "tabellaDettaglio";

            document.querySelector(".dettinfo").appendChild(box_preview_tabellaGriglia);


            nome2 = document.createTextNode("Nome " + listaSchede[i].name);
            document.querySelector(".tabellaDettaglio").appendChild(nome2);

            //space
            var space = document.createElement("t");
            document.querySelector(".tabellaDettaglio").appendChild(space);

            city2 = document.createTextNode("Airport: " + listaSchede[i].departure.airport);
            document.querySelector(".tabellaDettaglio").appendChild(city2);

            space = document.createElement("t");
            document.querySelector(".tabellaDettaglio").appendChild(space);

            street2 = document.createTextNode("Departure date " + listaSchede[i].departure.date);
            document.querySelector(".tabellaDettaglio").appendChild(street2);

            descrizioneLunga = document.createTextNode("Info: " + listaSchede[i].longDescription);
            document.querySelector(".dettinfo").appendChild(descrizioneLunga);

            box_preview.appendChild(box_preview_header);
            box_preview.appendChild(box_preview_dettaglioTelefono);
            box_preview.appendChild(box_preview_dettaglioEmail);

        }
    }
}




