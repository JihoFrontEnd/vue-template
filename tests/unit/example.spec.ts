import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import About from '@/views/About.vue';
import useStore from '@/store';

describe('Rendering', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });

  it('renders email', () => {
    const email = 'jihogrammer@gmail.com';
    const wrapper = shallowMount(About);
    expect(wrapper.text()).toContain(email);
  });

  it('renders image', () => {
    const wrapper = shallowMount(About);
    expect(wrapper.find('img')).toBeTruthy();
    expect(wrapper.find('img').element.src).toEqual(wrapper.vm.profile);
  });
});

describe('Store', () => {
  it('should mutate message', () => {
    const store = useStore();
    store.initMessage();
    expect(store.getMessage()).toBeTruthy();
    expect(store.getMessage()).toEqual(store.state.message);
  });
});
