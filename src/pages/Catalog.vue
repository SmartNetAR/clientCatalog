<template>
  <q-page padding>
<!-- <q-page-sticky position="top-right" :offset="[18, 18]"> -->

<!-- </q-page-sticky> -->
  <div class="docs-input row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <q-search v-model="query" autofocus/>
    </div>
  </div>
  <div class="card-examples row items-start">
  <q-card inline class="bigger q-ma-sm"
    v-for="item of catalog" :key="item.id">
    <q-card-media overlay-position="top">
      <img v-if="item.img"
        v-bind:src="'assets/catalog/' + item.img" onerror="src='statics/default_photo.png'">
      <img v-else=""
        v-bind:src="src='statics/default_photo.png'">
      <q-card-title class="relative-position" slot="overlay">
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
      <q-collapsible icon="location_on" :label="item.location">
        <div v-if="item.sublocation">
          {{ item.sublocation }}
        </div>
        <div v-else>
          No tiene ubicación exacta
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
    </q-list>
    <!-- </q-card-main> -->
    <q-card-separator />
    <q-card-actions>
      <q-btn flat>Action 1</q-btn>
      <q-btn flat>Action 2</q-btn>
    </q-card-actions>
  </q-card>
  </div>
  <q-page-sticky position="bottom-left" :offset="[18, 18]">
    <q-btn
      round
      color="primary"
      @click="$router.push('newobject')"
      icon="add"
    />
  </q-page-sticky>
  <q-btn
    round
    color="secondary"
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
      this.$router.push('newobject')
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

<style lang="stylus">
.card-examples
  .q-card
    width 300px
  .bigger
    width 450px
    max-width 90vw
  @media (max-width $breakpoint-xs-max)
    .q-card
      width 100%
</style>
