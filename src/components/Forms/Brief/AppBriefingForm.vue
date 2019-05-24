<template>
  <form id="app" autocomplete="off">
    <v-layout row wrap class="px-2 mt-4 mb-5">
      <v-flex md4 xs12>
        <h1 class="heading"> Datos Básicos </h1>
      </v-flex>
      <v-flex md8 xs12>
        <label for="email">Correo electronico</label>
        <v-text-field name="email" id="email" v-model="formFields.email.value" v-validate="'required|email'" :error-messages="errors.collect('email')" box></v-text-field>
        <label for="names">Nombres</label>
        <v-text-field name="names" v-model="formFields.names.value" v-validate="'required'" :error-messages="errors.collect('names')" box></v-text-field>
        <label for="phone">Teléfono</label>
        <v-text-field name="phone" id="phone" v-model="formFields.phone.value" v-validate="'required'" :error-messages="errors.collect('phone')" box></v-text-field>
        <label for="company">Nombre de la empresa</label>
        <v-text-field name="company" v-model="formFields.company.value" v-validate="'required'" :error-messages="errors.collect('company')" box></v-text-field>
      </v-flex>
      <v-flex md12 xs12 class="my-3">
        <div style="height: 1px; background: grey"></div>
      </v-flex>
      <v-flex md4 xs12>
        <h1 class="heading"> Información Necesaria </h1>
      </v-flex>
      <v-flex md8 xs12>
        <template v-for="field in form">
          <label :for="field.name">{{ field.label }}</label>
          <v-text-field :key="field.name" v-if="field.type === 'text' && formFields[field.name]" :ref="field.name" :id="field.name" v-model="formFields[field.name].value" box></v-text-field>
          <v-textarea v-else-if="field.type === 'textarea' && formFields[field.name]" :ref="field.name" v-model="formFields[field.name].value" :id="field.name" box></v-textarea>
          <div v-else-if="field.type === 'checkbox' && formFields[field.name]" class="my-3">
            <v-layout row wrap>
              <v-flex md6 v-for="option in field.options" :key="option">
                <v-checkbox :label="option" v-model="formFields[field.name].value" :value="option"></v-checkbox>
              </v-flex>
            </v-layout>
          </div>
          <div v-else-if="field.type === 'number' && formFields[field.name]" class="my-3">
            <v-layout row wrap>  
              <v-flex md12>
                <v-text-field box v-model="formFields[field.name].value" :ref="field.name" :id="field.name" type="number"  min="0" :hint="formFields[field.name].hint"></v-text-field>
              </v-flex>
            </v-layout>
          </div>
          <div v-else-if="field.type === 'select_tags' && formFields[field.name]" class="my-3">
            <v-layout row wrap>  
              <v-flex md12>
                <v-select :items="field.options" v-model="formFields[field.name].value" multiple chips hint="Seleccione" persistent-hint></v-select>
              </v-flex>
            </v-layout>
          </div>
          <div v-else-if="field.type === 'file' && formFields[field.name]">
            <v-layout row wrap>
              <v-flex md12>
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
        </template>
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
        },
        form: []
      }
    },
    async created () {
      document.documentElement.scrollTop = 0
      await this.getForm()
    },
    async mounted () {
      var vue = this
      await vue.getForm()
      if (vue.form) {
        vue.formFields.email.value = vue.brief.information['email'] ? vue.brief.information['email'].value : ''
        vue.formFields.names.value = vue.brief.information['names'] ? vue.brief.information['names'].value : ''
        vue.formFields.company.value = vue.brief.information['company'] ? vue.brief.information['company'].value : ''
        vue.formFields.phone.value = vue.brief.information['phone'] ? vue.brief.information['phone'].value : ''

        vue.form.forEach(field => {
          if (field.type === 'text' || field.type === 'textarea') vue.$set(vue.formFields, field.name, { label: field.label, value: vue.brief.information[field.name] ? vue.brief.information[field.name].value : '' })
          if (field.type === 'number') vue.$set(vue.formFields, field.name, { label: field.label, value: vue.brief.information[field.name] ? vue.brief.information[field.name].value : 0 })
          if (field.type === 'checkbox') vue.$set(vue.formFields, field.name, { label: field.label, value: vue.brief.information[field.name] ? vue.brief.information[field.name].value : [] })
          if (field.type === 'select_tags') vue.$set(vue.formFields, field.name, { label: field.label, value: vue.brief.information[field.name] ? vue.brief.information[field.name].value : [] })
          if (field.type === 'file') vue.$set(vue.formFields, field.name, { label: field.label, value: null })
        })
      }
    },
    computed: {
      brief () { return this.$store.state.brief.data }
    },
    methods: {
      setFile (name, event) {
        console.log(event.target.files)
        this.formFields[name].value = event.target.files[0]
      },
      clearFile (name) {
        this.formFields[name].value = null
      },
      async getForm () { this.form = this.$store.getters['brief/getFormBySlug'](this.slug) }
    },
    watch: {
      submit: function (newVal, oldVal) {
        if (newVal) {
          var vue = this
          this.$validator.validate().then(async function (valid) {
            if (valid) {
              var brief = vue.$storage.get('brief')
              if (vue.formFields['stationery_pieces'] && vue.formFields['stationery_pieces'].value.length > 6) {
                brief.subServices.push({ id: 310, name: 'Pieza adicional de papelería', slug: 'adicional-papeleria', quantity: vue.formFields['stationery_pieces'].value.length - 6 })
              }

              if (vue.formFields['catalogue_pages'] && parseInt(vue.formFields['catalogue_pages'].value) > 0) {
                brief.subServices.push({ id: 314, name: 'Pagina adicional de catalogo', slug: 'adicional-catalogo', quantity: parseInt(vue.formFields['catalogue_pages'].value) })
              }

              if (vue.formFields['social_profiles_accounts']) {
                brief.service.quantity = vue.formFields['social_profiles_accounts'].value.length || 1
              }

              brief.information = vue.formFields
              await vue.$store.dispatch('brief/setData', brief)

              vue.$emit('submitBrief', true)
            } else {
              let call
              let offset = 0

              offset = document.getElementsByClassName('error--text')[0].offsetTop

              call = setInterval(function () {
                console.log(offset, document.documentElement.scrollTop)
                if (document.documentElement.scrollTop > 0) document.documentElement.scrollTop -= 2
                // else if ((offset - document.documentElement.scrollTop) <= 0) document.documentElement.scrollTop -= 2
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
label {
    font-size: 18px;
    font-weight: 500;
}

.v-text-field--box input, .v-text-field--outline input {
    margin-top: 11px;
}
</style>