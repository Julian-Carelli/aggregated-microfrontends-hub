import { useState } from 'react'

// @ts-expect-error skip type
import CharacterGalleryHarryPotter from 'harryPotterMicrofrontend/characterGallery'

// @ts-expect-error skip type
import CharacterGalleryRickAndMorty from 'rickAndMortyMicrofrontend/characterGallery'

const ShowCharacters = () => {
  const [showComponentA, setShowComponentA] = useState<boolean>(false)

  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 16,
        }}
      >
        <button
          style={{ marginRight: 4 }}
          onClick={() => setShowComponentA(true)}
        >
          Harry Potter characters
        </button>
        <button
          style={{ marginLeft: 4 }}
          onClick={() => setShowComponentA(false)}
        >
          Ricky And Morty characters
        </button>
      </div>

      <div>
        {showComponentA ? (
          <CharacterGalleryHarryPotter path="harry-potter" />
        ) : (
          <CharacterGalleryRickAndMorty path="rick-and-morty" />
        )}
      </div>
    </div>
  )
}

export default ShowCharacters
