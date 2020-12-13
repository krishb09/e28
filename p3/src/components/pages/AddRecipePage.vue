<template>
  <div>
    <h2>Add a Recipe!</h2>

    <form
      id="app"
      @submit="checkForm"
      action="https://vuejs.org/"
      method="post"
    >
      <p>
        <label for="name">Recipe Name</label>
        <input id="name" v-model="name" type="text" name="name" />
      </p>

      <p>
        <label for="age">Details</label>
        <input id="age" v-model="age" type="number" name="age" min="0" />
      </p>

      <p>
        <label for="age">Ingredients</label>
        <input id="age" v-model="age" type="number" name="age" min="0" />
      </p>

      <p>
        <label for="age">Description</label>
        <input id="age" v-model="age" type="number" name="age" min="0" />
      </p>

      <p>
        <label for="movie">Favorite Movie</label>
        <select id="movie" v-model="movie" name="movie">
          <option>Star Wars</option>
          <option>Vanilla Sky</option>
          <option>Atomic Blonde</option>
        </select>
      </p>

      <p>
        <input type="submit" value="Submit" />
      </p>
    </form>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
</style>
