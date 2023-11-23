const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy('src/assets/images/')

  eleventyConfig.addPassthroughCopy({
    './node_modules/alpinejs/dist/cdn.min.js': './js/alpine.min.js',
  })

  eleventyConfig.addFilter("formatDate", (date) => {
      return (new Date(date)).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}) })


  eleventyConfig.addFilter("listToQuotedListString", (lst) => {return ('[' + lst.map(i => `'${i}'`).join(',') + ']')})

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }
}
