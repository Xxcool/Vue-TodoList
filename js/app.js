(function (window) {
	'use strict';//让代码更严谨，防止暴露全局变量

	// Your starting point. Enjoy the ride!
	new Vue({
		el:'#todoApp',
		data:{
			todos:[
				{id:1,name:'詹姆斯',completed:false},
			    {id:2,name:'科比',completed:true},
			    {id:3,name:'乔丹',completed:true},
			    {id:4,name:'韦德',completed:true},
			    {id:5,name:'麦蒂',completed:false},
			],
			newTodo:'',
			isEditingId:-1,
			selectAll:false
		},
		methods:{
			//1.添加任务
			add:function(){
				//判断newTodo是否为空，当文本框数据为空时，就不让添加
				if(this.newTodo == ''){
					return
				}
				this.todos.push({
					id:Math.random(),
					name:this.newTodo,
					completed:false
				})
			//添加数据后，清空文本框
				this.newTodo=''
			},

			//2.删除任务
			remove:function(id){
				for (var i = 0; i < this.todos.length; i++) {
					 var item = this.todos[i]
					 if(item.id === id ){
					 	this.todos.splice(i,1)
					 	return
					 }
				}
			},

			//3.修改任务内容
			edit:function(id){
				this.isEditingId = id
			},
			save:function(){
				this.isEditingId = -1
			},

			//4.批量切换任务状态
			toggleAll:function(){
				for (var i = 0; i < this.todos.length; i++) {
					var item = this.todos[i]
					item.completed = this.selectAll
				}
			},

			//5.显示为完成的任务数
			getActive:function(){
				var count = 0
				//遍历todos，找到所有completed属性值为false的数据
				for (var i = 0; i < this.todos.length; i++) {
					var item = this.todos[i]
					if(!item.completed){
						count++
					}
				}
				return count
			},

			//6.清除所有已经完成任务
			clearAll:function(){
				//遍历todos数组，如果当前元素的completed为true，就把它删除
				//遍历数组长度时，会导致循环条件改变，也会导致原来的索引改变，索引倒向遍历
				for (var i = this.todos.length - 1; i >= 0; i--) {
					var item = this.todos[i]
					if(item.completed){
						this.todos.splice(i,1)
					}
				}
				/*for (var i = 0; i < this.todos.length; i++) {
					var item = this.todos[i]
					if(item.completed){
						this.todos.splice(i,1)
						i--
					}
				}*/
			}
		}
	})
})(window);
