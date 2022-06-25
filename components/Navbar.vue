<template>
  <nav class="navbar">
    <div class="navbar__top container">
      <div class="left">
        <img src="/logo.svg" alt="" class="logo left" />
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
            <div v-bind="attrs" v-on="on">
              <img src="/icons/user.svg" alt="" />
            </div>
          </template>
          <v-card class="mx-auto rounded-lg cabinet">
            <v-list dense>
              <v-list-item-group>
                <v-list-item v-for="(item, i) in user" :key="i">
                  <v-list-item-content>
                    <v-list-item-title v-text="item"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-menu>
        <button class="favorites">
          <v-badge color="green" content="6">
            <img src="/icons/heart.svg" alt="" />
          </v-badge>
        </button>
        <button class="bags">
          <v-badge color="green" content="6">
            <img src="/icons/bag.svg" alt="" />
          </v-badge>
        </button>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on" class="langs">
              <img src="/icons/uzb.svg" alt="" />
              <span> Uz </span>
              <v-icon> mdi-chevron-down </v-icon>
            </div>
          </template>
          <v-card class="mx-auto rounded-lg change__lang">
            <v-list dense>
              <v-list-item-group>
                <v-list-item v-for="(item, i) in langs" :key="i">
                  <v-list-item-content>
                    <v-list-item-title>
                      <img :src="`/icons/${item}.svg`" alt="" />
                      {{ item }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-menu>
        <nuxt-link to="" class="connect"> Bog'lanish </nuxt-link>
      </div>
    </div>
    <div class="navbar__bottom container">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <div v-bind="attrs" v-on="on" class="category">
            <img src="/icons/category.svg" alt="" />
            <span> Barcha kategoriya </span>
            <v-icon> mdi-chevron-down </v-icon>
          </div>
        </template>
        <v-card class="rounded-lg change__lang">
          <v-list dense>
            <v-list-item-group>
              <v-list-item v-for="(item, i) in categories" :key="i">
                <v-list-item-content>
                  <v-list-item-title>
                    <v-menu v-if="item.is_subCategory" offset-x>
                      <template v-slot:activator="{ on: turn_on, attrs: attr }">
                        <div v-bind="attr" v-on="turn_on">
                          {{ item.name }}
                          <v-icon v-if="item.is_subCategory"
                            >mdi-chevron-right</v-icon
                          >
                        </div>
                      </template>
                      <v-card>
                        <v-list>
                          <v-list-tile
                            v-for="(sub, k) in item.sub_category"
                            :key="k"
                          >
                            <v-list-tile-title>{{
                              sub.name
                            }}</v-list-tile-title>
                          </v-list-tile>
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
            <v-icon> mdi-chevron-down </v-icon>
          </div>
        </template>
        <v-card class="rounded-lg about__us">
          <v-list dense>
            <v-list-item-group>
              <v-list-item
                v-for="(item, i) in about"
                :key="i"
                link
                to="item.url"
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
      user: ['Sign In', 'Sign Up'],
      langs: ['ru', 'en'],
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
          url: '#',
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
}
</script>
<style lang="scss" src="@/assets/navbar.scss"></style>
