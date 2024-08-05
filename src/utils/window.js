export const urlSearchParams = (searchParam) => ({
  searchValue: new URLSearchParams(window.location.search).get(searchParam),
  pathName: window.location.pathname,
  search: window.location.search,
})

export const { pathName } = urlSearchParams()

export const reloadFn = () => window.location.reload()

export const redirectFn = (url) => {
  window.location.href = url
}

export const encode = (param) => window.btoa(param)

export const decode = (param) => window.atob(param)
