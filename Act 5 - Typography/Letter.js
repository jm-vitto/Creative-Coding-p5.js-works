"use strict"

class Letter {


  constructor(a, l) {
    if (a === undefined) {
      this.angle = radians(30);
    } else {
      this.angle = radians(a);
    }

    if (l === undefined) {
      this.length = 30;
    } else {
      this.length = l;
    }

    this.points = [
      createVector(0, -1 * this.length),
      createVector(cos(this.angle) * this.length, -1 * this.length / 2),
      createVector(cos(this.angle) * this.length, this.length / 2),
      createVector(0, this.length),
      createVector(cos(this.angle) * this.length * -1, this.length / 2),
      createVector(cos(this.angle) * this.length * -1, -1 * this.length / 2),
      createVector(0, -1 * this.length)
    ];
  }

  call(l, x, y) {
    if (typeof l === 'string') {
      if (l == 'A') this.A(x, y);
      else if (l == 'B') this.B(x, y);
      else if (l == 'C') this.C(x, y);
      else if (l == 'D') this.D(x, y);
      else if (l == 'E') this.E(x, y);
      else if (l == 'F') this.F(x, y);
      else if (l == 'G') this.G(x, y);
      else if (l == 'H') this.H(x, y);
      else if (l == 'I') this.I(x, y);
      else if (l == 'J') this.J(x, y);
      else if (l == 'K') this.K(x, y);
      else if (l == 'L') this.L(x, y);
      else if (l == 'M') this.M(x, y);
      else if (l == 'N') this.N(x, y);
      else if (l == 'O') this.O(x, y);
      else if (l == 'P') this.P(x, y);
      else if (l == 'Q') this.Q(x, y);
      else if (l == 'R') this.R(x, y);
      else if (l == 'S') this.S(x, y);
      else if (l == 'T') this.T(x, y);
      else if (l == 'U') this.U(x, y);
      else if (l == 'V') this.V(x, y);
      else if (l == 'W') this.W(x, y);
      else if (l == 'X') this.X(x, y);
      else if (l == 'Y') this.Y(x, y);
      else if (l == 'Z') this.Z(x, y);

    } else {
      console.log('Not a string');
    }
  }

  position(a, b) {
    translate(a, b);
  }

  basicPolygon() {
    push();
    beginShape();
    stroke(100);
    noFill();
    for (var i = 0; i < this.points.length; i++) {
      vertex(this.points[i].x, this.points[i].y);
    }
    endShape(CLOSE);
    pop();
  }

  drawALine(p) {
    push();
    beginShape();
    translate(this.points[p].x, this.points[p].y);
    // var newV = points[p + 1].sub(points[p]); //gotta use static function
    var newV = p5.Vector.sub(this.points[p + 1], this.points[p]);
    stroke(255);
    strokeWeight(2);
    line(0, 0, newV.x, newV.y);
    // print(newV.x + " " + newV.y);
    endShape(CLOSE);
    pop();
  }

  A(x, y) {
    push();
    this.position(x, y);
    this.basicPolygon();
    this.drawALine(0);
    this.drawALine(1);
    this.drawALine(4);
    this.drawALine(5);
    ellipse(0, 0, 5, 5);
    pop();
  }

  B(x, y) {
    push();
    this.position(x, y);
    this.basicPolygon();
    this.drawALine(0);
    this.drawALine(2);
    this.drawALine(3);
    this.drawALine(4);
    this.drawALine(5);
    stroke(255);
    strokeWeight(2);
    line(0, 0, this.points[1].x, this.points[1].y);
    line(0, 0, this.points[2].x, this.points[2].y);
    pop();
  }

  C(x, y) {
    push();
    this.position(x, y);
    this.basicPolygon();
    this.drawALine(0);
    this.drawALine(2);
    this.drawALine(3);
    this.drawALine(4);
    this.drawALine(5);
    pop();
  }

  D(x, y) {
    push();
    this.position(x, y);
    this.basicPolygon();
    this.drawALine(0);
    this.drawALine(1);
    this.drawALine(2);
    stroke(255);
    strokeWeight(2);
    line(this.points[0].x, this.points[0].y, this.points[3].x, this.points[3].y);
    pop();
  }

  E(x, y) {
    push();
    this.position(x, y);
    this.basicPolygon();
    this.drawALine(2);
    this.drawALine(3);
    this.drawALine(4);
    this.drawALine(5);
    stroke(255);
    strokeWeight(2);
    line(this.points[1].x, this.points[1].y, this.points[4].x, this.points[4].y);
    pop();
  }

  F(x, y) {
    push();
    this.position(x, y);
    this.basicPolygon();
    this.drawALine(3);
    this.drawALine(4);
    this.drawALine(5);
    stroke(255);
    strokeWeight(2);
    line(this.points[1].x, this.points[1].y, this.points[4].x, this.points[4].y);
    pop();
  }

  G(x, y) {
    push();
    this.position(x, y);
    this.basicPolygon();
    this.drawALine(0);
    this.drawALine(2);
    this.drawALine(3);
    this.drawALine(4);
    this.drawALine(5);
    stroke(255);
    strokeWeight(2);
    line(0, 0, this.points[2].x, this.points[2].y);
    pop();
  }

  H(x, y) {
    push();
    this.position(x, y);
    this.basicPolygon();
    this.drawALine(1);
    this.drawALine(4);
    ellipse(0, 0, 5, 5);
    pop();
  }

  I(x, y) {
    push();
    this.position(x, y);
    this.basicPolygon();
    this.drawALine(0);
    this.drawALine(2);
    this.drawALine(3);
    this.drawALine(5);
    stroke(255);
    strokeWeight(2);
    line(this.points[0].x, this.points[0].y, this.points[3].x, this.points[3].y);
    pop();
  }

  J(x, y) {
    push();
    this.position(x, y);
    this.basicPolygon();
    this.drawALine(0);
    this.drawALine(3);
    this.drawALine(5);
    stroke(255);
    strokeWeight(2);
    line(this.points[0].x, this.points[0].y, this.points[3].x, this.points[3].y);
    pop();
  }

  K(x, y) {
    push();
    this.position(x, y);
    this.basicPolygon();
    stroke(255);
    strokeWeight(2);
    line(this.points[0].x, this.points[0].y, this.points[3].x, this.points[3].y);
    line(0, 0, this.points[1].x, this.points[1].y);
    line(0, 0, this.points[2].x, this.points[2].y);
    pop();
  }

  L(x, y) {
    push();
    this.position(x, y);
    this.basicPolygon();
    this.drawALine(2);
    this.drawALine(3);
    this.drawALine(4);
    pop();
  }

  M(x, y) {
    push();
    this.position(x, y);
    this.basicPolygon();
    this.drawALine(1);
    this.drawALine(4);
    stroke(255);
    strokeWeight(2);
    line(0, 0, this.points[1].x, this.points[1].y);
    line(0, 0, this.points[5].x, this.points[5].y);
    pop();
  }

  N(x, y) {
    push();
    this.position(x, y);
    this.basicPolygon();
    this.drawALine(1);
    this.drawALine(4);
    stroke(255);
    strokeWeight(2);
    line(0, 0, this.points[2].x, this.points[2].y);
    line(0, 0, this.points[5].x, this.points[5].y);
    pop();
  }

  O(x, y) {
    push();
    this.position(x, y);
    this.basicPolygon();
    this.drawALine(0);
    this.drawALine(1);
    this.drawALine(2);
    this.drawALine(3);
    this.drawALine(4);
    this.drawALine(5);
    pop();
  }

  P(x, y) {
    push();
    this.position(x, y);
    this.basicPolygon();
    this.drawALine(0);
    stroke(255);
    strokeWeight(2);
    line(this.points[0].x, this.points[0].y, this.points[3].x, this.points[3].y);
    line(0, 0, this.points[1].x, this.points[1].y);
    pop();
  }

  Q(x, y) {
    push();
    this.position(x, y);
    this.basicPolygon();
    this.drawALine(0);
    this.drawALine(1);
    this.drawALine(2);
    this.drawALine(3);
    this.drawALine(4);
    this.drawALine(5);
    stroke(255);
    strokeWeight(2);
    line(0, 0, this.points[2].x, this.points[2].y);
    pop();
  }

  R(x, y) {
    push();
    this.position(x, y);
    this.basicPolygon();
    this.drawALine(0);
    stroke(255);
    strokeWeight(2);
    line(this.points[0].x, this.points[0].y, this.points[3].x, this.points[3].y);
    line(0, 0, this.points[1].x, this.points[1].y);
    line(0, 0, this.points[2].x, this.points[2].y);
    pop();
  }

  S(x, y) {
    push();
    this.position(x, y);
    this.basicPolygon();
    this.drawALine(0);
    this.drawALine(2);
    this.drawALine(3);
    this.drawALine(5);
    stroke(255);
    strokeWeight(2);
    line(this.points[2].x, this.points[2].y, this.points[5].x, this.points[5].y);
    pop();
  }

  T(x, y) {
    push();
    this.position(x, y);
    this.basicPolygon();
    this.drawALine(0);
    this.drawALine(5);
    stroke(255);
    strokeWeight(2);
    line(this.points[0].x, this.points[0].y, this.points[3].x, this.points[3].y);
    pop();
  }

  U(x, y) {
    push();
    this.position(x, y);
    this.basicPolygon();
    this.drawALine(1);
    this.drawALine(2);
    this.drawALine(3);
    this.drawALine(4);
    pop();
  }

  V(x, y) {
    push();
    this.position(x, y);
    this.basicPolygon();
    this.drawALine(2);
    this.drawALine(3);
    pop();
  }

  W(x, y) {
    push();
    this.position(x, y);
    this.basicPolygon();
    this.drawALine(1);
    this.drawALine(4);
    stroke(255);
    strokeWeight(2);
    line(0, 0, this.points[2].x, this.points[2].y);
    line(0, 0, this.points[4].x, this.points[4].y);
    pop();
  }

  X(x, y) {
    push();
    this.position(x, y);
    this.basicPolygon();
    stroke(255);
    strokeWeight(2);
    line(this.points[1].x, this.points[1].y, this.points[4].x, this.points[4].y);
    line(this.points[2].x, this.points[2].y, this.points[5].x, this.points[5].y);
    pop();
  }

  Y(x, y) {
    push();
    this.position(x, y);
    this.basicPolygon();
    stroke(255);
    strokeWeight(2);
    line(0, 0, this.points[1].x, this.points[1].y);
    line(0, 0, this.points[3].x, this.points[3].y);
    line(0, 0, this.points[5].x, this.points[5].y);
    pop();
  }

  Z(x, y) {
    push();
    this.position(x, y);
    this.basicPolygon();
    this.drawALine(0);
    this.drawALine(2);
    this.drawALine(3);
    this.drawALine(5);
    stroke(255);
    strokeWeight(2);
    line(this.points[1].x, this.points[1].y, this.points[4].x, this.points[4].y);
    pop();
  }

}