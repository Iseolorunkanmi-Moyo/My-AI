document.getElementById("search").addEventListener("click", search);

function search(){

}

document.getElementById("send").addEventListener("click", send);

function send(){
    

    if (document.getElementById("msg-box").value < 1 ){
    
    }
    else {
      
    var element = document.createElement("div");
    element.innerHTML = (document.getElementById("msg-box").value)
    element.style.backgroundColor = "rgb(29, 107, 131)"
    element.style.padding = "15px"
    element.style.borderRadius = "20px 20px 0px 20px"
    element.style.marginTop = "10px"
    element.style.width = "fit-content"
    element.style.alignSelf = "flex-end"
    // element.scrollTop = element.scrollHeight
    element.scrollIntoView(false);
    const msg = document.getElementById("chat-space");
    msg.append(element)
    element.scrollIntoView(false);    

    // AI models || groups

    let message =  document.getElementById("msg-box").value

    let mainInput = message.toLowerCase()

    let answer = "hi"

    let greeting = ["hi", "hey", "good morning", "morning", "afternoon", "good afternoon", "evening", "good evening"];

    let hour = "m"

    function updateClock() {

    let currentTime = new Date();
 
    let hours = currentTime.getHours();
 
    let minutes = currentTime.getMinutes();
 
    let seconds = currentTime.getSeconds();
 
 
  if (hours < 12) {
 
     hour = "Good morning"
 
  }
 
  else if (hours < 16) {
 
     hour = "Good afternoon"
 
  }
 
  else if (hours > 16) {
 
     hour = "Good evening"
 
  }
 
 }
 
 updateClock();
 
 setInterval(updateClock, 1000);

    const al = setTimeout(
      mm, 1000)

      function mm (){

        if(greeting.includes(mainInput)){
          
          let i = 3;

          i = (Math.floor(Math.random() * i))

          switch (i){
            case 0 : answer = "Hey"
            break;

            case 1 : answer = "How's your day going"
            break;

            case 2 : answer = hour;
            break;
            
            case 3 : answer = "Hi"
            break;

            case 4 : answer = "What's up"
            break;
            
            default : answer = hour
          }
          
        }

        else if ( mainInput = " "){
          
        }
       else if ( mainInput = " "){
          
        }
       else if ( mainInput = " "){
          
        }
        else if ( mainInput = " "){
          
        }
        else if ( mainInput = " "){
          
        }
        else if ( mainInput = " "){
          
        }
        else if ( mainInput = " "){
          
        }
        else if ( mainInput = " "){
          
        }
        else if ( mainInput = " "){
          
        }
        else if ( mainInput = " "){
          
        }
        else if ( mainInput = " "){
          
        }
        else if ( mainInput = " "){
          
        }
        else if ( mainInput = " "){
          
        }

    var element2 = document.createElement("div") ;
    element2.innerHTML  = answer
    element2.style.backgroundColor = "rgb(29, 107, 131)"
    element2.style.padding = "15px"
    element2.style.borderRadius = "20px 20px 20px 0px"
    element2.style.marginTop = "10px"
    element2.style.width = "fit-content"
    element2.style.alignSelf = "flex-start"
    const msg2 = document.getElementById("chat-space");
    msg2.append(element2)
    document.getElementById("msg-box").value = ""
    element2.scrollIntoView(false);
    }
    
  }   

}


document.getElementById("msg-box").addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        // event.preventDefault();
        // document.getElementById("myBtn").click();
        send()
    }

});

// Get the modal
var modal = document.getElementById("chat3");

// Get the button that opens the modal
var btn = document.getElementById("newChat");

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}