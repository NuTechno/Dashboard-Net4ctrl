// Initialize Firebase
    // The copied and pasted code from the app page
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAlbVSU_pTs6DVQI-QMnQO_aFUqPvgo4lY",
        authDomain: "web-app-3eb5e.firebaseapp.com",
        databaseURL: "https://web-app-3eb5e.firebaseio.com",
        projectId: "web-app-3eb5e",
        storageBucket: "web-app-3eb5e.appspot.com",
        messagingSenderId: "643203578636",
        appId: "1:643203578636:web:c0025425207221f554e729",
        measurementId: "G-8JLGQB4GBY"
    
      };
      
      firebase.initializeApp(config);
      
      // references the database
      var database = firebase.database();
    
      var clickCounter = 0;
    
      $("#submit").on("click", function(event) {
    
          event.preventDefault();
    
          var Name = $("#name").val().trim();
          var Street = $("#address").val().trim();
          var City = $("#city").val().trim();
          var Contact = $("#contact").val().trim();
          var Amount = $("#amount").val().trim();
          var Status = $("#status").val().trim();
    
          // var firstTimeConverted = moment(firstTrain, "HH:mm").subtract(1, "years");
          // var currentTime = moment().format("HH:mm");
          // var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
          // var remainder = diffTime % frequency;
          // var minutesAway = frequency - remainder;
          // var nextTrain = moment().add(minutesAway, "minutes");
    
          console.log(Name, Street, City, Contact, Amount, Status);
    
          var order = {
            fName: Name,
            fStreet: Street,
            fCity: City,
            fContact: Contact,
            fAmount: Amount,
            fStatus: Status

          }
          console.log(order);
          // console.log(newTrain.nextTrain);
    
          database.ref('orders/').push(order);
    
          console.log(order.fName);
          console.log(order.fStreet);
          console.log(order.fCity);
          console.log(order.fContact);
          console.log(order.fAmount);
          console.log(order.fStatus);
          
    
          alert("Order Succesfully Loaded");
    
          $("#name").val("");
          $("#address").val("");
          $("#city").val("");
          $("#contact").val("");
          $("#amount").val("");
          $("#status").val("");
        });
    
    
        //Read data in real
      database.ref('orders/').on("child_added", function(childSnapshot, prevChildKey) {
    
          // console.log the value of snapshot
          console.log(childSnapshot.val());
    
          // change the html associated with the number.
          var name = childSnapshot.val().fName;
          var street = childSnapshot.val().fStreet;
          var city = childSnapshot.val().fCity;
          var contact = childSnapshot.val().fContact;
          var amount = childSnapshot.val().fAmount;
          var status = childSnapshot.val().fStatus;
    
          console.log(name);
          console.log(street);
          console.log(city);
          console.log(contact);
          console.log(amount);
          console.log(status);
    
    
    
          // update the clickCounter variable with data from the database.
         $("#order-table > tbody").append("<tr><td>" + name + "</td><td>" + street + "</td><td>" +
      city + "</td><td>" + contact + "</td><td>" + amount + "</td><td>" + status + "</td><tr>");
    });
    
      
    
    
    
    