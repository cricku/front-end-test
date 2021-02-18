import { shallowMount } from "@vue/test-utils";
import ProgressBar from "@/components/ProgressBar.vue";

describe("ProgressBar.vue", () => {
  it("renders pprogress bar component corretcly", () => {
    const length = 2;
    const wrapper = shallowMount(ProgressBar, {
      propsData: { length }
    });

    // expect to render a full progress bar
    expect(wrapper.findAll('li').length).toBe(length);
    // expect that the both elements have the active class on li element
    expect(wrapper.findAll('li').at(0).attributes('class')).toBe('active');
    expect(wrapper.findAll('li').at(1).attributes('class')).toBe('active');
  });
});
