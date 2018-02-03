export default class moveTo {
    constructor(target, parent = 'body') {
        if (!target) {
            return new Error('缺少参数target')
        }
        this.parent = parent;
        this.target = target;
        this.scroller = document.querySelector(this.parent);
        this.stop = false;
        this.init();
    }
    init() {
        let bindFn = (e) => {
            let scrollTop = this.scroller.scrollTop;
            console.log(this.scroller)
            console.log(scrollTop)
        }
        this.target.addEventListener('click', bindFn);

    }
    /**
   * easeOutQuart Easing Function
   * @param  {number} t - current time
   * @param  {number} b - start value
   * @param  {number} c - change in value
   * @param  {number} d - duration
   * @return {number} - calculated value
   */
    easeOutQuart(t, b, c, d) {
        t /= d;
        t--;
        return -c * (t * t * t * t - 1) + b;
    }
    /**
   * Merge two object
   *
   * @param  {object} obj1
   * @param  {object} obj2
   * @return {object} merged object
   */
    mergeObject(obj1, obj2) {
        const obj3 = {};
        Object.keys(obj1).forEach((propertyName) => {
            obj3[propertyName] = obj1[propertyName];
        });

        Object.keys(obj2).forEach((propertyName) => {
            obj3[propertyName] = obj2[propertyName];
        });
        return obj3;
    };
}