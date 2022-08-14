<template>
  <div class="container">
    <div class="confirm">
      <div class="confirm__title">Buyurtmani tasdiqlsh</div>
      <div class="confirm__subtitle">Shahsiy ma’lumotlarni kiriting</div>
      <v-form ref="form" lazy-validation>
        <v-row>
          <v-col>
            <v-text-field
              label="Ismingizni kiriting"
              outlined
              color="#07D271"
              v-model="confirm.name"
            />
          </v-col>
          <v-col>
            <v-text-field
              label="Familiyangizni kiriting"
              outlined
              color="#07D271"
              v-model="confirm.surname"
            />
          </v-col>
          <v-col>
            <v-text-field
              label="Telefonni kiriting"
              outlined
              color="#07D271"
              v-mask="'+### (##) ### ## ##'"
              v-model="confirm.phone"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-select
              label="Yetkazib berish usulini tanlang"
              append-icon="mdi-chevron-down"
              outlined
              color="#07D271"
              v-model="confirm.delivery"
            >
              <template v-slot:append>
                <v-icon color="#FAB529">mdi-chevron-down</v-icon>
              </template>
            </v-select>
          </v-col>
          <v-col>
            <v-select
              :items="cities"
              label="Shaxarni tanlang"
              append-icon="mdi-chevron-down"
              outlined
              color="#07D271"
              v-model="confirm.country"
            >
              <template v-slot:append>
                <v-icon color="#FAB529">mdi-chevron-down</v-icon>
              </template>
            </v-select>
          </v-col>
          <v-col>
            <v-select
              :items="regions"
              label="Viloyatni tanlang"
              outlined
              color="#07D271"
              v-model="confirm.region"
            >
              <template v-slot:append>
                <v-icon color="#FAB529">mdi-chevron-down</v-icon>
              </template>
            </v-select>
          </v-col>
        </v-row>
        <v-divider class="my-8"/>
        <div class="confirm__payment">
          <div class="confirm__payment--title">To’lov turini tanlang</div>
          <div class="confirm__payment--type">
            <v-radio-group v-model="confirm.payment_type">
              <v-radio
                v-for="name in payment_type"
                :key="name"
                :label="name"
                :value="name"
                color="#07D271"
                class="mb-4"
              />
            </v-radio-group>
          </div>
        </div>
      </v-form>
      <div class="confirm__end">
        <v-checkbox
          v-model="confirm.terms"
          label="Men Foydalanish shartlarni qabul qilaman"
          color="#07D271"
        />
      </div>
      <Button text="Buyurtmani tasdiqlash" status="success_btn" class="mb-16" :click="confirmProduct"/>
    </div>
    <v-dialog
      v-model="dialog_message"
      width="466"
    >
      <v-card>
        <v-card-title class="text-center payment-title">
          <v-spacer/>
          Buyurtmanni tasdiqlang!
          <v-spacer/>
        </v-card-title>

        <v-card-text class="payment-dialog">
          Sizning <span>+998901373931</span> telefon raqamingizga SMS kod yuborildi uni kiriting
          <div class="mt-10">
            <v-otp-input
              length="6"
              type="number"
            />
          </div>
        </v-card-text>
        <v-card-actions>
        <v-spacer/>
          <Button text="Tasdiqlash" status="success_btn" class="mb-8 mt-0" :click="closeDialog"/>
        <v-spacer/>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="dialog_card"
      width="466"
    >
      <v-card>
        <v-card-title class="text-center payment-title">
          <v-spacer/>
          Buyurtmangiz uchun raxmat!
          <v-spacer/>
        </v-card-title>
        <v-card-text class="payment-dialog mt-2">
          Ajoyib yangilik : Sizning <span>№4929</span> raqamli buyurtmangiz qabul qilndi.
          <div class="mt-10">
            <v-text-field
              label="Ismi Sharifi"
              hide-details
              outlined
              dense
              color="#07D271"
            />
          </div>
          <div class="mt-5">
            <v-text-field
              label="Manzil"
              hide-details
              outlined
              dense
              color="#07D271"
            />
          </div>
          <div class="d-flex justify-space-between mt-4">
            <span class="black--text">Narx</span>
            <div><span class="font-weight-bold black--text">235 000</span> so'm</div>
          </div>
          <div class="d-flex justify-space-between mt-4">
            <span class="black--text">Chegirma</span>
            <div><span class="font-weight-bold red--text">-16 000</span> so'm</div>
          </div>
          <div class="d-flex justify-space-between mt-4">
            <span class="black--text">Yetkazib berish</span>
            <div><span class="font-weight-bold black--text">35 000</span> so'm</div>
          </div>
          <v-divider class="my-4"/>
          <div class="d-flex justify-space-between mt-4">
            <span class="black--text">Umumiy narx</span>
            <div><span class="font-weight-bold green--text">277 000</span> so'm</div>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <Button text="Ok" status="success_btn" class="mb-8 mt-0" :click="closeDialog"/>
          <v-spacer/>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  layout: "main",
  data: () => ({
    dialog_card: false,
    dialog_message: false,
    cities: ['Toshkent', 'Samarqand', 'Buxoro', 'Namangan', 'Andijon'],
    regions: ['Chiroqchi', 'Uychi', 'Pskent', 'Olmaliq', 'Chirchiq'],
    radioGroup: 1,
    payment_type: ['Naqd to’lash', 'Karta orqali to’lash', 'Bank hisob raqami orqali to’lash'],
    confirm: {
      name: '',
      surname: '',
      phone: '',
      delivery: '',
      country: '',
      region: '',
      terms: false,
      payment_type: ''
    }
  }),
  methods: {
    closeDialog() {
      this.dialog_message = false;
      this.dialog_card = false;
    },
    confirmProduct() {
      const with_money = this.confirm.payment_type === "Karta orqali to’lash";
      const with_card = this.confirm.payment_type === "Naqd to’lash";
      if(with_money) {
        this.dialog_message = true;
      } else if(with_card){
        this.dialog_card = true;
      }
    }
  }
}
</script>

<style lang="scss" src="@/assets/confirm.scss"></style>
