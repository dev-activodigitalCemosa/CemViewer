//import { DeckGL, GeoJsonLayer } from "deck.gl";
import { DeckGL,  TerrainLayer } from "deck.gl";

//const COUNTRIES = 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_scale_rank.geojson';


// const INITIAL_VIEW_STATE = {
//   latitude: 51.47,
//   longitude: 0.45,
//   zoom: 4,
//   bearing: 0,
//   pitch: 30
// };


// const LAYERS = [
//   new GeoJsonLayer ({
//     id: 'base-map',
//     data: COUNTRIES,
//     stroked: true,
//     filled: true,
//     lineWidthMinPixels: 2,
//     opacity: 0.4,
//     getLineColor: [60, 60, 60],
//     getFillColor: [200, 200, 200]
//   }),
// ]

const INITIAL_VIEW_STATE = {
  longitude: -122.4,
  latitude: 37.74,
  zoom: 11,
  maxZoom: 20,
  pitch: 30,
  bearing: 0
};
// elevationData: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/terrain.png'
const LAYERS = [
  new TerrainLayer({
    id: 'TerrainLayer',
    bounds: [-122.5233, 37.6493, -122.3566, 37.8159],
    elevationData: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/terrain.png',   
    elevationDecoder: {
      rScaler: 2,
      gScaler: 0,
      bScaler: 0,
      offset: 0
    },
    materia: {difuse: 1},
    texture: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/terrain-mask.png',
  }),
]
function App() {

  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller = {true}
      layers = {LAYERS}
    />
  )
}

export default App
