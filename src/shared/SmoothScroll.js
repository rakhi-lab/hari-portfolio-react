/**
 * SmoothScroll.js
 * Lightweight momentum-based smooth scroll utility.
 * No dependencies needed — works with native browser APIs.
 */

class SmoothScroll {
  constructor(options = {}) {
    this.ease = options.ease || 0.08;       // Lower = smoother/slower, Higher = snappier
    this.multiplier = options.multiplier || 1;
    this.rafId = null;
    this.current = window.scrollY;
    this.target = window.scrollY;
    this.isRunning = false;
    this._bound = this._onWheel.bind(this);
    this._update = this._update.bind(this);
  }

  init() {
    // Only enable on non-touch devices to keep mobile native scroll
    if (window.matchMedia("(pointer: fine)").matches) {
      window.addEventListener("wheel", this._bound, { passive: false });
    }
  }

  destroy() {
    window.removeEventListener("wheel", this._bound);
    if (this.rafId) cancelAnimationFrame(this.rafId);
  }

  _onWheel(e) {
    e.preventDefault();
    this.target += e.deltaY * this.multiplier;
    this.target = Math.max(
      0,
      Math.min(this.target, document.body.scrollHeight - window.innerHeight)
    );
    if (!this.isRunning) {
      this.isRunning = true;
      this.rafId = requestAnimationFrame(this._update);
    }
  }

  _update() {
    this.current += (this.target - this.current) * this.ease;

    // Stop when close enough
    if (Math.abs(this.target - this.current) < 0.5) {
      this.current = this.target;
      window.scrollTo(0, this.current);
      this.isRunning = false;
      return;
    }

    window.scrollTo(0, this.current);
    this.rafId = requestAnimationFrame(this._update);
  }
}

export default SmoothScroll;
