<template>
  <div class="Nav">
    <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#Bnavbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand brand" href="/">BBGrocery</a>
    </div>

    <div class="collapse navbar-collapse mainnav" id="Bnavbar">
      <ul class="nav navbar-nav navbar-left">
        <li id="firstlink"><a href="#">Link </a></li>
        <li><a href="#">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li class="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li class="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">login</a></li>
        <li><a href="#">register</a></li>
        <li><a href="#">signout</a></li>
      </ul>
      <form class="navbar-form navbar-right" role="search">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search Products">
        </div>
        <button type="submit" class="btn btn-info">Search</button>
      </form>
      
    </div>
  </div>
</nav>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      msg: 'test'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#firstlink{
		margin-left:30px;
	}
	.container-fluid{
		margin-left:120px;
	}

	.brand{
		
	}

	.btn-info{
		margin-left: 20px;
	}

	.form-control{
		width:auto;
	}
</style>
