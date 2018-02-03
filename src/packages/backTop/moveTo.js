/**
 * 回到顶部的实现逻辑
 */
export default class moveTo {
    constructor({ target, parent = 'html', duration = 700, easing = this.easeOutQuart, callback = () => { } }) {
        if (!target) {
            return new Error('缺少参数target')
        }

        this.parent = parent;
        this.target = target;
        this.scroller = document.querySelector(this.parent);
        this.duration = duration;
        this.easing = easing;
        this.callback = callback;


        this.currentPos = '';
        this.initialScrollTop = '';

        this.init();
    }
    requestAnimationFrame(loop) {
        return window.requestAnimationFrame(loop) ||
            window.webkitRequestAnimationFrame(loop) ||
            window.mozRequestAnimationFrame(loop) ||
            window.setTimeout(loop, 6000 / 60);
    }
    init() {
        const bindFn = (e) => {
            //to save the initial offset.
            this.initialScrollTop = this.scroller.scrollTop;
            this.currentPos = this.initialScrollTop;
            let startTime = null;

            //animation loop
            const loop = (currentTime) => {
                if (!startTime) {
                    startTime = currentTime - 1;
                }
                //to calculate current timeElapsed
                const timeElapsed = currentTime - startTime;

                //to calculate currentPosition using easingFunc.
                const val = this.easing(
                    timeElapsed, 0, this.initialScrollTop, this.duration
                );
                //to stop when the scrolltop and exec callback
                if (timeElapsed < this.duration) {
                    this.currentPos = this.initialScrollTop - val;
                    this.scroller.scrollTop = this.currentPos;
                    console.log(this.currentPos)
                    this.requestAnimationFrame(loop);
                } else {
                    this.callback();
                }
            }
            const frame = this.requestAnimationFrame(loop);
        }
        this.target.addEventListener('click', bindFn);
    }
    //default easing function
    easeOutQuart(t, b, c, d) {
        t /= d;
        t--;
        return -c * (t * t * t * t - 1) + b;
    }
}