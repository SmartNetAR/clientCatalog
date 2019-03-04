export const catalog = (state) => {
  // const catalog = state.catalog.slice()
  // return catalog
  let catalog = state.catalog.filter(catalog => {
    return (
      catalog.name.toLowerCase().includes(state.filter.description) ||
      catalog.description.toLowerCase().includes(state.filter.description) ||
      catalog.category.toLowerCase().includes(state.filter.description)
    )
  })
  return catalog
}
