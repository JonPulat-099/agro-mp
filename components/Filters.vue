<template>
  <div class="filters">
    <div class="filters__title">
      <span class="main">{{ $t('filters.filter') }}</span>
      <span class="count">{{ $t('filters.products_type') }} (11)</span>
    </div>
    <v-divider class="mt-4"/>
    <div class="filters__body">
      <div class="filters__body--title">{{ $t('filters.category') }}</div>
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
          <div class="filters__body--title mt-4">{{ $t('filters.price') }}</div>
          <div class="filters__range--currency d-flex align-center justify-space-between">
            <span class="mr-7">{{ $t('filters.between') }}</span>
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
              tick-size="100"
              thumb-size="16"
            />
            <div class="d-flex justify-space-between">
              <v-text-field
                :value="range.price[0]"
                class="mt-2 pt-0"
                hide-details
                single-line
                type="number"
                style="width: 60px"
                @change="$set(range.price, 0, $event)"
                hide-spin-buttons
              ></v-text-field>

              <v-text-field
                :value="range.price[1]"
                class="mt-2 pt-0"
                hide-details
                single-line
                type="number"
                style="width: 60px"
                @change="$set(range.price, 1, $event)"
                hide-spin-buttons
              ></v-text-field>
            </div>
            <v-divider class="mt-8"/>
            <div class="filters__body--title mt-4">{{ $t('filters.by_type') }}</div>
            <v-expansion-panels flat hover>
              <v-expansion-panel v-for="(item, i) in types" :key="i">
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

            <v-divider class="mt-8"/>
            <div class="filters__body--title mt-4">{{ $t('filters.market_num') }}</div>
            <button class="filters__btn">{{ $t('btns.search') }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'ProfileFilters',
  data: () => ({
    currency: ['UZS', 'USD', 'RUB'],
    range: {
      currency: 'UZS',
      price: [100000, 600000],
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
    types: [
      {
        id: 1,
        name: 'Barcha turdagi',
        selected: false,
        has_subcategories: true,
        subcategories_list: [
          {
            id: 1,
            name: 'Ommabop',
            selected: false
          },
          {
            id: 2,
            name: 'Chegirmali',
            selected: false
          },
          {
            id: 2,
            name: 'Yangi',
            selected: false
          },
        ],
      },
    ],
  }),
}
</script>

<style lang="scss" src="@/assets/filter.scss">
</style>
