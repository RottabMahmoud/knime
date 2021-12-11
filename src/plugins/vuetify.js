import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export const options = {
  icons: {
    iconfont: "mdi",
  },
  theme: {
    dark: false,
    options: {
      customProperties: true,
    },
    themes: {
      dark: {
        primary: "#0f4c75",
        secondary: "#1b262c",
        accent: "#3282b8",
        error: "#D0021B",
        info: "#98bad0",
        success: "#7ED321",
        warning: "#F19600",
      },

      light: {
        primary: "#004C6C",
        secondary: "#ACAFB2",
        accent: "#E42313",
        error: "#D0021B",
        info: "#9D9D9D",
        success: "#7ED321",
        warning: "#F19600",
      },
    },
  },
};

export default new Vuetify(options);
