 // Initialize Firebase
var config = {
  apiKey: "AIzaSyBAOJ9b7g4q-j9iXfauDmEA8GucGkqjvcc",
  authDomain: "fir-trainapp.firebaseapp.com",
  databaseURL: "https://fir-trainapp.firebaseio.com",
  storageBucket: "fir-trainapp.appspot.com",
  messagingSenderId: "183389769681"
};
firebase.initializeApp(config);
var database = firebase.database();


$('#addTrainButton').on("click", function() {
  //Take User Input
  var trainName = $("#trainNameInput").val().trim();
  var destination = $("#destinationInput").val().trim();
  var firstTrain = moment($("#timeInput").val().trim(), "HH:mm").format("HH:mm");
  var frequency = $("#frequencyInput").val().trim();
  // to create local temporary object to hold train data
  var newTrain = {
      name: trainName,
      place: destination,
      ftrain: firstTrain,
      freq: frequency
    }
    //Uploads train data to database
  database.ref().push(newTrain);
  console.log(newTrain.name);
  // clears all the text-boxes
  $("#trainNameInput").val("");
  $("#destinationInput").val("");
  $("#timeInput").val("");
  $("#frequencyInput").val("");
  // Prevents moving to new page
  return false;



  //I was having trouble with FireBase, this is what I have so far
});





















