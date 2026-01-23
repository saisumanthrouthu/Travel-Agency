let displayContainer = document.querySelector(".container")

let cancel = async ()=>{
    await fetch(`http://localhost:3000/bookings/${sessionStorage.getItem("id")}`,{
        method : "DELETE",
    }
)
}
let displayHistory = async () =>{
    let response = await fetch("http://localhost:3000/bookings")
    let historyData = await response.json();
    console.log(historyData)
    let data = historyData.filter(
    (value) =>  value.id === userId
  )
   

    data.forEach((value)=>{
         let userId = sessionStorage.getItem('id')
        if(userId){
        let historyContainer = document.createElement("article")
       historyContainer.className ="col-12 col-sm-6 col-md-3"
        historyContainer.innerHTML = 
        `<h3>Your Booking Details</h3><br>
        <p class="bookingDate"> Booking Date : ${value.bookingDate}</p>
        <p class="Contact"> <b>Contact :</b> ${value.contact}</p>
        <p><b>Email :</b> ${value.email}</p>
        <p><b> Persons  :</b> ${value.persons}</p>
        <p><b> Place  :</b> ${value.places}</p>
        
        <button class="cancel" onclick="cancel()">Cancel</button>
       
        `
        displayContainer.append(historyContainer)}
        else{
            let messageCont = document.querySelector(".container")
            let message = document.createElement("h1")
            message.innerHTML = "You Didn't Logged In Login First to See Your Booking History"
            messageCont.append(message)

        }
    
    })
    
    
}
console.log(" hello")
displayHistory()


