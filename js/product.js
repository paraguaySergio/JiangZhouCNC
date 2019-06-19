/******************************************** SCRIPT PAGE PRODUCTS ****************************************************/
page_product_list_products = () => {
    let cantLP = jsonProducts.products.length;
    for (let i = 0; i <= cantLP; i++) {
        document.write("<li><a href='product_detail/?prodId=" + jsonProducts.products[i].id + "'  style='color:#fff;'>" + "<b style='color:#f44336'>-> </b> " + jsonProducts.products[i].title + "</a></li>");
    }
};

page_product_general = () => {
    let cantPG = jsonProducts.products.length;
    for (i = 0; i <= cantPG; i++) {
        document.write("<div class='item item-1'><div class='card-content white-text'><div><img src='../img/productos/" + jsonProducts.products[i].img + ".jpg' width='100%' alt='" + jsonProducts.products[i].title + "' data-caption='" + jsonProducts.products[i].title + "' class=\'materialboxed\'> </div> <a href='product_detail/?prodId=" + jsonProducts.products[i].id + "'>" + jsonProducts.products[i].title + "</a><span class='div-button'><a  href='product_detail/?prodId=" + jsonProducts.products[i].id + "'>Más</a></span></div> </div>");
    }
};