var StackNotification = {
	appendNotificaion: function(sbn){
		var html = "<div class='col s12 col-padding' id='"+sbn.id+"'>";
		html += 		"<div class='card horizontal notification-item'>";
		html +=				"<div class='card-image grey'>";
		html += 				"<img class='icon' src='data:image/png;base64,"+sbn.image+"'>";
		html +=				"</div>";
		html +=				"<div class='card-stacked'>";
		html +=					"<div class='card-content content-padding'>";
		html += 					"<p class='content-font title'>"+sbn.notification.title+"</p>"	
		html += 					"<p class='content-font'>"+sbn.notification.text+"</p>";
		html += 				"</div>";
		html +=					"<div class='card-action content-padding'>";
		html += 					"<a href='#'>This is a link</a>";
		html +=					"</div>";
		html +=				"</div>";
		html +=				"<div class='btn-clear'>";
		html +=					"<i class='material-icons clear-item'>clear</i>";
		html +=				"</div>";
		html +=			"</div>";
		html +=		"</div>";

		var notistack = $(".notistack").prepend(html);
	},

	clearNotification: function(elementID){
		document.getElementById(elementID).remove();
	},

	doNotify: function(sbn){
		var notification = new Notification(sbn.notification.title, {
	      icon: "data:image/png;base64,"+sbn.image,
	      body: sbn.notification.text,
	    });

	    notification.onclick = function () {
	         
	    };	
	}

}