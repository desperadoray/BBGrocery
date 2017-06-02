<template>

  <div class="home">
    <div class = "jumbotron">
    	<h2>BBGrocery</h2>
    	<hr />
    	<h1>Coming Soon</h1>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.jumbotron{
		margin-top:3%;
	}
	h1, h2{
		margin:auto;
		text-align:center;
	}
</style>
