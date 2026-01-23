

// _______________________________________________________________________________________________________________________________________

let displayContainer = document.querySelector(".container")
displayContainer.innerHTML = "<h3>Notification</h3><br>"
let displayHistory = async () =>{
    let response = await fetch("http://localhost:3000/bookings")
    let historyData = await response.json();
    let data = historyData.filter(
    (value) =>  value.id === userId
  )
   

    data.forEach((value)=>{
         let userId = sessionStorage.getItem('id')
        if(userId){
        let historyContainer = document.createElement("article")
       historyContainer.className ="col-12 col-sm-6 col-md-3"
        historyContainer.innerHTML = 
        `
        <p id="not"> *  Your Booking has been Confirmed on ${value.bookingDate} for ${value.places} </p>
       
        `
        displayContainer.append(historyContainer)}
        
    
    })
    
    
}
displayHistory()


