/******************************************** SCRIPT PAGE PRODUCTS ****************************************************/
page_product_list_products = () => {
    let cantLP = jsonProducts.products.length;
    for (let i = 0; i <= cantLP; i++) {
        document.write("<li><a href='product_detail/?prodId=" + jsonProducts.products[i].id + "'  style='color:#fff;'>" + jsonProducts.products[i].title + "</a></li>");
    }
};

page_product_general = () => {
    let cantPG = jsonProducts.products.length;
    for (i = 0; i <= cantPG; i++) {
        document.write("<div class='item item-1'><div class='card-content white-text'><div><img src='../img/productos/" + jsonProducts.products[i].img + ".jpg' width='100%' alt='' data-caption='" + jsonProducts.products[i].title + "'> </div> <a href='product_detail/?prodId=" + jsonProducts.products[i].id + "'>" + jsonProducts.products[i].title + "</a><span class='div-button'><a  href='product_detail/?prodId=" + jsonProducts.products[i].id + "'>Cotizar</a></span></div> </div>");
    }
};