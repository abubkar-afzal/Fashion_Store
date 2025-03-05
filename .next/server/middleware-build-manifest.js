self.__BUILD_MANIFEST = {
  "polyfillFiles": [
    "static/chunks/polyfills.js"
  ],
  "devFiles": [
    "static/chunks/react-refresh.js"
  ],
  "ampDevFiles": [],
  "lowPriorityFiles": [],
  "rootMainFiles": [],
  "rootMainFilesTree": {},
  "pages": {
    "/_app": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_app.js"
    ],
    "/_error": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_error.js"
    ],
    "/components/checkout": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/components/checkout.js"
    ],
    "/components/orders": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/components/orders.js"
    ],
    "/components/other/kids": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/components/other/kids.js"
    ]
  },
  "ampFirstPages": []
};
self.__BUILD_MANIFEST.lowPriorityFiles = [
"/static/" + process.env.__NEXT_BUILD_ID + "/_buildManifest.js",
,"/static/" + process.env.__NEXT_BUILD_ID + "/_ssgManifest.js",

];