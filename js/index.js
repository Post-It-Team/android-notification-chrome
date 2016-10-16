var ref = new Firebase("https://androidstatus.firebaseio.com/notification");

ref.on("child_added", function(snapshot, prevChildKey) {
  var newPost = snapshot.val();
  StackNotification.appendNotificaion(newPost);
});

ref.on("child_changed", function(snapshot) {
  var changedPost = snapshot.val();
  var id = changedPost.id;
  StackNotification.clearNotification(id);
  StackNotification.appendNotificaion(changedPost);
});

ref.on("child_removed", function(snapshot) {
  var deletedPost = snapshot.val();
  var id = deletedPost.id;
  StackNotification.clearNotification(id);
  console.log("has posts removed id = "+id);
});