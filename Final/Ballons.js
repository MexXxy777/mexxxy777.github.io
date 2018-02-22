var FINAL;
(function (FINAL) {
    class BalloonObjects extends FINAL.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
            this.dx = Math.random() * 3;
            this.dy = Math.random() * 3;
            this.color = "blue";
        }
        move() {
            if (this.y > 540 || this.y < 50) {
                this.dy -= this.dy * 2;
            }
            if (this.x > 1140 || this.x < 50) {
                this.dx -= this.dx * 2;
            }
            this.x += this.dx;
            this.y += this.dy;
        }
        draw() {
            FINAL.crc2.beginPath();
            FINAL.crc2.arc(this.x, this.y, 30, 0, 2 * Math.PI);
            FINAL.crc2.fillStyle = this.color;
            FINAL.crc2.fill();
            FINAL.crc2.beginPath();
            FINAL.crc2.moveTo(this.x, this.y + 25);
            FINAL.crc2.lineTo(this.x + 15, this.y + 40);
            FINAL.crc2.lineTo(this.x - 15, this.y + 40);
            FINAL.crc2.stroke();
            FINAL.crc2.fill();
            FINAL.crc2.beginPath();
            FINAL.crc2.arc(this.x - 10, this.y + 5, 4, 0, 2 * Math.PI);
            FINAL.crc2.stroke();
            FINAL.crc2.fillStyle = "black";
            FINAL.crc2.fill();
            FINAL.crc2.beginPath();
            FINAL.crc2.arc(this.x + 10, this.y + 5, 4, 0, 2 * Math.PI);
            FINAL.crc2.stroke();
            FINAL.crc2.fill();
        }
    }
    FINAL.BalloonObjects = BalloonObjects;
})(FINAL || (FINAL = {}));
//# sourceMappingURL=Ballons.js.map