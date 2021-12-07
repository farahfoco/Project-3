/*
    Name: Farah Foco
    Course: Web application development CS412
    Assignment: Project 3
    Due date: 7 December 2021.
    Purpose: The purpose of this project is to apply HTML, CSS & JavaScript knowledge into making a functioning CV.
*/
console.log('Life of Farah Foco');


let languages = {type:"Bosnian", mt:"yes", speaking:"Full professional proficiency"};
console.log(languages);


function language() {
    return this.language + " " + this.type;
  }

  let skill_set = new Array('Programming languages (C++, Java, MathLab, Quartus, R, HTML)',
'Microsoft Excel',
'AutoCAD',
'Playing violin');
console.log(skill_set[0]);
console.log(skill_set[1]);
console.log(skill_set[2]);
console.log(skill_set[3]);

id = "demo5";
let timeline_of_my_education = {
  Primary_school:"Safvet-beg Basagic (2006-2015)",
  High_school: "First Bosniak Gymnasium - Cambridge International High School (2015-2019)",
  Higher_Education: "International University of Sarajevo (2019-now)"
};
document.getElementById("demo5").innerHTML = timeline_of_my_education.Primary_school +
timeline_of_my_education.High_school + timeline_of_my_education.Higher_Education;

src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js">

$(document).ready(function(){
  $("button").click(function(){
    $("h1").animate({
      left: '615px',
      opacity: '0.5px',
      height: '100px',
      width: '300px'
    });
  });
});
/*
let day;
switch (new Date().getDay()) {
  case 0:
  day = "Sunday";
    text = "Life is what happens when you're busy making other plans. -John Lennon";
    break;
  case 1:
    day = "Monday";
    text = "The way to get started is to quit talking and begin doing. -Walt Disney";
    break;
  case 2:
    day = "Tuesday";
    text = "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs";
    break;
  case 3:
    day = "Wednesday";
    text = "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt";
    break;
  case 4:
    day = "Thursday";
    text = "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey";
    break;
  case 5:
    day = "Friday";
    text = "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron";
    break;
  case  6:
  day = "Saturday";
    text = "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela";
    
}
document.getElementById("demo15").innerHTML = day +"-" + text;
*/
id="demo9"
id="demo10"
        if (new Date().getHours() < 18) {
          document.getElementById("demo9").innerHTML = "Good day!";
        }
        else{
            document.getElementById("demo10").innerHTML = "Good Evening!";
        }
id="demo4"

      
src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js">

$(document).ready(function(){
  $("button").click(function(){
    $("p10").toggle();
  });
});
