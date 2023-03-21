import { source, utilsAutoImport, type UtilTypes } from './structures'

// ./src/app/{path}/shared
const ROOT_FOLDER = '@/app/'

function rootPath(dir: string, extention?: string) {
  if (extention) return `${ROOT_FOLDER}${dir}/${extention}`
  return `${ROOT_FOLDER}${dir}`
}

// For auto importing components
export const AutoImportComponents: string[] = source.map((dir) => [rootPath(dir, 'shared')]).flat(1)

type ReturnUtilsType = { [x: string]: string[] }

// For auto importing functions, stores ...
export const AutoImportUtils: ReturnUtilsType = Object.keys(utilsAutoImport).reduce(
  (acc, util: any) => {
    ;(acc as any)[rootPath(util)] = utilsAutoImport[util as UtilTypes]
    return acc
  },
  {} as ReturnUtilsType
)
