// Get a database reference to our posts
var ref = new Firebase("https://androidstatus.firebaseio.com/notification");

ref.on("child_added", function(snapshot, prevChildKey) {
  var newPost = snapshot.val();
  StackNotification.doNotify(newPost);
});