let containerData = document.querySelector(".container")
let navbar = document.createElement("nav")

navbar.innerHTML = `<section id="logo" class= "col-3">RK-Travels</section>
                   <section id="navigation" class= "col-5"></section>
                   <section id="profile" class= "col-4"></section>`

  navbar.classList ="row align-item-center justify-content-center " 
  containerData.before(navbar)
 
  let navigationBlock =  document.querySelector("#navigation")
  let profileBlock = document.querySelector("#profile")

  let navigationData = [
    {label :"Home", Path: "../homepage/index.html"},
    {label :"About Us", Path: "../aboutus/about.html"},
    {label :"Contact Us", Path: "../contactus/contact.html"},
    {label :"Booking", Path: "../booking/booking.html"},
    {label :"Add Place", Path: "../addPlaces/addPlaces.html"},
  ];
    let profileData = [
    {label :"BH", Path: "../bookingHistory/bookingHistory.html"},
    {label :"Notification", Path: "../notification/notification.html"},
    {label :"Sign Up", Path: "../registration/register.html"},
    {label :"Login", Path: "../login/login.html"},
    {label : "LogOut", Path: "../login/login.html"}
  ];


  let userId = sessionStorage.getItem("id")
 let clearLogin =()=>{
  sessionStorage.removeItem("id")
  location.reload()
 }




  let createNavbar = (data, appendValues) => {
    let ul = document.createElement("ul")
    data.map((value) => {
        let li= document.createElement("li")
        let button = document.createElement("button")
        let buttonContainer = document.createElement("aside")
        li.className ="col"

      if(value.label == "Sign Up" || value.label == "Login"){
        if(!userId){
          button.innerHTML = value.label;
          buttonContainer.append(button);
          li.append(buttonContainer)
        }
      }else{
        button.innerHTML = value.label;
          li.append(button)
      }

      if(value.label == "LogOut"){
        if(!userId){
          li.style.display ="none"
        }
        button.addEventListener("click", clearLogin)
      }
      if(value.label == "Sign Up" || value.label == "Login"){
        if(userId){
          li.style.display ="none"
        }
      }

     


        button.addEventListener("click", ()=>{
            location.href= value.Path
             
        if(value.path) {location.href= value.Path
              }
        })
        button.className = value.label
        li.append(button)
        ul.append(li)

    } )
    ul.className = "row"
    appendValues.append(ul)
  }
  createNavbar(navigationData, navigationBlock )
  createNavbar(profileData, profileBlock)

  let signIn = document.querySelector("Sign Up")
  let Login = document.querySelector("Login")
  let LogOut = document.querySelector("LogOut")
  

// let notificationCount = async ()=>{
//   let response = await fetch ("http://localhost:3000/bookings")
//   let data = await response.json()
//   let userId = sessionStorage.getItem('id')
  
//   console.log(data)
//   let filterData = data.filter(
//     (value) => value.id === userId

//   )
//   if(value.label== Notification){
//     let sup =document.createElement('sup')
//     sup.innerHTML = filterData.length
//   }
  
// }
// notificationCount()
                  
                    