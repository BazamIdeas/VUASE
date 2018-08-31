<template>
  <v-content>
    <section>
      <v-container class="pb-0">
        <v-layout row wrap align-center justify-center class="white--text">
          <v-flex align-center justify-center>
            <h1 class="text--black display-1 mb-2 text-xs-center">NUEVA TAREA</h1>
            <div>
              <v-text-field v-validate.initial="'required'" id="body" name="body" label="Lorem Ipsum" @keyup.enter="addTodo()" v-model="body" class="elevation-0" :error-messages="errors.first('body')" solo></v-text-field>
            </div>
            <div class="text-xs-center">
              <v-btn @click="addTodo()" :disabled="errors.has('body')" class="blue lighten-2" dark large>
                Guardar
              </v-btn>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <section>
      <v-container class="pb-0">
        <v-layout column wrap class="my-3" align-center>
          <v-flex xs12 sm4 class="mb-2">
            <div class="text-xs-center">
              <h2 class="headline">LISTA DE TAREAS</h2>
            </div>
          </v-flex>
          <v-flex xs12 sm4 class="my-2">
            <div class="text-xs-center">
              <v-chip label="rounded" :class="{ 'blue lighten-2 white--text': filter == 1 }" @click="filter = 1">
                <v-avatar tile="rounded" class="blue white--text">{{ todos.length }}</v-avatar>
                Todas
              </v-chip>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <v-chip label="rounded" :class="{ 'green lighten-2 white--text': filter == 2 }" @click="filter = 2">
                <v-avatar tile="rounded" class="green white--text">{{ todos | countByStatus(true) }}</v-avatar>
                Completados
              </v-chip>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <v-chip label="rounded" :class="{ 'red lighten-2 white--text': filter == 3 }" @click="filter = 3">
                <v-avatar tile="rounded" class="red white--text">{{ todos | countByStatus(false) }}</v-avatar>
                No completados
              </v-chip>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <v-btn v-if="completedTodosCount" @click="clearTodos()" dark color="red darken-4 elevation-0" style="width:100%; margin:0" class="mt-3">
                LIMPIAR COMPLETADOS
              </v-btn>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container grid-list-md text-xs-center class="pt-0">
        <v-layout row wrap>
          <v-flex v-if="todos.length" v-for="(todo, index) in todosByStatus" :key="todo.id" xs12 md3>
            <v-card color="blue-grey lighten-4" class="white--text mx-2 mb-5" transition="scale-transition" origin="center center">
              <v-card-text>
                <div>
                  <v-checkbox v-if="edit == null || edit !== todo.id" @change="completeTodo(todo.id)" :label="todo.title + '.'" :input-value="todo.completed" color="green"></v-checkbox>
                </div>
                <div>
                  <v-btn v-if="edit == null || edit !== todo.id" @click="toEditTodo(todo.id)" color="yellow darken-4" class="elevation-0" style="width:100%; margin:0" small dark>
                    Editar
                  </v-btn>
                  <v-text-field v-if="edit === todo.id" v-validate="'required'" name="body_edit" v-on:keyup.enter="editTodo(todo.id, $event)" :value="todo.title" :error-messages="errors.first('body_edit')" label="Editar" autofocus flat solo></v-text-field>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn @click="removeTodo(todo.id)" fab small dark icon absolute bottom right color="red">
                  <v-icon dark>clear</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex v-if="!todos.length" xs12 md12>
            <v-card color="blue-grey lighten-4" class="blue--text mx-2 mb-5">
              <v-card-text>
                <div>
                  <h3>NO HAY TAREAS</h3>
                </div>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <v-footer class="blue darken-2">
      <v-layout row wrap align-center>
        <v-flex xs12>
          <div class="white--text ml-3">
            Echo con
            <v-icon class="red--text">favorite</v-icon>
            por <a class="white--text" href="https://vuetifyjs.com" target="_blank">Daniel Torres</a>
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-content>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        body: '',
        edit: null,
        filter: 1,
        rounded: true
      }
    },
    async fetch ({ store, params }) {
      await store.dispatch('getTodos')
    },
    mounted () {
      this.$toast.show('Bienvenido a la aplicación')
    },
    computed: {
      todos () { return this.$store.state.todos },
      todosByStatus () {
        return this.$store.state.todos.filter(todo => {
          switch (this.filter) {
            case 1:
              return true
            case 2:
              return (todo.completed === true)
            case 3:
              return (todo.completed === false)
          }
        })
      },
      completedTodosCount () { return this.$store.getters.completedTodos.length }
    },
    methods: {
      addTodo () {
        this.$store.dispatch('addTodo', { body: this.body, completed: false })
        this.body = ''
      },
      editTodo (id, e) {
        this.$validator.validate('body_edit', e.target.value).then(result => {
          if (result) {
            this.$store.dispatch('editTodo', { id: id, title: e.target.value })
            this.edit = null
          }
        })
      },
      ...mapActions([
        'completeTodo',
        'removeTodo',
        'clearTodos'
      ]),
      toEditTodo (id) {
        this.edit = id
      }
    },
    filters: {
      countByStatus: function (todos, status) {
        var n = 0
        if (Array.isArray(todos)) {
          todos.forEach(todo => {
            if (todo.completed === status) n++
          })
        }
        return n
      }
    }
  }
</script>
