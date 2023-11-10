import { ApplicationNextSchema } from '../generators/application/application-next-schema'

export type NormalizedApplicationNextSchema = Required<ApplicationNextSchema>

export type ApplicationNextUi = ApplicationNextSchema['ui']
export function normalizeApplicationNextSchema(options: ApplicationNextSchema): NormalizedApplicationNextSchema {
  return {
    ...options,
    anchor: options.anchor,
    anchorName: options.anchorName ?? 'anchor',
    appName: options.appName ?? options.name,
    port: options.port ?? 3000,
    skipFormat: options.skipFormat ?? false,
    ui: options.ui ?? 'tailwind',
  }
}
