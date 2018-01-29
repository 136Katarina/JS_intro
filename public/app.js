var app = function(){
addCat();
}
var addCat = function(){

var listOfCats = [
  { name: 'Boba', food: 'Sock fluff', image: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},
  { name: 'Barnaby', food: 'Tuna', image: "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg" },
  { name: 'Max', food: 'Whiskas Temptations', image:"http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg" },
  { name:'Hera', food: 'Salmon', image: "https://media.npr.org/assets/img/2017/05/19/543388_67338_orig_custom-ba0e447e41102bea4e3de3b4375b4a03260b586e-s700-c85.jpg"},
  { name: 'Hugo', food: 'Cracker', image: "http://kicia.eu/foto/kot_thai.jpg"}
];

var container = document.getElementById('cats');
for (var catObject of listOfCats) {
  var firstListObject = document.createElement("li");
  firstListObject.innerText = `Name: ${catObject.name}`;
  var secondListObject = document.createElement("li");
  secondListObject.innerText = `Favourite food: ${catObject.food}`;
  var thirdListObject = document.createElement("li");
  var image = document.createElement('img');
  image.src = catObject.image;
  image.width = '500';
  image.height = '290';

var ulList = document.createElement('ul');
ulList.style.listStyleType = "none";


ulList.appendChild(firstListObject);
ulList.appendChild(secondListObject);
ulList.appendChild(thirdListObject);
thirdListObject.appendChild(image);
container.appendChild(ulList);
}
}
document.addEventListener('DOMContentLoaded', app);
