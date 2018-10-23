<template lang="html">
	<v-flex xs12>
    <v-container fluid grid-list-md text-xs-center class="mt-5 pb-0">
      <v-layout row wrap align-center justify-center>
				<v-flex xs12 class="mb-5">
					<AppHeading :number="'1'" :size="'display-2'" :title="title" />
				</v-flex>
				<v-layout class="characteristics mb-5" row wrap :class="{'ocho': list.length > 6 }">
					<v-flex v-for="(item, i) in list" :key="i" :class="{'xs12 md4': list.length < 7, 'xs12 md3': list.length > 6}">
						<v-layout row xs12 wrap d-flex align-center justify-center column>
							<v-img width="80px" :src="item.icon" class="mb-1 mt-2"></v-img>
							<h1 class="title font-weight-bold mb-2" color="dark">{{ item.title }}</h1> 
							<span class="subheading mb-3" >{{ item.description }}</span>
						</v-layout>
					</v-flex>
				</v-layout>
			</v-layout>
		</v-container>
  </v-flex>
</template>

<script lang="js">
  export default {
    props: ['list', 'title'],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
  }
</script>

<style scoped lang="css">

/* ocho */
.characteristics.ocho > div:not(:first-child, :nth-child(5)){
    border-left: 1px solid silver;
}

.characteristics.ocho > :nth-child(4) ~ div > div {
    border-top: 1px solid silver;
    margin-right: 10px !important;
    margin-left: 10px !important;
}

.characteristics.ocho > :nth-child(4) ~ div .subheading {
    margin-bottom: 0px !important;
}

/* seis */
.characteristics:not(.ocho) > :nth-child(2), .characteristics:not(.ocho) > :nth-child(5), .characteristics:not(.ocho) > :nth-child(8) {
    border-right: 1px solid silver;
		border-left: 1px solid silver;
}

.characteristics:not(.ocho) > :nth-child(3) ~ div > div {
    border-top: 1px solid silver;
    margin-right: 10px !important;
    margin-left: 10px !important;
}

.characteristics:not(.ocho) > :nth-child(3) ~ div .subheading {
    margin-bottom: 0px !important;
}

[color="dark"]{
	color: #4b4b4b;
}

</style>
