import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  LanguageIcon,
  LanguageSelectorContainer,
} from './languageSelector.styles'
import { Language } from './languageSelector.types'
import { changeLanguage } from 'i18next'

const spanishIcon = '🇪🇸'
const englishIcon = '🇬🇧'

const LanguageSelector: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    Language.English,
  )
  const { t } = useTranslation('translations')

  const handleLanguageChange = (language: Language) => {
    changeLanguage(language)
    setSelectedLanguage(language)
  }

  return (
    <LanguageSelectorContainer>
      <LanguageIcon onClick={() => handleLanguageChange(Language.Spanish)}>
        {spanishIcon}
      </LanguageIcon>
      <LanguageIcon onClick={() => handleLanguageChange(Language.English)}>
        {englishIcon}
      </LanguageIcon>
      <span>
        {t('components.LanguageSelector.textSelector')} {selectedLanguage}
      </span>
    </LanguageSelectorContainer>
  )
}

export default LanguageSelector
