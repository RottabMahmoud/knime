<template>
  <v-app>
    <v-main>
      <AppBar />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar.vue";

export default {
  name: "App",
  components: { AppBar },
};
</script>
