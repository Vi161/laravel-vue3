<template>
	<div class="container border-top">
		<main-component></main-component>
		<router-view
		/>
	</div>
</template>

<script>
  import MainComponent from "./Main";
  export default {
    name: "App",
    components: {MainComponent},
	  data: () => ({
    })
  }
</script>

<style scoped>

</style>