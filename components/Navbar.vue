<template>
  <nav class="navbar">
    <div class="navbar__top container">
      <div class="left">
        <nuxt-link :to="localePath('/')" class="nav-logo">
          <img src="/logo_new.svg" alt="logo" class="logo left mr-8"/>
        </nuxt-link>
        <div class="search">
          <v-text-field
            prepend-icon="mdi-magnify"
            hide-details
            :placeholder="$t('navbar.which_product')"
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
                <v-list-item v-for="(item, i) in user" :key="i" :to="localePath(item.link)">
                  <v-list-item-content>
                    <v-list-item-title v-text="item.item"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-menu>
        <nuxt-link :to="localePath('/favorite')">
          <button class="favorites">
            <v-badge color="green" :content="favorite" v-if="favorite >= 1">
              <img src="/icons/heart.svg" alt="heard icon"/>
            </v-badge>
            <img src="/icons/heart.svg" alt="heard icon" v-else/>
          </button>
        </nuxt-link>
        <nuxt-link :to="localePath('/basket')">
          <button class="bags">
            <v-badge color="green" :content="product" v-if="product >= 1">
              <img src="/icons/bag.svg" alt="basket icon"/>
            </v-badge>
            <img src="/icons/bag.svg" alt="basket icon" v-else/>
          </button>
        </nuxt-link>

        <div class="language d-flex mr-6 ml-15" @click="selectedLang">
          <div class="language__selected">
            <img :src="`/${$i18n.locale}.svg`" alt="flag">
            <span class="ml-2 mr-1 text-capitalize">{{ $i18n.locale }}</span>
            <v-icon>mdi-chevron-down</v-icon>
          </div>

          <div class="language__list">
          <span v-for="(lang, idx) in lang_list" :key="idx" @click="selectLang(lang)" v-if="lang.title !== active_lang">
            <nuxt-link  :to="switchLocalePath(lang.code)" class="d-flex align-center">
              <img :src="lang.icon" alt="flag">
              {{ lang.title }}
            </nuxt-link>
          </span>
          </div>
        </div>

        <nuxt-link :to="localePath('/')" class="connect"> {{ $t('btns.contact') }} </nuxt-link>
      </div>
    </div>

    <div class="navbar__bottom pt-10 container">
      <v-menu offset-y content-class="category__menu">
        <template v-slot:activator="{ on, attrs }">
          <div v-bind="attrs" v-on="on" class="category">
            <img src="/icons/category.svg" alt=""/>
            <span> {{ $t('navbar.all_categories') }} </span>
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
                          <v-icon v-if="item.is_subCategory">
                            mdi-chevron-right
                          </v-icon>
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
                          </v-list-item-group>
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
      <nuxt-link v-for="(l, i) in links" :key="i" :to="localePath(l.url)" class="menus">
        {{ l.name }}
      </nuxt-link>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <div v-bind="attrs" v-on="on" class="about">
            <span> {{ $t('navbar.about_us') }} </span>
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
                :to="localePath(item.url)"
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
      active_lang: "Uz",
      active_flag: '/uz.svg',
      user: [
        { item: 'Profile', link: '/profile' },
        { item: 'Logout', link: '/registration' },
      ],
      langs: ['ru', 'en'],
      selected_category: '',

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
          id: 1,
          options: {
            name: 'Mevalar',
            is_subCategory: true,
          },
          sub_category: [
            {
              name: 'Lorem ipsum',
              url: '#',
              content: {
                name: "",

              }
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
  created() {
    // this.getCategories();
  },
  computed: {
    lang_list(){
      return this.$i18n.locales;
    },
    links(){
       const links = [
        {
          name: this.$t('navbar.popular_products'),
          url: '#',
        },
        {
          name: this.$t('navbar.new_product'),
          url: '#',
        },
        {
          name: this.$t('navbar.fruits'),
          url: '/categories/mevalar',
        },
        {
          name: this.$t('navbar.vegetables'),
          url: '#',
        },
        {
          name: this.$t('navbar.service'),
          url: '#',
        },
      ]
      return links;
    },
    product() {
      return this.$store.state.products.length;
    },
    favorite() {
      return this.$store.state.favorite.length;
    },
  },

  methods: {
    getCategories() {
      this.$axios.$get('/categories').then(res => {
        this.categories = res.data.categories
      })
    },
    selectLang(selected) {
      this.active_lang = selected.title;
      this.active_flag = selected.icon;
    },

    selectedLang() {
      const current_lang = document.querySelector('.language__list');
      current_lang.classList.toggle('active')
    },

  },
  mounted() {

    // this.$store.commit('setNumber', 34);
  }
}
</script>
<style lang="scss" src="assets/navbar.scss"></style>
