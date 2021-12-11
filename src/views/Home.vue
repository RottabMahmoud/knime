<template>
  <v-container fluid>
    <v-row>
      <Search />
      <!-- <v-col align="center" cols="12"> HELLO KNIME</v-col> -->
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-list>
          <draggable
            class="
              d-flex
              pa-xs-4
              ma-10
              align-content-space-around
              flex-wrap
              rounded-lg
            "
            v-model="list_a"
          >
            <div v-for="(i, index) in list_a" :key="i">
              <v-list-item>{{ i }}</v-list-item>
              <v-divider v-if="index < 4"></v-divider>
            </div>
          </draggable>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Search from "../components/Search.vue";
import draggable from "vuedraggable";

export default {
  name: "Home",
  components: { Search, draggable },
  data() {
    return {
      list_a: ["a1", "a2", "a3", "a4", "a5"],
      list_b: ["b1", "b2", "b3", "b4", "b5"],
    };
  },
  created() {},
  beforeUpdate() {},

  methods: {},
};
</script>