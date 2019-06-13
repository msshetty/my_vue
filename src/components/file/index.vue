<template>
	<div class="row justify-content-center">
		<div class="col-md-8">
			<router-link class="btn btn-primary" :to="{ name:'file_create'}">New</router-link><br><br>
			<div class="card">
				<div class="card-header text-center"><h4><b>Images</b></h4></div>
				<div class="card-body">
					<table class="table table-bordered">
						<thead>
							<tr>
								<th>Name</th>
								<th>File</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="post in posts" :key="post.id">
								<td>{{ post.name }}</td>
								<td><img :src="post.file" width="140px" height="100px"></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data() {
        return {
	          posts: [],
	          
	        }
	      },
	      created() {
	      let uri = 'http://192.168.1.7/api/file';
	      this.axios.get(uri).then(response => {
	        this.posts = response.data.data;
	      });
	    }
	}
</script>