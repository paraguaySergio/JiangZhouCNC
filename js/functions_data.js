
/******************************************** SCRIPT HOME ****************************************************/
/************** FUNCTIONS DATA ***************/
products_carousel = () => {
    for (let i = 0; i <= 16; i++) {
        document.write("<a class='carousel-item' id='carousel-item' href='#one!'><img src='img/productos/" + jsonProducts.products[i].img + ".jpg'><h6>" + jsonProducts.products[i].title + "</h6></a>");
    }
};

list_products = () => {
    for (let i = 0; i <= 16; i++) {
        document.write("<li><a href='productos/product_detail/?prodId=" + jsonProducts.products[i].id + "' style='color:#fff;'>" + jsonProducts.products[i].title + "</a></li>");
    }
};

product_general = () => {
    for (i = 0; i <= 16; i++) {
        document.write("<div class='item item-1'><div class='card-content white-text'><div><img src='img/productos/" + jsonProducts.products[i].img + ".jpg' width='100%' alt=''data-caption='" + jsonProducts.products[i].title + "'> </div> <a href='productos/product_detail/?prodId=" + jsonProducts.products[i].id + "'>" + jsonProducts.products[i].title + "</a> </div> </div>");
    }
};


/******************************************** SCRIPT PAGE PRODUCTS ****************************************************/
page_product_list_products = () => {
    for (let i = 0; i <= 16; i++) {
        document.write("<li><a href='product_detail/?prodId=" + jsonProducts.products[i].id + "'  style='color:#fff;'>" + jsonProducts.products[i].title + "</a></li>");
    }
};

page_product_general = () => {
    for (i = 0; i <= 16; i++) {
        document.write("<div class='item item-1'><div class='card-content white-text'><div><img src='../img/productos/" + jsonProducts.products[i].img + ".jpg' width='100%' alt='' data-caption='" + jsonProducts.products[i].title + "'> </div> <a href='product_detail/'>" + jsonProducts.products[i].title + "</a> </div> </div>");
    }
};