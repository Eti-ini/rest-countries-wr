

function remove_light_mode_link(){
  var light = document.getElementById('lightmode');
  light.style.display = "none";
}
function darkmode(){
  var dark = document.getElementById('darkmode');
  var light = document.getElementById('lightmode');
  var navbar = document.getElementById("navbar");
  var barh3 = document.getElementById("barh3");
  // var gridbox = document.getElementById("gridbox");
  var grid8 = document.getElementById("gridbox8");
  // change light mode to dark mode
  document.body.style.backgroundColor = "hsl(207, 26%, 17%)";
  navbar.style.backgroundColor = "hsl(207, 26%, 17%)";
  // navbar.firstChild.style.color= "hsl(0, 0%, 98%)";
  light.style.color = "hsl(0, 0%, 98%)";
  barh3.style.color = "hsl(0, 0%, 98%)";
  var i;
  var item;
  for( i = 1; i < 9 ; i ++){
    item = document.getElementById("gridbox"+i);
    if(item == null){
      break;
    }
    item.style.backgroundColor = "hsl(209, 23%, 22%)";

  };

  change_text("p","hsl(0, 0%, 98%)");
  // change h5 function
  change_text("h5","hsl(0, 0%, 98%)");
  // call the text change funtion
  change_text("h2","hsl(0, 0%, 98%)");

  dark.style.display = "none";
  light.style.display = "block";
}

function lightmode(){
  
  var light = document.getElementById('lightmode');
  var dark = document.getElementById('darkmode');
  var navbar = document.getElementById("navbar");
  var barh3 = document.getElementById("barh3");
  // var h3 = document.getElementsByTagName("h3");
  // change light mode to light mode
  document.body.style.backgroundColor = "hsl(0, 0%, 98%)";
  navbar.style.backgroundColor = "hsl(0, 0%, 98%)";
  // navbar.firstChild.style.color= "hsl(0, 0%, 98%)";
  dark.style.color = "hsl(207, 26%, 17%)";
  barh3.style.color = "";
  light.style.display = "none";
  dark.style.display = "block";
  for( i = 1; i < 9 ; i ++){
    item = document.getElementById("gridbox"+i);
    if(item == null){
      break;
    }
    item.style.backgroundColor = "hsl(0, 0%, 98%)";
    // item.
  }
  change_text("p","hsl(207, 26%, 17%)");
  // change h5 function
  change_text("h5","hsl(207, 26%, 17%)");
  // call the text change funtion
  change_text("h2","hsl(207, 26%, 17%)");
}
function change_text(type,color){
  var item = document.getElementsByTagName(type);
  var l;
  for( l = 0; l < item.length; l++ ) {
    // do something
    item[l].style.color = color;
  };
}
