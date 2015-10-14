var makeFox = function(){
		$('polygon').each(function() {

		var minY = -1000;
		var maxY = 0;

		var minX = -1000;
		var maxX = 1000;

		var randomY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
		var randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;


		var animation = new TimelineLite();
	   animation.set(this, { transformOrigin:"50% 50%", position: "absolute", x: randomX, y: randomY, rotation: randomX, scale: 1});
	   animation.to(this, 3, { x: 0, y: 0, rotation: 0, scale: 1, ease: Power4.easeInOut, y: 0 }, 0.5);

	});
}

$(document).ready(function(){
	makeFox();
	$('#jump').on("click", function(e){
		e.preventDefault();
		makeFox();
	});
	
})
