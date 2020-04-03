(() => {
    const MyPlugin = {}
    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或属性
        Vue.myGlobalMethod = function () {
            console.log('Vue.myGlobalMethod()')
        }

        // 2. 添加一个全局资源(asset)
        Vue.directive('my-first-directive',(el,binding)=>{
                el.textContent=binding.value+'-----test'
         }
        )



        // 4. 添加一个实例方法
        Vue.prototype.$myMethod = function (methodOptions) {
            console.log('Vue.prototype.$myMethod()')
        }
    }
    window.MyPlugin = MyPlugin
})(window)