import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Presentation from './pages/presentation/Presentation'

import '../i18n.js'

// @ts-expect-error skip type
import CharacterDetailsHarryPotter from 'harryPotterMicrofrontend/CharacterDetails'

// @ts-expect-error skip type
import CharacterDetailsRickAndMorty from 'rickAndMortyMicrofrontend/CharacterDetails'
import Header from './components/Header/Header.js'

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route
          path="/rick-and-morty/:characterId"
          element={<CharacterDetailsRickAndMorty />}
        />
        <Route
          path="/harry-potter/:characterId"
          element={<CharacterDetailsHarryPotter />}
        />
      </Routes>
    </Router>
  )
}
