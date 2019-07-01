<template>
  <v-layout row wrap class="px-2 mb-5">
    <v-flex md3 xs6 class="brief-color" @click="selectColor('Azules')" :class="{ 'selected': brief.colors && brief.colors.includes('Azules'), 'disabled': brief.colors && brief.colors.length == limit }">
      <v-img src="/images/brief/colors/Azules.jpg"></v-img>
      <p class="mb-3 mt-1">Azules</p>
    </v-flex>
    <v-flex md3 xs6 class="brief-color" @click="selectColor('Aquas')" :class="{ 'selected': brief.colors && brief.colors.includes('Aquas'), 'disabled': brief.colors && brief.colors.length == limit }">
      <v-img src="/images/brief/colors/Aquas.jpg"></v-img>
      <p class="mb-3 mt-1">Aquas</p>
    </v-flex>
    <v-flex md3 xs6 class="brief-color" @click="selectColor('Verdes')" :class="{ 'selected': brief.colors && brief.colors.includes('Verdes'), 'disabled': brief.colors && brief.colors.length == limit }">
      <v-img src="/images/brief/colors/Verdes.jpg"></v-img>
      <p class="mb-3 mt-1">Verdes</p>
    </v-flex>
    <v-flex md3 xs6 class="brief-color" @click="selectColor('Morados')" :class="{ 'selected': brief.colors && brief.colors.includes('Morados'), 'disabled': brief.colors && brief.colors.length == limit }">
      <v-img src="/images/brief/colors/Morados.jpg"></v-img>
      <p class="mb-3 mt-1">Morados</p>
    </v-flex>
    <v-flex md3 xs6 class="brief-color" @click="selectColor('Rosas')" :class="{ 'selected': brief.colors && brief.colors.includes('Rosas'), 'disabled': brief.colors && brief.colors.length == limit }">
      <v-img src="/images/brief/colors/Rosas.jpg"></v-img>
      <p class="mb-3 mt-1">Rosas</p>
    </v-flex>
    <v-flex md3 xs6 class="brief-color" @click="selectColor('Rojos')" :class="{ 'selected': brief.colors && brief.colors.includes('Rojos'), 'disabled': brief.colors && brief.colors.length == limit }">
      <v-img src="/images/brief/colors/Rojos.jpg"></v-img>
      <p class="mb-3 mt-1">Rojos</p>
    </v-flex>
    <v-flex md3 xs6 class="brief-color" @click="selectColor('Naranjas')" :class="{ 'selected': brief.colors && brief.colors.includes('Naranjas'), 'disabled': brief.colors && brief.colors.length == limit }">
      <v-img src="/images/brief/colors/Naranjas.jpg"></v-img>
      <p class="mb-3 mt-1">Naranjas</p>
    </v-flex>
    <v-flex md3 xs6 class="brief-color" @click="selectColor('Amarillos')" :class="{ 'selected': brief.colors && brief.colors.includes('Amarillos'), 'disabled': brief.colors && brief.colors.length == limit }">
      <v-img src="/images/brief/colors/Amarillos.jpg"></v-img>
      <p class="mb-3 mt-1">Amarillos</p>
    </v-flex>
    <v-flex md3 xs6 class="brief-color" @click="selectColor('Neutros')" :class="{ 'selected': brief.colors && brief.colors.includes('Neutros'), 'disabled': brief.colors && brief.colors.length == limit }">
      <v-img src="/images/brief/colors/Neutros.jpg"></v-img>
      <p class="mb-3 mt-1">Escala de Grises</p>
    </v-flex>
    <v-flex md3 xs6 class="brief-color" @click="selectColor('CMYK')" :class="{ 'selected': brief.colors && brief.colors.includes('CMYK'), 'disabled': brief.colors && brief.colors.length == limit }">
      <v-img src="/images/brief/colors/CMYK.jpg"></v-img>
      <p class="mb-3 mt-1">Quiero que decidan por mi!</p>
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
        customColors: '',
        timer: null
      }
    },
    created () {
      if (process.client) {
        document.documentElement.scrollTop = 0
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