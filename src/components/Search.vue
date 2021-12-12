<template>
  <v-autocomplete
    class="v-input__slot"
    @change="search(value)"
    v-model="value"
    :items="nodes.map((x) => x.title)"
    dense
    filled
    label="Add new node..."
  >
  </v-autocomplete>
</template>

<script>
export default {
  name: "Search",
  props: ["nodes", "search"],
  data() {
    return {
      value: null,
    };
  },
};
</script>