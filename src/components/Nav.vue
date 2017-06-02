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
      <a class="navbar-brand brand"><router-link to="/">LOGO</router-link></a>
    </div>

    <div class="collapse navbar-collapse mainnav" id="Bnavbar">
      <ul class="nav navbar-nav navbar-left">
        <li id="firstlink"><a href="#">How it Works </a></li>
        <li><a href="#">Help</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Choose your location <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="#">Burnaby</a></li>
            <li><a href="#">Vancouver</a></li>
            <li><a href="#">Richmond</a></li>
            <li class="divider"></li>
            <li><a href="#">Tri-city</a></li>
            <li class="divider"></li>
            <li><a href="#">Other</a></li>
          </ul>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><router-link to="/login">login</router-link></li>
        <li><router-link to="/reg">Register</router-link></li>
        <li><a href="#">Get Paid to shop</a></li>
      </ul>
      <form class="navbar-form navbar-right" role="search">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search Products">
        </div>
        <button type="submit" class="btn btn-primary">Search</button>
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
  nav{
    margin: auto;
    font-size:16px;
  }

	.brand{
		
	}

	.btn-primary{
		margin-left: 20px;
	}


	.form-control{
		width:auto;
  }


  /* navbar */
.navbar-inverse {
    background-color: #D36D35;
    border-color: #E7E7E7;
}
/* Title */
.navbar-inverse .navbar-brand {
    color: #FFF;
}
.navbar-inverse .navbar-brand:hover,
.navbar-inverse .navbar-brand:focus {
    color: #5E5E5E;
}
/* Link */
.navbar-inverse .navbar-nav > li > a {
    color: #FFF;
}
.navbar-inverse .navbar-nav > li > a:hover,
.navbar-inverse .navbar-nav > li > a:focus {
    color: #333;
}
.navbar-inverse .navbar-nav > .active > a,
.navbar-inverse .navbar-nav > .active > a:hover,
.navbar-inverse .navbar-nav > .active > a:focus {
    color: #555;
    background-color: #E7E7E7;
}
.navbar-inverse .navbar-nav > .open > a,
.navbar-inverse .navbar-nav > .open > a:hover,
.navbar-inverse .navbar-nav > .open > a:focus {
    color: #555;
    background-color: #D5D5D5;
}
/* Caret */
.navbar-inverse .navbar-nav > .dropdown > a .caret {
    border-top-color: #FFF;
    border-bottom-color: #FFF;
}
.navbar-inverse .navbar-nav > .dropdown > a:hover .caret,
.navbar-inverse .navbar-nav > .dropdown > a:focus .caret {
    border-top-color: #333;
    border-bottom-color: #333;
}
.navbar-inverse .navbar-nav > .open > a .caret,
.navbar-inverse .navbar-nav > .open > a:hover .caret,
.navbar-inverse .navbar-nav > .open > a:focus .caret {
    border-top-color: #555;
    border-bottom-color: #555;
}
/* Mobile version */
.navbar-inverse .navbar-toggle {
    border-color: #DDD;
}
.navbar-inverse .navbar-toggle:hover,
.navbar-inverse .navbar-toggle:focus {
    background-color: #DDD;
}
.navbar-inverse .navbar-toggle .icon-bar {
    background-color: #CCC;
}
@media (max-width: 767px) {
    .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {
        color: #FFF;
    }
    .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,
    .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {
          color: #333;
    }
}

.dropdown-menu{
  min-width: 196px;
}
</style>
