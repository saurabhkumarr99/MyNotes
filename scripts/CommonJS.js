function hideFrame(position) {
    document.getElementById(position).style.display="none";
}

function prepareFrame(position, src) {
    src='https://saurabhkumarr99.github.io/Java-Revision/'+src;
    var ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", src);
    ifrm.style.width = "100%";
    // ifrm.style.height = "480px";

    document.getElementById(position).innerHTML = "";
    document.getElementById(position).style.display="block";
    document.getElementById(position).appendChild(ifrm);
}