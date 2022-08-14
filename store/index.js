export const state = () => ({
  number: 0
});

export const mutations =  {
  setNumber(state, num) {
    state.number = num;
  }
}
