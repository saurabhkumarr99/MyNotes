function hideFrame(position) {
    document.getElementById(position).style.display="none";
}

function prepareFrame(position, src) {
    src='https://saurabhkumarr99.github.io/Java-Basic/src/'+src;
    var ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", src);
    ifrm.style.width = "100%";
    // ifrm.style.height = "480px";

    document.getElementById(position).innerHTML = "";
    document.getElementById(position).style.display="block";
    document.getElementById(position).appendChild(ifrm);
}

function prepareFrame2(position) {
    let cmds=`<h2>Compile and run java program</h2><br>
              <p>Step 1- Create a java program with .java extension</p> <br>
              <p>Step 2- compile the program<br>
              <code>javac HelloWorld.java</code></p><br>
              <p>Step 3-Run the class file<br>
              <code>java HelloWorld <br> java HelloWorld.java</code></p><br>
              <p>Step 4-Run java jar file<br>
              <code>java -jar HelloWorld.jar</code></p>`;

    document.getElementById(position).innerHTML = "";
    document.getElementById(position).style.display="block";
    document.getElementById(position).innerHTML = cmds;
}