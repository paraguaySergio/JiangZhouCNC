/*********** data GET ***********/
let prodId = getParameterByName('prodId');
showData(prodId);

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function showData(idProduct) {
    console.log(idProduct);

}
