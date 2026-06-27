// Type declarations for CSS file imports (side-effect and module imports)
// This tells TypeScript that .css files are valid imports, even though they
// have no runtime type — Next.js and the bundler handle them at build time.

declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}

declare module "@once-ui-system/core/css/*.css" {
  const content: Record<string, string>;
  export default content;
}
