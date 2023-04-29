let tg = window.Telegram.WebApp;
let btn1 = document.getElementById("btn1");
let order = document.getElementById("order");

btn1.addEventListener("click", () =>{
    document.getElementById("container").style.display = "none";
    document.getElementById("form").style.display = "block";
    document.getElementById("user_name").value = tg.initDataUnsafe.user.first_name + " "+ tg.initDataUnsafe.user.last_name;
});

order.addEventListener("click", () =>{
    tg.close();
});
