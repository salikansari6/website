declare module 'gatsby-plugin-dark-mode'
declare module '*.jpg'
declare module '*.png'
declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}
