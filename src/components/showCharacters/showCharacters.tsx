import { useState } from 'react'

// @ts-expect-error skip type
import CharacterGalleryHarryPotter from 'harryPotterMicrofrontend/CharacterGallery'

// @ts-expect-error skip type
import CharacterGalleryRickAndMorty from 'rickAndMortyMicrofrontend/CharacterGallery'
import { Content, EContent } from './ShowCharacters.types'
import { StyledButton, StyledButtonContainer } from './ShowCharacters.styles'

const ShowCharacters = () => {
  const [franchise, setFranchise] = useState<Content>(EContent.RICK_AND_MORTY)

  return (
    <div>
      <StyledButtonContainer>
        <StyledButton
          disabled={franchise === EContent.HARRY_POTTER}
          onClick={() => setFranchise(EContent.HARRY_POTTER)}
        >
          Harry Potter
        </StyledButton>
        <StyledButton
          disabled={franchise === EContent.RICK_AND_MORTY}
          onClick={() => setFranchise(EContent.RICK_AND_MORTY)}
        >
          Rick And Morty
        </StyledButton>
      </StyledButtonContainer>

      <div>
        {franchise === EContent.HARRY_POTTER ? (
          <CharacterGalleryHarryPotter path="harry-potter" />
        ) : (
          <CharacterGalleryRickAndMorty path="rick-and-morty" />
        )}
      </div>
    </div>
  )
}

export default ShowCharacters
