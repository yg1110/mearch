export const setStorage = (key:string, value:string) => {
  window.localStorage.setItem(key, value)
}

export const getStorage = (key:string) => {
  const value = window.localStorage.getItem(key)

  if (value) {
    return value
  }
  return ''
}
