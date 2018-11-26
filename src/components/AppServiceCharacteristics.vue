<template lang="html">
	<v-flex xs12>
    <v-container fluid grid-list-md text-xs-center class="mt-4 pb-0">
      <v-layout row wrap align-center justify-center>
				<v-flex xs12 class="mb-5">
					<AppHeading :number="'2'" :size="'display-1'" :title="title" />
				</v-flex>
				<v-layout class="characteristics mb-5" row wrap 
                :class="{
                    'seis': list.length == 6,
                    'ocho': list.length > 6 && list.length < 9, 
                    'nueve': list.length >= 9 
                }">
					<v-flex v-for="(item, i) in list" :key="i" :class="{'xs12 md4': list.length < 7 ||  list.length > 8, 'xs12 md3': list.length > 6 && list.length < 9}">
						<div class="characteristic">
							<img height="70px" width="80px" :src="item.icon" class="mb-3 mt-3 ">
                            <div class="mb-2">
                                <h2 style="font-size:18px;" class="font-weight-bold" color="dark" :class="{'px-5': list.length <= 6}">{{ item.title }}</h2> 
                            </div>
							<span class="body-2 mb-2" >{{ item.description }}</span>
						</div>
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

/* nueve */
.characteristics.nueve > div:not(:first-child, :nth-child(4), :nth-child(7)){
    border-left: 1px solid silver;
}

.characteristics.nueve > :nth-child(3) ~ div > div {
    border-top: 1px solid silver;
    margin-right: 10px !important;
    margin-left: 10px !important;
}

.characteristics.nueve > :nth-child(4) ~ div .subheading {
    margin-bottom: 0px !important;
}

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
.characteristics.seis > :nth-child(2), .characteristics.seis > :nth-child(5), .characteristics.seis > :nth-child(8) {
    border-right: 1px solid silver;
		border-left: 1px solid silver;
}

.characteristics.seis > :nth-child(3) ~ div > div {
    border-top: 1px solid silver;
    margin-right: 10px !important;
    margin-left: 10px !important;
}

.characteristics.seis > :nth-child(3) ~ div .subheading {
    margin-bottom: 0px !important;
}

[color="dark"]{
	color: #4b4b4b;
}

.characteristic {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
}

.characteristic h2{
    font-size: 18px;
    line-height: 20px;
}

.characteristic > div{
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

@media (min-width: 320px) and (max-width: 480px) {
    .characteristics.nueve > div:not(:first-child, :nth-child(4), :nth-child(7)){
        border-left: none !important;
    }

    .characteristics.nueve > :nth-child(3) ~ div > div {
        border-top: none !important;
        margin-right: none !important;
        margin-left: none !important;
    }

    .characteristics.nueve > :nth-child(4) ~ div .subheading {
        margin-bottom: none !important;
    }

    /* ocho */
    .characteristics.ocho > div:not(:first-child, :nth-child(5)){
        border-left: none !important;
    }

    .characteristics.ocho > :nth-child(4) ~ div > div {
        border-top: none !important;
        margin-right: none !important;
        margin-left: none !important;
    }

    .characteristics.ocho > :nth-child(4) ~ div .subheading {
        margin-bottom: none !important;
    }

    /* seis */
    .characteristics.seis > :nth-child(2), .characteristics.seis > :nth-child(5), .characteristics.seis > :nth-child(8) {
        border-right: none !important;
        border-left: none !important;
    }

    .characteristics.seis > :nth-child(3) ~ div > div {
        border-top: none !important;
        margin-right: none !important;
        margin-left: none !important;
    }

    .characteristics.seis > :nth-child(3) ~ div .subheading {
        margin-bottom: none !important;
    }
}

@media (min-width: 481px) and (max-width: 639px) {
    .characteristics.nueve > div:not(:first-child, :nth-child(4), :nth-child(7)){
        border-left: none !important;
    }

    .characteristics.nueve > :nth-child(3) ~ div > div {
        border-top: none !important;
        margin-right: none !important;
        margin-left: none !important;
    }

    .characteristics.nueve > :nth-child(4) ~ div .subheading {
        margin-bottom: none !important;
    }

    /* ocho */
    .characteristics.ocho > div:not(:first-child, :nth-child(5)){
        border-left: none !important;
    }

    .characteristics.ocho > :nth-child(4) ~ div > div {
        border-top: none !important;
        margin-right: none !important;
        margin-left: none !important;
    }

    .characteristics.ocho > :nth-child(4) ~ div .subheading {
        margin-bottom: none !important;
    }

    /* seis */
    .characteristics.seis > :nth-child(2), .characteristics.seis > :nth-child(5), .characteristics.seis > :nth-child(8) {
        border-right: none !important;
        border-left: none !important;
    }

    .characteristics.seis > :nth-child(3) ~ div > div {
        border-top: none !important;
        margin-right: none !important;
        margin-left: none !important;
    }

    .characteristics.seis > :nth-child(3) ~ div .subheading {
        margin-bottom: none !important;
    }
}

@media (min-width: 640px) and (max-width: 960px) {
    .characteristics.nueve > div:not(:first-child, :nth-child(4), :nth-child(7)){
        border-left: none !important;
    }

    .characteristics.nueve > :nth-child(3) ~ div > div {
        border-top: none !important;
        margin-right: none !important;
        margin-left: none !important;
    }

    .characteristics.nueve > :nth-child(4) ~ div .subheading {
        margin-bottom: none !important;
    }

    /* ocho */
    .characteristics.ocho > div:not(:first-child, :nth-child(5)){
        border-left: none !important;
    }

    .characteristics.ocho > :nth-child(4) ~ div > div {
        border-top: none !important;
        margin-right: none !important;
        margin-left: none !important;
    }

    .characteristics.ocho > :nth-child(4) ~ div .subheading {
        margin-bottom: none !important;
    }

    /* seis */
    .characteristics.seis > :nth-child(2), .characteristics.seis > :nth-child(5), .characteristics.seis > :nth-child(8) {
        border-right: none !important;
        border-left: none !important;
    }

    .characteristics.seis > :nth-child(3) ~ div > div {
        border-top: none !important;
        margin-right: none !important;
        margin-left: none !important;
    }

    .characteristics.seis > :nth-child(3) ~ div .subheading {
        margin-bottom: none !important;
    }
}
</style>
