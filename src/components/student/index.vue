<template>
	<div class="row">
		<div class="col-md-12">
			<h4 class="text-center"><b>Student Table</b></h4><br>
			<div>
			  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
			    New Student
			  </button><br><br>
			  <div class="modal fade" id="myModal">
			    <div class="modal-dialog">
			      <div class="modal-content">
			        <div class="modal-header">
			          <h4 class="modal-title">Student Info</h4>
			          <button type="button" class="close" data-dismiss="modal">&times;</button>
			        </div>
			        <div class="modal-body">
			          	<form>
							<div class="form-group">
								<label>Name</label>
								<input type="text" name="name" class="form-control" required>
							</div>
							<div class="form-group">
								<label>Email</label>
								<input type="text" name="email" class="form-control" required>
							</div>
							<div class="form-group">
								<label>Phone</label>
								<input type="text" name="phone" class="form-control" required>
							</div>
							<div class="form-group">
								<label>College</label>
								<input type="text" name="college" class="form-control" required>
							</div>
							<div class="form-group">
								<input type="submit" class="btn btn-primary">
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
						<tr>
							<td>1</td>
							<td>Guru</td>
							<td>8971301502</td>
							<td>guru@gmail.com</td>
							<td>Govt Engg College</td>
							<td>
								<a href="#" class="btn btn-warning">Edit</a>&nbsp;
								<a href="#" class="btn btn-danger">Delete</a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		
	}
</script>