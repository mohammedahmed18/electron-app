export default abstract class Module {
  protected loaded: boolean;

  constructor() {
    this.loaded = false;
  }

  async init(): Promise<void> {
    if (this.loaded)
      throw new TypeError(`Module ${this.constructor.name} is already loaded`);
    await this.load()
      .then(() => {
        console.log(`Module ${this.constructor.name} is loaded`);

        this.loaded = true;
      })
      .catch((err) => {
        throw err;
      });
  }
  //   this method will be called only once during the lifecycle of the app
  abstract load(): Promise<void>;
}
