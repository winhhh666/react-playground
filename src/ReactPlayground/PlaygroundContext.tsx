import { PropsWithChildren, createContext, useState } from "react"

export interface File {
  name: string
  value: string
  language: string
}

//对象数组类型
export interface Files {
  [key: string]: File
}

export interface PlaygroundContext {
  files: Files
  selectedFileName: string
  setSelectedFileName: (fileName: string) => void
  setFiles:(files: Files) => void
  addFile: (filename: string) => void
  removeFile: (filename: string) => void
  updateFilename: (oldFiledName:string, newFiledName:string) => void
}

export const PlaygroundContext = createContext<PlaygroundContext>({
  selectedFileName: 'App.tsx',
} as PlaygroundContext)


export const PlaygroundProvider = (props: PropsWithChildren) {

  const {children} = props
  const [files, setFiles] = useState<Files>({})
  const [selectedFileName, setSelectedFileName] = useState('App.tsx')
  
}