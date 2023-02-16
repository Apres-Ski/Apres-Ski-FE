import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../../app/store'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { setMapClickedRestaurant } from '../../features/restaurants/restaurantsSlice'
import { CleanedRestaurantsState, GeoJson, CleanedLiftsState } from '../../utilities/interfaces'
import React from 'react'

export const Map = () => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoibmFnZWwyOSIsImEiOiJjbGRzeXV6YjkxbDA1M3ZzNXJwanl2Ymk1In0.y2ABIXaVJd8h0Fwxo6X6Mw'

  const userLong = useSelector((state: RootState) =>
    Number(state.users.activeUser.location.long)
  )
  const userLat = useSelector((state: RootState) =>
    Number(state.users.activeUser.location.lat)
  )

  const { filteredRestaurants } = useSelector(
    (state: RootState) => state.restaurants
  )

  const dispatch = useDispatch<AppDispatch>()

  let geoJsonRestaurants: GeoJson

  const getGeoJsonRestaurants = () => {
    geoJsonRestaurants = filteredRestaurants.reduce(
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
            id: restaurant.id
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

  const { lifts } = useSelector((state: RootState) => state.lifts)

  let geoJsonLifts: GeoJson

  const getGeoJsonLifts = () => {
    geoJsonLifts = lifts.reduce(
      (acc: GeoJson, lift: CleanedLiftsState) => {
        acc.features.push({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: {
              lon: Number(lift.location.long),
              lat: Number(lift.location.lat),
            },
          },
          properties: {
            title: lift.name,
          },
        })
        return acc
      },
      {
        type: 'FeatureCollection',
        features: [],
      }
    )

    return geoJsonLifts
  }

  let map
  useEffect(() => {
    map = new mapboxgl.Map({
      container: 'map-container',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [userLong, userLat],
      zoom: 15,
    })

    getGeoJsonLifts()
    for (const feature of geoJsonLifts.features) {
      const popup = new mapboxgl.Popup({
        offset: 25,
        closeButton: false,
      }).setText(feature.properties.title)
      const el = document.createElement('div')
      el.className = 'lift-marker'
      new mapboxgl.Marker(el)
        .setLngLat(feature.geometry.coordinates)
        .setPopup(popup)
        .addTo(map)
    }

    getGeoJsonRestaurants()
    for (const feature of geoJsonRestaurants.features) {
      const popup = new mapboxgl.Popup({
        offset: 25,
        closeButton: false,
      }).setText(feature.properties.title)
      const el = document.createElement('div')
      el.className = 'restaurant-marker'
      el.addEventListener('click', () => {
        dispatch(setMapClickedRestaurant(feature.properties.id))
      })
      new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).setPopup(popup).addTo(map)
    }
    const marker1 = new mapboxgl.Marker()
      .setLngLat([userLong, userLat])
      .addTo(map)
  }, [userLong, userLat, filteredRestaurants])

  return (
      <div
        id="map-container"
        className="map-container"
      >
      </div>
  )
}
