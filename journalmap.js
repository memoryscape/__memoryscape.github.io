function initMap() {
    const mapCenter = { lat: -25.363, lng: 131.044 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: mapCenter,
    });
    
    const vaults = getVaults('test@gmail.com');
    const theKeys = (Object.keys(vaults))
    // const coordinatesArray = []
    console.log("hi")
    console.log(theKeys)
    console.log(vaults)
    for (const theKey in theKeys) {
      console.log("inside")
      console.log(vaults[theKey].location[0], vaults[theKey].location[1])
      // coordinatesArray.push({
      //   lat: vaults[theKey].location[0],
      //   lng: vaults[theKey].location[1],
      //   label: "LABEL"}
      //   )
    };
    const coordinatesArray = [
      { lat: -25.363, lng: 131.044, label: 'Football Match' },
      { lat: -24.363, lng: 130.044, label: 'Camping Trip' },
      // Add more coordinates and labels as needed
    ];
  
    for (const coordinates of coordinatesArray) {
      const marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        title: "Click to zoom",
        label: coordinates.label,  // Set the label for the marker
      });

      marker.addListener("click", () => {
        map.setZoom(8);
        map.setCenter(marker.getPosition());
      });
    }
  
    map.addListener("center_changed", () => {
      // 3 seconds after the center of the map has changed, pan back to the
      // first marker's position.
      window.setTimeout(() => {
        map.panTo(coordinatesArray[0]);
      }, 3000);
    });
  }
  async function getVaults(email) {
    const url = `http://127.0.0.1:5000/get_vaults/${email}`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Vaults for user:', data.result);
      
      return data.result.vaults; // Assuming data.vaults is the object
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  window.initMap = initMap;
  