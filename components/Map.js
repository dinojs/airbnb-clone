import { getCenter } from "geolib";
import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

export default function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({}); // Map marker

  // Transform searchResults into { latitude: x, longitude: y} object
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  // Centre around result coordinates
  const centre = getCenter(coordinates);

  const [viewport, setViewPort] = useState({
    width: "100%",
    height: "100%",
    latitude: centre.latitude,
    longitude: centre.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/dinojs/cky66c9wmem3914qu46bo8n8c"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewPort(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="round-pushpin"
            >
              📍
            </p>
          </Marker>

          {/* Popup that should show if we click on a Marker */}
          {selectedLocation.long === result.long ? (
            <Popup
              closeOnClick={true}
              onClose={() => setSelectedLocation({})}
              latitude={result.lat}
              longitude={result.long}
              className="rounded-2xl z-50"
            >
              <div className="text-gray-800"> {result.title}</div>

              <div className="text-sm text-gray-500">
                {`${result.price} - ${result.total}`}
              </div>
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}
