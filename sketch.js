//Create variables here
var dog, dogHappy, dogImage, database, foodS, foodStock;
function preload()
{
  //load images here
  dogImage = loadImage("images/dogImg.png");
  dogHappy = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250, 250, 20, 20);
  dog.addImage(dogImage);
  dog.scale = 0.5
  database = firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value", readStock);

  
}


function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }
  drawSprites();
  //add styles here
   fill(255,255,254); 
   stroke("black");
   text("Food remaining : "+foodS,170,200); 
   textSize(13); 
   text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
   

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({food:x})
}