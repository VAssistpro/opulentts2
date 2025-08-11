import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const ParticlesSketch = () => {
  const sketchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sketchRef.current) return;

    let particles: any[] = [];
    const numParticles = 150;
    let goldColors: p5.Color[];
    let backgroundColor1: p5.Color;
    let backgroundColor2: p5.Color;

    const sketch = new p5((p: p5) => {
      class Particle {
        pos: p5.Vector;
        vel: p5.Vector;
        acc: p5.Vector;
        maxSpeed: number;
        baseSize: number;
        size: number;
        baseColor: p5.Color;
        noiseOffsetX: number;
        noiseOffsetY: number;
        sparkleTimer: number;
        sparkleDuration: number;
        sparkleChance: number;

        constructor(x: number, y: number) {
          this.pos = p.createVector(x, y);
          this.vel = p.createVector(p.random(-0.3, 0.3), p.random(-0.2, -0.8));
          this.acc = p.createVector(0, 0);
          this.maxSpeed = 1;
          this.baseSize = p.random(2, 6);
          this.size = this.baseSize;
          this.baseColor = p.random(goldColors);
          this.noiseOffsetX = p.random(1000);
          this.noiseOffsetY = p.random(1000);
          this.sparkleTimer = 0;
          this.sparkleDuration = 15;
          this.sparkleChance = 0.001;
        }

        applyForce(force: p5.Vector) {
          this.acc.add(force);
        }

        update() {
          const noiseX = p.map(p.noise(this.noiseOffsetX + p.frameCount * 0.005), 0, 1, -0.1, 0.1);
          const noiseY = p.map(p.noise(this.noiseOffsetY + p.frameCount * 0.005), 0, 1, -0.1, 0.1);
          const noiseForce = p.createVector(noiseX, noiseY);
          this.applyForce(noiseForce);

          const mouseDist = p.dist(this.pos.x, this.pos.y, p.mouseX, p.mouseY);
          if (mouseDist < 100) {
            const repelForce = p.createVector(this.pos.x - p.mouseX, this.pos.y - p.mouseY);
            const strength = p.map(mouseDist, 0, 100, 0.3, 0);
            repelForce.setMag(strength);
            this.applyForce(repelForce);
          }

          this.vel.add(this.acc);
          this.vel.limit(this.maxSpeed);
          this.pos.add(this.vel);
          this.acc.mult(0);

          if (this.sparkleTimer > 0) {
            this.sparkleTimer--;
            this.size = this.baseSize * p.map(this.sparkleTimer, 0, this.sparkleDuration, 1, 2.5);
          } else {
            this.size = this.baseSize;
            if (p.random(1) < this.sparkleChance) {
              this.sparkleTimer = this.sparkleDuration;
            }
          }
        }

        display() {
          let displayColor = this.baseColor;
          if (this.sparkleTimer > 0) {
            const sparkleProgress = p.map(this.sparkleTimer, this.sparkleDuration, 0, 1, 0);
            displayColor = p.lerpColor(this.baseColor, p.color(255, 255, 240, 255), sparkleProgress * 0.8);
          }
          p.fill(displayColor);
          p.ellipse(this.pos.x, this.pos.y, this.size, this.size);
        }

        isOffscreen() {
          return (
            this.pos.y < -this.size * 2 ||
            this.pos.x < -this.size * 2 ||
            this.pos.x > p.width + this.size * 2 ||
            this.pos.y > p.height + this.size * 2
          );
        }
      }

      p.setup = () => {
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.style('position', 'absolute');
        canvas.style('top', '0');
        canvas.style('left', '0');
        canvas.style('z-index', '-1');
        p.colorMode(p.RGB);
        p.noStroke();

        backgroundColor1 = p.color(10, 10, 25);
        backgroundColor2 = p.color(30, 10, 40);
        goldColors = [
          p.color(255, 215, 0, 200),
          p.color(240, 225, 100, 200),
          p.color(255, 248, 220, 220),
          p.color(200, 160, 50, 180)
        ];

        for (let i = 0; i < numParticles; i++) {
          particles.push(new Particle(p.random(p.width), p.random(p.height)));
        }
      };

      p.draw = () => {
        p.clear();
        for (let y = 0; y < p.height; y++) {
          const inter = p.map(y, 0, p.height, 0, 1);
          const c = p.lerpColor(backgroundColor1, backgroundColor2, inter);
          p.stroke(c);
          p.line(0, y, p.width, y);
        }
        p.noStroke();

        for (let i = particles.length - 1; i >= 0; i--) {
          particles[i].update();
          particles[i].display();
          if (particles[i].isOffscreen()) {
            particles.splice(i, 1);
            particles.push(new Particle(p.random(p.width), -20));
          }
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    });

    return () => {
      sketch.remove();
    };
  }, []);

  return <div ref={sketchRef} className="absolute inset-0 z-[-1] pointer-events-none" />;
};

export default ParticlesSketch;