/**
 * @Author jihogrammer@gmail.com
 */
import { reactive, readonly } from 'vue';

const state = reactive({
  message: '',
});

const mutations = {
  setMessage: () => (state.message = 'Welcome to my Vue Template!'),
};

const actions = {
  initMessage: () => mutations.setMessage(),
};

const getters = {
  getMessage: () => state.message,
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => ({
  state: readonly(state),
  ...actions,
  ...getters,
});
