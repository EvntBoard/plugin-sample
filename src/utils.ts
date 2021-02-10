import { workerData, parentPort } from 'worker_threads'

import {SamplePluginOptions} from "./types";
import {SamplePlugin} from "./SamplePlugin";

export const getConfig = (): SamplePluginOptions => workerData.plugin

export const emitNewEvent = (event: string, payload?: any) => {
  parentPort.postMessage({
    type: 'newEvent',
    event,
    payload
  })
}

export const onCallMethod = (plugin: SamplePlugin) => {
  parentPort.on('message', async (data) => {
    if (data.type === 'callMethod') {
      try {
        const result = await plugin[data.method](...data.args)
        parentPort.postMessage({
          type: 'callMethod',
          id: data.id,
          result
        })
      } catch (e) {
        parentPort.postMessage({
          type: 'callMethod',
          id: data.id,
          error: e
        })
      }
    }
  })
}
