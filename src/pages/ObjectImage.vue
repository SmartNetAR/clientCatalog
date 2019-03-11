<template>
  <q-page padding>
    <q-field dark label="Foto" helper="Toca para subir una foto" icon="photo_camera">
    <form method="post" @submit.prevent="uploadFile" enctype="multipart/form-data">
      <q-uploader :url="url" 
        :auto-expand='true' 
        :multiple='true'
        hide-upload-button 
        float-label ="Selecciona una imagen presionando el ícono mas &#8688;"
        ref="files"
        :upload-factory="uploadFile"
        inverted />
      <br>
      <q-input v-model="caption" float-label="Caption" />
      <br>
      <q-btn icon="fa fa-share" label="Cargar" type="submit" ></q-btn>
    </form>
    </q-field>
  </q-page>
</template>

<script>
export default {
  name: 'ObjectImage',
  data () {
    return {
      url: 'http://localhost:8000/api/objects',
      caption: 'un caption',
      loading: false,
    }
  },
  methods:
  {
    uploadFile (file) {
      console.log(file.size)
      this.$store.dispatch('uploadImage', 'hello')
    }
  }
}
</script>

<style>
</style>
