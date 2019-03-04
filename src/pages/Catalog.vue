<template>
  <q-page padding>
<!-- <q-page-sticky position="top-right" :offset="[18, 18]"> -->

<!-- </q-page-sticky> -->
  <q-search v-model="query" />
  <q-card style="margin: 10px"
    v-for="item of catalog" :key="item.id">
    <q-card-media overlay-position="top">
      <img v-if="item.img"
        v-bind:src="'statics/catalog/' + item.img" onerror="src='statics/catalog/default.png'">
      <img v-else=""
        v-bind:src="src='statics/catalog/default.png'">
    <q-card-title slot="overlay">
      {{ item.name }}
      <span slot="subtitle">{{ item.description }}</span>
      <!-- <q-icon slot="right" name="alarm" /> -->
              <q-btn round flat icon="more_vert" slot="right">
          <q-popover>
            <q-list link class="no-border">
              <q-item v-close-overlay>
                <q-item-main label="Remove Card" />
              </q-item>
              <q-item v-close-overlay>
                <q-item-main label="Send Feedback" />
              </q-item>
              <q-item v-close-overlay>
                <q-item-main label="Share" />
              </q-item>
            </q-list>
          </q-popover>
              </q-btn>

    </q-card-title>
    </q-card-media>
    <q-card-separator />
    <!-- <q-card-main> -->
      <q-list>
        <q-collapsible icon="explore" :label="item.location">
          <div>
            {{ item.location }}
          </div>
        </q-collapsible>

        <q-collapsible icon="perm_identity" label="Second">
          <div>
            Lorem ipsum dolor sit amet...
          </div>
        </q-collapsible>

        <q-collapsible icon="shopping_cart" label="Third">
          <div>
            Lorem ipsum dolor sit amet...
          </div>
        </q-collapsible>
        <!-- <q-item>
          <q-item-side>
            <q-item-tile color="primary" icon="local bar" />
          </q-item-side>
          <q-item-main>
            <q-item-tile label>{{ item.location }}</q-item-tile>
            <q-item-tile sublabel>Have a drink.</q-item-tile>
          </q-item-main>
        </q-item>
        <q-item>
          <q-item-side>
            <q-item-tile color="primary" icon="local bar" />
          </q-item-side>
          <q-item-main>
            <q-item-tile label>{{ item.category }}</q-item-tile>
            <q-item-tile sublabel>Have a drink.</q-item-tile>
          </q-item-main>
        </q-item> -->
      </q-list>
    <!-- </q-card-main> -->
    <q-card-separator />
      <q-card-actions>
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
  </q-card>
  <q-btn
    round
    color="primary"
    @click="addObject"
    class="fixed"
    icon="add"
    style="left: 18px; bottom: 18px"
  />
        <q-btn
          round
          color="primary"
          v-back-to-top.animate="{offset: 500, duration: 200}"
          class="animate-pop fixed-bottom-right"
          style="margin: 0 18px 18px 0"
        >
          <q-icon name="keyboard_arrow_up" />
        </q-btn>
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
    addObject () {
      alert('add')
    }
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
