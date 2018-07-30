var imgElement = document.getElementById("catImg");
var count = 0;
var countResult = document.getElementById("result");
var catNames = ['cat1','cat2','cat3'];

var selectedCatElement = document.getElementById("catImg1");

for (var i = 0; i < catNames.length; i++) {

    var catName = catNames[i];

    var elem = document.createElement('div');
    elem.textContent = catName;

    elem.addEventListener('click', (function(catNameCopy) {
        return function() {
            catNameId.innerHTML = "Cat Name: "+catNameCopy;
            document.getElementById("catImg").src="../assets/images/"+catNameCopy+".jpg";
         count=0;
             result.innerHTML = "Count: "+count;
        };
    })(catName));

    document.body.appendChild(elem);
};


imgElement.addEventListener('click', function(){
    count+=1;
    result.innerHTML = "Count: "+count;
}, false);

