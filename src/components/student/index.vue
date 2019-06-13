<template>
	<div class="row">
		<div class="col-md-12">
			<h4 class="text-center"><b>Student Table</b></h4><br>
			<div>
				<div class="alert alert-success alert-dismissible" style="display:none">
                    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                </div>
                <router-link class="btn btn-primary" :to="{name: 'student_create'}">New Student</router-link>
			  <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
			    New Student
			  </button> --><br><br>
			  <div class="modal fade" id="myModal">
			    <div class="modal-dialog">
			      <div class="modal-content">
			        <div class="modal-header">
			          <h4 class="modal-title">Student Info</h4>
			          <button type="button" class="close" data-dismiss="modal">&times;</button>
			        </div>
			        <div class="modal-body">
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
			        <div class="modal-footer">
			          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
			        </div>
			      
			      </div>
			    </div>
			  </div>
			</div>

			<div class="table-responsive">
				<table class="table table-bordered">
					<thead>
						<tr>
							<th>No</th>
							<th>Name</th>
							<th>Phone</th>
							<th>Email</th>
							<th>College</th>
							<th>Auction</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="post in posts" :key="post.id">
		                    <td>{{ post.id }}</td>
		                    <td>{{ post.name }}</td>
		                    <td>{{ post.phone }}</td>
		                    <td>{{ post.email }}</td>
		                    <td>{{ post.college }}</td>
		                    <td>
		                    	<router-link :to="{name: 'student_edit', params: { id: post.id }}" class="btn btn-primary">Edit</router-link>&nbsp;
		                    	<button class="btn btn-danger" @click = "deletePost(post.id)">Delete</button>

		                    </td>		    
		                </tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
      data() {
        return {
          posts: [],
          students: {}
        }
      },
      created() {
      let uri = 'http://192.168.1.7/api/student';
      this.axios.get(uri).then(response => {
        this.posts = response.data.data;
      });
    },
    methods: {
      deletePost(id)
      {
        let uri = `http://192.168.1.7/api/student_delete/${id}`;
        this.axios.get(uri).then(response => {
          this.posts.splice(this.posts.indexOf(id), 1);
        });
      },

      addPost() {
      	let uri = 'http://192.168.1.7/api/student_store';
      	this.axios.post(uri, this.students).then((response) =>{
      		//this.$router.push({ name: 'student'});
      		$('.modal').each(function(){
                $(this).modal('hide');
            });
            // jQuery('.alert').show();
            // jQuery('.alert').html(data.success);  
      	});

      }
    }
  }
</script>