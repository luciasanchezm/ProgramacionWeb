<template>
  <div class="container">
    <div>
      <h3>{{ title }}</h3>
    </div>

    <div>
      <p class="id">{{ id }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    id: String,
  },
};
</script>

<style scoped>
.container {
  padding: 8px 0 8px 0;
  border-radius: 8px;
  box-shadow: rgba(50, 50, 50, 0.2) 3px 3px 8px 4px;
  width: 100%;
  text-decoration: none;
  margin-bottom: 16px;
}
.container:hover {
  box-shadow: rgba(0, 0, 0, 0.24) 3px 3px 8px 4px;
  text-decoration: underline;
}
h3 {
  margin: 4px 0 4px 0;
  color: blue;
}
p {
  margin: 4px 0 4px 0;
  color: blue;
}
</style>
