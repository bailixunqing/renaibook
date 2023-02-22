import { defineStore } from 'pinia'
import { ref } from 'vue'
/* 定义函数:建议带use前缀 */
const useDemoStore = defineStore('demo', () => {
  /* 初始化空对象 */
  const counter = ref({})
  /* 执行方法 */
  const setCounter = (data) => {
    console.log(data)
    counter.value = data
  }
  return {
    counter,
    setCounter
  }
})
export default useDemoStore