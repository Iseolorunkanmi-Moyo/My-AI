var usernames = ["moyo"]

var passwords = ["joe"]

document.getElementById("login").addEventListener("click", check);

function check (){
    
    var user = document.getElementById("user").value;

    var pass = document.getElementById("pass").value

    var userLow = user.toLowerCase();

    var passLow = pass.toLowerCase();

    

    if(user.length <=0){
        document.getElementById("info").style.display = "block"
        document.getElementById("info").innerHTML = "Fill in your username"       
        setTimeout(() => {
            const box = document.getElementById('info');
            box.style.display = "none"
          }, 3000);
    }

    else if(pass.length <= 0){
        document.getElementById("info").style.display = "block"
        document.getElementById("info").innerHTML = "Fill in your password"
        setTimeout(() => {
            const box = document.getElementById('info');
            box.style.display = "none"
          }, 3000);
    }

    else if((usernames.includes(userLow)) === false ){
        document.getElementById("info").style.display = "block"
        document.getElementById("info").innerHTML = "Username not found";
        setTimeout(() => {
            const box = document.getElementById('info');
            box.style.display = "none"
          }, 3000);
    }

    else  if((passwords.includes(passLow)) === false ){
        document.getElementById("info").style.display = "block"
        document.getElementById("info").innerHTML = "Password not found"
        setTimeout(() => {
            const box = document.getElementById('info');
            box.style.display = "none"
          }, 3000);
    }

    else if(usernames.includes(userLow) && passwords.includes(passLow)){

        document.getElementById("formd").style.display = "none"
        document.getElementById("loader").style.display = "flex"

        const al = setTimeout(
            mm, 5000)
    
            function mm (){
                (window.open("chat.html", "_top"))
            }
    }

    var userCheck = (user.slice(0,1).toUpperCase()) + user.slice(1,user.length)

    // alert (userCheck)


}




document.getElementById("user").addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        // event.preventDefault();
        // document.getElementById("myBtn").click();
        check()
    }

});


document.getElementById("pass").addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        // event.preventDefault();
        // document.getElementById("myBtn").click();
        check()
    }

});