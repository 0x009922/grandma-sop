import { InjectionKey, inject } from 'vue'

export interface DemoShared {
    src: string
    width: number | string
    height: number | string
    active: boolean
    visible: boolean
}

export const KEY: InjectionKey<DemoShared> = Symbol('Demo')

export function useDemoShared(): DemoShared {
    const x = inject(KEY)
    if (!x) throw new Error('injection failed')
    return x
}
