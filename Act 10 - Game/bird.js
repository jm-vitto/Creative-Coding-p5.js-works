function Bird() {
    this.y = height / 2;
    this.x = 64;
  
    this.gravity = 0.7;
    this.lift = -12;
    this.velocity = 0;
  
    this.show = function () {
      // Orange color for body
      fill(255, 165, 0);
      // Draw fish body (ellipse)
      ellipse(this.x, this.y, 32, 20);
      
      // Darker orange color for tail
      fill(255, 140, 0);
      // Draw fish tail (triangle)
      beginShape();
      vertex(this.x - 16, this.y); // Tip of the tail
      vertex(this.x - 32, this.y - 10); // Upper tail fin
      vertex(this.x - 32, this.y + 10); // Lower tail fin
      endShape(CLOSE);
    };
  
    this.up = function () {
      this.velocity += this.lift;
    };
  
    this.update = function () {
      this.velocity += this.gravity;
      // this.velocity *= 0.9;
      this.y += this.velocity;
  
      if (this.y > height) {
        this.y = height;
        this.velocity = 0;
      }
  
      if (this.y < 0) {
        this.y = 0;
        this.velocity = 0;
      }
    };
  }
  