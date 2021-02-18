<template>
  <div class="progress-container">
    <ul>
      <li class="active" v-for="i in length" :key="i"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    length: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style lang="scss" scoped>
.progress-container {
  margin: 16px 0;
  width: 100%;

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    width: 100%;
    border-radius: 4px;
    background-color: #eee;
    height: 8px;

    li {
      height: 8px;
      background-color: #0fa69d;
      flex-basis: 50%;
      border-radius: 4px 0 0 4px;

      & + li {
        border-radius: 0 4px 4px 0;
      }
    }
  }
}
</style>
