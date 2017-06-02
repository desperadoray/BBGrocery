<template>
	<div class="login">
		<div class="container">

      <form class="form-signin col-md-5">
        <h2 class="form-signin-heading">Please sign in</h2>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>

    </div>
	</div>

</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome'
    }
  }
}
</script>

<style scoped>
	.container{
		width: 800px;
		margin: 10% auto;
		border: outset ;
		border-color: #D35D36;
	}
	form{
		margin:10% 30%;
	}
</style>
