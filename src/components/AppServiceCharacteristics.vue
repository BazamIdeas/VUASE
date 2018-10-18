<template lang="html">
	<section>
    <v-container fluid grid-list-md text-xs-center class="mt-5 pt-5 pb-0">
      <v-layout row wrap align-center justify-center>
				<v-flex xs12 class="mb-5">
					<h2 class="display-2 font-weight-medium text-uppercase">{{title}}</h2>
				</v-flex>
				<v-layout class="characteristics mb-5" row wrap>
					<v-flex xs12 md4 v-for="item in list">
						<v-layout row xs12 wrap d-flex align-center justify-center column>
							<v-img width="80px" :src="item.icon" class="mb-1 mt-2"></v-img>
							<h1 class="title font-weight-bold mb-2" color="dark">{{ item.title | uppercase }}</h1> 
							<span class="subheading mb-3" >{{ item.description }}</span>
						</v-layout>
					</v-flex>
				</v-layout>
			</v-layout>
		</v-container>
  </section>
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
.characteristics > :nth-child(2), .characteristics > :nth-child(5), .characteristics > :nth-child(8) {
    border-right: 1px solid silver;
		border-left: 1px solid silver;
}

.characteristics > :nth-child(3) ~ div > div {
    border-top: 1px solid silver;
    margin-right: 20px !important;
    margin-left: 20px !important;
}

.characteristics > :nth-child(3) ~ div .subheading {
    margin-bottom: 0px !important;
}

[color="dark"]{
	color: #4b4b4b;
}

</style>
