import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import Home from "@/views/Home";

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    nodes: [
      {
        title: "Data Generator",
        description: "Source",
        icon: "https://hub.knime.com/site/png-icon/Node/*JxPE08jzJmqyuX4e",
      },
    ],
    system_nodes: [
      {
        id: 0,
        title: "Data Generator",
        description: "Source",
        icon: "https://hub.knime.com/site/png-icon/Node/*JxPE08jzJmqyuX4e",
      },
    ],
  },
  getters: {
    allNodes: (state) => state.nodes,
    allSystem_Nodes: (state) => state.system_nodes,
  },
});

describe("Home.vue", () => {
  it("is vue instance", () => {
    const wrapper = mount(Home, {
      store,
      localVue,
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  it("renders a description using a real Vuex getter", () => {
    const wrapper = mount(Home, {
      store,
      localVue,
    });
    expect(wrapper.find(".ml-5").text()).toBe("Source");
  });
});
