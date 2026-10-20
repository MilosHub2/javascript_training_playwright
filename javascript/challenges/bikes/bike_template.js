export class BikeTemplate {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }

  logBikeColors() {
    console.log(`Kolo ma typ: ${this.type} a farbu: ${this.color}`);
  }
}
