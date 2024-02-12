function getImages() {
    var images = document.getElementById("images").value;
    if (images.legnth == 1) {
        var img = createElement("img");
        var value = images;
        var src = img.setAttribute("src", value);
        var container = document.getElementById("allImages");
        container.append(img);
    }
}