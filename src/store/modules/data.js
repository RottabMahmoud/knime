// import axios from 'axios'; (HINT.) would've used axios to fetch a mock API rather than an hard coded list.

const state = {
  nodes: [
    {
      title: "Data Generator",
      description: "Source",
      icon: "https://hub.knime.com/site/png-icon/Node/*JxPE08jzJmqyuX4e",
    },
    {
      title: "CASE Switch Data",
      description: "Manipulator",
      icon: "https://hub.knime.com/site/png-icon/Node/*OshYFdKBD8-peyFW",
    },
    {
      title: "Cluster Assigner",
      description: "Predictor",
      icon: "https://hub.knime.com/site/png-icon/Node/*9kg2rX7d5j2FrgtM",
    },
    {
      title: "Standardizer",
      description: "Channel",
      icon: "https://hub.knime.com/site/png-icon/Node/*W1mDDJ71AfLMV3Qk",
    },
    {
      title: "Row Splitter",
      description: "Splitter",
      icon: "https://hub.knime.com/site/png-icon/Node/*6LtUFSd2ccfh8oL5",
    },
  ],
  system_nodes: [
    {
      id: 0,
      title: "Data Generator",
      description: "Source",
      icon: "https://hub.knime.com/site/png-icon/Node/*JxPE08jzJmqyuX4e",
    },
    {
      id: 1,
      title: "CASE Switch Data",
      description: "Manipulator",
      icon: "https://hub.knime.com/site/png-icon/Node/*OshYFdKBD8-peyFW",
    },
    {
      id: 2,
      title: "Cluster Assigner",
      description: "Predictor",
      icon: "https://hub.knime.com/site/png-icon/Node/*9kg2rX7d5j2FrgtM",
    },
  ],
};

const getters = {
  allNodes: (state) => state.nodes,
  allSystem_Nodes: (state) => state.system_nodes,
};

const actions = {
  addNode({ commit }, input) {
    commit("setSystem_Nodes", input);
  },
};

const mutations = {
  setSystem_Nodes: (state, input) => {
    let selectedNode = {};
    for (let i = 0; i < state.nodes.length; i++) {
      if (state.nodes[i].title == input) selectedNode = state.nodes[i];
    }
    state.system_nodes.push({
      id: Math.floor(Math.random() * 1000),
      ...selectedNode,
    });
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
