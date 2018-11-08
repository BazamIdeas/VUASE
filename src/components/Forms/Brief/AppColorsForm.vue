<template>
  <v-layout row wrap class="px-2 mb-5">
    <v-flex md3 class="brief-color" @click="selectColor(1)" :class="{ 'selected': brief.colors && brief.colors.includes(1), 'disabled': brief.colors && brief.colors.length == limit }">
      <v-img src="/images/brief/colors/azules.png"></v-img>
      <p class="mb-3 mt-1">Label</p>
    </v-flex>
    <v-flex md3 class="brief-color" @click="selectColor(2)" :class="{ 'selected': brief.colors && brief.colors.includes(2), 'disabled': brief.colors && brief.colors.length == limit }">
      <v-img src="/images/brief/colors/aquas.png"></v-img>
      <p class="mb-3 mt-1">Label</p>
    </v-flex>
    <v-flex md3 class="brief-color" @click="selectColor(3)" :class="{ 'selected': brief.colors && brief.colors.includes(3), 'disabled': brief.colors && brief.colors.length == limit }">
      <v-img src="/images/brief/colors/verdes.png"></v-img>
      <p class="mb-3 mt-1">Label</p>
    </v-flex>
    <v-flex md3 class="brief-color" @click="selectColor(4)" :class="{ 'selected': brief.colors && brief.colors.includes(4), 'disabled': brief.colors && brief.colors.length == limit }">
      <v-img src="/images/brief/colors/morados.png"></v-img>
      <p class="mb-3 mt-1">Label</p>
    </v-flex>
    <v-flex md3 class="brief-color" @click="selectColor(5)" :class="{ 'selected': brief.colors && brief.colors.includes(5), 'disabled': brief.colors && brief.colors.length == limit }">
      <v-img src="/images/brief/colors/rosas.png"></v-img>
      <p class="mb-3 mt-1">Label</p>
    </v-flex>
    <v-flex md3 class="brief-color" @click="selectColor(6)" :class="{ 'selected': brief.colors && brief.colors.includes(6), 'disabled': brief.colors && brief.colors.length == limit }">
      <v-img src="/images/brief/colors/rojos.png"></v-img>
      <p class="mb-3 mt-1">Label</p>
    </v-flex>
    <v-flex md3 class="brief-color" @click="selectColor(7)" :class="{ 'selected': brief.colors && brief.colors.includes(7), 'disabled': brief.colors && brief.colors.length == limit }">
      <v-img src="/images/brief/colors/naranjas.png"></v-img>
      <p class="mb-3 mt-1">Label</p>
    </v-flex>
    <v-flex md3 class="brief-color" @click="selectColor(8)" :class="{ 'selected': brief.colors && brief.colors.includes(8), 'disabled': brief.colors && brief.colors.length == limit }">
      <v-img src="/images/brief/colors/amarillos.png"></v-img>
      <p class="mb-3 mt-1">Label</p>
    </v-flex>
    <v-flex md3 class="brief-color" @click="selectColor(9)" :class="{ 'selected': brief.colors && brief.colors.includes(9), 'disabled': brief.colors && brief.colors.length == limit }">
      <v-img src="/images/brief/colors/ligeros-y-neutrales.png"></v-img>
      <p class="mb-3 mt-1">Label</p>
    </v-flex>
    <v-flex md3 class="brief-color" @click="selectColor(10)" :class="{ 'selected': brief.colors && brief.colors.includes(10), 'disabled': brief.colors && brief.colors.length == limit }">
      <v-img src="/images/brief/colors/oscuros-y-neutrales.png"></v-img>
      <p class="mb-3 mt-1">Label</p>
    </v-flex>
    <v-flex md3 class="brief-color" @click="selectColor(11)" :class="{ 'selected': brief.colors && brief.colors.includes(12), 'disabled': brief.colors && brief.colors.length == limit }">
      <v-img src="/images/brief/colors/disenadores.png"></v-img>
      <p class="mb-3 mt-1">Label</p>
    </v-flex>

    <v-flex md12 class="mt-3"   v-if="!custom">
      <p class="subheading font-weight-normal text-xs-center" v-if="!custom" style="text-decoration: underline; cursor: pointer" @click="custom = !custom">Tengo colores específicos con los que me gustaría trabajar</p>
    </v-flex>

    <v-flex md12 class="mt-3" v-if="custom">
      <p>Diganos que colores desea:</p>
      <v-textarea solo name="custom_colors" label="Colores perzonalizados" v-model="customColors" value="#000000, #ffffff, black, rojo" @keyup="setCustomColors($event)"></v-textarea>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        limit: 3,
        custom: false,
        customColors: '#000000, #ffffff, black, rojo',
        timer: null
      }
    },
    computed: {
      brief () { return this.$store.state.brief.data }
    },
    methods: {
      async selectColor (n) {
        var brief = this.$storage.get('brief')
        if (brief.colors.includes(n)) {
          brief.colors = brief.colors.filter(no => no !== n)
        } else {
          if (brief.colors.length < this.limit) {
            brief.colors.push(n)
          }
        }
        await this.$store.dispatch('brief/setData', brief)
      },
      setCustomColors (event) {
        if (this.timer) {
          clearTimeout(this.timer)
          this.timer = null
        }
        var context = this
        this.timer = setTimeout(async function () {
          var brief = context.$storage.get('brief')
          brief.customColors = context.customColors
          context.$storage.set('brief', brief)
          await context.$store.dispatch('brief/setData', brief)
        }, 300)
      }
    }
  }
</script>

<style>
  .brief-color .v-image {
    transition: border 0.2s;
    box-shadow: 0 3px 9px 0 rgba(0,0,0,.1);
  }

  .brief-color.selected .v-image {
    border: 4px solid #0081c1;
  }

  .brief-color.disabled:not(.selected) {
    opacity: 0.4;
    cursor: inherit;
  }
  
  .brief-color {
    cursor: pointer;
  }
</style>