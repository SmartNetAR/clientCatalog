export async function getCatalog (context) {
  try {
    // const data = await fetch('assets/catalog.json')
    const data = await fetch('/api/objects')
    const catalog = await data.json()
    context.commit('SET_CATALOG', catalog)
  } catch (error) {
    console.log(error)
  }
}

export async function newObject (context, object) {
  context.commit('SET_NEW_OBJECT', object)
  // const location = window.location.hostname
  const postData = context.state.newObject
  const settings = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData) // context.state.newObject // JSON.stringify(context.state.catalog)
  }
  const data = await fetch('/api/objects', settings)
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

export async function uploadPhoto (context, file, updateProgress) {
  const image = file
  const fd = new FormData()
  // fd.append('image', image, image.name)
  fd.append('image', image)
  fd.append('imageName', image.name)
  const settings = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      // 'Content-Type': 'application/json',
      // 'enctype': 'miltipart/form-data'
    },
    body: fd
  }
  try {
    const data = await fetch('/api/photos', settings)
    const json = await data.json()
    return json
  } catch (e) {
    return (e)
  }
}

const uploadImage = async (context, file) => {
  alert(file + context.state.newObject.url_image);
}
export {uploadImage}

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
