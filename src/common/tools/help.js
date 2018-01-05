export default {
  isShare() {
    let reg = /share|help/g;
    let url = location.href;
    if (reg.test(url)) {
      return true
    } else {
      return false
    }
  },
  isBottom() {
    /*是否到底部*/
    let winScrollTop = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
    let scrollHeight = Math.max(document.body.scrollHeight || document.documentElement.scrollHeight);
    let windowHeight = document.documentElement.clientHeight;
    if (winScrollTop + windowHeight === scrollHeight) {
      return true;
    } else {
      return false;
    }
  },
  backToTop() {
    let timerTop = window.setInterval(() => {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop === 0) {
        clearInterval(timerTop);
        timerTop = null;
      }
      let newScroll = scrollTop - 50;
      document.documentElement.scrollTop = document.body.scrollTop = newScroll;
    }, 0)
  },
  checkWechat() {
    /*判断是否微信*/
    if (navigator.userAgent.indexOf("MicroMessenger") >= 0) {
      return true;
    }
  },
  getRandom(n, m) {
    return Math.random() * (m - n) + n
  },
  getPosition(ele) {
    return ele.getBoundingClientRect()
  },
  getComputedStyle(ele) {
    let left = ele && ele.ownerDocument.defaultView.getComputedStyle(ele).webkitTransform;//matrix(1, 0, 0, 1, 101.698, 0)
    let regLeft = /matrix\(1, 0, 0, 1, (-?\d+\.?\d*), (-?\d+\.?\d*)\)/;
    let res = regLeft.exec(left);
    if (!res) return {
      x: 0,
      y: 0
    };
    return {
      x: parseFloat(res[1]),
      y: parseFloat(res[2])
    }
  },
  isDOM(ele) {
    if (typeof ele === 'object') {
      return ele instanceof HTMLElement
    } else {
      return ele && typeof ele === 'object' && ele.nodeType === 1 && typeof ele.nodeName === 'string'
    }
  }
}
