export default class Todo {
  constructor(text) {
    this.id = self.crypto.randomUUID();
    this.text = text;
    this.createdAt = new Date(Date.now());
    this.status = false;
  }
}
