export const SET_USER = 'SET_USER'
export const onSetUser = user => ({
  type: SET_USER,
  user,
})

export const SET_PAGE_TITLE = 'SET_PAGE_TITLE'
export const onSetPageTitle = title => ({
  type: SET_PAGE_TITLE,
  title,
})

export const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE'
export const onToggleDarkMode = () => ({
  type: TOGGLE_DARK_MODE,
})

export const TOGGLE_PUBLIC_MODE = 'TOGGLE_PUBLIC_MODE'
export const onTogglePublicMode = () => ({
  type: TOGGLE_PUBLIC_MODE,
})

export const SET_CATEGORIES = 'SET_CATEGORIES'
export const onSetCategories = categories => ({
  type: SET_CATEGORIES,
  categories,
})
