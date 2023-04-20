<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci,
      consectetur assumenda quisquam qui veritatis numquam dolorem in minima
      deserunt perferendis.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci,
      consectetur assumenda quisquam qui veritatis numquam dolorem in minima
      deserunt perferendis.
    </p>
    <div>{{ message.message }}</div>
  </div>
</template>

<script setup>
const { data: message } = await useFetch("/api/ninja?name=Mario", {
  method: "post",
  body: { age: "30" },
});
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
