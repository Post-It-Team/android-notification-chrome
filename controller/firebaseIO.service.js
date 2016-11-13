
// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
  apiKey: "AIzaSyDkOZ9PL2YSi1CSJ6SHfxftLqijnGrPWjI",
  authDomain: "androidstatus-f8065.firebaseapp.com",
  databaseURL: "https://androidstatus-f8065.firebaseio.com"
};
firebase.initializeApp(config);

// Get a database reference to our posts
var database = firebase.database();

var notificationsRef = database.ref("notification");

notificationsRef.on('child_added', function(data) {
  var newPost = data.val();
  StackNotification.appendNotificaion(newPost);
  StackNotification.doNotify(newPost);
  Database.notification.push(newPost);
});

notificationsRef.on('child_changed', function(data) {
  StackNotification.doNotify(data.val());
  
  var id = data.val().id;
  //replace notification in database;
  for(index in Database.notification){
  	var iNotification = Database.notification[index];
  	if(id == iNotification.id){
  		Database.notification[index] = data.val();
  	}
  }

});

notificationsRef.on('child_removed', function(data) {
  var id = data.val().id;

  //replace notification in database;
  for(index in Database.notification){
  	var iNotification = Database.notification[index];
  	if(id == iNotification.id){
  		Database.notification[index] = null;
  	}
  }
  
});


