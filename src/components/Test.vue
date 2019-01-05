<template>
	<div class= 'test'>
		<!--获取数据-->
		<h1>{{title}}</h1>
		<p>{{user.firstName}}</p>
		<p v-text="user.lastName"></p>
		<p v-if="showName">{{user.firstName}}</p>

		<ul>
			<li v-for="item in items">{{item.title}}</li>
		</ul>
		<button v-on:click="say('Hello everyone')">SayHi</button>
		<p>{{fullName}}</p>

		<!-- props属性可以在父组件中定义修改 传递给子组件Test -->
		<h2>{{msg}}</h2>
	</div>
</template>

<script>
	export default{
		name: 'test',
		props:{
			msg:{
				type:String,
				default:"old value"
			}
		},
		data(){
			return{
				title: "Hello Vue.js!",
				user: {
					firstName: "Alex",
					lastName: "Li"
				},
				showName : true,
				items:[
					{title: "item1"},
					{title: "item2"},
					{title: "item3"}
				]
			}
		},
		methods: {
			say: function(msg){
				alert(msg)
			}
		},
		computed:{
			fullName: function() {
				return this.user.firstName + this.user.lastName
			}
		}
	}

</script>

<style scoped>
</style>