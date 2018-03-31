import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

new Vue({
  el: '#form',
  data: {
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    passwordConfirm: null,
    errorMessage: null,
    display: false
  },
  methods: {
    submit (event) {
      this.validForm()
    },
    postForm() {

    },
    validForm () {
      //check first name
      if(this.isEmpty(this.firstName)) {
        this.errorMessage = '姓が入力されていません。'
        this.showErrorMessage()
        return false
      }
      if(this.containSpace(this.firstName)) {
        this.errorMessage = '姓に空白が含まれています。空白は取り除いてください。'
        this.showErrorMessage()
        return false
      }

      //check last name
      if(this.isEmpty(this.lastName)) {
        this.errorMessage = '名前が入力されていません。'
        this.showErrorMessage()
        return false
      }
      if(this.containSpace(this.lastName)) {
        this.errorMessage = '名前に空白が含まれています。空白は取り除いてください。'
        this.showErrorMessage()
        return false
      }

      //check email
      if(this.isEmpty(this.email)) {
        this.errorMessage = 'Eメールアドレスが入力されていません。'
        this.showErrorMessage()
        return false
      }
      if(!this.validEmail(this.email)) {
        console.log(this.email)
        this.errorMessage = 'Eメールアドレスの形式が正しくありません。'
        this.showErrorMessage()
        return false
      }

      //check password
      if(this.isEmpty(this.password)) {
        this.errorMessage = 'パスワードが入力されていません。'
        this.showErrorMessage()
        return false
      }
      if(this.isEmpty(this.passwordConfirm)) {
        this.errorMessage = '確認用のパスワードが入力されていません。'
        this.showErrorMessage()
        return false
      }

      return true
    },
    isEmpty(value) {
      if(!value) { return true }
      var v = value.replace(/\s+/g, "")
      if(v.length == 0) { return true }
      return false
    },
    containSpace(value){
      if(value.match(/\s/)) return true
    },
    validEmail(email) {
      var regex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return regex.test(email)
    },
    showErrorMessage() {
      this.display = true
    }
  }

})
