<template>
  <q-page padding>

  <q-btn
    v-back-to-top
    round
    color="teal-5"
    class="fixed-bottom-right"
    style="margin: 0 15px 15px 0"
  >
    <q-icon name="keyboard_arrow_up" />
  </q-btn>
  <q-search v-model="query" />
  <q-card style="margin: 10px"
    v-for="item of catalog" :key="item.id">
    <q-card-title>
      {{ item.name }}
    </q-card-title>
    <q-card-separator />
    <q-card-main>
      {{ item.description }}
    </q-card-main>
  </q-card>
  <!-- <br>
  <div>{{ catalog }}</div> -->
  </q-page>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Catalog',
  data () {
    return {
      // query: ''
    }
  },
  methods: {
    // ...mapActions([ { getCatalog: 'getCatalog' } ])
  },
  mounted () {
    this.$store.dispatch('getCatalog')
  },
  computed: {
    catalog: {
      get () {
        return this.$store.getters.catalog
      }
    },
    query: {
      get () {
        return this.$store.state.query
      },
      set (val) {
        this.$store.commit('SET_QUERY', val)
      }
    }
    // ...mapGetters('Catalog')
  }
}
</script>

<style>
</style>
