//local stroage is used to store data with no expiration date
//session storage is used to store data for one session, data is lost when the browser tab

localStorage.setItem("username", "rohan");
localStorage.setItem("email", "rohankale541@gmail.com");

sessionStorage.setItem("sessionUser", "sessionEmail");
sessionStorage.setItem("sessionRohan", "sessionrohankale541@gmail.com");

localStorage.getItem("username"); // "rohan"
localStorage.getItem("email"); // "rohankale541@gmail.com"

sessionStorage.getItem("sessionUser"); // "sessionEmail"
sessionStorage.getItem("sessionRohan"); // "sessionrohankale541@gmail.com"

localStorage.clear(); // Clears all local storage data
sessionStorage.clear(); // Clears all session storage data

window.addEventListener("storage", function(event){
  console.log("Storage changed:", event.key);
});