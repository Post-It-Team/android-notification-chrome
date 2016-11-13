var database = firebase.database();

var notificationsRef = database.ref("notification");

notificationsRef.on('child_added', function(data) {
  var id = data.val().id;
  var item = document.getElementById(id);

  if(!item){
    var newPost = data.val();
    StackNotification.appendNotificaion(newPost);
  }
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

  var mDatabse = chrome.extension.getBackgroundPage().Database;

  for(index in mDatabse.notification){
    var item = mDatabse.notification[index];
    if(item){
      StackNotification.appendNotificaion(item);
    }
  }

  $(".btn-clear-all").on("click",function(){
  	$("#notistack").empty();
    notificationsRef.remove();
  });

  $("#notistack").on("click",".clear-item",function(){
  	var clearId = $(this).attr("clearId");
  	StackNotification.clearNotification(clearId);
  	notificationsRef.child(clearId).remove();
  	chrome.extension.getBackgroundPage().Database.notification = null;
  });
});