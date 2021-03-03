import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

console.log(process.env.NODE_ENV);

let apiUrl
let id 
let _token 


if(process.env.NODE_ENV == 'development'){
   apiUrl = '/api'
   id = 0
   _token =  'R5UJ6f7hUrUIKINcdDD2RWrGcbFvq8etGyNFTvQM'
}else{
 apiUrl = window.parent.document.getElementsByName('_url')[0].value
 id = window.parent.document.getElementsByName('_id')[0].value
 _token =  window.parent.document.getElementsByName('_token')[0].value
} 



export const state = () => ({
  configData: {apiUrl:apiUrl,id:id,'_token':_token},
  apiList:{
    getData:'',
    saveData:'',
    uploadImg:'',
  }
})