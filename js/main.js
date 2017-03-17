window.onload = function() {
	window.addEventListener ("scroll", scrollMenuTop);
}

function scrollMenuTop() {
	var mq = window.matchMedia("(max-width:850px)");
	var scrolled = window.scrollY;
	var x = document.querySelector("#name2");
	if ((scrolled>120)&&(mq.matches)) 
		{
			x.style.display = "block";
			x.style.display = "flex";
		}
	else { 	
			x.style.display = "none"
	};
};

window.addEventListener("load",function(){

  var offset = 1000;
  var skills = document.querySelectorAll(".empty");

  window.addEventListener("scroll", function(){

    for (var i = 0; i < skills.length; i++) {
      if(document.body.scrollTop >= skills[i].offsetTop - offset){
        skills[i].className = skills[i].id;
      }
    }
  });

});