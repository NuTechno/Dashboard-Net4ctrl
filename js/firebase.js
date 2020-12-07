
this.getdata();
function getdata(){
    firebase.database().ref('stats/').once('value').then(function (snapshot){
    
        var mysales = snapshot.val().TotalSales;
        var revenue = snapshot.val().TotalRevenue;
        var orders = snapshot.val().Orders;
        
        document.getElementById('amount').innerHTML = mysales;
        document.getElementById('revenue_amount').innerHTML = revenue;
        document.getElementById('order_amount').innerHTML = orders;

    
        })
    }

    