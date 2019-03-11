<template>
  <q-page padding row justify-center>
  <div class="bg-grey-9" style="padding: 10px">
    <!-- Notice "dark" property -->
    <q-field dark label="Nombre" helper="Toca para cambiar" icon="archive">
      <q-input v-model="newObject.name" dark autofocus/>
    </q-field>
    <q-field dark label="Descripción" helper="Toca para cambiar" icon="description">
      <q-input v-model="newObject.description" dark/>
    </q-field>
    <!-- <q-field dark label="Foto" helper="Toca para subir una foto" icon="photo_camera">
    <form method="post" @submit.prevent="uploadFile" enctype="multipart/form-data">
      <q-uploader :url="url" :auto-expand='true' :multiple='true' hide-upload-button  float-label ="Select images and videos you want to share by clicking on plus icon &#8688;" ref="files" :upload-factory="uploadFile" inverted />
      <br>
      <q-input v-model="caption" float-label="Caption" />
      <br>
      <q-btn icon="fa fa-share" label="Share" type="submit" ></q-btn>
    </form>
    </q-field> -->
    <q-field dark label="Categoría" helper="Toca para cambiar" icon="category">
      <q-input v-model="newObject.category" dark placeholder="categoría"/>
    </q-field>
    <q-field dark label="Ubicación" helper="Toca para cambiar" icon="edit_location">
      <q-input v-model="newObject.location" dark placeholder="ubicación principal"/>
      <q-input v-model="newObject.sub_location" dark placeholder="ubicación específica"/>
    </q-field>
    <q-field dark label="Etiquetas" helper="Toca para cambiar" icon="label">
      <q-chips-input v-model="categories" placeholder="Empieza a escribir y elige una etiqueta" dark>
        <q-autocomplete @search="search" @selected="selected"/>
      </q-chips-input>
    </q-field>
    <div row justify-center>
    <q-btn
      icon="done"
      color="primary"
      style="margin: 20px 18px 18px 0"
      @click="sendObject"
      >Agregar
    </q-btn>
    </div>
    <div row justify-center>
    <q-btn
      color="primary"
      style="margin: 20px 18px 18px 0"
      @click="uploadFile"
      >Upload Img
    </q-btn>
    </div>
  </div>
  </q-page>
</template>

<script>

import { uid, filter } from 'quasar'
import countries from 'assets/autocomplete.json'

const icons = ['alarm', 'email', 'search', 'build', 'card_giftcard', 'perm_identity', 'receipt', 'schedule', 'speaker_phone', 'archive', 'weekend', 'battery_charging_full']
function getRandomIcon () {
  return icons[Math.floor(Math.random() * icons.length)]
}
function getRandomStamp () {
  if (Math.floor(Math.random() * 50) % 3 === 0) {
    return `${Math.floor(Math.random() * 10)} min`
  }
}
function getRandomSecondLabel () {
  if (Math.floor(Math.random() * 50) % 4 === 0) {
    return `UID: ${uid().substring(0, 8)}`
  }
}
function parseCountries () {
  return countries.map(country => {
    return {
      label: country,
      sublabel: getRandomSecondLabel(),
      icon: getRandomIcon(),
      stamp: getRandomStamp(),
      value: country
    }
  })
}
export default {
  name: 'NewObject',
  data () {
    return {
      newObject: {
        name: '',
        description: '',
        location: '',
        sub_location: '',
        category: '',
        tag: 'etiqueta',
        url_image: 'www',
        user_id: 1
      },
      url: 'local',
      caption: 'un caption',
      loading: false,
      categories: [],
      terms: '',
      terms2: '',
      terms3: '',
      countries: parseCountries(),
      chips1: ['Romania', 'Algeria'],
      chips2: ['Bahamas', 'Costa Rica']
    }
  },
  methods: {
    search (terms, done) {
      setTimeout(() => {
        done(filter(terms, { field: 'value', list: parseCountries() }))
      }, 1000)
    },
    selected (item) {
      this.$q.notify(`Selected suggestion "${item.label}"`)
    },
    duplicate (label) {
      this.$q.notify(`"${label}" already in list`)
    },
    sendObject () {
      const response = this.$store.dispatch('newObject', this.newObject)
      console.log(response)
    },
    uploadFile () {
      this.$store.dispatch('uploadImage', 'hello')
    }
    // uploadFile: function (file, updateProgress) {
    //   const postUrl = 'http://localhost:8000/api/objects'
    //   this.loading = true
    //   let files = this.$refs.files.files.concat(file)
    //   let formData = new FormData()
    //   for (var i = 0; i < files.length - 1; i++) {
    //     let file = files[i]
    //     formData.append('files[' + i + ']', file)
    //   }
    //   formData.append('caption', this.caption)
    //   this.$axios.post(postUrl, formData, { processData: false, contentType: false })
    //     .then((response) => {
    //       this.loading = false
    //       if (response.data.error) {
    //         this.$q.notify({
    //           message: response.data.message,
    //           type: 'negative',
    //           color: 'negative',
    //           icon: 'fas fa-exclamation-triangle'
    //         })
    //       }
    //     }, (response) => {
    //       this.loading = false
    //     })
    // }
  }
}
</script>

<style>
</style>
