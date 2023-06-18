import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.js";

const ContactMap = () => {
  useEffect(() => {
    document.getElementById("my-map").innerHTML =
      "<div id='map' style='height: 345px'></div>";

    var map = L.map("map").setView([51.505, -0.09], 13);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    var marker = L.marker([35.7007105, 51.400394], {
      icon: L.icon({
        popupAnchor: [12, 6],
        iconUrl: "images/map/marker-icon.png",
        shadowUrl: "images/map/marker-shadow.png",
      }),
    })
      .addTo(map)
      .bindPopup("Reasturant Address!")
      .openPopup();
  }, []);
  return <div id="my-map"></div>;
};

export default ContactMap;
