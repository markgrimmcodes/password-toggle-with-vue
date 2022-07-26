Vue.createApp({
  data() {
    return {
      type: "password",
    };
  },
  methods: {
    togglePassword() {
      if (this.type === "password") {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },
  },
  computed: {
    buttonText() {
      return this.type === "text" ? "Hide Password!" : "Show Password!";
    },
  },
}).mount("#app");
