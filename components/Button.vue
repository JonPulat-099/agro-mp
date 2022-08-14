<template>
  <div>
    <button :class="status" @click="click">{{ text }}</button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    click: {
      type: Function,
    },
    status: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" >
.success_btn {
  padding: 15px 47px;
  background: #07D271;
  box-shadow: 0 12px 24px rgba(98, 206, 134, 0.3);
  border-radius: 10px;
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;
  text-align: center;
  letter-spacing: 0.05em;
  color: #FFFFFF;
  margin-top: 40px;
  @include trs;
  &:hover {
    box-shadow: none;
  }
}
.warning_btn {
  padding: 15px 47px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;
  text-align: center;
  letter-spacing: 0.05em;
  color: #FFFFFF;
  margin-top: 40px;
  background: #FAB529;
  box-shadow: 0 12px 24px rgba(250, 181, 41, 0.3);
  @include trs;
  &:hover {
    box-shadow: none;
  }
}

</style>
