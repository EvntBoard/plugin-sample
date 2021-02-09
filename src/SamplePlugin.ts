import {emitNewEvent} from "./utils";

export class SamplePlugin {
  private readonly answer: string;

  constructor(answer: string) {
    this.answer = answer
  }

  async load() {
    try {
      emitNewEvent('sample-load');
    } catch (e) {
      console.error(e)
      emitNewEvent('sample-error');
    }
  }

  async unload() {
    try {
      emitNewEvent('sample-unload');
    } catch (e) {
      console.error(e)
    }
  }

  async reload() {
    await this.unload();
    await this.load();
  }

  async getAnswer() {
    return this.answer
  }
}
