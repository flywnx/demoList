var example = new Vue({
	el:'#example-3',
	computed:{
		sayWhat:function(what){
			alert(what);
		}
	},
	methods:{
		say:function(message){
		  alert(message);
		},
		 warn: function (message, event) {
		    // 现在我们可以访问原生事件对象
		   	console.log(event.target.tagName);
		    alert(message)
		  }
	}
})
var Child = {
  template: '<div>A custom component!</div>'
}

var h5_form = new Vue({
	el:'#h5-form',
	data:{
		message:'',
		checked:true,
		checkedNames: [],
		picked:'',
		selected:'A',
		selecteds:[],
		options:[
			{text:'One',value:'A'},
			{text:'Two',value:'B'},
			{text:'Three',value:'C'},
		],
		toggle:'BB',
		a:'AA',
		b:'BB',
		msg:"msg",
		age:"11"
	},
	components: {
	    // <my-component> 将只在父组件模板中可用
	    'my-component': Child
	  }

})

Vue.component('my-component',{
	 template: '<div>A custom component!</div>'
})

new Vue({
  el: '#example'
})



Vue.component('simple-counter', {
  template: '<button v-on:click="counter += 1">{{ counter }}</button>',
  // 技术上 data 的确是一个函数了，因此 Vue 不会警告，
  // 但是我们却给每个组件实例返回了同一个对象的引用
  data: function () {
	    return {
	    counter: 0
	  }
  }
})
Vue.component('child', {
  // 声明 props
  props: ['message'],
  // 就像 data 一样，prop 也可以在模板中使用
  // 同样也可以在 vm 实例中通过 this.message 来使用
  template: '<span>{{ message }}</span>'
})
new Vue({
  el: '#example-2'
})


Vue.component('button-counter', {
  template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    incrementCounter: function () {
      this.counter += 1
      this.$emit('increment')
    }
  },
})

Vue.component('currency-input', {
  template: '\
    <span>\
      $\
      <input\
        ref="input"\
        v-bind:value="value"\
        v-on:input="updateValue($event.target.value)"\
      >\
    </span>\
  ',
  props: ['value'],
  methods: {
    // 不是直接更新值，而是使用此方法来对输入值进行格式化和位数限制
    updateValue: function (value) {
      var formattedValue = value
        // 删除两侧的空格符
        .trim()
        // 保留 2 位小数
        .slice(
          0,
          value.indexOf('.') === -1
            ? value.length
            : value.indexOf('.') + 3
        )
      // 如果值尚不合规，则手动覆盖为合规的值
      if (formattedValue !== value) {
        this.$refs.input.value = formattedValue
      }
      // 通过 input 事件带出数值
      this.$emit('input', Number(formattedValue))
    }
  }
})

new Vue({
  el: '#counter-event-example',
  data: {
    total: 0,
    price:0
  },
  methods: {
    incrementTotal: function () {
      this.total += 1
    }
  }
})









