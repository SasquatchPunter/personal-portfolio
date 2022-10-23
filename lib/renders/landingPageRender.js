class Particle {
  constructor({ x, y, w, h }) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.color = { r: 0, g: 0, b: 0 };

    this.dx = Math.random() < 0.5 ? -1 : 1;
    this.dy = Math.random() < 0.5 ? -1 : 1;
  }

  draw(ctx) {
    const center = { x: this.x + this.w / 2, y: this.y + this.h / 2 };
    const grad = ctx.createRadialGradient(
      center.x,
      center.y,
      0,
      center.x,
      center.y,
      this.w / 2
    );
    grad.addColorStop(0, "#aaa");
    grad.addColorStop(1, "#aaa0");
    ctx.fillStyle = grad;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  update(ctx) {
    const tx = this.x + this.dx;
    const ty = this.y + this.dy;
    if (tx < 0 || tx > ctx.canvas.width) this.dx *= -1;
    if (ty < 0 || ty > ctx.canvas.height) this.dy *= -1;

    this.x += this.dx;
    this.y += this.dy;
  }

  computeColor(ctx) {
    const factor = this.y / ctx.canvas.height;
    this.color.r = Math.floor(factor * 255);
    this.color.b = Math.abs(Math.floor(factor * 255) - 128);
  }
}

export default function render(canvas) {
  const ctx = canvas.getContext("2d");

  const particles = [];

  for (var i = 0; i < 100; i++) {
    const x = Math.random() * canvas.width,
      y = Math.random() * canvas.height,
      w = 10,
      h = 10;

    const particle = new Particle({ x, y, w, h });

    particles.push(particle);
  }

  /* Animate */
  let reqId = undefined;
  function animate() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    particles.forEach((particle) => {
      particle.update(ctx);
      particle.draw(ctx);
    });
    reqId = requestAnimationFrame(animate);
  }
  animate();

  return () => {
    cancelAnimationFrame(reqId);
  };
}
