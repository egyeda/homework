<template>
    <div class="product-loader">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
        <span class="ml-2">
            <slot/>
        </span>
    </div>
</template>
<style lang="scss" scoped>
.product-loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
    width: 100%;
}
</style>