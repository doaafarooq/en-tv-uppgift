
    
    $(function() {
    
    
    /*download*/


    let download111 = new XMLHttpRequest()
    download111.onload = function(){
        if(this.readyState == 4 && this.status == 200){
            var object45 = JSON.parse(this.response);
        
            console.log(object4);
            
            $("#online").text(object45[1].circleValue);
            $("#offline").text(object45[0].circleValue);
        }
    }

    download111.open("GET" , "https://inlupp-fa.azurewebsites.net/api/downloads" , true);
    download111.send();

    /**invoice */
    let invoice= new XMLHttpRequest();
    invoice.onload = function(){
        if(this.readyState == 4 && this.status == 200){
            var object13 = JSON.parse(this.response);

            for(var i = 0; i < object13.length; i++){
        
                var badgestatusclass;
                
                if(object13[i].status == "Pågående") {
                    badgestatusclass = "badge-success";
                } 
                else if(object13[i].status == "Öppen") {
                    badgestatusclass = "badge-warning";
                }
                else if(object13[i].status == "Tillfälligt stoppad") {
                    badgestatusclass = "badge-danger";
                }
                else {
                    badgestatusclass = "";
                }        

                var trInfo = 
                    `<tr>
                        <td>${object13[i].bestPrice}</td>
                        <td>${object13[i].customer}</td>
                        <td>${object13[i].shipping}</td>
                        <td class="font-weight-bold">${object13[i].purchasedPrice}</td>
                        <td>${object13[i].bestPrice}</td>
                        <td>
                            <div class="badge ${badgestatusclass} badge-fw">${object13[i].status}</div>
                        </td>
                    </tr>`;

                $('#open-invoices tbody').append(trInfo);
            }
        }
    }
    invoice.open("GET" , "https://inlupp-fa.azurewebsites.net/api/open-invoices" , true);
    invoice.send();


    let tickes = new XMLHttpRequest();
    tickes.onload = function(){
       if(this.readyState == 4 && this.status == 200){
            $('.yearsDrobDown').html('');
          

            var object16 = JSON.parse(this.response);
            console.log(object16);
            
            for(var i = 0 ; i < object16.year.length ; i++){
            
                $('.yearsDrobDown').append('<a class="dropdown-item" href="#">'+object16.year[i]+'</a>');
            }
      
            for( var i=0; i < object16.tickets.length;i++) {
             
                let names = object16.tickets[i].name.split(" ");
                let initials = names[0].charAt(0) + names[1].charAt(0);
            
                var test = 
                `<tr>
                    <td class="pl-0">
                    <div class="icon-rounded-primary icon-rounded-md">
                        <h4 class="font-weight-medium">${initials}</h4>
                    </div>
                    </td>
                    <td>
                    <p class="mb-0">${object16.tickets[i].name}</p>
                    <p class="text-muted mb-0">${object16.tickets[i].city}</p>
                    </td>
                    <td>
                    <p class="mb-0">${object16.tickets[i].date}</p>
                    <p class="text-muted mb-0">${object16.tickets[i].project}</p>
                    </td>
                    <td>
                    <p class="mb-0">${object16.tickets[i].project}</p>
                    <p class="text-muted mb-0">${object16.tickets[i].other}</p>
                    </td>
                    <td class="pr-0">
                    <i class="mdi mdi-dots-horizontal icon-sm cursor-pointer"></i>
                    </td>
                </tr>`;       
        
                $("#tickets-table tbody").append(test);
            } 
          
        }
    
    }
    tickes.open("GET" , "https://inlupp-fa.azurewebsites.net/api/tickets" , true);
    tickes.send(); 

    let totalsales1 = new XMLHttpRequest();
    totalsales1.onload =function(){
        if(this.readyState == 4 &&this.status == 200){
            var object8 = JSON.parse(this.response);
            console.log(object8);
            var  $number =  object8.amount  + "" +  object8.currency
            console.log($number)
            $("#nummer1").text($number);
            
        }
    }
    totalsales1.open("GET" , "https://inlupp-fa.azurewebsites.net/api/total-growth" , true);
    totalsales1.send();



    let totalorder = new XMLHttpRequest();
    totalorder.onload =function(){
        if(this.readyState == 4 &&this.status == 200){
            var object9 = JSON.parse(this.response);
          
            var  $n =  object9.amount  + "" +  object9.currency
            console.log($n)
            $("#nu").text($n);
            
        }
    }
    totalorder.open("GET" , "https://inlupp-fa.azurewebsites.net/api/total-orders" , true);
    totalorder.send();


    let totalpurchases = new XMLHttpRequest();
    totalpurchases.onload = function(){
        if(this.readyState == 4 &&this.status == 200){
            var object111 = JSON.parse(this.response);
            console.log(object111);
            var  $number100 =  object111.amount  + "" +  object111.currency
        
        $("#nummer100").text($number100);
    
        }
    }
    totalpurchases.open("GET" , "https://inlupp-fa.azurewebsites.net/api/total-purchases" , true);
    totalpurchases.send(); 

    let totalsales15 = new XMLHttpRequest();
    totalsales15.onload =function(){
        if(this.readyState == 4 &&this.status == 200){
            var object122 = JSON.parse(this.response);
          //  console.log(object122);
            var  $bb =  object122.amount  + "" +  object122.currency
            console.log($bb)
            $("#b").text($bb);
            
        }
    }
    totalsales15.open("GET" , "https://inlupp-fa.azurewebsites.net/api/total-sales" , true);
    totalsales15.send();

    let update= new XMLHttpRequest();
    update.onload = function(){
        if(this.readyState == 4 && this.status == 200){
            var object12 = JSON.parse(this.response);
           // console.log(object12);
           // console.log(object12.updates[0].time);
            
            for(var i = 0; i < object12.length; i++){

                var li = 
                `<li>
                    <h6 id="title1">${object12[i].title}</h6>
                    <p class="mt-2">${object12[i].message}</p>
                    <p class="text-muted mb-4">
                        <i class="mdi mdi-clock-outline"></i>
                        ${object12[i].time}
                    </p>
                </li>`;

                $("#update-list").append(li);

            }        
        }
    }
    update.open("GET" , "https://inlupp-fa.azurewebsites.net/api/updates" , true);
    update.send();



    let message= new XMLHttpRequest();
    message.onload = function(){
        if(this.readyState == 4 && this.status == 200){
            var object = JSON.parse(this.response);

            for(var i = 0; i < object.length; i++){
           

                var trInfo = 
                    `<tr>
                        <td>${object[i].from}</td>
                    </tr>`
                    `<tr>
                        <td>${object[i].title}</td>
                    </tr>`  
                     
                  ;

                $('#open-message ul ').append(trInfo);
            }
        }
    }
    message.open("GET" , "https://inlupp-fa.azurewebsites.net/api/messages" , true);
    message.send();

    

}); 