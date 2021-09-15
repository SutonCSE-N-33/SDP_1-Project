$(function () {});


//testimonial Section

var clientName = document.querySelector(".client-name");
var clientImage = document.querySelector(".client-img");
var clientText = document.querySelector("#customer-text");
var prevBtn = document.querySelector(".prevBtn");
var nextBtn = document.querySelector(".nextBtn");
var customers = [];
let count = 0;

function Constructor(img, name, text){
           this.img = img;
           this.name = name;
           this.text = text;
}



function createCustomer(img, name, text){
    let fullImg = "assets/img/member-"+img+".jpg";
    let cunstomerData = new Constructor(fullImg,name,text);
    customers.push(cunstomerData);
}


createCustomer(1,"Parthib",'Lorem ipsum dolor sit amet consectetur adipisicing elit.dolor sit amet consectetur adipisicing');
createCustomer(2, 'Partha Chowdury', `Contrary to popular belief, Lorem Ipsum is not simply random text.dolor sit amet consectetur adipisicing`);
 createCustomer(3, 'Anik Mollik', 'There are many variations of passages of Lorem Ipsum available.dolor sit amet consectetur adipisicing');
createCustomer(4, 'Nazrul islam Suton', 'If you are going to use a passage of Lorem Ipsum, you need to be sure dolor sit amet consectetur adipisicing.');
createCustomer(5, 'Shrabonti mitro', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.dolor sit amet consectetur adipisicing');


nextBtn.addEventListener("click", function(){
count++;
if(count > customers.length - 1){
    count = 0;
    clientImage.src = customers[count].img;
    clientName.textContent = customers[count].name;
    clientText.textContent = customers[count].text;
}else{
    clientImage.src = customers[count].img;
    clientName.textContent = customers[count].name;
    clientText.textContent = customers[count].text;
}
})

prevBtn.addEventListener("click", function(){
    count--;
    if(count < 0){
        count = customers.length - 1;
        clientImage.src = customers[count].img;
        clientName.textContent = customers[count].name;
        clientText.textContent = customers[count].text;
    }else{
        clientImage.src = customers[count].img;
        clientName.textContent = customers[count].name;
        clientText.textContent = customers[count].text;
    }
    })