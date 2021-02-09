import {SamplePluginOptions} from "./types";
import {SamplePlugin} from "./SamplePlugin";

export const getConfig = (): SamplePluginOptions => JSON.parse(process.argv.slice(2)[0])

export const emitNewEvent = (event: string, payload?: any) => {
  process.send({
    type: 'newEvent',
    event,
    payload
  })
}

export const onCallMethod = (plugin: SamplePlugin) => {
  process.on('message', async (data) => {
    if (data.type === 'callMethod') {
      try {
        const result = await plugin[data.method](...data.args)
        process.send({
          type: 'callMethod',
          id: data.id,
          result
        })
      } catch (e) {
        process.send({
          type: 'callMethod',
          id: data.id,
          error: e
        })
      }
    }
  })
}
