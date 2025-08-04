localStorage.setItem("username","bhatnagaraman@gmail.com") //key-value,local storage dont have any expiry as compared with session storage
sessionStorage.setItem("username","test@test.com")


localStorage.getItem("username");
localStorage.clear() //clears everything that was createdin same origin

localStorage.removeItem("email")

// window.addEventListener("storage",function(event))
// {
//     console.log("")
// }