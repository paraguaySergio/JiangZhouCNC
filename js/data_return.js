function saveLocalStorage() {
    localStorage.setItem("products", JSON.stringify(jsonProducts.products));
}
saveLocalStorage();

/*Data products*/
listProductsG = (ruta) => {
    let cantProduct = jsonProducts.products.length;
    for (let i = 0; i <= cantProduct; i++) {
        document.write("<li><a href='" + ruta + "/?prodId=" + jsonProducts.products[i].id + "'  style='color:#fff;'>" + jsonProducts.products[i].title + "</a></li>");
    }
};
