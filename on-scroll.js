/**
--------------------------------------------------------------------------
  @class OnScroll
  @classdesc Simple wrapper for the Intersection Observer API
  @author Yan Jacob
--------------------------------------------------------------------------
*/

export class OnScroll {
  /**
   * @param {number} threshold - 0 to 1 - how much the element is visible on screen
   * @param {string} rootMargin - margin default 0px
   * @param {string} classToggle - class to toggle once it's visible
   * @param {function} callback - callback function, called with IntersectionObserverEntry, IntersectionObserver 
   * @param {boolean} repeatAnimation - Set to true to repeat the animation once the element is off screen
   */

  constructor(elem, options) {
    const defaultOptions = {
      threshold: 0.1,
      rootMargin: "0px",
      classToggle: null,
      callback: null,
      repeatAnimation: false,
    };

    Object.assign(this, defaultOptions, options);

    const observerOptions = {
      root: null,
      rootMargin: this.rootMargin,
      threshold: this.threshold,
    };

    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (this.classToggle) {
            entry.target.classList.add(this.classToggle);
          }
          if (!this.repeatAnimation) {
            this.observer.unobserve(entry.target);
          }
        } else {
          if (this.classToggle) {
            entry.target.classList.remove(this.classToggle);
          }
        }
        if (this.callback) {
          this.callback(entry, observer);
        }
      });
    }, observerOptions);

    var targets = document.querySelectorAll(elem);
    targets.forEach((item) => {
      this.observer.observe(item);
    });
  }
}
