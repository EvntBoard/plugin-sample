export interface SamplePluginOptions {
  id: number,
  slug: string,
  plugin: string,
  active: boolean,
  config: {
    answer: number
  }
}
