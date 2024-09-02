import { DeckGL} from "deck.gl";
import {TerrainLayer} from '@deck.gl/geo-layers';

const INITIAL_VIEW_STATE = {
  longitude: -4.5,
  latitude: 36.8,
  zoom: 11,
  maxZoom: 15,
  minPitch: 0,
  maxPitch:80,
  bearing: 0
};

const LAYERS = [
  new TerrainLayer({
    id: 'TerrainLayer',
    bounds: [-4.524, 36.662, -4.184, 36.837],
    elevationDecoder: {
      rScaler: 6553.6,
      gScaler: 25.6,
      bScaler: 0.1,
      offset: -10000
    },
    elevationData: 'https://xyz-mdt.idee.es/1.0.0/raster-dem/{z}/{x}/{y}.png',   
    materia: {difuse: 1},
    texture: 'https://tms-pnoa-ma.idee.es/1.0.0/pnoa-ma/{z}/{x}/{-y}.jpeg',
    minZoom: 0,
    maxZoom: 15,
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
