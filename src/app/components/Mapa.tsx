/* eslint-disable react-hooks/exhaustive-deps */
import  { useState, useEffect } from 'react'
import {
    MapContainer,
    TileLayer,
    Marker,
    useMapEvents,
    Popup,
  } from 'react-leaflet'
import L, { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'

interface MapComponentProps {
  latitude: number
  longitude: number
}


const markerIcon = new Icon({
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

export function Mapa({
  latitude,
  longitude,
}:MapComponentProps) {

  const [position, setPosition] = useState<L.LatLng | null>(null)
  useEffect(() => {
    setPosition(new L.LatLng(latitude, longitude))

  }, [latitude, longitude])

  const MapClickHandler = () => {
    const map = useMapEvents({
      click(e) {
        setPosition(e.latlng)
      },
    })

    useEffect(() => {
      if (position) {
        map.setView(position)
      }
    }, [position, map])

    return null
  }

  return (
  <div className='h-96 '>
    <MapContainer
      center={[latitude, longitude]}
      zoom={16}
      style={{ height: '60vh', width: '100%', zIndex: 10 }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <MapClickHandler />
      {position && (
        <>
          <Marker position={position} icon={markerIcon}>
            <Popup className="rounded-lg  p-4 text-gray-800 ">
              <div>
                <h3 className="text-lg font-semibold">
                  Localização selecionada
                </h3>
                <p className="mt-2">Latitude: {position.lat}</p>
                <p className="mt-1">Longitude: {position.lng}</p>
              </div>
            </Popup>
          </Marker>
        </>
      )}
    </MapContainer>
  </div>
  )

}
