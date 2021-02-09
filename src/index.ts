import {SamplePlugin} from "./SamplePlugin";
import {getConfig, onCallMethod} from "./utils";

const OPTIONS = getConfig()

const plugin = new SamplePlugin(OPTIONS.config.host, OPTIONS.config.port, OPTIONS.config.password)

plugin
.load()
.then(() => {
  // register message when plugin loaded
  onCallMethod(plugin)
})
