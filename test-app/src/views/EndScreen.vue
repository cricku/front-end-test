<template>
  <div>
    <h1>Littledata App</h1>

    <img
      :src="require('@/assets/end_screen.png')"
      alt="and screen image"
      style="margin: 0 auto;"
    />

    <button @click="$router.push({ name: 'StartScreen' })" class="button">
      GO BACK TO START
    </button>
  </div>
</template>

<script>
export default {
  name: "EndScreen"
};
</script>
