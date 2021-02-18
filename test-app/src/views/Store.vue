<template>
  <div class="flow-page">
    <div class="flow-page--left"></div>
    <div class="flow-page--right">
      <div class="content-container store">
        <img
          class="logo"
          src="@/assets/littledata_logo.svg"
          alt="littledata logo"
          width="48"
        />
        <h1>Welcome to Littledata</h1>

        <ProgressBar :length="1" />

        <form>
          <div class="form-input">
            <label for="name">Store name</label>
            <input
              id="store"
              name="store"
              type="text"
              placeholder="Your Store Name"
              v-model="storeName"
              :class="[{ error }]"
            />
          </div>

          <div class="form-input">
            <label for="name">Store URL</label>
            <input
              id="storeUrl"
              name="storeUrl"
              type="text"
              placeholder="yourstore.myshopify.com"
              v-model="storeUrl"
              :class="[{ error }]"
            />
          </div>

          <div class="subscription-box">
            <p class="subscription-box-title">Email Notifications</p>
            <input
              id="subscription"
              name="subscription"
              type="email"
              placeholder="jane@yourstore.com"
              v-model="userEmail"
            />
            <div class="checkbox">
              <input id="check" type="checkbox" v-model="agreement" />
              <label for="check">
                Send me all the important app notifications on this email
              </label>
            </div>
          </div>

          <div class="nav">
            <button class="nav-button back" @click="back">back</button>
            <button class="nav-button next" @click="next">next</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from "@/components/ProgressBar";

export default {
  name: "StoreInfo",
  components: {
    ProgressBar
  },
  data: () => ({
    storeName: null,
    storeUrl: null,
    userEmail: null,
    agreement: false,
    error: false
  }),
  methods: {
    next(event) {
      event.preventDefault();
      if (!this.storeName || !this.storeUrl) this.error = true;
      else {
        if (/myshopify.com/.test(this.storeUrl)) {
          // save a key in localStorage to know if the customer store URL is
          // containing myshopify.com
          localStorage.setItem("shopifyStore", true);
        }

        let response = {
          storeName: this.storeName,
          storeUrl: this.storeUrl
        };

        if (this.agreement) response.userEmail = this.userEmail;

        // print to console the storeName, storeUrl and userEmail
        console.log(response);

        // navigate to feedback page
        this.$router.push({ name: "Feedback" });
      }
    },
    back(event) {
      event.preventDefault();
      // go to previous page
      this.$router.go(-1);
    }
  }
};
</script>
