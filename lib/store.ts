import { create } from 'zustand'

type Language = 'fr' | 'ar'

interface LanguageState {
  language: Language
  setLanguage: (lang: Language) => void
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: 'fr',
  setLanguage: (lang) => set({ language: lang }),
}))