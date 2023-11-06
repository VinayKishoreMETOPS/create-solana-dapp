import {
  ApplicationReactSchema,
  NormalizedApplicationReactSchema,
} from '../generators/application/application-react-schema'

export function normalizeApplicationReactSchema(options: ApplicationReactSchema): NormalizedApplicationReactSchema {
  return {
    ...options,
    anchorName: options.anchorName ?? 'program',
    anchorTemplate: options.anchorTemplate ?? 'counter',
    skipFormat: options.skipFormat ?? false,
    uiLibrary: options.uiLibrary ?? 'tailwind',
    withAnchor: options.withAnchor ?? true,
  }
}
