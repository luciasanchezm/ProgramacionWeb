<template>
  <div>
    <h1>Mi dato random</h1>
    <button @click="getRandom">Obtener info</button>
    <div v-if="random">
      <h2>{{ random.type }}</h2>
      <p>{{ random.text }}</p>
      <h5>
        {{
          random.status.verified
            ? "Verificado"
            : "Sin información sobre su verificación"
        }}
      </h5>
    </div>
    <div v-else class="else">Haz clic para buscar un dato random</div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Random",
  computed: {
    ...mapState(["random"]),
  },
  methods: {
    ...mapActions(["getRandom"]),
  },
};
</script>

<style scoped>
button {
  background: blue;
  border: none;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
}
h5 {
  color: green;
}
.else {
  padding: 16px;
}
</style>
