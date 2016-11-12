var database = firebase.database();

var notificationsRef = database.ref("notification");

notificationsRef.on('child_added', function(data) {
  StackNotification.appendNotificaion(data.val());
});

notificationsRef.on('child_changed', function(data) {
  var id = data.val().id;
  StackNotification.clearNotification(id);
  StackNotification.appendNotificaion(data.val());
});

notificationsRef.on('child_removed', function(data) {
  var id = data.val().id;
  StackNotification.clearNotification(id);
  
});


$(document).ready(function() {
  $(".btn-clear-all").on("click",function(){
  	$("#notistack").empty();

  });

  $("#notistack").on("click",".clear-item",function(){
  	var clearId = $(this).attr("clearId");
  	StackNotification.clearNotification(clearId);
  	notificationsRef.child(clearId).remove();
  	
  });
});