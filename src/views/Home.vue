<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col align="right" cols="4">
        <!--Our Search Input Field Component -->
        <Search :nodes="allNodes" :search="addNode" />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="4">
        <!--Our Selected Nodes in the System -->
        <v-list>
          <draggable
            class="d-flex justify-space-around align-content-center flex-wrap"
            v-model="used_nodes"
          >
            <div class="ma-5" v-for="item in allSystem_Nodes" :key="item.id">
              <strong>{{ item.title }} </strong>
              <v-list-item>
                <img style="height: 4em" :src="item.icon" />
              </v-list-item>
              <div class="ml-5">{{ item.description }}</div>
            </div>
          </draggable>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Search from "../components/Search.vue";
import draggable from "vuedraggable";

export default {
  name: "Home",
  components: { Search, draggable },
  data() {
    return {
      nodes: [], // (Hint.) would've used that rather than using a vuex state for the Input Search field prop.
      used_nodes: this.allSystem_Nodes,
    };
  },
  computed: mapGetters(["allNodes", "allSystem_Nodes"]),
  methods: {
    ...mapActions(["addNode"]),
  },
};
</script>