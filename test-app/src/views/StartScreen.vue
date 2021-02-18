<template>
  <div class="welcome-page">
    <h1>{{ name }}</h1>

    <div class="personas">
      <div v-for="(person, index) in personas" class="person" :key="index">
        <img :src="require(`@/assets/personas/${person.image}.png`)" />
        <p class="person-name">{{ person.name }}</p>
        <p class="person-text">
          {{ person.text }}
        </p>
        <button @click="$router.push({ path: person.path })">
          Enter {{ person.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StartPage",
  data: () => ({
    name: "Littledata Welcome Flow Test",
    personas: [
      {
        name: "John",
        image: "john",
        text:
          "John is a new customer for littledata. We want him to go through the full survey so that we can properly setup his account.",
        path: "store"
      },
      {
        name: "Claire",
        image: "claire",
        text:
          "Claire was invited by John to her account. We only want her to answer a few quick questions and that's it.",
        path: "feedback"
      },
      {
        name: "Paul",
        image: "paul",
        text:
          "Paul is a returning customer. Since he has already answered all the questions before, we can take him directly to the app.",
        path: "end"
      }
    ]
  })
};
</script>
