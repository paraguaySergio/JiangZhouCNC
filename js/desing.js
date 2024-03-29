let myWidth = 0, myHeight = 0;
detectResolution = () => {
    if (typeof (window.innerWidth) == 'number') {
        //No-IE
        myWidth = window.innerWidth;
        myHeight = window.innerHeight;
    } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        //IE 6+
        myWidth = document.documentElement.clientWidth;
        myHeight = document.documentElement.clientHeight;
    } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
        //IE 4 compatible
        myWidth = document.body.clientWidth;
        myHeight = document.body.clientHeight;
    }
    return myWidth;
};
detectResolution();

window.onload = function () {
    console.log(myWidth);
    let classContain = document.getElementById("container-article");
    let widthMobile = 702;
    if (myWidth <= widthMobile) {
        classContain.className = "container-fluid";
    } else {
        classContain.className = "container";
    }
    console.info(classContain.className);
};

