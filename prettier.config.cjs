/** @type {import("prettier").Config} */
module.exports = {
  ...require('prettier-config-standard'),
  pluginSearchDirs: [__dirname],
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
    'prettier-plugin-astro'
  ],
  tailwindConfig: './tailwind.config.ts',
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ]
}
