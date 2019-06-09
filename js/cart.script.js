var product = "XCD 3,5/45MM";

function myFunction() {
  if (document.body.scrollTop > 960) {
    product = "XCD 2,8/65MM";
    document.getElementById("myP").className = "";
  } else if (document.body.scrollTop > 400) {
    product = "XCD 3,5/45MM";
    document.getElementById("myP").className = "";
  } else if (document.body.scrollTop > 100){
    product = "XCD 2,8/135MM";
    document.getElementById("myP").className = "";
  }
  document.getElementById("display").innerHTML = product;
}


function js_scrollSliderdown() {
  window.scrollTo(0, 960);
}

function js_scrollSliderup() {
  window.scrollTo(0, 0);
}

window.onscroll = function() {
  myFunction()
};
