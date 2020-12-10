<template>
	<div class="container border-top">
		<checkout></checkout>
	</div>
</template>

<script>
  import Checkout from "./Checkout";
  export default {
    name: "App",
    components: {Checkout},
	  data: () => ({
    })
  }
</script>

<style scoped>

</style>