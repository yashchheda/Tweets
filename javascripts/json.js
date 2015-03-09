var main = function () {
    "use strict";

$("#driver").click(function(event){
	console.log("clicked");
	var username=$("#username").val();
	//var search=$("#search").val();
	$(".photos").html("");
	$.ajax({
		url:"http://twitcher.steer.me/user_timeline/"+username+"?key=dxy4936t",
		method:"GET",
		success:function(data){
			console.log(data);
			$.each(data, function(key, value){
				//console.log(key + "" +value.text);
				
            $(".photos").append(value.text + "<br/>");
        });
		}
	});
});
};
$(document).ready(main);