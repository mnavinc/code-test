$(function(){
	var win = $(window),
		doc = $(document),
		body = $('body'),
		$self = $(this);
		
	// File upload
    $('.file-upload').change(function() {
        var filepath = this.value;
        var m = filepath.match(/([^\/\\]+)$/);
        var filename = m[1];
        $(this).parent('label').siblings('span').html(filename);
    });
});

$(".sr-only").click(function(){
    $(".navbar-toggle").toggleClass("active");
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.right = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.right = "0";
    document.body.style.backgroundColor = "white";
}