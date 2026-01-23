let selectTag = document.querySelector("select")
let places;
let placesDetails = async()=>{
    let response = await fetch('http://localhost:3000/places')
    let data = await response.json()
    places=data
    
    data.map((value) =>{
        let optionTag = document.createElement("option")
        optionTag.innerHTML=value.placeName
        optionTag.value= value.placeName
        selectTag.append(optionTag)
    } )
    return data;
}

placesDetails();

let form= document.querySelector("form")

form.addEventListener("submit", (e)=>{
    e.preventDefault()

    let formData= new FormData(form)
    let userId = sessionStorage.getItem('id')
    let package = formData.get("package")
    let persons = formData.get("persons")
    let bookingDetails = {
        id : userId,
        bookingDate : formData.get("date"),
        contact : formData.get("contact"),
        email : formData.get("email"),
        persons : persons,
        places : package,
        notification : false
    }
    let place = places.find((value)=> value.placeName === package)

    if(userId){
        addBooking(bookingDetails)
        alert(`your booking is successful and the Total Price is ${persons*place.price}`)
    }else{
        location.href ='../login/login.html'
    }
})

let addBooking = async(data) =>{
    await fetch("http://localhost:3000/bookings", {
        method : "POST",
        headers : {
            "content-type" : "application/json"
        },
        body: JSON.stringify(data)

    })
    
}