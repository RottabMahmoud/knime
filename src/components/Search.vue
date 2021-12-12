<template>
  <v-main>
    <v-autocomplete
      @change="search(value)"
      v-model="value"
      :items="nodes.map((x) => x.title)"
      dense
      filled
      label="Add new node..."
    >
    </v-autocomplete>
  </v-main>
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