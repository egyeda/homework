<template>
    <v-app-bar app>
        <nuxt-link to="/"> <h1>Homework </h1></nuxt-link> 
        <v-spacer></v-spacer>
        <nuxt-link to="products">Products</nuxt-link> 
        <nuxt-link to="cart">Cart</nuxt-link>
      </v-app-bar>
</template>
<style lang="scss">
@import "~@/assets/variables.scss";
.v-toolbar a {
  margin: 0 10px;
  text-decoration: none;
  vertical-align: sub;
}
.v-toolbar .nuxt-link-exact-active {
  color: $color-primary-dark;
}
</style>