/// <reference types="vite/client" />

// CSS module declarations
declare module '*.css' {
  const content: any;
  export default content;
}

declare module '*.scss' {
  const content: any;
  export default content;
}