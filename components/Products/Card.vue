<template>
  <v-card>
    <v-card-title elevation="0">
        <v-btn icon>
            <v-icon>mdi-heart-outline</v-icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>
    </v-card-title>
    <v-card-text>
        <img src="/apple.png" alt="">
        <article class="product__info">
            <div class="category"></div>
            <p class="product__name"></p>
            <span class="cost"></span>
        </article>
    </v-card-text>
    <v-card-actions>
        <aside>
            <v-btn color="success">text</v-btn>
            <span></span>
            <v-btn color="success">text</v-btn>
        </aside>
        <aside>
            <v-btn color="success">text</v-btn>
        </aside>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>