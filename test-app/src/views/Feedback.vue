<template>
  <div class="flow-page">
    <div class="flow-page--left"></div>
    <div class="flow-page--right">
      <div class="content-container feedback">
        <img
          class="logo"
          src="@/assets/littledata_logo.svg"
          alt="littledata logo"
          width="48"
        />
        <h1>Welcome to Littledata</h1>

        <ProgressBar :length="2" />

        <form>
          <div class="question" v-for="(item, index) in questions" :key="index">
            <p>{{ item.question }}</p>
            <div
              :class="[
                'question-options',
                { 'question-options--inline': item.displayStyle === 'inline' }
              ]"
            >
              <div
                class="option"
                v-for="(option, optionIndex) in item.options"
                :key="optionIndex"
              >
                <label :for="`q${index + 1}_option${optionIndex + 1}`">
                  <input
                    type="radio"
                    :id="`q${index + 1}_option${optionIndex + 1}`"
                    :value="option.value"
                    v-model="item.response"
                  />
                  {{ option.text }}
                </label>
              </div>
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
  name: "Feedback",
  components: {
    ProgressBar
  },
  data: () => ({
    questions: [
      {
        question: "How did you hear about Littledata?",
        options: [
          {
            text: "through shopify app Store",
            value: "option1"
          },
          {
            text: "recommended by my agency",
            value: "option2"
          },
          {
            text: "i saw a littledata ad",
            value: "option3"
          },
          {
            text: "i read a blog post / article / book by littledata",
            value: "option4"
          },
          {
            text: "other",
            value: "option5"
          }
        ],
        response: null
      },
      {
        question: "Are you part of an agency or a consulting firm?",
        options: [
          {
            text: "yes",
            value: "option1"
          },
          {
            text: "no",
            value: "option2"
          }
        ],
        displayStyle: "inline",
        response: null
      }
    ]
  }),
  methods: {
    next(event) {
      event.preventDefault();
      let responses = [];

      this.questions.forEach(item => {
        const questionResponse = item.response
          ? item.options.find(res => res.value === item.response).text
          : null;
        responses.push(`Q: ${item.question} - A: ${questionResponse}`);
      });

      // print to console the each question and answer
      console.log(responses);

      if (localStorage.getItem("shopifyStore") === "true")
        this.$router.push({ name: "Destination" });
      else this.$router.push({ name: "EndScreen" });

      // delete localStorage key, we no longer need it
      localStorage.removeItem("shopifyStore");
    },
    back(event) {
      event.preventDefault();
      // go to previous page
      this.$router.go(-1);
    }
  }
};
</script>
