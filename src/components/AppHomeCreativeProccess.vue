<template lang="html">
	<v-flex xs12>
    <v-container grid-list-md fluid class="pa-0 creative-process-home">
        <v-flex xs12 class="mb-5">
          <AppHeading :number="'1'" :size="'display-1'" :title="title" class="mb-3" />
        </v-flex>
        <v-layout class="content-pasos">
          <v-flex xs10 offset-xs1 offset-md3 md6>
            <v-stepper non-linear class="pasos mb-3">
              <v-stepper-header>
                <v-stepper-step step="1"> </v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="2"> </v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="3"> </v-stepper-step>
              </v-stepper-header>
            </v-stepper>
          </v-flex>
        </v-layout>
          <v-layout class="characteristics home mb-5" row>
            <div class="characteristic">
              <div class="circle-img mb-4 mt-2 ">
                <img height="70px" width="80px" src="/icons/te escuchamos.svg">
              </div>
              <div class="mb-2">
                  <h2 style="font-size:18px;" class="font-weight-bold px-5  text-xs-center">TE ESCUCHAMOS</h2> 
              </div>
              <span class="body-2 mb-2  px-3 text-xs-center" >Coméntanos tus necesidades preferencias y objetivos</span>
            </div>

            <div class="characteristic">
              <div class="circle-img mb-4 mt-2 ">
                <img height="70px" width="80px" src="/icons/logo-a-medida-pink.svg">
              </div>
              <div class="mb-2">
                  <h2 style="font-size:18px;" class="font-weight-bold px-5  text-xs-center">GARANTÍA DE CONFORMIDAD 100%</h2> 
              </div>
              <span class="body-2 mb-2 px-3 text-xs-center" >Nuestros equipos de expertos desarrollrán tu proyecto de manera personalizada has tu entera aprobación</span>
            </div>
            <div class="characteristic">
              <div class="circle-img mb-4 mt-2 ">
                <img height="70px" width="80px" src="/icons/recomendados-por-grandes-pink.svg">
              </div>
              <div class="mb-2">
                  <h2 style="font-size:18px;" class="font-weight-bold px-5  text-xs-center">LISTO!</h2> 
              </div>
              <span class="body-2 mb-2  px-3 text-xs-center" >Una vez aprobado tu proyecto te enviamos todo listo para usarlo en diferentes formatos</span>
            </div>    
        </v-layout>
        <v-layout align-center justify-center row> 
            <v-btn color="my-5 xs-mt-0" to="/nuestros-servicios" class="elevation-0 white--text title font-weight-regular" style="background-color:#EE205E;">
              COMENZAR
            </v-btn>
        </v-layout>
    </v-container>
  </v-flex>
</template>

<script lang="js">
  export default {
    props: ['title']
  }
</script>

<style lang="css">
  .pasos.v-stepper{
      background: #fff;
      box-shadow: none;
      background: transparent;
  }
  
  .v-stepper__header{
    box-shadow: none;
  }

  .pasos .v-divider {
    width: 350px;
    border: 1.5px solid;
  }

  .v-stepper__header > :nth-child(1) > span {
    background-color: #662D92 !important;
  }
  .v-stepper__header > :nth-child(3) > span {
    background-color: #EE205E !important;
  }
  .v-stepper__header > :nth-child(5) > span {
    background-color: #8AC63D !important;
  }
  

  .v-stepper__step {
    padding-right: 0px;
    padding-left: 0px;
  }

  .characteristics.home{
    display: flex;
    justify-content: space-between;
    padding: 0px 14.5%;
    flex-wrap: wrap;
  }

  .characteristics.home > :nth-child(1) h2 {
    color: #662D92 !important;
  }
  .characteristics.home > :nth-child(2) h2 {
    color: #EE205E !important;
  }
  .characteristics.home > :nth-child(3) h2 {
    color: #8AC63D !important;
  }

   .characteristics.home .characteristic {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      height: 100%;
      flex: 1;
  }

   .characteristics.home .characteristic h2{
      font-size: 18px;
      line-height: 20px;
  }

   .characteristics.home .characteristic > div{
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
  }

   .characteristics.home .characteristic .circle-img {
    height: 120px;
    width: 120px;
    border-radius: 50%;
    background: white;
    box-shadow: 0 14px 42px 0 rgba(0,0,0,.2);
  }

  @media (min-width: 320px) and (max-width: 640px) {
    .characteristics.home .characteristic{
      margin-top: 20px;
    }
  }
</style>
