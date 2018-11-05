<template>
  <div class="brief-header__progress">
    <div class="step-progress-bar">
      <div class="step-progress-bar__progress" :class="{ 'width-25': activeStep == 2, 'width-50': activeStep == 3, 'width-75': activeStep == 4, 'width-100': activeStep == 5 }"></div>
      <div>
        <div class="step-progress-bar__step" v-bind:class="{ 'step-progress-bar__step--current': activeStep == 1, 'step-progress-bar__step--highlight': activeStep > 1 }" style="left: 0%;"></div>
      </div>
      <div>
        <div class="step-progress-bar__step" v-bind:class="{ 'step-progress-bar__step--current': activeStep == 2, 'step-progress-bar__step--highlight': activeStep > 2, 'step-progress-bar__step--future': activeStep < 2 }" style="left: 25%;"></div>
      </div>
      <div>
        <div class="step-progress-bar__step" v-bind:class="{ 'step-progress-bar__step--current': activeStep == 3, 'step-progress-bar__step--highlight': activeStep > 3, 'step-progress-bar__step--future': activeStep < 3 }" style="left: 50%;"></div>
      </div>
      <div>
        <div class="step-progress-bar__step" v-bind:class="{ 'step-progress-bar__step--current': activeStep == 4, 'step-progress-bar__step--highlight': activeStep > 4, 'step-progress-bar__step--future': activeStep < 4 }" style="left: 75%;"></div>
      </div>
      <div>
        <div class="step-progress-bar__step" v-bind:class="{ 'step-progress-bar__step--current': activeStep == 5, 'step-progress-bar__step--highlight': activeStep > 5, 'step-progress-bar__step--future': activeStep < 5 }" style="left: 100%;"></div>
      </div>
      <!--<div>
        <div class="step-progress-bar__step" v-bind:class="{ 'step-progress-bar__step--current': activeStep == 6, 'step-progress-bar__step--highlight': activeStep > 6, 'step-progress-bar__step--future': activeStep < 6 }" style="left: 100%;"></div>
      </div>-->
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    computed: {
      activeStep () { return this.$store.state.brief.activeStep }
    }
  }
</script>

<style scoped>
  .brief-header__progress {
    position: absolute;
    left: 0;
    right: 0;
  }

  .step-progress-bar {
    vertical-align: middle;
    line-height: 14px;
    left: 15px;
    right: 15px;
    position: absolute;
    top: -2px;
  }

  .step-progress-bar__step--highlight:after {
      background-color: #0081c1 !important;
      transition: -webkit-transform .1s cubic-bezier(.82,.91,.62,1.9);
      transition: transform .1s cubic-bezier(.82,.91,.62,1.9);
      transition: transform .1s cubic-bezier(.82,.91,.62,1.9),-webkit-transform .1s cubic-bezier(.82,.91,.62,1.9);
  }

  .step-progress-bar:after {
      position: absolute;
      height: 4px;
      left: 0;
      right: 0;
      content: '';
      background-color: #e6e6e6;
  }

  .step-progress-bar__progress {
    position: absolute;
    height: 4px;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: #004b7b;
    width: 0;
  }

  .step-progress-bar__step--highlight {
    cursor: pointer;
  }

  .step-progress-bar__step {
    position: absolute;
    width: 44px;
    height: 44px;
    margin-top: -20px;
    margin-left: -22px;
    z-index: 2;
  }

  .step-progress-bar__step:after {
      content: '';
      position: absolute;
      width: 14px;
      height: 14px;
      border: 3px solid #fff;
      border-radius: 999px;
      background-color: #e6e6e6;
      left: 15px;
      top: 15px;
  }

  .step-progress-bar__step--current {
    -webkit-animation: sprout;
    animation: sprout;
    -webkit-animation-duration: .2s;
    animation-duration: .2s;
  }

  .step-progress-bar__step--current:after {
    background: #004b7b;
    width: 22px;
    height: 22px;
    top: 11px;
    left: 11px;
  }

  .step-progress-bar__step--future {
    cursor: help;
  }

  .width-25 {
    width: 25%;
  }
  .width-50 {
    width: 50%;
  }
  .width-75 {
    width: 75%;
  }
  .width-100 {
    width: 100%;
  }
  
</style>
