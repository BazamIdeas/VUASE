<template>
  <section>
    <v-container fluid grid-list-md class="mt-5 pt-5 pb-0">
      <v-layout row wrap>
        <v-flex xs12 offset-md1 md10 class="mt-5 mb-5">
          <v-layout row wrap>
            <v-flex xs6 md3>
              <h2>
                {{ project.name }}
              </h2>
            </v-flex>
            <v-flex xs6 md2 offset-md7 class="text-xs-right">
              <v-chip v-if="!project.closed" color="green" class="elevation-0 font-weight-medium" text-color="white">ABIERTO</v-chip>
              <v-chip v-if="project.closed" color="red" class="elevation-0 font-weight-medium" text-color="white">CERRADO</v-chip>
            </v-flex>
            <v-flex xs12 class="mt-4">
              <h2>BOCETOS</h2>
              <div style="height: 2px; width: 100%; background-color: rgba(0, 0, 0, .87);"></div>
              <v-container fluid class="pa-0 pt-2">
                <v-layout row wrap>
                  <v-flex xs6 md2 v-for="sketch in sketchs" :key="sketch.id">
                      <v-card class="pa-0" style="cursor: pointer; position:relative; overflow: hidden;">
                        <div v-show="sketch.recommended" class="recommended">Destacado</div>
                        <div class="blue version elevation-0 font-weight-medium" text-color="white">{{ sketch.version }}</div>
                        <span class="approved">
                          <v-icon :color="sketch.approved ? 'red' : 'white'">favorite</v-icon>
                        </span>
                        <div @click="openSketch(id)" style="padding-top: 100%; position: relative">
                          <img :src="sketch.files[0]" height="100%" width="100%" style="position:absolute; top: 0">
                        </div>
                      </v-card>
                  </v-flex>
                  <v-flex xs12 md12 v-if="!sketchs.length" class="text-xs-center py-0">
                    <v-progress-linear  indeterminate color="blue"></v-progress-linear >
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <v-dialog v-model="openSketchDialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar height="45px" dark class="elevation-0" color="white">
          <v-spacer></v-spacer>
          <v-btn icon class="text--primary" @click="openSketchDialog = false">
            <v-icon>close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-container v-if="sketch" fluid>
          <v-layout row wrap>
            <v-flex xs12 md3>
              <v-card class="pa-0" style="cursor: pointer; position:relative; overflow: hidden;">
                <div v-show="sketch.recommended" class="recommended">Destacado</div>
                <div class="blue version elevation-0 font-weight-medium" text-color="white">{{ sketch.version }}</div>
                <span class="approved" @click="approveSketch(sketch.id)">
                  <v-icon large :color="sketch.approved ? 'red' : 'white'">favorite</v-icon>
                </span>
                <div style="padding-top: 100%; position: relative">
                  <img :src="sketch.files[0]" height="100%" width="100%" style="position:absolute; top: 0">
                </div>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
  </section>
</template>

<script>
  export default {
    layout: 'account',
    asyncData ({ params }) {
      return {
        id: params.id,
        project: {},
        sketch: null,
        sketchs: [],
        attachments: [],
        releases: [],
        openSketchDialog: false
      }
    },
    async created () {
      if (!this.isLoggedIn) {
        return this.$router.push('/area-de-cliente/entrar')
      }
      this.project = await this.$store.dispatch('user/getProject', this.id)

      let sketchsIds = this.project.sketchs.map(x => x.id)

      await this.$store.dispatch('user/getProjectSketchs', sketchsIds)

      this.sketchs = this.$store.state.user.sketchs
    },
    computed: {
      isLoggedIn () { return this.$store.getters['isLoggedIn'] },
      authData () { return this.$store.state.app.authData }
    },
    methods: {
      approveSketch (id) {
        alert(id)
      },
      openSketch (id) {
        this.openSketchDialog = true
        this.sketch = this.sketchs.find(x => x.id === +id)
        console.log(this.sketch)
      }
    }
  }
</script>

<style>
  .version {
    position: absolute;
    top: 4px;
    right: 4px;
    height: 25px;
    width: 25px;
    padding: 0 3px;
    z-index: 1;
    color: white;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }

  .approved {
    position: absolute;
    bottom: 4px;
    left: 4px;
    z-index: 1;
    color: white;
  }

  .recommended {
    position: absolute;
    top: 14px;
    left: -44px;
    z-index: 1;
    background-color: #f7941d;
    padding: 7px 40px;
    color: white;
    font-weight: 600;
    transform: rotate(-45deg);
  }
</style>