"use strict"

class Words {
  constructor(_startingPoint, _angle, _length) {
    this.startingPoint = _startingPoint;
    this.pos = createVector(this.startingPoint, this.startingPoint);
    this.angle = _angle;
    this.polygonLength = _length;
    this.letterSize = this.polygonLength * cos(radians(this.angle)) * 2;
  }

  setBoarder(_margin, _border, _spacing) {
    this.margin = _margin;
    this.boarder = _border;
    this.interval = _spacing;
  }


  write(words) {
    if (typeof words === 'string') {
      words = words.toUpperCase();
      for (var i = 0; i < words.length; i++) {
        new Letter().call(words[i], this.pos.x, this.pos.y);
        this.updatePos();
      }
    }
  }

  updatePos() {
    if (this.pos.x + this.letterSize + this.interval > this.boarder - this.margin) {
      this.pos.x = this.margin;
      this.pos.y += (this.letterSize + this.interval);
    } else {
      this.pos.x += (this.letterSize + this.interval);
    }
  }
}