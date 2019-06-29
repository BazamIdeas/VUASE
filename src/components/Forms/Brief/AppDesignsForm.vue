<template>
  <v-layout row wrap class="px-2 mb-5">
    <v-flex md4 xs6 v-for="index in 24" :key="index" class="brief-design" @click="selectDesign(index)" :class="{ 'selected': brief.designs && brief.designs.includes(index), 'disabled': brief.designs && brief.designs.length == limit }">
      <v-img :src="'/images/brief/designs/'+index+'.jpg'"></v-img>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        limit: 6
      }
    },
    created () {
      if (!document) return false
      document.documentElement.scrollTop = 0
    },
    computed: {
      brief () { return this.$store.state.brief.data }
    },
    methods: {
      async selectDesign (n) {
        var brief = this.$storage.get('brief')
        if (brief.designs.includes(n)) {
          brief.designs = brief.designs.filter(no => no !== n)
        } else {
          if (brief.designs.length < this.limit) {
            brief.designs.push(n)
          }
        }
        await this.$store.dispatch('brief/setData', brief)
      }
    }
  }
</script>

<style>
  .brief-design .v-image {
    transition: border 0.2s;
    box-shadow: 0 3px 9px 0 rgba(0,0,0,.1);
  }

  .brief-design.selected .v-image {
    border: 4px solid #0081c1;
  }

  .brief-design.disabled:not(.selected) {
    opacity: 0.4;
    cursor: inherit;
  }
  
  .brief-design {
    cursor: pointer;
  }
</style>