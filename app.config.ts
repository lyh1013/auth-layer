export default defineAppConfig({
  authLayer: {
    name: 'Hello from auth layer'
  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    authLayer?: {
      /** Project name */
      name?: string
    }
  }
}
