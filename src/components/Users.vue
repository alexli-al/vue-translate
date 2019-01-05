<template>
	<div>
		<h2>User List</h2>

		<form v-on:submit="addUser()">
			<input type="text" v-model="newUser.name" placeholder="enter name">
			<input type="text" v-model="newUser.email" placeholder="enter email">
			<input type="submit" value ="submit">

		</form>

		
		<ul>
			<li v-for="user in users">
				{{user.name}}:{{user.email}}
			</li>

		</ul>
	</div>
</template>

<script>
	export default {
		name: "users",
		data(){
			return{
				newUser:{},
				users:[
					{
						name:"Alex Li",
						email:"alexli@missionsky.com",
						contacted: false
					},
					{
						name:"Alvin li",
						email:"alvnli@missionsky.com",
						contacted: false
					},
					{
						name:"Louis He",
						email:"louishe@missionsky.com",
						contacted: false
					}
				]
			}
		},
		methods: {
			addUser:function(){
				// alert("hello")
				this.users.push({
					//newUser.name会报错newUser未定义
					name: this.newUser.name,
					email: this.newUser.email,
					contacted: false

				});	
			}

		}
	}

</script>

<style scoped>
</style>