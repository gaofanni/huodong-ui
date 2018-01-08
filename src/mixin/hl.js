/**
 * 这是一个插入代码格式的全局mixin
 * 每一个路由进入的回调调用highlight
 */

var mixin = {
    beforeRouteEnter(to, from, next) {
        next(() => {
            [].forEach.call(document.querySelectorAll("pre code"), function (block) {
                hljs.highlightBlock(block);
            });
        });
    }
}

export default mixin;