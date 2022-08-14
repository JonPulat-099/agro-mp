<template>
  <nav class="navbar">
    <div class="navbar__top container">
      <div class="left">
        <nuxt-link to="/">
          <img src="/logo.svg" alt="" class="logo left mr-8"/>
        </nuxt-link>
        <div class="search">
          <v-text-field
            prepend-icon="mdi-magnify"
            hide-details
            placeholder="Qanday mahsulot izlayapsiz?"
          ></v-text-field>
        </div>
      </div>
      <div class="right">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on" class="user">
              <img src="/icons/user.svg" alt="user icon"/>
            </div>
          </template>
          <v-card class="mx-auto rounded-lg cabinet">
            <v-list dense>
              <v-list-item-group>
                <v-list-item v-for="(item, i) in user" :key="i" :to="item.link">
                  <v-list-item-content>
                    <v-list-item-title v-text="item.item"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-menu>
        <nuxt-link to="/favorite-products">
          <button class="favorites">
            <v-badge color="green" content="6">
              <img src="/icons/heart.svg" alt=""/>
            </v-badge>
          </button>
        </nuxt-link>
        <nuxt-link to="/basket">
          <button class="bags">
            <v-badge color="green" content="6">
              <img src="/icons/bag.svg" alt=""/>
            </v-badge>
          </button>
        </nuxt-link>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on" class="langs">
              <img src="/icons/uzb.svg" alt=""/>
              <span> Uz </span>
              <v-icon> mdi-chevron-down</v-icon>
            </div>
          </template>
          <v-card class="mx-auto rounded-lg change__lang">
            <v-list dense>
              <v-list-item-group>
                <v-list-item v-for="(item, i) in langs" :key="i">
                  <v-list-item-content>
                    <v-list-item-title>
                      <img :src="`/icons/${item}.svg`" alt=""/>
                      {{ item }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-menu>
        <nuxt-link to="" class="connect"> Bog'lanish</nuxt-link>
      </div>
    </div>

    <div class="navbar__bottom container">
      <v-menu offset-y content-class="category__menu">
        <template v-slot:activator="{ on, attrs }">
          <div v-bind="attrs" v-on="on" class="category">
            <img src="/icons/category.svg" alt=""/>
            <span> Barcha kategoriya </span>
            <v-icon> mdi-chevron-down</v-icon>
          </div>
        </template>
        <v-card class="categories__list" outlined>
          <v-list dense width="250px">
            <v-list-item-group
              v-model="selected_category"
              active-class="active__category"
            >
              <v-list-item
                v-for="(item, i) in categories"
                :key="i"
              >
                <v-list-item-content>
                  <v-list-item-title>
                    <v-menu
                      v-if="item.is_subCategory"
                      offset-x
                      content-class="subcategory__menu"
                    >
                      <template v-slot:activator="{ on: turn_on, attrs: attr }">
                        <div
                          v-bind="attr"
                          v-on="turn_on"
                          class="active"
                          @click="selected_category = i"
                        >
                          {{ item.name }}
                          <v-icon v-if="item.is_subCategory"
                          >mdi-chevron-right
                          </v-icon
                          >
                        </div>
                      </template>
                      <v-card outlined class="categories__list">
                        <v-list>
                          <v-list-item-group>
                            <v-list-item
                              v-for="(item, i) in item.sub_category"
                              :key="i"
                            >
                              <v-list-item-content>
                                <v-list-item-title>
                                  {{ item.name }}
                                </v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>
                          </v-list-item-group
                          >
                        </v-list>
                      </v-card>
                    </v-menu>

                    <nuxt-link v-else to="item.url">
                      {{ item.name }}
                    </nuxt-link>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-menu>
      <nuxt-link v-for="(l, i) in links" :key="i" :to="l.url" class="menus">
        {{ l.name }}
      </nuxt-link>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <div v-bind="attrs" v-on="on" class="about">
            <span> Biz Haqimizda </span>
            <v-icon> mdi-chevron-down</v-icon>
          </div>
        </template>
        <v-card class="rounded-lg about__us">
          <v-list dense>
            <v-list-item-group>
              <v-list-item
                v-for="(item, i) in about"
                :key="i"
                link
                :to="item.url"
              >
                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.name }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-menu>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'MainNavbar',
  data() {
    return {
      user: [
        {item: 'Sign In', link: '/login'},
        {item: 'Sign Up', link: '/registration'},
      ],
      langs: ['ru', 'en'],
      selected_category: '',
      links: [
        {
          name: 'Ommabop mahsulotlar',
          url: '#',
        },
        {
          name: 'Yangi mahsulotlar',
          url: '#',
        },
        {
          name: 'Mevalar',
          url: '/categories/mevalar',
        },
        {
          name: 'Sabzavotlar',
          url: '#',
        },
        {
          name: 'Servislar',
          url: '#',
        },
      ],

      about: [
        {
          name: 'Profile',
          url: '/profile',
        },
        {
          name: 'lorem ipsum',
          url: '#',
        },
        {
          name: 'lorem ipsum',
          url: '#',
        },
        {
          name: 'lorem ipsum',
          url: '#',
        },
      ],

      categories: [
        {
          name: 'Mevalar',
          is_subCategory: true,
          sub_category: [
            {
              name: 'Lorem ipsum',
              url: '#',
            },
            {
              name: 'Lorem ipsum',
              url: '#',
            },
            {
              name: 'Lorem ipsum',
              url: '#',
            },
          ],
        },
        {
          name: 'Don Mahsulotlari',
          is_subCategory: true,
          sub_category: [
            {
              name: 'Lorem ipsum',
              url: '#',
            },
            {
              name: 'Lorem ipsum',
              url: '#',
            },
            {
              name: 'Lorem ipsum',
              url: '#',
            },
          ],
        },
        {
          name: 'Ko`chatlar',
          is_subCategory: false,
          sub_category: [],
        },
        {
          name: 'Gullar',
          is_subCategory: true,
          sub_category: [
            {
              name: 'Lorem ipsum',
              url: '#',
            },
            {
              name: 'Lorem ipsum',
              url: '#',
            },
            {
              name: 'Lorem ipsum',
              url: '#',
            },
          ],
        },
      ],
    }
  },
  computed: {
    number() {
      return this.$store.state.number;
    }
  },
  methods: {},
  mounted() {
    this.$store.commit('setNumber', 34)
  }
}
</script>
<style lang="scss" src="assets/navbar.scss"></style>
