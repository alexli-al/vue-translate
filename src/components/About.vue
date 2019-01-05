<template>
	<div class= 'about'>
	<div class='col-md-6  col-md-offset-3' >
		<h2>在线翻译</h2>
		<p class='text-muted'>简单 / 实用 / 便捷</p>
		<form v-on:submit="submitForm()" class= 'form-inline well'>
			<input class= "form-control" type="text" v-model="translateText" placeholder="输入翻译内容">
			<select class= "form-control" v-model="language">
				<option value="en" selected>英语</option>
				<option value="ru">俄语</option>
		        <option value="ko">朝鲜语</option>
		        <option value="ja">日语</option>
		        <option value="es">西班牙语</option>
		        <option value="it">意大利语</option>
		        <option value="de">德语</option>
		        <option value="zh">中文</option>
			</select>
			<input class = 'btn btn-primary'type="submit" name="" value="翻译">
	</form>
	<h3>{{output}}</h3>

	</div>


	</div>
</template>

<script>
	export default{
		name: 'about',
		data(){
			return{
				translateText: "",
				language:"en",
				output:""
			}
		},
		methods: {
			submitForm: function(){
				//1 数据绑定
				console.log(this.translateText + "，国家："+ this.language)
				//2 翻译显
				// this.output = this.translateText + " " + this.language
				this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180802T072252Z.7fb2f98c9da21370.977ca030bf49a05272c581c24562ffbc22ec54ba&lang='+this.language+'&text='+this.translateText).then((response)=>{
  				//console.log(response.body.text[0]);
  				this.output=response.body.text[0];
  				})
  			},
  			//这里不知道为什么也不生效
  			created:function(){
  				alert("hello");
				this.language="zh";
			}
  		}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

					console.log(response.body)
				}))
			}
		},
		computed:{
			
		}
	}

</script>

<style scoped>
</style>
