<template>
	<nav class="navbar navbar-expand-lg navbar-dark  bg-dark">
	  <a class="navbar-brand" href="#">Mahadev</a>
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>

	  <div class="collapse navbar-collapse" id="navbarSupportedContent">
	    <ul class="navbar-nav mr-auto">
	      <li class="nav-item">
	        <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
	      </li>
	      <li class="nav-item">
	        <router-link class="nav-link" to="/chat" >Chat</router-link>
	      </li>
	      <li class="nav-item">
	        <router-link class="nav-link" to="/student" >Student</router-link>
	      </li>
	      <!-- <li class="nav-item">
	        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
	      </li> -->
	    </ul>
	    <ul class="navbar-nav navbar-right">
	    	<li class="nav-item">
	        	<router-link class="nav-link" to="/login" aria-disabled="true">Login</router-link>
	      	</li>
	      	<li class="nav-item">
	        	<router-link class="nav-link" to="/register"  aria-disabled="true">Register</router-link>
	      	</li>
	    </ul>
	  </div>
	  
	</nav>
</template>
<script>
	export default{

	}
</script>