import {SamplePlugin} from "./SamplePlugin";
import {getConfig, onCallMethod} from "./utils";

const OPTIONS = getConfig()

const plugin = new SamplePlugin(OPTIONS.config.answer)

plugin
.load()
.then(() => {
  // register message when plugin loaded
  onCallMethod(plugin)
})
