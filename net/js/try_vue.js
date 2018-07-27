var app = new Vue({
	el:'#app',
	data:{
		message:'Hello Vue.js!'
	}
})
app.message='初次见面，Vue.js!';

var app2 = new Vue({
    el: '#app-2',
    data: {
  	 	message: 'You loaded this page on ' + new Date()
    }
})

var app3 = new Vue({
	el: '#app-3',
	data: {
		seen: false
	}
})

var app4 = new Vue({
	el: '#app-4',
	data: {
	  todos: [
	    { text: 'Learn JavaScript' },
	    { text: 'Learn Vue' },
	    { text: 'Build something awesome' },
	    { texts: '做个测试' }
	  ]
	}
})
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { text: 'Vegetables' },
      { text: 'Cheese' },
      { text: 'Whatever else humans are supposed to eat' }
    ]
  }
})

var app8 = new Vue({
  el: '#app-8',
  data: {
    groceryList: [
      { id: 0, text: '蔬菜' },
      { id: 1, text: '奶酪' },
      { id: 2, text: '随便其他什么人吃的东西' }
    ]
  }
})
var jl = new Vue({
  el:'#jl',
  data: {
    msg:'123',
    rawHtml:'有点正文',
    lsgo:'my',
    num:6,
    classList:{
      active: true,
      'text-danger': true
    },
    styleObject: {
      color: 'red',
      fontSize: '13px'
    },
    base:{color: 'red'},
    overr:{fontSize: '13px'}
  },
   computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.msg.split('').reverse().join('')
    }
  },
  methods: {
    reversedMessages: function () {
      return this.msg.split('').reverse().join('')
    }
  }
})


var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!'
  },
  watch: {
    // 如果 question 发生改变，这个函数就会运行
    question: function (newQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.getAnswer()
    }
  },
  methods: {
    // _.debounce 是一个通过 lodash 限制操作频率的函数。
    // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
    // ajax 请求直到用户输入完毕才会发出
    // 学习更多关于 _.debounce function (and its cousin
    // _.throttle)，参考：https://lodash.com/docs#debounce
    getAnswer: _.debounce(
      function () {
        if (this.question.indexOf('?') === -1) {
          this.answer = 'Questions usually contain a question mark. ;-)'
          return
        }
        this.answer = 'Thinking...'
        var vm = this
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            vm.answer = _.capitalize(response.data.answer)
          })
          .catch(function (error) {
            vm.answer = 'Error! Could not reach the API. ' + error
          })
      },
      // 这是我们为用户停止输入等待的毫秒数
      500
    )
  }
})

var tj = new Vue({
  el: '#tj',
  data: {
    ok: true,
    loginType: 'username',
    itList: [
      {name:1},
      {name:1},
      {name:1}
    ]
  }
})

var ky = new Vue({
	el:'#ky',
	data: {
		number:[1,2,3,4,5]
	},
	computed: {
		eveNum: function(){
			return this.number.filter(function(number){
				return number % 2 === 0
			})
		}

	},
	methods: {
	  even: function (number) {
	    return number.filter(function (number) {
	      return number % 2 === 0
	    })
	  }
	}
})

Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">X</button>\
    </li>\
  ',
  props: ['title']
})
var itmes = new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '1234',
    todos: [
      {
        id: 1,
        title: 'Do the dishes',
      },
      {
        id: 2,
        title: 'Take out the trash',
      },
      {
        id: 3,
        title: 'Mow the lawn'
      }
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
})

var example = new Vue({
	el :'#example-1',
	data: {
		counter: 0
	}
})

var example2 = new Vue({
	el :'#example-2',
	data: {
		name:'Vue.js'
	},
	methods:{
		greet:function(event){
			alert(this.name);
		// `event` 是原生 DOM 事件
		    if (event) {
		       alert(event.target.tagName)
		    }
		}
	}

})

example2.greet() // => 'Hello Vue.js!'























