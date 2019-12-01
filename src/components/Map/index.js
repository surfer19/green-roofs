import React from "react"
import PropTypes from "prop-types"
import shortid from "shortid"
import {
  Map as LeafletMap,
  TileLayer,
  GeoJSON,
  Rectangle,
  ImageOverlay
} from "react-leaflet"
import heatmapImg from "../../img/heatmap.jpg"

function App({ geojsonData, zoom, center, bounds, heatMapBounds, geoStyle }) {
  return (
    <LeafletMap zoom={zoom} center={center} scrollWheelZoom={false}>
      <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
      {geojsonData.map(geo => {
        return <GeoJSON data={geo} key={shortid.generate()} style={geoStyle} />
      })}
      {bounds.map(bound => {
        return (
          <Rectangle bounds={bound} color="blue" key={shortid.generate()} />
        )
      })}
      {heatMapBounds.length > 0 ? (
        <ImageOverlay url={heatmapImg} bounds={heatMapBounds} opacity="0.80" />
      ) : null}
    </LeafletMap>
  )
}

App.propTypes = {
  zoom: PropTypes.string,
  center: PropTypes.arrayOf(PropTypes.number),
  heatMapBounds: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  bounds: PropTypes.arrayOf(
    // arr of rectangles
    PropTypes.arrayOf(
      // arr bounds
      PropTypes.arrayOf(
        // bound group 1, 2
        PropTypes.number
      )
    )
  ),
  geojsonData: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      features: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string
        })
      )
    })
  ),
  geoStyle: PropTypes.shape({
    color: PropTypes.string
  })
}

App.defaultProps = {
  zoom: 15,
  center: [0, 0],
  geojsonData: {},
  geoStyle: {
    fillOpacity: 0.7,
    weight: 2,
    opacity: 1,
    color: "#009548"
  },
  heatMapBounds: [],
  bounds: [
    [
      [0, 0],
      [0, 0]
    ]
  ]
}

export default App
