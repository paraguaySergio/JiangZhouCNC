/******************************************** SCRIPT HOME ****************************************************/
/************** FUNCTIONS DATA ***************/
/*
products_carousel = () => {
    for (let i = 0; i <= 16; i++) {
        document.write("<a class='carousel-item' id='carousel-item' href='productos/product_detail/?prodId=" + jsonProducts.products[i].id + "'><img src='img/productos/" + jsonProducts.products[i].img + ".jpg'><h6>" + jsonProducts.products[i].title + "</h6></a>");
    }
};
*/

list_products = () => {
    let numProduct = jsonProducts.products.length;
    for (let i = 0; i <= numProduct; i++) {
        document.write("<li><a href='productos/product_detail/?prodId=" + jsonProducts.products[i].id + "' style='color:#fff'>" + jsonProducts.products[i].title + "</a></li>");
    }
};

product_general = () => {
    let numProduct = jsonProducts.products.length;
    for (let i = 0; i <= numProduct; i++) {
        /* let idProd = jsonProducts.products[i].id;
         let ClickProduct = onclick = modalId(idProd);*/
        document.write("<div class='item item-1'><div class='card-content white-text'><div><img src='img/productos/" + jsonProducts.products[i].img + ".jpg' width='100%' alt='' " +
            "data-caption='" + jsonProducts.products[i].title + "' class=\'materialboxed\'> </div> <a href='productos/product_detail/?prodId=" + jsonProducts.products[i].id + "'>" + jsonProducts.products[i].title + "</a>" +
            "<span class='div-button'><a  href='productos/product_detail/?prodId=" + jsonProducts.products[i].id + "'>Más</a></span></div></div>");
    }
};
