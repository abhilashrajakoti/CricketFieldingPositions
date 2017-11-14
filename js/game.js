/*function createTable() {
    var grid_table = document.createElement("TABLE");
    var rows = 25;
    var cols = 25;
    var row;
    for (var i = 0; i < rows; i++) {
        row = grid_table.insertRow(-1);
        for (var j = 1; j <= cols; j++) {
            var cell = row.insertCell(-1);
            var pixel = document.createElement("SPAN");
            pixel.id = i * rows + j;
            pixel.addEventListener('click', getPixelId);
            pixel.innerHTML = i * rows + j;
            pixel.style.color = 'green'
            //  pixel.style.display='b';
            cell.appendChild(pixel);
        }

    }

    var divEle = document.getElementById("tablein");
    divEle.innerHTML = "";
    divEle.appendChild(grid_table);
}

function getPixelId() {
    alert(this.id);
    //this.style.display='none';
}

function setFieldPosition(id) {
    //var id=this.id;
    gameAPIAjax(id);
    //alert(posName);
    ;

}*/

/*function gameAPIAjax(id) {
    var xhttp = new XMLHttpRequest();
    var jsonObj = null;;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            jsonObj = JSON.parse(this.response);
            document.getElementById("positonName").textContent = jsonObj.name;
        }

    };
    xhttp.open("GET", "http://localhost:8080/gameapi/restapi/pixels/" + id, true);

    xhttp.send();

}*?

/*function showFieldPosition() {
    var target="positonName"+this.id;
    document.getElementById(target).style.display = "block";
}

function hideFieldPosition(){
    var target="positonName"+this.id;
    document.getElementById(target).style.display = "none";
}*/

function populateGround() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var jsonObj = JSON.parse(this.response);
            var outerDiv = document.getElementById("fore-ground");
            for (var i = 0; i < jsonObj.length; i++) {

                //var div = document.createElement("DIV");
                //div.className = "fieldPosDiv" + jsonObj[i].id;

                var pixel = document.createElement("IMG");
                pixel.id = jsonObj[i].id;
                pixel.title=jsonObj[i].name;
                pixel.src = "images/round3.jpg";
                pixel.style.height = "15px";
                pixel.style.width = "15px";
                pixel.style.position = "fixed";
                pixel.style.top = jsonObj[i].cssTop + "px";
                pixel.style.left = jsonObj[i].cssLeft + "px";
                

                /*var span = document.createElement("SPAN");
                span.id = "positonName" + jsonObj[i].id;
                span.textContent = jsonObj[i].name;
                span.style.display = "none";
                span.style.zIndex=99999;*/
                
                // div.appendChild(pixel);
                // // div.appendChild(span);
                // div.style.position = "absolute";
                // div.style.top = jsonObj[i].cssTop + "px";
                // div.style.left = jsonObj[i].cssLeft + "px";
                
                
                outerDiv.appendChild(pixel);
                
                /*pixel.addEventListener("mousemove",showFieldPosition);
                pixel.addEventListener("mouseout",hideFieldPosition);*/ 

            }
        }
    };
    xhttp.open("GET", "http://localhost/gameapi/restapi/pixels/", true);

    xhttp.send()

}
