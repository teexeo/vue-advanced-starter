
export let source = ['examples/full', 'examples/minimal'];

export const utilsAutoImport = {
  'examples/minimal/stores': ['useExampleStore']
}

export type UtilTypes = keyof typeof utilsAutoImport;