/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.vue' {
  // eslint-disable-next-line prettier/prettier
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
