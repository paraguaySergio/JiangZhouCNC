/******************************************** SCRIPT DETAIL PRODUCT ****************************************************/
/*********** data GET ***********/
let idCat = getParameterByName('idCat');
let idProd = getParameterByName('idProd');

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

/*JSON CAPTURADO*/
// let objServ = jsonServicios.servicios[idServ];

let dataProduct = jsonProducts[idCat]["products"][idProd];

// console.log(dataProduct.detail_description[0].description1);
// console.log(jsonProducts[catId]["products"][idProd]);
// console.log(dataProduct.title);

categoriesProductsInDetail = () => {
    let catProducts = jsonProducts;
    for (let item in catProducts) {
        document.write("<a href=\"../../productos/?idCat=" + item + "\"><li>" + item + "</li></a>");
    }
};
