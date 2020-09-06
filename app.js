var iStr=''
var app = new Vue({
    el: '#inputBox',
    data: {
      message: '',
      ucString: ''
    },
    methods: {
        UCMessage: function () {
          this.ucString = this.message.toUpperCase();
        }
      }
  })

  