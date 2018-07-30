var imgElement = document.getElementById("catImg");
var counts = [0,0,0];
var catNames = ['cat1', 'cat2', 'cat3'];
var selectedCatIndex=0;

for (var i = 0; i < catNames.length; i++) {
    var catName = catNames[i];
    var elem = document.createElement('div');
    elem.textContent = catName;

    elem.addEventListener('click', (function(catNameCopy,iCopy) {
        return function() {
            catNameId.innerHTML = "Cat Name: "+catNameCopy;
            document.getElementById("catImg").src="../assets/images/"+catNameCopy+".jpg";
            selectedCatIndex=iCopy;
            console.log("iCopy=" +iCopy);
            result.innerHTML = "Count: "+counts[selectedCatIndex];
        };
    })(catName,i));

    document.body.appendChild(elem);
};


imgElement.addEventListener('click', function(){
    console.log("selected cat index="+selectedCatIndex);
    counts[selectedCatIndex]+=1;
    result.innerHTML = "Count: "+counts[selectedCatIndex];
}, false);

