//alert('hello');

// var nav='hi iam js'; //declar var type is : string
// console.log('hi iam maen');
//console.log(nav);
 //console.log(typeof(nav)); 
//الtype of بعطيني نوع السطر يلي كتبته
//console.log("this var is",typeof(nav),":",nav); //print the var type and value
//nav=25; //ressign the value of var 
//console.log("this var is",typeof(nav),":",nav);
//console.log('#'.repeat(20))
// مره 20 # ال علامه  بتطبع الريبيت

//const nav2='hi iam nav2';
//nav2=23; //constيعني ثابت ما بنقدر نغير قيمته
// console.log("this const is ",typeof(nav2),":",nav2);

// var nav3;
// console.log("this const is ",typeof(nav3),":",nav3); //undefined nav3غير معرف لانه ما مال الها قيمه 
// nav3=25;
// console.log("this const is ",typeof(nav3),":",nav3);

//var nav4=null;
//console.log("this const is ",typeof(nav4),":",nav4);

var h1= document.getElementById('maen');
//  textContact or innerHTML contain the text inside the tag بتجيب التكست عن طريق التيكست او عن طريق ال اينر
//console.log(h1);
console.log(h1.innerHTML);
//  change the text inside the tag
//الاينر بتجيب حرفي لو كان بتجيب ال بوتن او الدايف كامل وهيك
// التيكست بتجيب شو دوا البوتن او جوا ال الدايف
h1.innerHTML='malkawii';//h1 الجمله يلي بتعرل ال 

h1.style.color='black'; //change the style color for h1
h1.style.backgroundColor='white';//change the stylefor backgroundcolor for h1

var img = document.getElementsByTagName('img');
console.log(img);
// img[1].src='https://www.w3schools.com/js/pic_bulbon.gif';
// img[3].width= '1000';

// img[7].src='https://www.w3schools.com/js/pic_bulbon.gif';

