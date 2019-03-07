export const SET_CATALOG = (state, catalog) => {
  state.catalog = catalog
}

export const SET_NEW_OBJECT = (state, object) => {
  state.newObject = object
}

export const SET_QUERY = (state, query) => {
  state.filter.description = query
}
