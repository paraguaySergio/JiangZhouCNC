function saveLocalStorage() {
    localStorage.setItem("products", JSON.stringify(jsonProducts.products));
}

saveLocalStorage();
