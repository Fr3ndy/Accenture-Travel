window.addEventListener("load", inizio(), false);

var arr = null;
var lista = null;

function inizio() {
    chiamaServer();
}


function chiamaServer(idScheda) {
    fetch('http://localhost:8081/hotels')
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

    informazioni.innerHTML = '<div class="indietro"> <a class="prova" href="hotels.html"> <img src="freccia.png" style="width:42px;height:42px;"></a></div>'
    document.querySelector("#main").appendChild(informazioni);

    var grigliaSchede = document.createElement("div");
    grigliaSchede.id = "grigliaSchede";

    var dettagliinfo = document.createElement("div");
    dettagliinfo.className = "dettinfo";
    document.querySelector(".informazioni").appendChild(dettagliinfo);


    for (i = 0; i < arr.length; i++) {

        /** Box Preview **/
        var box_preview = document.createElement("div");
        box_preview.className = "scheda";


        /** Box Header **/
        var box_preview_header = document.createElement("div");
        box_preview_header.className = "titoloScheda";
        box_preview_header_text = document.createTextNode(arr[i].name);
        box_preview_header.appendChild(box_preview_header_text);

        box_preview.appendChild(box_preview_header);

        var box_preview_tabellaScheda = document.createElement("div");
        box_preview_tabellaScheda.className = "tabellaScheda";

        box_preview.appendChild(box_preview_tabellaScheda);

        var box_preview_dettaglioCitta = document.createElement("div");
        box_preview_dettaglioCitta.className = "dettaglioScheda";
        box_preview_dettaglioCitta_text = document.createTextNode("City: " + arr[i].address.city);
        box_preview_dettaglioCitta.appendChild(box_preview_dettaglioCitta_text);

        box_preview_tabellaScheda.appendChild(box_preview_dettaglioCitta);

        var box_preview_dettaglioTelefono = document.createElement("div");
        box_preview_dettaglioTelefono.className = "dettaglioScheda";
        box_preview_dettaglioTelefono_text = document.createTextNode("Num: " + arr[i].phone);
        box_preview_dettaglioTelefono.appendChild(box_preview_dettaglioTelefono_text);

        box_preview_tabellaScheda.appendChild(box_preview_dettaglioTelefono);

        var box_preview_dettaglioStelle = document.createElement("div");
        box_preview_dettaglioStelle.className = "dettaglioScheda";
        box_preview_dettaglioStelle_text = document.createTextNode("Vote: " + arr[i].stars);
        box_preview_dettaglioStelle.appendChild(box_preview_dettaglioStelle_text);

        box_preview_tabellaScheda.appendChild(box_preview_dettaglioStelle);

        var box_preview_dettaglioSito = document.createElement("div");
        box_preview_dettaglioSito.className = "dettaglioScheda";
        box_preview_dettaglioSito_text = document.createTextNode("WebSite: " + arr[i].website);
        box_preview_dettaglioSito.appendChild(box_preview_dettaglioSito_text);

        box_preview_tabellaScheda.appendChild(box_preview_dettaglioSito);


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


            nome2 = document.createTextNode("Name: " + listaSchede[i].name);
            document.querySelector(".tabellaDettaglio").appendChild(nome2);


            var space = document.createElement("t");
            document.querySelector(".tabellaDettaglio").appendChild(space);

            city2 = document.createTextNode("City: " + listaSchede[i].address.city);
            document.querySelector(".tabellaDettaglio").appendChild(city2);

            space = document.createElement("t");
            document.querySelector(".tabellaDettaglio").appendChild(space);

            street2 = document.createTextNode("Street: " + listaSchede[i].address.streetAddress);
            document.querySelector(".tabellaDettaglio").appendChild(street2);

            descrizioneLunga = document.createTextNode("Info: " + listaSchede[i].longDescription);
            document.querySelector(".dettinfo").appendChild(descrizioneLunga);
        }
    }
}
