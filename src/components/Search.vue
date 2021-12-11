<template>
  <v-row>
    <v-col align="center" cols="12">
      <v-autocomplete
        v-model="value"
        :items="items"
        dense
        filled
        label="Filled"
      >
      </v-autocomplete>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      items: ["foo", "bar", "fizz", "buzz"],
      value: null,
    };
  },
  created() {},
  beforeUpdate() {},

  methods: {},
};
</script>