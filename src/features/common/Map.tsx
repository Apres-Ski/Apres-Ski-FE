import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { CleanedRestaurantsState, GeoJson } from '../../utilities/interfaces'

export const Map = () => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoibmFnZWwyOSIsImEiOiJjbGRzeXV6YjkxbDA1M3ZzNXJwanl2Ymk1In0.y2ABIXaVJd8h0Fwxo6X6Mw'

  const userLong = useSelector((state: RootState) =>
    Number(state.users.activeUser.location.long)
  )
  const userLat = useSelector((state: RootState) =>
    Number(state.users.activeUser.location.lat)
  )

  const { restaurants } = useSelector((state: RootState) => state.restaurants)

  let geoJsonRestaurants: GeoJson

  const getGeoJsonRestaurants = () => {
    geoJsonRestaurants = restaurants.reduce(
      (acc: GeoJson, restaurant: CleanedRestaurantsState) => {
        acc.features.push({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: {
              lon: Number(restaurant.location.long),
              lat: Number(restaurant.location.lat),
            },
          },
          properties: {
            title: restaurant.name,
          },
        })
        return acc
      },
      {
        type: 'FeatureCollection',
        features: [],
      }
    )

    return geoJsonRestaurants
  }

  let map
  useEffect(() => {
    map = new mapboxgl.Map({
      container: 'map-container',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [userLong, userLat],
      zoom: 15,
    })

    const marker1 = new mapboxgl.Marker()
      .setLngLat([userLong, userLat])
      .addTo(map)

    const geojsonLifts = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: { lon: -106.05318478322786, lat: 39.47825355540194 },
          },
          properties: {
            title: 'Mapbox',
            description: 'Snowflake',
          },
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: { lon: -106.04794289263863, lat: 39.475459452898924 },
          },
          properties: {
            title: 'Mapbox',
            description: 'QuickSilver SuperChair',
          },
        },
      ],
    }

    for (const feature of geojsonLifts.features) {
      const el = document.createElement('div')
      el.className = 'lift-marker'
      new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map)
    }

    getGeoJsonRestaurants()
    for (const feature of geoJsonRestaurants.features) {
      const el = document.createElement('div')
      el.className = 'restaurant-marker'
      new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map)
    }
  }, [userLong, userLat])

  return (
    <div>
      <div
        id="map-container"
        className="map-container"
        style={{ display: 'flex' }}
      >
        <button
          onClick={() => console.log('open filter')}
          style={{ width: '100px', zIndex: 1, position: 'absolute' }}
        >
          FILTER
        </button>
      </div>
    </div>
  )
}
