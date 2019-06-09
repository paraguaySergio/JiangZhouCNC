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
    for (let i = 0; i <= 16; i++) {
        document.write("<li><a href='?prodId=" + jsonProducts.products[i].id + "' style='color:#fff;'>" + jsonProducts.products[i].title + "</a></li>");
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


const product0 = "<table width=\"98%\" border=\"0\" align=\"center\" cellpadding=\"5\" cellspacing=\"0\">\n" +
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

const product1 = "<table>\n" +
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


const product2 = "<table border=\"1\" style=\"width: 650px\">\n" +
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

const product13 = "Sin Descripción";
