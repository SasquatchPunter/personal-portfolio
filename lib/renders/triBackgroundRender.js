class Tri {
  constructor({ x, y, w, h, invert }) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.invert = invert;

    this.cModifier = 1;
    this.stepOffset = Math.random() * 360;
    // this.c1 = { r: 255, g: 255, b: 255, a: Math.random() };
    // this.c2 = { r: 200, g: 200, b: 200 };
    this.c3 = { r: 128, g: 0, b: 0, a: 0 };

    this.init();
  }

  init() {
    const path = new Path2D();
    if (this.invert) {
      path.moveTo(this.x, this.y);
      path.lineTo(this.x + this.w, this.y);
      path.lineTo(this.x + this.w / 2, this.y + this.h);
      path.closePath();
    } else {
      path.moveTo(this.x, this.y + this.h);
      path.lineTo(this.x + this.w / 2, this.y);
      path.lineTo(this.x + this.w, this.y + this.h);
      path.closePath();
    }
    this.path = path;
  }

  draw(ctx) {
    ctx.fillStyle = `rgba(${this.c3.r},${this.c3.g},${this.c3.b},${this.c3.a})`;
    ctx.fill(this.path);
  }

  update(time) {
    const sin = Math.abs(Math.sin(time + this.stepOffset));
    this.c3.a = sin;
    // this.c3.r = (this.c2.r - this.c1.r) * sin + this.c1.r;
    // this.c3.g = (this.c2.g - this.c1.g) * sin + this.c1.g;
    // this.c3.b = (this.c2.b - this.c1.b) * sin + this.c1.b;
  }
}

export default function render(canvas) {
  const ctx = canvas.getContext("2d");
  const tris = [];

  const w = 80;
  const h = 80;
  let invertCol = false;

  /* Init Tris */
  for (let y = -h / 2; y < canvas.height; y += h) {
    let invert = invertCol;
    for (let x = -w / 2; x < canvas.width; x += w / 2 - 0.5) {
      tris.push(new Tri({ x, y, w, h, invert }));
      invert = !invert;
    }
    invertCol = !invertCol;
  }

  /* Animate */
  let reqId = undefined;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const time = Date.now() / 2000;
    tris.forEach((tri) => {
      tri.update(time);
      tri.draw(ctx);
    });
    reqId = requestAnimationFrame(animate);
  }
  animate();

  return () => {
    cancelAnimationFrame(reqId);
  };
}
