export async function getCatalog (context) {
  try {
    const data = await fetch('statics/catalog.json')
    const catalog = await data.json()
    context.commit('SET_CATALOG', catalog)
  } catch (error) {
    console.log(error)
  }
}

// export async function getCustomers ({
//   commit
// }) {
//   commit('SHOW_LOADING')
//   try {
//     const data = await fetch('./customers.json')
//     const customers = await data.json()
//     commit('SET_CUSTOMERS', customers)
//     // commit( 'SET_QUERY_CUSTOMERS', state.filterCustomer )
//   } catch (error) {
//     console.log(error)
//   }
//   commit('CLOSE_LOADING')
// }
