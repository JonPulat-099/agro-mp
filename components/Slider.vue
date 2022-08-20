<template>
  <v-carousel
    v-model="model"
    height="320px"
    hide-delimiters
    hide-delimiter-background
    cycle
    class="main__slider"
  >
    <template v-slot:prev="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" icon class="prev__btn">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </template>
    <template v-slot:next="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" icon class="next__btn">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </template>
    <v-carousel-item v-for="(s, i) in slider" :key="i">
      <v-sheet
        height="100%"
        tile
        :style="`background: ${s.bg}; min-height: 320px;`"
        class="header__slider rounded-lg"
      >
        <!-- <v-row class="fill-height" align="center" justify="center"> -->
        <!-- <div class="text-h2">Slide {{ i + 1 }}</div> -->
        <!-- </v-row> -->
        <!-- <v-layout row wrap :style="`background: ${s.bg}; min-height: 320px;`" class="header__slider"> -->
        <v-layout row wrap>
          <v-flex xs5>
            <h1>{{ s.title }}</h1>
            <p>{{ s.text }}</p>

            <a :href="s.url" class="learn__more"> {{ $t('btns.learn_more') }} </a>
          </v-flex>
          <v-flex xs7>
            <img :src="s.img" alt="" />
          </v-flex>
        </v-layout>
        <!-- </v-layout> -->
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      model: 0,
      colors: ['primary', 'secondary', 'yellow darken-2', 'red', 'orange'],
      slider: [
        {
          title: this.$t('slider.card_1.title'),
          text: this.$t('slider.card_1.text'),
          url: '#',
          img: '/vegetables.png',
          bg: '#F8C018',
        },
        {
          title: this.$t('slider.card_2.title'),
          text: this.$t('slider.card_2.text'),
          url: '#',
          img: '/vegetables.png',
          bg: '#2EAF7C',
        },
        {
          title: this.$t('slider.card_3.title'),
          text: this.$t('slider.card_3.text'),
          url: '#',
          img: '/vegetables.png',
          bg: '#F8C018',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.main__slider {
  margin-bottom: 130px;
  position: relative;

  .v-window__prev {
    top: calc(100% - 50px);
    left: calc(100% - 120px);
  }
  .v-window__next {
    top: calc(100% - 50px);
    right: 0;
  }
}

.header__slider {
  padding: 40px 30px 710px;
  position: relative;

  h1 {
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    color: #fdfdfd;
    margin: 0 0 10px;
  }

  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    color: #fdfdfd;
  }

  .learn__more {
    position: relative;
    top: calc(100% - 180px);
    display: inline-block;
    padding: 15px 30px;
    background: #fdfdfd;
    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    text-decoration: none;
    font-weight: 700;
    font-size: 16px;
    line-height: 120%;
    color: #ffd47c;
    transition: 0.3s;

    &:hover {
      background: $base_color;
      color: $white;
    }
  }

  .flex.xs7 {
    img {
      display: block;
      margin: 0 auto;
    }
  }
}

.prev__btn,
.next__btn {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: $white;

  i {
    color: $base_color !important;
  }

  &:hover {
    background: $base_color !important;

    i {
      color: $white !important;
    }
  }
}
</style>
