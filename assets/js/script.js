var elem1 = document.getElementById("catImg1");
var count1 = 0;
var countResult1 = document.getElementById("result1");
var catName1 = "Bosy";
catNameId1.innerHTML = "Cat Name: "+catName1;
elem1.addEventListener('click', function(){
    count1+=1;
    countResult1.innerHTML = "Count: "+count1;
    console.log(count1);
}, false);


var elem2 = document.getElementById("catImg2");
var count2 = 0;
var countResult2 = document.getElementById("result2");
var catName2 = "Momo";

catNameId2.innerHTML = "Cat Name: "+catName2;
elem2.addEventListener('click', function(){
    count2+=1;
    countResult2.innerHTML = "Count: "+count2;
//    catNameId2.innerHTML = "Cat Name: mewooooooooo";
    console.log(count2);
}, false);

