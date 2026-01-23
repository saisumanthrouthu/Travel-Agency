let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(form);

  let reader = new FileReader();
  reader.onload = (e) => {
    let imageUrl = e.currentTarget.result;

    let placeDetails = {
      image: imageUrl,
      placeName: formData.get("place"),
      price: formData.get("price"),
      days: formData.get("days"),
      description: formData.get("description"),
    };
    console.log(placeDetails);
    addPlace(placeDetails);
    location.href = "../homepage/index.html";
  };

  reader.readAsDataURL(formData.get("image"));
});

let addPlace = async (data) => {
  await fetch("http://localhost:3000/places", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
