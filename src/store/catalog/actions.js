export async function getCatalog (context) {
  try {
    // const data = await fetch('assets/catalog.json')
    const data = await fetch('http://localhost:8000/api/objects')
    const catalog = await data.json()
    context.commit('SET_CATALOG', catalog)
  } catch (error) {
    console.log(error)
  }
}

export async function newObject (context, object) {
  context.commit('SET_NEW_OBJECT', object)
  const location = window.location.hostname
  // alert(location)
  // location = 'localhost'
  const postData = context.state.newObject // {
  //   name: context.state.newObject.name,
  //   description: context.state.newObject.description,
  //   location: context.state.newObject.location,
  //   sub_location: context.state.newObject.subLocation,
  //   category: context.state.newObject.category,
  //   tag: context.state.newObject.tag,
  //   url_image: context.state.newObject.urlImage,
  //   user_id: context.state.newObject.userId
  // }
  const settings = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData) // context.state.newObject // JSON.stringify(context.state.catalog)
  }
  const data = await fetch(`http://${location}:8000/api/objects/`, settings)
    .then(response => response.json())
    .then(json => {
      return json
      // console.log(json)
    })
    .catch(e => {
      return e
      // console.log(e)
    })
  return data
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
