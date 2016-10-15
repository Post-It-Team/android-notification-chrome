// Get a database reference to our posts
var ref = new Firebase("https://androidstatus.firebaseio.com/notification");

// Attach an asynchronous callback to read the data at our posts reference
// ref.on("value", function(snapshot) {
//   console.log(snapshot.val());
//   appendNotificaion(snapshot.val());
// }, function (errorObject) {
//   console.log("The read failed: " + errorObject.code);
// });

ref.on("child_added", function(snapshot, prevChildKey) {
  var newPost = snapshot.val();
  console.log(newPost);
  Notification.appendNotificaion(newPost);
});

ref.on("child_changed", function(snapshot) {
  var changedPost = snapshot.val();
  var id = changedPost.id;

  console.log("The updated post title is " + changedPost.id);
});

ref.on("child_removed", function(snapshot) {
  var deletedPost = snapshot.val();
  var id = deletedPost.id;
  console.log("has notification removed! id = " +id);
  Notification.clearNotification(id);
});