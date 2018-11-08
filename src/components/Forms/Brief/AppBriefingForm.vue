<template>
  <form id="app">
    <v-layout row wrap class="px-2 mt-4 mb-5">
      <v-flex md4>
        <h1 class="heading"> Datos Basicos </h1>
      </v-flex>
      <v-flex md8>
        <v-text-field name="email" v-model="formFields.email.value" label="Correo electronico" v-validate="'required|email'" :error-messages="errors.collect('email')" box></v-text-field>
        <v-text-field name="names" v-model="formFields.names.value" label="Nombres" v-validate="'required'" :error-messages="errors.collect('names')" box></v-text-field>
        <v-text-field name="phone" v-model="formFields.phone.value" label="Teléfono" v-validate="'required'" :error-messages="errors.collect('phone')" box></v-text-field>
        <v-text-field name="company" v-model="formFields.company.value" label="Nombre de la empresa" v-validate="'required'" :error-messages="errors.collect('company')" box></v-text-field>
      </v-flex>
      <v-flex md12 class="my-3">
        <div style="height: 1px; background: grey"></div>
      </v-flex>
      <v-flex md4>
        <h1 class="heading"> Información Necesaria </h1>
      </v-flex>
      <v-flex md8>
        <v-text-field v-for="field in form" :key="field.name" v-if="field.type === 'text'" :ref="field.name" v-model="formFields[field.name].value" :label="field.label" box></v-text-field>
        <v-textarea v-else-if="field.type === 'textarea'" :ref="field.name" v-model="formFields[field.name].value" :label="field.label" box></v-textarea>
        <div v-else-if="field.type === 'checkbox'" class="my-3">
          <v-layout row wrap>
            <v-flex md12>
              <label class="v-label theme--light" style="font-weight: 500">{{ field.label }}</label>
            </v-flex>
            <v-flex md6 v-for="option in field.options" :key="option">
              <v-checkbox :label="option" v-model="formFields[field.name].value" :value="option"></v-checkbox>
            </v-flex>
          </v-layout>
        </div>
        <div v-else-if="field.type === 'file'">
          <v-layout row wrap>
            <v-flex md12>
              <label class="v-label theme--light" style="font-weight: 500">{{ field.label }}</label>
              <v-input prepend-icon="folder_open" :append-icon="formFields[field.name] ? 'close' : ''" @click:append="clearFile(field.name)" class="file my-3">
                <input type="file" :ref="field.name" :id="field.name" :name="field.name" @change="setFile(field.name, $event)" style="display: none;">
                <p style="margin-bottom: 0; padding: 2px 16px; font-weight: 500; color: #737373;border: 2px solid #929292; border-radius: 5px; cursor: pointer">
                  <label :for="field.name" v-if="formFields[field.name].value === null" style="cursor: pointer">Seleccionar Archivo </label>
                  <label :for="field.name" v-if="formFields[field.name].value !== null" style="cursor: pointer">{{ formFields[field.name].value.name }}</label>
                </p>
              </v-input>
            </v-flex>
          </v-layout>
        </div>
      </v-flex>
    </v-layout>
  </form>
</template>

<script>
  export default {
    props: ['submit', 'slug'],
    data () {
      return {
        formFields: {
          email: {
            label: 'Correo electronico',
            value: ''
          },
          names: {
            label: 'Nombres',
            value: ''
          },
          company: {
            label: 'Télefono',
            value: ''
          },
          phone: {
            label: 'Empresa',
            value: ''
          }
        }
      }
    },
    created () {
      var vue = this
      if (vue.form) {
        vue.form.forEach(field => {
          if (field.type === 'text' || field.type === 'textarea') vue.$set(vue.formFields, field.name, { label: field.label, value: '' })
          if (field.type === 'checkbox') vue.$set(vue.formFields, field.name, { label: field.label, value: [] })
          if (field.type === 'file') vue.$set(vue.formFields, field.name, { label: field.label, value: null })
        })
      }
    },
    computed: {
      brief () { return this.$store.state.brief.data },
      form () { return this.$store.getters['brief/getFormBySlug'](this.slug) }
    },
    methods: {
      setFile (name, event) {
        console.log(event.target.files)
        this.formFields[name].value = event.target.files[0]
      },
      clearFile (name) {
        this.formFields[name].value = null
      }
    },
    watch: {
      submit: function (newVal, oldVal) {
        if (newVal) {
          var vue = this
          this.$validator.validate().then(async function (valid) {
            if (valid) {
              var brief = vue.$storage.get('brief')
              brief.information = vue.formFields
              await vue.$store.dispatch('brief/setData', brief)

              vue.$emit('submitBrief', true)
            } else {
              let call
              let offset = 0

              offset = document.getElementsByClassName('error--text')[0].offsetTop

              call = setInterval(function () {
                console.log(offset, document.documentElement.scrollTop)
                if ((offset - document.documentElement.scrollTop) > 0) document.documentElement.scrollTop += 1
                else if ((offset - document.documentElement.scrollTop) < 0) document.documentElement.scrollTop -= 1
                else clearInterval(call)
              }, 0.1)

              vue.$emit('submitBrief', false)
            }
          })
        }
      }
    }
  }
</script>

<style>

</style>