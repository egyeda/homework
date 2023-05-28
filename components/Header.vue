<template>
    <v-app-bar app>
        <nuxt-link class="main-link" to="/">Homework</nuxt-link> 
        <v-spacer></v-spacer>
        <nuxt-link to="products">Products</nuxt-link> 
        <nuxt-link to="cart">Cart</nuxt-link>
    </v-app-bar>
</template>
<style lang="scss">
@import "~@/assets/css/colors.scss";
.main-link {
  font-size: 24px;
  font-weight: bold;
  color: $color-primary;
  &:hover {
    color: $color-primary;
  }
}
.v-toolbar a {
  margin: 0 1rem;
  text-decoration: none;
  vertical-align: sub;
}
.v-toolbar .nuxt-link-exact-active {
  color: $color-primary-dark;
}
</style>