<template>
  <q-page padding>
    <q-field dark label="Foto" helper="Toca para subir una foto" icon="photo_camera">
    <q-uploader
      :url="url"
      :upload-factory="uploadFactory"
      auto-expand
      multiple
      @add="add"
      @remove:abort="removeAbort"
      @remove:cancel="removeCancel"
      @remove:done="removeDone"
      @uploaded="uploaded"
      @fail="fail"
      @start="start"
      @finish="finish"
      @abort="abort"
    />
    </q-field>
  </q-page>
</template>

<script>
export default {
  name: 'ObjectImage',
  data () {
    return {
      url: 'http://localhost:8000/api/photos/1',
      caption: 'un caption',
      loading: false,
    }
  },
  methods:
  {
    add (file) {
      console.log('Add: ', file)
    },
    removeAbort (file) {
      console.log('RemoveAbort: ', file)
    },
    removeCancel (file) {
      console.log('RemoveCancel: ', file)
    },
    removeDone (file) {
      console.log('RemoveDone: ', file)
    },
    uploaded (file) {
      console.log('Uploaded: ', file)
    },
    fail (file) {
      console.log('Fail: ', file)
    },
    start () {
      console.log('Start')
    },
    finish () {
      console.log('Finish')
    },
    abort () {
      console.log('Aborted')
    },
    uploadFactory (file, updateProgress) {
      // now we can modify status of file based on WebSocket progress
      // for now, we fake upload to demonstrate
      // return this.fakeUpload(file, updateProgress)
      const response = this.$store.dispatch('uploadPhoto', file, updateProgress)
      console.log(response)

    },
    /**
     * a fake upload simulator - to be replaced by whatever you need
     * you could call file.updateProgress({progress}) whenever you need
     * based on WebSocket updates etc
     */
    fakeUpload (file, updateProgress) {
      let uploadPromises = []
      let incrementCount = 10
      // fake upload duration
      let secondsPerInterval = (Math.floor(Math.random() * 10) + 1) * 1000 / incrementCount // 1-10s each upload
      console.log('File will take: %s seconds to upload', secondsPerInterval * incrementCount / 1000)
      // create some promises
      Array(incrementCount).fill(0).map((item, index) => {
        let up = new Promise((resolve, reject) => {
          setTimeout(() => {
            updateProgress(((index + 1) * (100 / incrementCount)) / 100)
            resolve()
          }, secondsPerInterval * (index + 1)) // every 250ms
        })
        uploadPromises.push(up)
      })
      // wait for all promises to finish and complete.
      return Promise.all(uploadPromises)
        .then(() => {
          return new Promise((resolve, reject) => {
            resolve(file)
          })
        })
    }
  }
}
</script>

<style>
</style>
