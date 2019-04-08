const crypto = require("crypto");
class Block {
  constructor(name, d) {
    this.x = name;
    this.y = d;
  }

  static create(x, y) {
    const c = crypto
      .createHash("sha256")
      .update(x + y)
      .digest("base64");
    return c;
  }
  static Bloc(name, d) {
    const n = name;
    this.d = d;
    const newbloc = this.create(n, d);
    return newbloc;
  }
}

module.exports = Block;
