<template>
  <div class="flow-page">
    <div class="flow-page--left"></div>
    <div class="flow-page--right">
      <div class="content-container destination">
        <img
          class="logo"
          src="@/assets/littledata_logo.svg"
          alt="littledata logo"
          width="48"
        />

        <h1>Choose Destination</h1>

        <p>
          Please select the destination that you'd <br />
          like to connect your store with
        </p>

        <div class="companies">
          <div class="company" @click="goToEndScreen">
            <img src="@/assets/ga_logo.svg" />
            Google Analytics
          </div>

          <div class="company" @click="goToEndScreen">
            <img src="@/assets/segment_logo.svg" />
            Segment
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Destination",
  methods: {
    goToEndScreen() {
      this.$router.push({ name: "EndScreen" });
    }
  }
};
</script>
