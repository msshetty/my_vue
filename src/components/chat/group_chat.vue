<template>
	<div class="row justify-content-center">
		<div class="col-md-6">
			<div class="card" id="app">
	          <div class="card-header"><h4>Chat Group</h4><span class="float-right">{{connectionCount}} connections</span></div>
	          <div class="card-body scroll" v-chat-scroll>
	              <div class="messages" v-for="(msg, index) in messages" :key="index">
	              	<small><b>{{ msg.user }}</b></small><br>
	                  <small>{{ msg.message }}</small>
	              </div>
	          </div>
		      
		      <div class="card-footer">
		          <form @submit.prevent="sendMessage">
		              <div class="gorm-group">
		                  <label for="user">User:</label>
		                  <input type="text" v-model="user" class="form-control">
		              </div>
		              <div class="gorm-group pb-3">
		                  <label for="message">Message:</label>
		                  <input type="text" v-model="message" class="form-control">
		              </div>
		              <button type="submit" class="btn btn-success">Send</button>
		          </form>
		      </div>
		  </div>
		</div>
	</div>
  
</template>
<script>
import io from 'socket.io-client';

export default {
    data() {
        return {
            user: '',
            message: '',
            messages: [],
            online: [],
            connectionCount: 0,
            socket : io('http://192.168.1.7:3001')
        }
    },
    created() {
    	let uri = 'http://192.168.1.7/api/chat';
    	this.axios.get(uri).then(response =>{
    		this.messages = response.data.data;
    	});

    	socket.on('noOfConnections', (count) => {
            this.connectionCount = count
        });
    	
    },
    methods: {
        sendMessage(e) {
            e.preventDefault();
            let uri = 'http://192.168.1.7/api/chat_store';
            this.axios.post(uri, {user:this.user, message:this.message}).then((response)=>{

		    });
            this.socket.emit('SEND_MESSAGE', {
                user: this.user,
                message: this.message
            });
            this.message = ''
        }
    },
    mounted() {
        this.socket.on('MESSAGE', (data) => {
            this.messages = [...this.messages, data];
            // you can also do this.messages.push(data)
        });


        
    }
}
</script>

<style>
.scroll{
    height: 60vh;
    overflow-y: auto;
}

.messages{
	padding: 10pt;
    border-radius: 5pt;
    margin: 5pt;
    background-color: #ccd7e0;
}
</style>
