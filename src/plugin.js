class MyCustomPlugin {

  constructor(options, { evntBus, logger }) {
    // plugin options
    this.prop1 = options?.prop1;
    this.prop2 = options?.prop2;

    // default field
    this.evntBus = evntBus;
    this.logger = logger;
  }

  async load() {
    this.logger.debug({
      prop1: this.prop1,
      prop2: this.prop2,
    })
    this.evntBus?.newEvent('sample-plugin-load')
  }

  async unload() {
    this.evntBus?.newEvent('sample-plugin-unload')
  }

  async sampleMethod(aSampledata) {
    this.evntBus?.newEvent('sample-plugin-new-data', aSampledata)
  }

  async reload() {
    await this.unload();
    await this.load();
  }
}

module.exports = MyCustomPlugin
