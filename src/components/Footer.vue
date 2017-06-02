<template>
	<div class = "Footer">
		<div class="row">
			<div class="col-md-2 col-md-offset-2 text col-sm-3 col-xs-3">
				<div class = "link link-title"><a href="">Using Your Basket</a></div>
				<div class = "link"><a href="">How it Works</a></div>
				<div class = "link"><a href="">Gift</a></div>
				<div class = "link"><a href="">Help</a></div>
			</div>
			<div class="col-md-2 text col-sm-3 col-xs-3">
				<div class = "link link-title"><a href="">Our Company</a></div>
				<div class = "link"><a href="">About</a></div>
				<div class = "link"><a href="">Partners</a></div>
				<div class = "link"><a href="">Career</a></div>
				<div class = "link"><a href="">Blog</a></div>
			</div>
			<div class="col-md-2 text col-sm-3 col-xs-3">
				<div class = "link link-title"><a href="">Legal Stuff</a></div>
				<div class = "link"><a href="">Privacy</a></div>
				<div class = "link"><a href="">Term of Service</a></div>
			</div>
			<div class="col-md-2 text col-sm-3 col-xs-3">
				<div class = "link link-title"><a href="">Nice Links</a></div>
				<div class = "link"><a href="">Log in</a></div>
				<div class = "link"><a href="">Contact Us</a></div>
				<div class = "link"><a href="">Press/Media</a></div>
				<div class = "link"><a href="">Shoppers</a></div>
			</div>

		</div>
		<div class="text-center text"><i class="fa fa-facebook"></i> <i class="fa fa-twitter"></i> <i class="fa fa-pinterest-p"></i> <i class="fa fa-instagram"></i></div>
		<div class="copyright text text-center">Copyright bbgrocery@2017</div>
	</div>
</template>

<script>

export default {
  name: 'Footer',
  data () {
    return {
      msg: 'Welcome'
    }
  }
}
</script>
	
<style scoped>
	div.Footer{
		background-color: #444;
	}
	.text{
		color:white;
		text-align:center;
	}
	.link-title{
		font-weight: bold;
		font-size: 18px;
	}
	.row{
		padding-top:3%;
	}
	a{
		color:white;
	}
	i{
		padding:0 10px;
	}

</style>
