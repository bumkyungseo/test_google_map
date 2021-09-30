import React, { useState } from 'react'

const SearchBar = ({setLatitude, setLongitude}) => {
  const [lat, setLat] = useState()
  const [lng, setLng] = useState()
  return (
    <div className="search-bar">
      <label htmlFor="latitude"> 위도 : </label>
      <input
        type="text"
        name="latitude"
        id="latitude"
        placeholder="위도"
        onChange={(e)=>{setLat(Number(e.target.value))}}
      />
      <label htmlFor="longitude"> 경도 : </label>
      <input
        type="text"
        name="longitude"
        id="longitude"
        placeholder="경도"
        onChange={(e)=>{setLng(Number(e.target.value))}}
      />
      <button type="button" onClick={() => {
        setLatitude(lat)
        setLongitude(lng)}}>
        저장
      </button>
    </div>
  )
}

export default SearchBar