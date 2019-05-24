function saveLocalStorage() {
    localStorage.setItem("products", JSON.stringify(jsonProducts.products));
}
saveLocalStorage();


/*Data products*/
list_products = (ruta) => {
    for (let i = 0; i <= 16; i++) {
        document.write("<li><a href='" + ruta + "/?prodId=" + jsonProducts.products[i].id + "'  style='color:#fff;'>" + jsonProducts.products[i].title + "</a></li>");
    }
};
