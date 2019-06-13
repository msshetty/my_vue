<template>
	<div class="row justify-content-center">
		<div class="col-md-6">
			<div class="card">
				<div class="card-header text-center"><h4><b>Student Create</b></h4></div>
				<div class="card-body">
					<form @submit.prevent="addPost">
						<div class="form-group">
							<label>Name</label>
							<input type="text" name="name" v-model="students.name" class="form-control" required>
						</div>
						<div class="form-group">
							<label>Email</label>
							<input type="text" v-model="students.email" name="email" class="form-control" required>
						</div>
						<div class="form-group">
							<label>Phone</label>
							<input type="text" v-model="students.phone" name="phone" class="form-control" required>
						</div>
						<div class="form-group">
							<label>College</label>
							<input type="text" v-model="students.college" name="college" class="form-control" required>
						</div>
						<div class="form-group">
							<button class="btn btn-primary">Create</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				students: {}
			}
		},
		methods: {
			addPost() {
	      	let uri = 'http://192.168.1.7/api/student_store';
	      	this.axios.post(uri, this.students).then((response) =>{
	      		this.$router.push({ name: 'student'});
	      		// $('.modal').each(function(){
	        //         $(this).modal('hide');
	        //     });
	            // jQuery('.alert').show();
	            // jQuery('.alert').html(data.success);  
	      	});

	      }
		}
	}
</script>