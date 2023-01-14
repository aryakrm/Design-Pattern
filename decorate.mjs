class Text {
  constructor(text) {
    this.string = text;
  }

  toString() {
    return this.string;
  }
}

class Shout extends Text {
  constructor(text) {
    super(text);
  }

  toString() {
    return this.string.toUpperCase();
  }
}

console.log(new Text("Hello, I'm talking").toString());
console.log(new Shout(new Text("Hello, I'm shouting!")).toString());
