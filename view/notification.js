var StackNotification = {
	appendNotificaion: function(sbn){
		var actions = sbn.notiActions;
		if(actions){
			actions = JSON.parse(actions);
		}		

		var html = "<div class='col s12 col-padding' id='"+sbn.id+"'>";
		html += 		"<div class='card horizontal notification-item'>";
		html +=				"<div class='card-image grey'>";
		html += 				"<img class='icon' src='data:image/png;base64,"+sbn.icon+"'>";
		html +=				"</div>";
		html +=				"<div class='card-stacked'>";
		html +=					"<div class='card-content content-padding'>";
		html += 					"<p class='content-font title'>"+sbn.notification.title+"</p>"	
		html += 					"<p class='content-font'>"+sbn.notification.text+"</p>";
		html += 				"</div>";
		html +=					"<div class='card-action content-padding'>";

		for(index in actions){
			
			html += 					"<a href='#'><img class='action-icon' src='data:image/png;base64,"+actions[index].icon+"'>"+actions[index].title+"</a>";
			
		}

		html +=					"</div>";

		html +=				"</div>";
		html +=				"<div class='btn-clear'>";
		html +=					"<i class='material-icons clear-item' clearId='"+sbn.id+"'>clear</i>";
		html +=				"</div>";
		html +=			"</div>";
		html +=		"</div>";

		var notistack = $("#notistack").prepend(html);
	},

	clearNotification: function(elementID){
		var element = document.getElementById(elementID);
		if(element){
			$("#"+elementID).remove();
		}
	},

	doNotify: function(sbn){
		var notification = new Notification(sbn.notification.title, {
	      icon: "data:image/png;base64,"+sbn.icon,
	      body: sbn.notification.text,
	    });

	    notification.onclick = function () {
	         
	    }; 
	},
}