import React, { useState } from 'react'

const SearchBar = ({setLatitude, setLongitude}) => {
  const [lat, setLat] = useState()
  const [lng, setLng] = useState()
  return (
    <div className="search-bar">
      <form>
        <label for="latitude"> 위도 : </label>
        <input
          type="text"
          name="latitude"
          id="latitude"
          placeholder="위도"
          onChange={(e)=>{setLat(e.target.value)}}
        />
        <label for="longitude"> 경도 : </label>
        <input
          type="text"
          name="longitude"
          id="longitude"
          placeholder="경도"
          onChange={(e)=>{setLng(e.target.value)}}
        />
        <button type="button" onClick={() => {
          setLatitude(lat)
          setLongitude(lng)}}>
          저장
        </button>
      </form>
    </div>
  )
}

export default SearchBar