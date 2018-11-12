<template>
  <div>
    <div v-for="(attr, index) in attrs" :key="attr.name" class="slider-style">
      <div class="slider-style-labels">
        <div class="slider-style-labels-min">{{ attr.labels[0] }}</div>
        <div class="slider-style-labels-max">{{ attr.labels[1] }}</div>
      </div>
      <div class="slider-style-bar">
        <div class="slider slider--initialised" style="position: relative;">
        </div>
        <div class="slider-field__markers">
          <span v-for="value in values" @click="setStyle(attr.name, value, index, $event)" class="slider-field__markers__marker" :class="{ 'selected': brief.styles[attr.name] ? value === brief.styles[attr.name] : value === attr.default }"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        attrs: [
          { labels: ['Clásico', 'Moderno'], name: 'clasic_modern', default: 0 },
          { labels: ['Adulto', 'Juvenil'], name: 'mature_youthful', default: 0 },
          { labels: ['Abstracto', 'Literal'], name: 'abstract_literal', default: 0 },
          { labels: ['Geométrico', 'Orgánico'], name: 'geometric_organic', default: 0 },
          { labels: ['Femenino', 'Masculino'], name: 'feminine_masculine', default: 0 },
          { labels: ['Juguetón', 'Sofisticado'], name: 'playful_sophisticated', default: 0 },
          { labels: ['Económico', 'Lujoso'], name: 'economical_luxurious', default: 0 }
        ],
        values: [-3, -2, -1, 0, 1, 2, 3]
      }
    },
    computed: {
      brief () { return this.$store.state.brief.data }
    },
    methods: {
      async setStyle (name, v, index, event) {
        var brief = this.$storage.get('brief')
        brief.styles[name] = v
        await this.$store.dispatch('brief/setData', brief)
      },
      dataActiveStyle (event) {
        event.currentTarget.setAttribute('data-active', event.currentTarget.getAttribute('data-active') === 'false' ? 'true' : 'false')
      }
    }
  }
</script>

<style scoped>
  .slider-style {
    margin-bottom: 60px;
    padding: 0px 20%;
  }

  .slider-style-labels {
    padding-bottom: 15px;
  }

  .slider-style-labels:after, .slider-style-labels:before {
    content: ' ';
    display: table;
  }

  .slider-style-labels:after {
    clear: both;
  }

  .slider-style-labels-min {
    float: left;
  }

  .slider-style-labels-max {
    float: right;
  }

  .slider-style-bar {
    position: relative;
  }

  .slider {
    width: 100%;
    background-color: #e6e6e6;
    height: 30px;
    border-radius: 15px;
  }

  .slider--initialised .slider__handle {
    visibility: visible;
  }

  .slider__handle {
    width: 44px;
    height: 44px;
    border-radius: 9999px;
    visibility: hidden;
    cursor: pointer;
    transition: -webkit-transform .1s;
    transition: transform .1s;
    transition: transform .1s,-webkit-transform .1s;
    -webkit-transform: scale(1,1);
    transform: scale(1,1);
    position: relative;
    background: #004b7b;
    top: -8px;
  }

  .slider__handle:after {
    width: 16px;
    height: 16px;
    border-radius: 9999px;
    content: '';
    position: absolute;
    background: #fff;
    top: 14px;
    left: 14px;
    transition: -webkit-transform .1s;
    transition: transform .1s;
    transition: transform .1s,-webkit-transform .1s;
    -webkit-transform: scale(1,1);
    transform: scale(1,1);
  }

  .slider-field__markers {
    display: flex;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    height: 30px;
    justify-content: space-between;
  }

  .slider-field__markers__marker {
    transition: opacity .1s ease-in;
    width: calc(100% / 7);
    text-align: center;
    line-height: 30px;
    vertical-align: middle;
    opacity: .5;
  }

  .slider-field__markers__marker:after {
    cursor: pointer;
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #0081c1;
    border-radius: 100px;
  }

  .slider-field__markers__marker.selected {
    opacity: 1;
  }

  .slider-field__markers__marker.selected:after {
    border: 15px solid #004b7b;
    background: white !important;
    width: 50px;
    height: 50px;
    position: relative;
    top: -10px;
    opacity: 1;
    transition: all 0.2s;
  }
</style>

var elementTop = document.getElementById('yourElementId').offsetTop;
var divTop = document.getElementById('yourDivId').offsetTop;
var elementRelativeTop = elementTop - divTop;