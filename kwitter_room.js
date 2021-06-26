
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyC8TRkZ6kJqkTkplMJPPSCTxU7zT_rKERM",
      authDomain: "class-test-ff3ee.firebaseapp.com",
      databaseURL: "https://class-test-ff3ee-default-rtdb.firebaseio.com",
      projectId: "class-test-ff3ee",
      storageBucket: "class-test-ff3ee.appspot.com",
      messagingSenderId: "853218388537",
      appId: "1:853218388537:web:b878669c6d90c54cf2bbe8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room_name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function getData()
 {firebase.database().ref("/").on('value', function(snapshot) {
       document.getElementById("output").innerHTML = "";
       snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - "+Room_names);
row = "<div class = 'room_name' id = "+ Room_names+" onclick = 'redirectToRoomName(this.id)'>#" +Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End coder
      });});}
getData();
function redirectToRoomName (name){
      console.log(name);
      
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}