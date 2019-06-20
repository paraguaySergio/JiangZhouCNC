/******************************************** SCRIPT PAGE PRODUCTS ****************************************************/
/*********** data GET ***********/
let catId = getParameterByName('catId');

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


categoriesProducts = () => {
    let catProducts = jsonProducts;
    for (item in catProducts) {
        document.write("<a href=\"../productos/?catId=" + item + "\"><li>" + item + "</li></a>");
    }
};

productByCategory = (catId) => {
    let cantPC = jsonProducts[catId]["products"].length;
    let prod = jsonProducts[catId]["products"];

    for (let i = 0; i <= cantPC; i++) {
        document.write("<div class=\"item-product\">\n" +
            "                <div class=\"img-product\">\n" +
            "                    <img src=\"../img/products/category" + i + "/product" + i + "/" + prod[i].img1 + ".jpg" + "\" alt=\"" + prod[i].title + "\">\n" +
            "                </div>\n" +
            "                <div class=\"title-product\">\n" +
            "                    <a href=\"product_detail/#\"><h5>" + prod[i].title + "</h5></a>\n" +
            "                </div>\n" +
            "            </div>");
    }
};

console.log(catId);
console.log(jsonProducts);