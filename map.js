function initAutocomplete() {
    const input = document.getElementById("pac-input");
    const searchBox = new google.maps.places.SearchBox(input);
  
    searchBox.addListener("places_changed", () => {
      const places = searchBox.getPlaces();
      if (places.length == 0) {
        return;
      }
      places.forEach((place) => {
        if (!place.geometry || !place.geometry.location) {
          console.log("Returned place contains no geometry");
          return;
        }
  
        const icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25),
        };
  
        console.log("SELECTED")
        if (place.geometry.viewport) {
            console.log("SELECTEDX")
            console.log(place)
            console.log(place.geometry.location.lat())
            console.log(place.geometry.location.lng())
            const lat =place.geometry.location.lat()
            const lng = place.geometry.location.lng()
        } else {}
      });
      console.log("SELECTEDF")
    });
  }

  window.initMap = initAutocomplete;
  