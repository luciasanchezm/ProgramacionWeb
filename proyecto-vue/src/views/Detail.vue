<template>
  <div>
    <h3>ID: {{ fact._id }}</h3>
    <h4>Fact:</h4>
    <h2>{{ fact.text }}</h2>
    <h4>Fecha de creación:</h4>
    <h5>{{ fact.createdAt }}</h5>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Detail",
  computed: {
    ...mapState(["fact"]),
  },
  methods: {
    ...mapActions(["getFact"]),
  },
  created() {
    this.getFact(this.$route.params.id);
  },
};
</script>

<style scoped>
h1 {
  color: blue;
}
h4 {
  color: green;
}
</style>
