// jshint devel:true
      
$(document).ready(function() {
	$('#myCarousel').carousel({
	interval: 0
	})
    
    $('#myCarousel').on('slid.bs.carousel', function() {
    	//alert("slid");
	});
    
    
});

