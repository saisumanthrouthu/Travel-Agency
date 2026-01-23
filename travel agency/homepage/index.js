let displayContainer = document.querySelector(".container")

let click = ()=>{
    location.href = "../booking/booking.html"
}
let displayPlaces = async ()=>{
    let response = await fetch("http://localhost:3000/places")

    let placesData = await response.json();
    
    placesData.forEach((value) =>{
        let placeContainer = document.createElement("article")
        let button = document.createElement("button")
        placeContainer.className ="col-12 col-sm-6 col-md-3 "
        placeContainer.innerHTML = 
        `<figure><img src="${value.image}"></img></figure>
        <p class="place"> Place : ${value.placeName}</p>
        <p class="price"> Price : ${value.price}</p>
        <p><b>Description :</b> ${value.description}</p>
        <p><b> Days  :</b> ${value.days}</p>
        `;
        button.innerHTML = "Add To Package"
        placeContainer.append(button)
        button.addEventListener("click", click)
        displayContainer.append(placeContainer)
    })
}
displayPlaces()