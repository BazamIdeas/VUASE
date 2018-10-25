<template>
  <v-layout row wrap class="px-2 mb-5">
    <v-flex md4 class="brief-design selected">
      <v-img src="/images/brief/designs/2.jpg"></v-img>
    </v-flex>
    <v-flex md4 class="brief-design">
      <v-img src="/images/brief/designs/1.jpg"></v-img>
    </v-flex>
    <v-flex md4 class="brief-design">
      <v-img src="/images/brief/designs/2.jpg"></v-img>
    </v-flex>
    <v-flex md4 class="brief-design">
      <v-img src="/images/brief/designs/3.jpg"></v-img>
    </v-flex>
    <v-flex md4 class="brief-design">
      <v-img src="/images/brief/designs/4.jpg"></v-img>
    </v-flex>
    <v-flex md4 class="brief-design">
      <v-img src="/images/brief/designs/5.jpg"></v-img>
    </v-flex>
    <v-flex md4 class="brief-design">
      <v-img src="/images/brief/designs/1.jpg"></v-img>
    </v-flex>
    <v-flex md4 class="brief-design">
      <v-img src="/images/brief/designs/2.jpg"></v-img>
    </v-flex>
    <v-flex md4 class="brief-design">
      <v-img src="/images/brief/designs/3.jpg"></v-img>
    </v-flex>
    <v-flex md4 class="brief-design">
      <v-img src="/images/brief/designs/4.jpg"></v-img>
    </v-flex>
    <v-flex md4 class="brief-design">
      <v-img src="/images/brief/designs/5.jpg"></v-img>
    </v-flex>
    <v-flex md4 class="brief-design">
      <v-img src="/images/brief/designs/1.jpg"></v-img>
    </v-flex>
  </v-layout>
</template>

<script>
  export default { }
</script>

<style>
  .brief-design .v-image {
    box-shadow: 0 3px 9px 0 rgba(0,0,0,.1);
  }

  .brief-design.selected .v-image {
      border: 3px solid #0081c1;
  }
  
  .brief-design {
    cursor: pointer;
  }
</style>