<template>
  <v-layout row wrap class="px-2 mb-5">
    <v-flex md4 class="brief-design" @click="selectDesign(1)" :class="{ 'selected': brief.designs && brief.designs.includes(1), 'disabled': brief.designs && brief.designs.length == limit }">
      <v-img src="/images/brief/designs/2.jpg"></v-img>
    </v-flex>
    <v-flex md4 class="brief-design" @click="selectDesign(2)" :class="{ 'selected': brief.designs && brief.designs.includes(2), 'disabled': brief.designs && brief.designs.length == limit }">
      <v-img src="/images/brief/designs/1.jpg"></v-img>
    </v-flex>
    <v-flex md4 class="brief-design" @click="selectDesign(3)" :class="{ 'selected': brief.designs && brief.designs.includes(3), 'disabled': brief.designs && brief.designs.length == limit }">
      <v-img src="/images/brief/designs/2.jpg"></v-img>
    </v-flex>
    <v-flex md4 class="brief-design" @click="selectDesign(4)" :class="{ 'selected': brief.designs && brief.designs.includes(4), 'disabled': brief.designs && brief.designs.length == limit }">
      <v-img src="/images/brief/designs/3.jpg"></v-img>
    </v-flex>
    <v-flex md4 class="brief-design" @click="selectDesign(5)" :class="{ 'selected': brief.designs && brief.designs.includes(5), 'disabled': brief.designs && brief.designs.length == limit }">
      <v-img src="/images/brief/designs/4.jpg"></v-img>
    </v-flex>
    <v-flex md4 class="brief-design" @click="selectDesign(6)" :class="{ 'selected': brief.designs && brief.designs.includes(6), 'disabled': brief.designs && brief.designs.length == limit }">
      <v-img src="/images/brief/designs/5.jpg"></v-img>
    </v-flex>
    <v-flex md4 class="brief-design" @click="selectDesign(7)" :class="{ 'selected': brief.designs && brief.designs.includes(7), 'disabled': brief.designs && brief.designs.length == limit }">
      <v-img src="/images/brief/designs/1.jpg"></v-img>
    </v-flex>
    <v-flex md4 class="brief-design" @click="selectDesign(8)" :class="{ 'selected': brief.designs && brief.designs.includes(8), 'disabled': brief.designs && brief.designs.length == limit }">
      <v-img src="/images/brief/designs/2.jpg"></v-img>
    </v-flex>
    <v-flex md4 class="brief-design" @click="selectDesign(9)" :class="{ 'selected': brief.designs && brief.designs.includes(9), 'disabled': brief.designs && brief.designs.length == limit }">
      <v-img src="/images/brief/designs/3.jpg"></v-img>
    </v-flex>
    <v-flex md4 class="brief-design" @click="selectDesign(10)" :class="{ 'selected': brief.designs && brief.designs.includes(10), 'disabled': brief.designs && brief.designs.length == limit }">
      <v-img src="/images/brief/designs/4.jpg"></v-img>
    </v-flex>
    <v-flex md4 class="brief-design" @click="selectDesign(11)" :class="{ 'selected': brief.designs && brief.designs.includes(11), 'disabled': brief.designs && brief.designs.length == limit }">
      <v-img src="/images/brief/designs/5.jpg"></v-img>
    </v-flex>
    <v-flex md4 class="brief-design" @click="selectDesign(12)" :class="{ 'selected': brief.designs && brief.designs.includes(12), 'disabled': brief.designs && brief.designs.length == limit }">
      <v-img src="/images/brief/designs/1.jpg"></v-img>
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