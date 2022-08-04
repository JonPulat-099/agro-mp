<template>
  <div class="filters">
    <div class="filters__title">
      <span class="main">Filter</span>
      <span class="count">Mahsulotlar turi (11)</span>
    </div>
    <v-divider class="mt-4"/>
    <div class="filters__body">
      <div class="filters__body--title">Kategoriya</div>
      <v-expansion-panels flat hover>
        <v-expansion-panel v-for="(item, i) in categories" :key="i">
          <v-expansion-panel-header color="#F7FCFC">
            <v-checkbox
              v-model="item.selected"
              color="success"
              hide-details
              :label="item.name"
            />
          </v-expansion-panel-header>
          <v-expansion-panel-content color="#F7FCFC" v-if="item.has_subcategories">
            <v-list dense  color="#F7FCFC">
              <v-list-item
                link
                v-for="(ctg, idx) in item.subcategories_list"
                :key="idx"
                router
              >
                <v-list-item-content>
                  <v-list-item-title>
                    <v-checkbox
                      v-model="ctg.selected"
                      color="success"
                      hide-details
                      :label="ctg.name"
                    />
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-expansion-panel-content>

        </v-expansion-panel>
      </v-expansion-panels>
      <v-divider class="mt-4"/>
      <div class="filters__range">
        <div class="filters__range--title">
          <div class="filters__body--title mt-4">Narx</div>
          <div class="filters__range--currency d-flex align-center justify-space-between">
            <span class="mr-7">Narx oralig’ini tanlang</span>
            <v-select
              :items="currency"
              v-model="range.currency"
              hide-details

              dense
              append-icon="mdi-chevron-down"
            />
          </div>
          <div class="filters__range--slider">
            <v-range-slider
              v-model="range.price"
              :max="max"
              :min="min"
              hide-details
              class="align-center mt-6"
              color="#07D271"
              tick-size="5"
              thumb-size="16"
            >
<!--              <template v-slot:prepend>-->
<!--                <v-text-field-->
<!--                  :value="range.price[0]"-->
<!--                  class="mt-0 pt-0"-->
<!--                  hide-details-->
<!--                  single-line-->
<!--                  type="number"-->
<!--                  style="width: 60px"-->
<!--                  @change="$set(range.price, 0, $event)"-->
<!--                  hide-spin-buttons-->
<!--                ></v-text-field>-->
<!--              </template>-->
<!--              <template v-slot:append>-->
<!--                <v-text-field-->
<!--                  :value="range.price[1]"-->
<!--                  class="mt-0 pt-0"-->
<!--                  hide-details-->
<!--                  single-line-->
<!--                  type="number"-->
<!--                  style="width: 60px"-->
<!--                  @change="$set(range.price, 1, $event)"-->
<!--                  hide-spin-buttons-->
<!--                ></v-text-field>-->
<!--              </template>-->
            </v-range-slider>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    currency: ['UZS', 'USD', 'RUB'],
    range: {
      currency: 'UZS',
      price: [50000, 100000],
    },
    min: 0,
    max: 1000000,
    category: '',
    categories: [
      {
        id: 1,
        name: 'Mevalar',
        selected: false,
        has_subcategories: true,
        subcategories_list: [
          {
            id: 1,
            name: 'Olma',
            selected: false
          },
          {
            id: 2,
            name: 'Anor',
            selected: false
          },
        ],
      },
      {
        id: 1,
        name: "Go'sht",
        has_subcategories: false,
        subcategories_list: [],
      },
    ],
  }),
}
</script>

<style lang="scss" src="@/assets/filter.scss">
</style>
