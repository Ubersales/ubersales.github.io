var Metalsmith  = require('metalsmith');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');
var permalinks  = require('metalsmith-permalinks');
var json_to_files  = require('metalsmith-json-to-files');
var headingsidentifier = require("metalsmith-headings-identifier");
var googleAnalytics = require('metalsmith-google-analytics');
var pdf = require('metalsmith-pdf');


Metalsmith(__dirname)
  .metadata({
    title: "Ubersales | Stress-Free Online Sales",
    description: "We  empower your bottom line by building, implementing and iterating on campaigns to drive your online sales, so you can focus on your brand and your product.",
    generator: "Metalsmith",
    url: "http://www.ubersales.io",
    latitude: "43.6437147",
    longitude: "79.4085915",
    type: "website",
    image: "/img/ubersales-icon-Logo.svg"
  })

  .source('./src')
  .destination('./')
  .clean(false)
  .use(json_to_files({"source_path": "./json/"}))
  .use(markdown())
  .use(permalinks())
//
  .use(headingsidentifier())
//  .use(googleAnalytics('UA-42771649-1'))

  .use(layouts({
    engine: 'handlebars',
    "default": "layout.html",
    "directory": "./layouts/",
    "partials": "./layouts/partials/"
}))
  .build(function(err, files) {
    if (err) { throw err; }
  });
