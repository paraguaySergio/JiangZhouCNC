/*********** data GET ***********/
let prodId = getParameterByName('prodId');

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

let obj = jsonProducts.products[prodId];

/******** CARD1 LIST **********/
PD_list_products = () => {

    for (let i = 0; i <= 13; i++) {
        document.write("<li><a href='?prodId=" + jsonProducts.products[i].id + "' style='color:#fff;'>" + "<b style='color:#f44336'>-> </b> " + jsonProducts.products[i].title + "</a></li>");
    }
};

productsCaracteristicas = () => {
    switch (obj.id) {
        case 0:
            document.write(product0);
            break;
        case 1:
            document.write(product1);
            break;
        case 2:
            document.write(product2);
            break;
        case 3:
            document.write(product3);
            break;
        case 4:
            document.write(product4);
            break;
        case 5:
            document.write(product5);
            break;
        case 6:
            document.write(product6);
            break;
        case 7:
            document.write(product7);
            break;
        case 8:
            document.write(product8);
            break;
        case 9:
            document.write(product9);
            break;
        case 10:
            document.write(product10);
            break;
        case 11:
            document.write(product11);
            break;
        case 12:
            document.write(product12);
            break;
        case 13:
            document.write(product13);
            break;
    }
};

const product0 = "<table border=\"1\" cellpadding=\"1\" cellspacing=\"1\" style=\"width: 500px\">\n" +
    "\t<tbody>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\tViaje a la mesa de trabajo</font></font></td>\n" +
    "\t\t\t<td><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\tGrosor máximo de la pieza.</font></font></td>\n" +
    "\t\t\t<td><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\tDiámetro de la barra de arena de sujeción</font></font></td>\n" +
    "\t\t\t<td><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\tPotencia del motor del husillo</font></font></td>\n" +
    "\t\t\t<td><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\tVelocidad del motor del husillo</font></font></td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t250x320</font></font></td>\n" +
    "\t\t\t<td>\n" +
    "\t\t\t\t200</td>\n" +
    "\t\t\t<td><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\tF6</font></font></td>\n" +
    "\t\t\t<td>\n" +
    "\t\t\t\t1.5</td>\n" +
    "\t\t\t<td>\n" +
    "\t\t\t\t6000-24000</td>\n" +
    "\t\t</tr>\n" +
    "\t</tbody>\n" +
    "</table>";

const product1 = "<table width=\"98%\" border=\"0\" align=\"center\" cellpadding=\"5\" cellspacing=\"0\">\n" +
    "            <tbody><tr>\n" +
    "              <td style=\"line-height:25px\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\tMÁQUINA DE CORTE DE CABLE ABRASIVO CNC DE LA SERIE QT</font></font>\n" +
    "\n" +
    "\t&nbsp;\n" +
    "<table border=\"1\">\n" +
    "\t<tbody>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 37px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tModelo</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 49px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tRecorrido de la mesa de trabajo (mm)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 72px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tGrosor de corte (mm)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 40px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tLa mayor eficiencia de corte</font></font>\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tmm2 / min)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 49px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tRugosidad óptima de la superficie</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 49px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tEspecificación de la línea de arena</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 57px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tEquivalente de alimentación de pulso</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 40px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tPotencia total de la máquina</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 88px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tPeso neto de la máquina herramienta.</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 88px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tControl</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 37px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tQT5620</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 49px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t200x250</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 72px\">\n" +
    "\t\t\t\t\n" +
    "\t\t\t\t\t135（235）\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td rowspan=\"3\" style=\"width: 40px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600 (se refiere a cortar material de grafito)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td rowspan=\"3\" style=\"width: 49px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tRa1.5</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td rowspan=\"3\" style=\"width: 49px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tF1.2</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td rowspan=\"3\" style=\"width: 57px\">\n" +
    "\t\t\t\t\n" +
    "\t\t\t\t\t0.001\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td rowspan=\"3\" style=\"width: 40px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t&lt;2</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 88px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1000kg</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td rowspan=\"3\" style=\"width: 88px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tEditar y controlar una computadora.</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 37px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tQT5632</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 49px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t320x400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 72px\">\n" +
    "\t\t\t\t\n" +
    "\t\t\t\t\t145\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 88px\">\n" +
    "\t\t\t\t\n" +
    "\t\t\t\t\t1200\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 37px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tQT5640</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 49px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400x500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 72px\">\n" +
    "\t\t\t\t\n" +
    "\t\t\t\t\t135/175/400\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 88px\">\n" +
    "\t\t\t\t\n" +
    "\t\t\t\t\t1300\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t</tbody>\n" +
    "</table>\n" +
    "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\tNúmero de patente del producto:&nbsp;&nbsp; 20080036799.x 200920047862.4</font></font>\n" +
    "\n" +
    "\t200820034690.2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;200920047863.9\n" +
    "\n" +
    "\t200820032012.2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 200920047864.3\n" +
    "\n" +
    "\t200920047861.x&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 200920170383.1\n" +
    "\n" +
    "\t</td>\n" +
    "</tr>\n" +
    "</tbody>" +
    "</table>";

const product2 = "<table>\n" +
    "\t<tbody>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 124px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tModelo</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 73px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tXH714</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tXH715</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tXH716</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tXH717</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tXH718</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tXH719</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 124px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tÁrea de trabajo</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 73px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400x840mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t500x1050mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600x1300mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t700x1400mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800x1700mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t900x2000mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 124px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tBanco de trabajo T-slot</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 73px\">\n" +
    "\t\t\t\t\n" +
    "\t\t\t\t\t3~18\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t3~18</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t\n" +
    "\t\t\t\t\t5~18\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t5~18</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t\n" +
    "\t\t\t\t\t5~22\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t5~22</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 124px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tItinerario</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 73px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tx 650mm</font></font>\n" +
    "\t\t\t\t\n" +
    "\t\t\t\t\ty&nbsp;400mm\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tz 500mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tx 800mm</font></font>\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\ty 500mm</font></font>\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tdesde 550mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tx 1000mm</font></font>\n" +
    "\t\t\t\t\n" +
    "\t\t\t\t\ty&nbsp;600mm\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tz 600mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tx 1300mm</font></font>\n" +
    "\t\t\t\t\n" +
    "\t\t\t\t\ty&nbsp;700mm\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tdesde 650mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tx 1500mm</font></font>\n" +
    "\t\t\t\t\n" +
    "\t\t\t\t\ty&nbsp;800mm\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tz 700mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tx 1800mm</font></font>\n" +
    "\t\t\t\t\n" +
    "\t\t\t\t\ty&nbsp;900mm\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tdesde 800mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 124px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tExtremo del husillo a distancia de la superficie de trabajo.</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 73px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t125 ~ 625mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t150 ~ 700 mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t180 ~ 780mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t150 ~ 800 mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t170 ~ 870mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t160 ~ 960mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 124px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDistancia de la superficie de la guía del eje del husillo al eje Z</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 73px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t495mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t550mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t785mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t950mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 124px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tCono del husillo</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 73px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tBT40</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tBT40</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tBT40</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tBT50</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tBT50</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tBT50</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 124px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tVelocidad máxima del husillo (velocidad infinitamente variable)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 73px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t8000 rpm / 6000 rpm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t6000rpm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t6000rpm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t6000rpm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t6000rpm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t6000rpm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 124px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tPotencia del motor del husillo</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 73px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t5.5 / 7.5kw</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t5.5 / 7.5kw</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t9 / 11kw</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t15kw</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t15kw</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t15kw</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 124px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tVelocidad de avance de corte (relacionada con el sistema)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 73px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1 ~ 5000 mm / min</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1 ~ 5000 mm / min</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1 ~ 5000 mm / min</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1 ~ 5000 mm / min</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1 ~ 5000 mm / min</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1 ~ 5000 mm / min</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 124px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tPrecisión de posicionamiento</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 73px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t± 0.01mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t± 0.01mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t± 0.01mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t± 0.01mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t± 0.01mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t± 0.01mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 124px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tPrecisión de posicionamiento del peso</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 73px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t± 0.005mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t± 0.005mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t± 0.005mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t± 0.005mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t± 0.005mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t± 0.005mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 124px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tPeso de la maquina</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 73px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t3200kg</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t4500kg</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t7000kg</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t11200kg</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t13500kg</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t14000kg</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 124px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tTamaño de la máquina (largo x ancho x alto)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 73px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2450x2200x2660mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2700x2200x2660mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t3400x2250x2800mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t4000x2300x2900mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t4420x2350x3200mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t4450x2400x3200mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 124px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tBanco de trabajo permite la capacidad de carga máxima</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 73px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t500kg</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600kg</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800kg</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1000kg</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1500kg</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1600kg</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 124px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tOpcional (almacén de herramientas)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 73px\">\n" +
    "\t\t\t\t\n" +
    "\t\t\t\t\t10/16/20/24\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t10/16/20/24</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t\n" +
    "\t\t\t\t\t20/24\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t20/24</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t20/24</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t20/24</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t</tbody>\n" +
    "</table>";


const product3 = "<table border=\"1\" style=\"width: 650px\">\n" +
    "\t<tbody>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 124px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tModelo</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 73px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tXK714</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tXK715</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tXK716</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tXK717</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tXK718</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tXK719</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 124px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tÁrea de trabajo</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 73px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400x840mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t500x1050mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600x1300mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t700x1400mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800x1700mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t900x2000mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 124px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tBanco de trabajo T-slot</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 73px\">\n" +
    "\t\t\t\t\n" +
    "\t\t\t\t\t3~18\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t3~18</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t\n" +
    "\t\t\t\t\t5~18\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t5~18</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t\n" +
    "\t\t\t\t\t5~22\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t5~22</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 124px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tItinerario</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 73px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tx 650mm</font></font>\n" +
    "\t\t\t\t\n" +
    "\t\t\t\t\ty&nbsp;400mm\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tz 500mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tx 800mm</font></font>\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\ty 500mm</font></font>\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tdesde 550mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tx 1000mm</font></font>\n" +
    "\t\t\t\t\n" +
    "\t\t\t\t\ty&nbsp;600mm\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tz 600mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tx 1300mm</font></font>\n" +
    "\t\t\t\t\n" +
    "\t\t\t\t\ty&nbsp;700mm\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tdesde 650mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tx 1500mm</font></font>\n" +
    "\t\t\t\t\n" +
    "\t\t\t\t\ty&nbsp;800mm\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tz 700mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tx 1800mm</font></font>\n" +
    "\t\t\t\t\n" +
    "\t\t\t\t\ty&nbsp;900mm\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tdesde 800mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 124px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tExtremo del husillo a distancia de la superficie de trabajo.</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 73px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t125 ~ 625mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t150 ~ 700 mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t180 ~ 780mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t150 ~ 800 mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t170 ~ 870mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t160 ~ 960mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 124px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDistancia de la superficie de la guía del eje del husillo al eje Z</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 73px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t495mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t550mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t785mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t950mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 124px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tCono del husillo</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 73px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tBT40</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tBT40</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tBT40</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tBT50</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tBT50</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tBT50</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 124px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tVelocidad máxima del husillo (velocidad infinitamente variable)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 73px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t8000 rpm / 6000 rpm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t6000rpm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t6000rpm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t6000rpm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t6000rpm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t6000rpm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 124px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tPotencia del motor del husillo</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 73px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t5.5 / 7.5kw</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t5.5 / 7.5kw</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t9 / 11kw</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t15kw</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t15kw</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t15kw</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 124px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tVelocidad de avance de corte (relacionada con el sistema)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 73px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1 ~ 5000 mm / min</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1 ~ 5000 mm / min</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1 ~ 5000 mm / min</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1 ~ 5000 mm / min</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1 ~ 5000 mm / min</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1 ~ 5000 mm / min</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 124px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tPrecisión de posicionamiento</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 73px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t± 0.01mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t± 0.01mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t± 0.01mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t± 0.01mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t± 0.01mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t± 0.01mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 124px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tPrecisión de posicionamiento del peso</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 73px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t± 0.005mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t± 0.005mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t± 0.005mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t± 0.005mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t± 0.005mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t± 0.005mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 124px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tPeso de la maquina</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 73px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t3200kg</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t4500kg</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t7000kg</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t11200kg</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t13500kg</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t14000kg</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 124px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tTamaño de la máquina (largo x ancho x alto)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 73px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2450x2200x2660mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2700x2200x2660mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t3400x2250x2800mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t4000x2300x2900mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t4420x2350x3200mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t4450x2400x3200mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 124px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tBanco de trabajo permite la capacidad de carga máxima</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 73px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t500kg</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600kg</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800kg</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1000kg</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1500kg</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1600kg</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 124px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tOpcional (almacén de herramientas)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 73px\">\n" +
    "\t\t\t\t\n" +
    "\t\t\t\t\t10/16/20/24\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t10/16/20/24</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t\n" +
    "\t\t\t\t\t20/24\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t20/24</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t20/24</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 76px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t20/24</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t</tbody>\n" +
    "</table>";

const product4 = "Sin Descripción";

const product5 = "<table border=\"1\" style=\"width: 680px\">\n" +
    "\t<tbody>\n" +

    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tTipo</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tTamaño de la mesa de trabajo (mm)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tTrave mesa de trabajo (mm)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tAltura de la pieza máx. (Mm)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tTaper (opcional)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tPeso máximo de la pieza (kg)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tPeso de la máquina (kg)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDimensión de la máquina (LxWxH)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 84px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tConsumo de energía</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7720</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t270x420</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t200x250</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t100</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1160x880x1400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td rowspan=\"17\" style=\"width: 84px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tAC380V / 220V</font></font>\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t50Hz</font></font>\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t≤2KW</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7725</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t340x520</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t250x220</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 120 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1485x1010x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7730</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t340x560</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t300x360</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 120 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1250</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1485x1050x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7732</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t380x600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t320x400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 300 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t300</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1640x1280x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7735</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t380x650</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t350x450</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 300 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t300</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1440</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1660x1330x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7740</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t410x710</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400x500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t450</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1830x1490x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7740B</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t450x840</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400x630</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t450</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1670</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1845x1610x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7745</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t500x750</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t450x550</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t450</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1650</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1865x1520x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7755</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t596x880</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t550x650</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2070x1170x1790</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7755B</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t596x1060</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t550x850</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t850</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2070x1950x1790</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7763</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t790x1260</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t6300x1000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t3500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2265x2160x1930</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7763A</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t720x1260</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t630x1000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t3200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2200x2160x1930</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7780</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t900x1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800x1200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t5500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2900x2500x2150</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7780A</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t880x1440</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800x1200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t4700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2700x2300x1900</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7780B</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t880x1260</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800x1000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t4500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2620x2260x1900</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK77100</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1010x1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1000x1200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 120 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t5600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2930x2500x2000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK77120</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1300x1900</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1200x1600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 120 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t4000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t10000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t4200x3700x2000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t</tbody>\n" +
    "</table>";
const product6 = "<table border=\"1\" style=\"width: 680px\">\n" +
    "\t<tbody>\n" +

    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tTipo</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tTamaño de la mesa de trabajo (mm)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tTrave mesa de trabajo (mm)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tAltura de la pieza máx. (Mm)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tTaper (opcional)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tPeso máximo de la pieza (kg)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tPeso de la máquina (kg)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDimensión de la máquina (LxWxH)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 84px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tConsumo de energía</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7720</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t270x420</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t200x250</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t100</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1160x880x1400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td rowspan=\"17\" style=\"width: 84px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tAC380V / 220V</font></font>\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t50Hz</font></font>\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t≤2KW</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7725</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t340x520</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t250x220</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 120 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1485x1010x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7730</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t340x560</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t300x360</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 120 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1250</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1485x1050x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7732</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t380x600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t320x400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 300 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t300</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1640x1280x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7735</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t380x650</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t350x450</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 300 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t300</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1440</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1660x1330x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7740</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t410x710</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400x500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t450</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1830x1490x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7740B</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t450x840</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400x630</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t450</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1670</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1845x1610x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7745</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t500x750</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t450x550</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t450</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1650</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1865x1520x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7755</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t596x880</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t550x650</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2070x1170x1790</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7755B</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t596x1060</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t550x850</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t850</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2070x1950x1790</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7763</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t790x1260</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t6300x1000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t3500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2265x2160x1930</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7763A</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t720x1260</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t630x1000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t3200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2200x2160x1930</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7780</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t900x1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800x1200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t5500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2900x2500x2150</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7780A</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t880x1440</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800x1200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t4700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2700x2300x1900</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7780B</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t880x1260</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800x1000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t4500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2620x2260x1900</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK77100</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1010x1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1000x1200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 120 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t5600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2930x2500x2000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK77120</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1300x1900</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1200x1600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 120 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t4000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t10000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t4200x3700x2000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t</tbody>\n" +
    "</table>";

const product7 = "<table border=\"1\" style=\"width: 680px\">\n" +
    "\t<tbody>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tTipo</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tTamaño de la mesa de trabajo (mm)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tTrave mesa de trabajo (mm)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tAltura de la pieza máx. (Mm)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tTaper (opcional)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tPeso máximo de la pieza (kg)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tPeso de la máquina (kg)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDimensión de la máquina （LxWxH）</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 84px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tConsumo de energía</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7720</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t270x420</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t200x250</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t100</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1160x880x1400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td rowspan=\"17\" style=\"width: 84px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tAC380V / 220V</font></font>\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t50Hz</font></font>\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t≤2KW</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7725</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t340x520</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t250x220</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 120 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1485x1010x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7730</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t340x560</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t300x360</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 120 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1250</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1485x1050x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7732</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t380x600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t320x400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 300 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t300</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1640x1280x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7735</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t380x650</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t350x450</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 300 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t300</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1440</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1660x1330x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7740</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t410x710</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400x500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t450</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1830x1490x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7740B</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t450x840</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400x630</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t450</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1670</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1845x1610x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7745</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t500x750</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t450x550</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t450</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1650</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1865x1520x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7755</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t596x880</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t550x650</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2070x1170x1790</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7755B</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t596x1060</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t550x850</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t850</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2070x1950x1790</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7763</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t790x1260</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t6300x1000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t3500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2265x2160x1930</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7763A</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t720x1260</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t630x1000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t3200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2200x2160x1930</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7780</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t900x1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800x1200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t5500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2900x2500x2150</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7780A</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t880x1440</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800x1200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t4700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2700x2300x1900</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7780B</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t880x1260</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800x1000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t4500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2620x2260x1900</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK77100</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1010x1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1000x1200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 120 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t5600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2930x2500x2000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK77120</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1300x1900</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1200x1600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 120 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t4000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t10000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t4200x3700x2000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t</tbody>\n" +
    "</table>";

const product8 = "<table border=\"1\" style=\"width: 680px\">\n" +
    "\t<tbody>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tTipo</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tTamaño de la mesa de trabajo (mm)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tTrave mesa de trabajo (mm)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tAltura de la pieza máx. (Mm)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tTaper (opcional)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tPeso máximo de la pieza (kg)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tPeso de la máquina (kg)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDimensión de la máquina （LxWxH）</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 84px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tConsumo de energía</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7720</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t270x420</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t200x250</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t100</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1160x880x1400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td rowspan=\"17\" style=\"width: 84px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tAC380V / 220V</font></font>\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t50Hz</font></font>\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t≤2KW</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7725</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t340x520</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t250x220</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 120 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1485x1010x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7730</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t340x560</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t300x360</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 120 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1250</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1485x1050x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7732</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t380x600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t320x400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 300 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t300</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1640x1280x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7735</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t380x650</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t350x450</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 300 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t300</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1440</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1660x1330x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7740</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t410x710</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400x500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t450</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1830x1490x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7740B</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t450x840</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400x630</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t450</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1670</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1845x1610x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7745</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t500x750</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t450x550</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t450</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1650</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1865x1520x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7755</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t596x880</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t550x650</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2070x1170x1790</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7755B</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t596x1060</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t550x850</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t850</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2070x1950x1790</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7763</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t790x1260</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t6300x1000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t3500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2265x2160x1930</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7763A</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t720x1260</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t630x1000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t3200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2200x2160x1930</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7780</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t900x1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800x1200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t5500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2900x2500x2150</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7780A</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t880x1440</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800x1200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t4700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2700x2300x1900</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7780B</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t880x1260</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800x1000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t4500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2620x2260x1900</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK77100</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1010x1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1000x1200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 120 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t5600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2930x2500x2000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK77120</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1300x1900</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1200x1600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 120 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t4000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t10000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t4200x3700x2000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t</tbody>\n" +
    "</table>";


const product9 = "<table border=\"1\" style=\"width: 500px\">\n" +
    "\t<tbody>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tTipo</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tTamaño de la mesa de trabajo (mm)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tTrave mesa de trabajo (mm)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tAltura de la pieza máx. (Mm)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tTaper (opcional)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tPeso máximo de la pieza (kg)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tPeso de la máquina (kg)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDimensión de la máquina （LxWxH）</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 84px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tConsumo de energía</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7720</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t270x420</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t200x250</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t100</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1160x880x1400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td rowspan=\"17\" style=\"width: 84px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tAC380V / 220V</font></font>\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t50Hz</font></font>\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t≤2KW</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7725</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t340x520</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t250x220</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 120 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1485x1010x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7730</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t340x560</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t300x360</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 120 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1250</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1485x1050x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7732</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t380x600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t320x400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 300 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t300</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1640x1280x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7735</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t380x650</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t350x450</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 300 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t300</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1440</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1660x1330x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7740</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t410x710</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400x500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t450</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1830x1490x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7740B</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t450x840</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400x630</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t450</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1670</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1845x1610x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7745</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t500x750</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t450x550</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t450</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1650</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1865x1520x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7755</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t596x880</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t550x650</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2070x1170x1790</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7755B</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t596x1060</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t550x850</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t850</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2070x1950x1790</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7763</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t790x1260</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t6300x1000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t3500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2265x2160x1930</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7763A</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t720x1260</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t630x1000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t3200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2200x2160x1930</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7780</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t900x1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800x1200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t5500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2900x2500x2150</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7780A</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t880x1440</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800x1200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t4700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2700x2300x1900</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7780B</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t880x1260</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800x1000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t4500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2620x2260x1900</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK77100</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1010x1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1000x1200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 120 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t5600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2930x2500x2000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK77120</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1300x1900</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1200x1600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 120 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t4000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t10000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t4200x3700x2000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t</tbody>\n" +
    "</table>";

const product10 = "<table border=\"1\" style=\"width: 500px\">\n" +
    "\t<tbody>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tTipo</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tTamaño de la mesa de trabajo (mm)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tTrave mesa de trabajo (mm)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tAltura de la pieza máx. (Mm)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tTaper (opcional)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tPeso máximo de la pieza (kg)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tPeso de la máquina (kg)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDimensión de la máquina （LxWxH）</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 84px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tConsumo de energía</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7720</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t270x420</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t200x250</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t100</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1160x880x1400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td rowspan=\"17\" style=\"width: 84px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tAC380V / 220V</font></font>\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t50Hz</font></font>\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t≤2KW</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7725</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t340x520</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t250x220</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 120 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1485x1010x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7730</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t340x560</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t300x360</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 120 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1250</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1485x1050x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7732</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t380x600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t320x400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 300 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t300</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1640x1280x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7735</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t380x650</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t350x450</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 300 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t300</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1440</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1660x1330x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7740</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t410x710</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400x500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t450</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1830x1490x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7740B</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t450x840</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400x630</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t450</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1670</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1845x1610x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7745</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t500x750</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t450x550</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t450</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1650</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1865x1520x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7755</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t596x880</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t550x650</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2070x1170x1790</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7755B</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t596x1060</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t550x850</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t850</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2070x1950x1790</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7763</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t790x1260</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t6300x1000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t3500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2265x2160x1930</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7763A</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t720x1260</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t630x1000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t3200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2200x2160x1930</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7780</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t900x1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800x1200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t5500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2900x2500x2150</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7780A</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t880x1440</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800x1200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t4700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2700x2300x1900</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7780B</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t880x1260</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800x1000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t4500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2620x2260x1900</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK77100</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1010x1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1000x1200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 120 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t5600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2930x2500x2000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK77120</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1300x1900</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1200x1600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 120 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t4000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t10000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t4200x3700x2000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t</tbody>\n" +
    "</table>";

const product11 = "<table border=\"1\" style=\"width: 500px\">\n" +
    "\t<tbody>\n" +

    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tTipo</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tTamaño de la mesa de trabajo (mm)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tTrave mesa de trabajo (mm)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tAltura de la pieza máx. (Mm)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tTaper (opcional)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tPeso máximo de la pieza (kg)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tPeso de la máquina (kg)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDimensión de la máquina （LxWxH）</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 84px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tConsumo de energía</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7720</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t270x420</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t200x250</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t100</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1160x880x1400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td rowspan=\"17\" style=\"width: 84px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tAC380V / 220V</font></font>\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t50Hz</font></font>\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t≤2KW</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7725</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t340x520</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t250x220</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 120 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1485x1010x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7730</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t340x560</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t300x360</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 120 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1250</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1485x1050x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7732</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t380x600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t320x400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 300 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t300</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1640x1280x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7735</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t380x650</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t350x450</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 300 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t300</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1440</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1660x1330x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7740</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t410x710</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400x500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t450</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1830x1490x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7740B</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t450x840</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400x630</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t450</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1670</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1845x1610x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7745</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t500x750</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t450x550</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t450</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1650</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1865x1520x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7755</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t596x880</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t550x650</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2070x1170x1790</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7755B</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t596x1060</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t550x850</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t850</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2070x1950x1790</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7763</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t790x1260</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t6300x1000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t3500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2265x2160x1930</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7763A</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t720x1260</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t630x1000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t3200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2200x2160x1930</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7780</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t900x1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800x1200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t5500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2900x2500x2150</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7780A</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t880x1440</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800x1200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t4700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2700x2300x1900</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7780B</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t880x1260</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800x1000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t4500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2620x2260x1900</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK77100</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1010x1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1000x1200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 120 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t5600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2930x2500x2000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK77120</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1300x1900</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1200x1600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 120 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t4000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t10000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t4200x3700x2000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t</tbody>\n" +
    "</table>";

const product12 = "<table border=\"1\" style=\"width: 500px\">\n" +
    "\t<tbody>\n" +

    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tTipo</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tTamaño de la mesa de trabajo (mm)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tTrave mesa de trabajo (mm)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tAltura de la pieza máx. (Mm)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tTaper (opcional)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tPeso máximo de la pieza (kg)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tPeso de la máquina (kg)</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDimensión de la máquina （LxWxH）</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 84px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tConsumo de energía</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7720</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t270x420</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t200x250</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t100</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1160x880x1400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td rowspan=\"17\" style=\"width: 84px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tAC380V / 220V</font></font>\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t50Hz</font></font>\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t≤2KW</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7725</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t340x520</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t250x220</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 120 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1485x1010x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7730</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t340x560</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t300x360</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 120 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1250</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1485x1050x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7732</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t380x600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t320x400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 300 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t300</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1640x1280x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7735</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t380x650</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t350x450</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 300 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t300</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1440</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1660x1330x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7740</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t410x710</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400x500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t450</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1830x1490x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7740B</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t450x840</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400x630</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t450</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1670</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1845x1610x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7745</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t500x750</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t450x550</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t400</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t450</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1650</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1865x1520x1700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7755</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t596x880</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t550x650</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2070x1170x1790</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7755B</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t596x1060</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t550x850</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t850</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2070x1950x1790</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7763</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t790x1260</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t6300x1000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t3500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2265x2160x1930</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7763A</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t720x1260</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t630x1000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t3200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2200x2160x1930</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7780</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t900x1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800x1200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t5500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2900x2500x2150</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7780A</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t880x1440</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800x1200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t4700</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2700x2300x1900</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK7780B</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t880x1260</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t800x1000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 600 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t4500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2620x2260x1900</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK77100</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1010x1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1000x1200</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 120 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t5600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t2930x2500x2000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t\t<tr>\n" +
    "\t\t\t<td style=\"width: 44px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\tDK77120</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 59px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1300x1900</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 86px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t1200x1600</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 48px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t500</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t60 ~ 120 / 80mm</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 58px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t4000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 68px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t10000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t\t<td style=\"width: 70px\">\n" +
    "\t\t\t\t<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">\n" +
    "\t\t\t\t\t4200x3700x2000</font></font>\n" +
    "\t\t\t</td>\n" +
    "\t\t</tr>\n" +
    "\t</tbody>\n" +
    "</table>";

const product13 = "<table border=\"1\" cellpadding=\"0\" cellspacing=\"0\"><thead><tr><td colspan=\"2\" style=\"width:147.15pt;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">ít</font></font></td><td colspan=\"3\" style=\"width:5cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">SK40S</font></font></td><td colspan=\"4\" style=\"width:6cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">SK50S</font></font></td></tr></thead><tbody><tr><td colspan=\"2\" style=\"width:147.15pt;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Max. </font><font style=\"vertical-align: inherit;\">columpio sobre la cama (mm)</font></font></td><td colspan=\"3\" style=\"width:5cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">φ400</font></font></td><td colspan=\"4\" style=\"width:6cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">φ500</font></font></td></tr><tr><td colspan=\"2\" style=\"width:147.15pt;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Max. </font><font style=\"vertical-align: inherit;\">columpio sobre la corredera (mm)</font></font></td><td colspan=\"3\" style=\"width:5cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">φ200</font></font></td><td colspan=\"4\" style=\"width:6cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">φ280</font></font></td></tr><tr><td colspan=\"2\" style=\"width:147.15pt;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Max. </font><font style=\"vertical-align: inherit;\">dia de giro. </font><font style=\"vertical-align: inherit;\">(mm)</font></font></td><td colspan=\"3\" style=\"width:5cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">φ400 / 350 *</font></font></td><td colspan=\"4\" style=\"width:6cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">φ500 / 350 *</font></font></td></tr><tr><td colspan=\"2\" style=\"width:147.15pt;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Max. </font><font style=\"vertical-align: inherit;\">longitud de trabajo (mm)</font></font></td><td colspan=\"7\" style=\"width:11cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">710/620; </font><font style=\"vertical-align: inherit;\">960/870; </font><font style=\"vertical-align: inherit;\">1460/1370; </font><font style=\"vertical-align: inherit;\">1960/1870; 2960/2870</font></font></td></tr><tr><td colspan=\"2\" style=\"width:147.15pt;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Max. </font><font style=\"vertical-align: inherit;\">longitud de giro (mm)</font></font></td><td colspan=\"7\" style=\"width:11cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">570/500; </font><font style=\"vertical-align: inherit;\">820/750; </font><font style=\"vertical-align: inherit;\">1320/1250; </font><font style=\"vertical-align: inherit;\">1820/1750; 2820/2750</font></font></td></tr><tr><td colspan=\"2\" style=\"width:147.15pt;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Orificio cónico del husillo (mm)</font></font></td><td colspan=\"3\" style=\"width:5cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">φ77</font></font></td><td colspan=\"4\" style=\"width:6cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">φ77</font></font></td></tr><tr><td colspan=\"2\" style=\"height:31.8pt;width:147.15pt;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Nariz del husillo</font></font></td><td colspan=\"7\" style=\"height:31.8pt;width:11cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">ISO702 / A2-8</font></font></td></tr><tr><td colspan=\"2\" style=\"width:147.15pt;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Velocidad del husillo (r / min)</font></font></td><td colspan=\"7\" style=\"width:11cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">3 engranajes sin escalonamientos 21-1620 </font></font><br><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">H: 162-1620 M: 66-660 L: 21-210</font></font></td></tr><tr><td colspan=\"2\" style=\"width:147.15pt;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Agujero cónico del husillo</font></font></td><td colspan=\"7\" style=\"width:11cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Métrica 1:20</font></font></td></tr><tr><td colspan=\"2\" style=\"width:147.15pt;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Max. </font><font style=\"vertical-align: inherit;\">par de salida del husillo (Nm)</font></font></td><td colspan=\"7\" style=\"width:11cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">800</font></font></td></tr><tr><td colspan=\"2\" rowspan=\"2\" style=\"width:147.15pt;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Max. </font><font style=\"vertical-align: inherit;\">recorrido rápido (m / min)</font></font></td><td colspan=\"7\" style=\"width:11cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Eje X: 6 (Consulte el MANUAL DEL OPERADOR --- PIEZAS ELÉCTRICAS para obtener más información)</font></font></td></tr><tr><td colspan=\"7\" style=\"width:11cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Eje Z: 8 (Consulte el MANUAL DEL OPERADOR --- PIEZAS ELÉCTRICAS para obtener más información)</font></font></td></tr><tr><td colspan=\"2\" style=\"width:147.15pt;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Paso de tornillo (mm)</font></font></td><td colspan=\"7\" style=\"width:11cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Dirección X: dirección 5 Z: 6</font></font></td></tr><tr><td colspan=\"2\" style=\"width:147.15pt;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Capacidad de la torreta</font></font></td><td colspan=\"7\" style=\"width:11cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">4 (estándar) / 6 (opcional)</font></font></td></tr><tr><td colspan=\"2\" style=\"width:147.15pt;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Ancho del bloque de herramientas (mm)</font></font></td><td colspan=\"3\" style=\"width:5cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">162X162</font></font></td><td colspan=\"4\" style=\"width:6cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">200X200</font></font></td></tr><tr><td colspan=\"2\" style=\"width:147.15pt;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Max. </font><font style=\"vertical-align: inherit;\">Sección de herramienta admisible (mm × mm)</font></font></td><td colspan=\"7\" style=\"width:11cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">25 × 25</font></font></td></tr><tr><td colspan=\"2\" rowspan=\"2\" style=\"width:147.15pt;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Recorrido de la torreta (mm)</font></font></td><td colspan=\"7\" style=\"width:11cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Dirección X: 300/235 (6 estaciones)</font></font></td></tr><tr><td colspan=\"7\" style=\"width:11cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Dirección Z: 600/850/1350/1850/2850</font></font></td></tr><tr><td colspan=\"2\" style=\"width:147.15pt;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Dia. </font><font style=\"vertical-align: inherit;\">de la pluma del contrapunto (mm)</font></font></td><td colspan=\"7\" style=\"width:11cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">φ75 (hy80 hyd. tailstock)</font></font></td></tr><tr><td colspan=\"2\" style=\"width:147.15pt;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Forma cónica de la pluma del contrapunto (MT No.)</font></font></td><td colspan=\"7\" style=\"width:11cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">MT No.5 (MT No.3 hyd. Contrapunto con husillo activo)</font></font></td></tr><tr><td colspan=\"2\" style=\"width:147.15pt;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Max. </font><font style=\"vertical-align: inherit;\">recorrido de la pluma del contrapunto (mm)</font></font></td><td colspan=\"7\" style=\"width:11cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">150 (130 contrapunto hidráulico)</font></font></td></tr><tr><td colspan=\"2\" style=\"width:147.15pt;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Recorrido transversal del contrapunto (mm)</font></font></td><td colspan=\"7\" style=\"width:11cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">± 15</font></font></td></tr><tr><td colspan=\"2\" style=\"width:147.15pt;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Motor principal</font></font></td><td colspan=\"7\" style=\"width:11cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">7.5kW&nbsp;</font></font></td></tr><tr><td colspan=\"2\" style=\"width:147.15pt;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Bomba de refrigerante</font></font></td><td colspan=\"7\" style=\"width:11cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">LDPB2-15 180W 3m3 / h</font></font></td></tr><tr><td colspan=\"2\" style=\"width:147.15pt;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Cinturón v</font></font></td><td colspan=\"3\" style=\"width:5cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">B1829 4 pzas</font></font></td><td colspan=\"4\" style=\"width:6cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">B1905 4 pzas</font></font></td></tr><tr><td colspan=\"9\" style=\"width:459pt;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Nota *: los datos después de \"/\" son para el torno equipado con una torreta horizontal de 6 estaciones (el diámetro de giro del disco de la herramienta se supone φ360).</font></font></td></tr><tr><td rowspan=\"5\" style=\"width:4cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Dimensión (L × W × H) </font></font><br><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">mm × mm × mm</font></font></td><td colspan=\"2\" style=\"width:62.1pt;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">750</font></font></td><td colspan=\"6\" style=\"width:10cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">2450 × 1450 × 1670</font></font></td></tr><tr><td colspan=\"2\" style=\"width:62.1pt;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">1000</font></font></td><td colspan=\"6\" style=\"width:10cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">2700 × 1450 × 1670</font></font></td></tr><tr><td colspan=\"2\" style=\"width:62.1pt;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">1500</font></font></td><td colspan=\"6\" style=\"width:10cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">3200 × 1450 × 1670</font></font></td></tr><tr><td colspan=\"2\" style=\"width:62.1pt;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">2000</font></font></td><td colspan=\"6\" style=\"width:10cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">3700 × 1450 × 1670</font></font></td></tr><tr><td colspan=\"2\" style=\"width:62.1pt;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">3000</font></font></td><td colspan=\"6\" style=\"width:10cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">4700 × 1500 × 1690</font></font></td></tr><tr><td rowspan=\"5\" style=\"width:4cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Tamaño de embalaje (L × W × H) </font></font><br><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">cm × cm × cm</font></font></td><td colspan=\"2\" style=\"width:62.1pt;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">750</font></font></td><td colspan=\"6\" style=\"width:10cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">308 (325) ** × 186 × 225</font></font></td></tr><tr><td colspan=\"2\" style=\"width:62.1pt;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">1000</font></font></td><td colspan=\"6\" style=\"width:10cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">313 (330) ** × 186 × 225</font></font></td></tr><tr><td colspan=\"2\" style=\"width:62.1pt;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">1500</font></font></td><td colspan=\"6\" style=\"width:10cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">363 (380) ** × 186 × 225</font></font></td></tr><tr><td colspan=\"2\" style=\"width:62.1pt;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">2000</font></font></td><td colspan=\"6\" style=\"width:10cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">413 (430) ** × 186 × 225</font></font></td></tr><tr><td colspan=\"2\" style=\"width:62.1pt;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">3000</font></font></td><td colspan=\"6\" style=\"width:10cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">504 (536) ** × 186 × 230</font></font></td></tr><tr><td rowspan=\"2\" style=\"width:4cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Peso neto de la máquina kg.</font></font></td><td colspan=\"2\" style=\"width:62.1pt;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Máquina</font></font></td><td style=\"width:70.9pt;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">750</font></font></td><td colspan=\"2\" style=\"width:2cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">1000</font></font></td><td style=\"width:2cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">1500</font></font></td><td style=\"width:2cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">2000</font></font></td><td style=\"width:42.5pt;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">3000</font></font></td></tr><tr><td colspan=\"2\" style=\"width:62.1pt;\">&nbsp;</td><td style=\"width:70.9pt;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">2050</font></font></td><td colspan=\"2\" style=\"width:2cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">2100</font></font></td><td style=\"width:2cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">2150</font></font></td><td style=\"width:2cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">2200</font></font></td><td style=\"width:42.5pt;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">3500</font></font></td></tr><tr><td style=\"width:4cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Agujero pasante de mandril hueco</font></font></td><td colspan=\"2\" style=\"width:62.1pt;\">&nbsp;</td><td colspan=\"6\" style=\"width:10cm;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">φ52 (con referencia al orificio pasante del mandril)</font></font></td></tr><tr><td colspan=\"9\" style=\"width:459pt;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Nota **: los datos entre paréntesis son para torno equipado con estación hidráulica.</font></font></td></tr></tbody></table>";
