<template>
  <div class="home">
    <div v-for="(fact, index) in facts" :key="index">
      <router-link :to="`/detail/${fact._id}`" class="font">
        <Card :title="fact.text" :id="fact._id" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Card from "@/components/Card.vue";

export default {
  name: "Home",
  components: {
    Card,
  },
  computed: {
    ...mapState(["facts"]),
  },
  methods: {
    ...mapActions(["getFacts"]),
  },
  created() {
    this.getFacts();
  },
};
</script>

<style scoped>
.home {
  padding: 16px;
}
.font {
  text-decoration: none;
}
</style>
