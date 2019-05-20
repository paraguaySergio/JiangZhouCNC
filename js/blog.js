let dataBlog = jsonBlog.blog;
let numPosts = jsonBlog.blog.length;

let contentBlog = document.getElementById("contenido-post");

for (let i = 0; i <= numPosts; i++) {
    let contentBlog = "<div class='img-post'><img src='../img/productos/" + dataBlog[i].img + ".jpg' alt=''></div><div class='description-post'><h5>" + dataBlog[i].title + "</h5><p>" + dataBlog[i].description + "</p><a class='waves-effect waves-light btn modal-trigger' href='#modal1' onclick='leerMas()'>Leer Mas</a></div>";
}

contentBlog.innerHTML;

