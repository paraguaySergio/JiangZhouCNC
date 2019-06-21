/******************************************** SCRIPT PAGE PRODUCTS ****************************************************/
/*********** data GET ***********/
let idCat = getParameterByName('idCat');

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


categoriesProducts = () => {
    let catProducts = jsonProducts;
    for (item in catProducts) {
        document.write("<a href=\"../productos/?idCat=" + item + "\"><li>" + item + "</li></a>");
    }
};

productByCategory = (idCat) => {
    let cantPC = jsonProducts[idCat]["products"].length;
    let prod = jsonProducts[idCat]["products"];


    for (let item in prod) {
        document.write("<div class=\"item-product\">\n" +
            "                <div class=\"img-product\">\n" +
            "                    <img src=\"../img/products/" + prod[item].img1 + "\" alt=\"" + prod[item].title + "\">\n" +
            "                </div>\n" +
            "                <div class=\"title-product\">\n" +
            "                    <a href=\"product_detail/?idCat=" + idCat + "&?idProd=" + item + "\"><h5>" + prod[item].title + "</h5></a>\n" +
            "                </div>\n" +
            "            </div>");
    }
};

// console.log(idCat);
// console.log(jsonProducts);