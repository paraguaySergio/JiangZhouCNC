import "../js/products";

/*********** data GET ***********/
let prodId = getParameterByName('prodId');
showData(prodId);

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function showData(i) {
    console.log(i);
    let title_product = jsonProducts.products[2].title;
    console.log(title_product);

    let tamano = jsonProducts.products[2].size;
    console.log(tamano);

}
