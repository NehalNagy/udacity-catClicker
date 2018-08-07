var imgElement = document.getElementById("catImg");
var selectedCatIndex=0;

var cats=[{name: 'cat1',count: 0, imgURL: "../assets/images/cat1.jpg"},
          {name: 'cat2',count: 0, imgURL: "../assets/images/cat2.jpg"},
          {name: 'cat3',count: 0, imgURL: "../assets/images/cat3.jpg"}];


for (var i = 0; i < cats.length; i++) {
    var catName = cats[i].name;

    var elem = document.createElement('div');
    elem.textContent = catName;

//    var elem = document.createElement("div");
//    var t = document.createTextNode(catName);
//    elem.appendChild(t);
//    document.getElementById("catList").appendChild(elem);


    elem.addEventListener('click', (function(catNameCopy,iCopy) {
        return function() {
            catNameId.innerHTML = "Cat Name: "+catNameCopy;
            document.getElementById("catImg").src=cats[iCopy].imgURL;
            selectedCatIndex=iCopy;
            result.innerHTML = "Count: "+cats[iCopy].count;
        };
    })(catName,i));

    document.body.appendChild(elem);
};


imgElement.addEventListener('click', function(){
    console.log("selected cat index="+selectedCatIndex);
    cats[selectedCatIndex].count+=1;
    result.innerHTML = "Count: "+ cats[selectedCatIndex].count;
}, false);

