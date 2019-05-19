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