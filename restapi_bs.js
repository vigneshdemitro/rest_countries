    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",'https://restcountries.eu/rest/v2/all',false);
    Httpreq.send(null);
    var x = Httpreq.responseText;    
    json_obj = JSON.parse(x);
function load(){
    var bod = document.getElementById('body');
    var maindiv = document.createElement('div');
    maindiv.setAttribute('class','container-md');
    bod.appendChild(maindiv);
    var row = document.createElement('div');
    row.setAttribute('class','row');
    row.setAttribute('id','row')
    maindiv.appendChild(row);
    var row1 = document.createElement('div');
    row1.setAttribute('class','right');
    row1.setAttribute('id','right');
    maindiv.appendChild(row1)
    for(i=0;i<20;i++){
    var div = document.getElementById('row');
    var card = document.createElement('div');
    card.setAttribute('class','col-sm-3');
    var image = document.createElement('img');
    image.setAttribute('src',json_obj[i].flag);
    image.setAttribute('id',i);
    image.setAttribute('width','100');
    image.setAttribute('height','100');
    image.setAttribute('onclick','info(id)');
    card.appendChild(image);
    div.appendChild(card); 
    }
    row.appendChild(div);
}
function info(x){
    var b = border(x);
    var a = ("Name: "+json_obj[x].name+"<br>")+("Alpha2 Code: "+json_obj[x].alpha2Code+"<br>")+
            ("Capital: "+json_obj[x].capital+"<br>")+("Region: "+json_obj[x].region+"<br>")+
            ("Border: ")+b;    
    var c = document.getElementById("right");
    c.innerHTML = a;
    
}
function border(a){
    list = [];
    if (json_obj[a].borders.length == 0){
        list.push("No Border");
        return list; 
    }
    else{
    for(i=0;i<json_obj[a].borders.length;i++){
    list.push(json_obj[a].borders[i]);
    }
    return list; 
    }       
}
