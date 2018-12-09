import axios from 'axios'
import router from '../router'

const env = process.env.NODE_ENV
// const baseURL = env == 'development' ? '/api' : '/'
const baseURL = 'http://192.168.3.142'

const instance = axios.create({
    baseURL,
    withCredentials:true,
    timeout:15000,
    headers:{
        // 'Content-Type':"application/x-www-form-urlencoded;charset=UTF-8",
        'Content-Type':"application/json;charset=UTF-8",
    }
})
// 其他接口问后端登陆后那个reason是多少7（权限） 

const xhr = {
    get(url,data,config){
        return new Promise((resolve,reject)=>{
            instance.get(url,{params: data},config).then(ress=>{
                // if(res.data.code == 401){
                //     console.log("登录失效get")
                //     Message.warning('登录状态失效，正在跳转。。。');
                //     router.push('/')
                //  }
                let res = JSON.parse(ress.data); 
                resolve(res.data) 
            }).catch(err=>{
                reject(err)
            })
        })
    }, 
    fetch(url,data,config,methods){
        return new Promise((resolve,reject)=>{
            instance[methods](url,data,config).then(ress=>{
                let res = JSON.parse(ress.data);
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    put(url,data,config){
        return this.fetch(url,data,config,'put')
    },
    post(url,data,config){
        return new Promise((resolve,reject)=>{
            instance.post(url,data,config).then(ress=>{
                let res = JSON.parse(ress.data); 
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    },
}
export const $axios = xhr