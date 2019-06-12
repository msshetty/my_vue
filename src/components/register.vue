<template>
	<div class="row justify-content-center">
		<div class="col-md-6">
			<div class="card">
				<div class="card-header text-center">Register</div>
				<div class="card-body">
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
							<label>Password</label>
							<input type="text" name="password" class="form-control" required>
						</div>
						<div class="form-group">
							<label>Confirm Password</label>
							<input type="text" name="confirmation_password" class="form-control" required>
						</div>
						<div class="form-group">
							<input type="submit" class="btn btn-primary">
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>