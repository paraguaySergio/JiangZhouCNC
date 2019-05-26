/*guardando data*/
let obj = jsonServicios.servicios;

function servicios() {
    let numServi = jsonServicios.servicios.length;
    for (let i = 0; i <= numServi; i++) {
        document.write(" <div class=\"contenido-post\" id=\"contenido-post\">\n" +
            "                    <div class=\"img-post\">\n" +
            "                        <img src=\"../img/servicios/" + obj[i].img + "\" alt=\"\" data-caption='" + obj[i].title + "' class=\'materialboxed\'>\n" +
            "                    </div>\n" +
            "                    <div class=\"description-post\">\n" +
            "                        <h5>" + obj[i].title + "</h5>\n" +
            "                        <p>\n" +
            "                            " + obj[i].description + "\n" +
            "                        </p>\n" +
            "                        <!---********** ENLACE **********--->\n" +
            "                        <a class=\"btn modal-trigger\" href=\"servicio_detail/?servId=" + obj[i].id + "\"\n" +
            "                           onclick=\"redirectIdServ()\">Leer\n" +
            "                            Más</a>\n" +
            "                    </div>\n" +
            "                </div>");
    }
}



