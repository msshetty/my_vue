<template>
	<div class="row justify-content-center">
		<div class="col-md-6">
			<div class="card">
				<div class="card-header text-center"><h4><b>Student Edit</b></h4></div>
				<div class="card-body">
					<form @submit.prevent="updatePost">
						<div class="form-group">
							<label>Name</label>
							<input type="text" name="name" v-model="post.name" class="form-control" required>
						</div>
						<div class="form-group">
							<label>Email</label>
							<input type="text" v-model="post.email" name="email" class="form-control" required>
						</div>
						<div class="form-group">
							<label>Phone</label>
							<input type="text" v-model="post.phone" name="phone" class="form-control" required>
						</div>
						<div class="form-group">
							<label>College</label>
							<input type="text" v-model="post.college" name="college" class="form-control" required>
						</div>
						<div class="form-group">
							<button class="btn btn-primary">Update</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
      data() {
        return {
          post: {}
        }
      },
      created() {
        let uri = `http://192.168.1.7/api/student_edit/${this.$route.params.id}`;
        this.axios.get(uri).then((response) => {
            this.post = response.data;
        });
      },
      methods: {
        updatePost() {
          let uri = `http://192.168.1.7/api/student_update/${this.$route.params.id}`;
          this.axios.post(uri, this.post).then((response) => {
            this.$router.push({name: 'student'});
          });
        }
      }
    }
</script>