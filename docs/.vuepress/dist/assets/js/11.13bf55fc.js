(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{214:function(t,a,s){"use strict";s.r(a);var e=s(2),r=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"charts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#charts","aria-hidden":"true"}},[t._v("#")]),t._v(" Charts")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.codacy.com/app/laravel-enso/charts?utm_source=github.com&utm_medium=referral&utm_content=laravel-enso/charts&utm_campaign=Badge_Grade",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://api.codacy.com/project/badge/Grade/aa6c0917f8c6425f87eb94c01d84b2f8",alt:"Codacy Badge"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://github.styleci.io/repos/85484767",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://github.styleci.io/repos/85484767/shield?branch=master",alt:"StyleCI"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/charts",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/charts/license",alt:"License"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/charts",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/charts/downloads",alt:"Total Downloads"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/charts",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/charts/version",alt:"Latest Stable Version"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Server-side data builder for charts.")]),t._v(" "),s("p",[t._v("This package can work independently of the "),s("a",{attrs:{href:"https://github.com/laravel-enso/Enso",target:"_blank",rel:"noopener noreferrer"}},[t._v("Enso"),s("OutboundLink")],1),t._v(" ecosystem.")]),t._v(" "),s("p",[t._v("The front end implementation that utilizes this api is present in the "),s("a",{attrs:{href:"https://github.com/enso-ui/charts",target:"_blank",rel:"noopener noreferrer"}},[t._v("enso-ui/charts"),s("OutboundLink")],1),t._v(" package.")]),t._v(" "),s("p",[t._v("For live examples and demos, you may visit "),s("a",{attrs:{href:"https://www.laravel-enso.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("laravel-enso.com"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://laravel-enso.github.io/charts/videos/bulma_demo_01.webm",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://laravel-enso.github.io/charts/screenshots/bulma_cap002_thumb.png",alt:"Watch the demo"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[s("sup",[t._v("click on the photo to view a short demo in compatible browsers")])]),t._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("p",[t._v("Comes pre-installed in Enso.")]),t._v(" "),s("p",[t._v("To install outside of Enso:")]),t._v(" "),s("ol",[s("li",[s("p",[s("code",[t._v("composer require laravel-enso/charts")])])]),t._v(" "),s("li",[s("p",[t._v("publish the config with "),s("code",[t._v("php artisan vendor:publish --tag=charts-config")]),t._v(" and customize as needed")])]),t._v(" "),s("li",[s("p",[t._v("install the api implementation for the front end: "),s("code",[t._v("yarn add @enso-ui/charts")])])])]),t._v(" "),s("h2",{attrs:{id:"features"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[t._v("#")]),t._v(" Features")]),t._v(" "),s("ul",[s("li",[t._v("it supports Bar, Bubble, Line, Pie, Doughnut, Polar Area and Radar chart types")]),t._v(" "),s("li",[t._v("it creates properly formatted data structures, specific for each supported type of chart from a given data-set")]),t._v(" "),s("li",[t._v("the used colors are configurable through the publishable config file")]),t._v(" "),s("li",[t._v("can translate labels, legends and data series")]),t._v(" "),s("li",[t._v("can download the graphical representation of the graph, as a "),s("code",[t._v("PNG")]),t._v(" file")])]),t._v(" "),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("ol",[s("li",[t._v("In your controller, add a method that will return the data for each chart:")])]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("line")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LineChart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Income'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'January'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'February'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'March'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'April'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'May'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'June'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'July'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("datasets")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Sales'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("65")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("59")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("81")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("26")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Revenue'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("29")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("31")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("56")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("65")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("44")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fill")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[s("p",[t._v("create a route for each chart dataset, add permissions if needed, etc.")])]),t._v(" "),s("li",[s("p",[t._v("add the front end components to your pages.\nFor more information about the front end, see "),s("a",{attrs:{href:"https://github.com/enso-ui/charts",target:"_blank",rel:"noopener noreferrer"}},[t._v("enso-ui/charts"),s("OutboundLink")],1),t._v(".")])])]),t._v(" "),s("h2",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),s("p",[t._v("The package's configuration file offers a few options for customization:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("fillBackgroundOpacity")]),t._v(" - number, the chart background's opacity, default is "),s("code",[t._v("0.25")])]),t._v(" "),s("li",[s("code",[t._v("colors")]),t._v(" - array, the list of colors used when drawing the various chart types")])]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("The Chart builder will use the colors from "),s("code",[t._v("app/config/enso/charts.php")]),t._v(" (in that order) for the given data-sets.")])]),t._v(" "),s("h2",{attrs:{id:"publishes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#publishes","aria-hidden":"true"}},[t._v("#")]),t._v(" Publishes")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("php artisan vendor:publish --tag=charts-config")]),t._v(" - the configuration file")]),t._v(" "),s("li",[s("code",[t._v("php artisan vendor:publish --tag=enso-config")]),t._v(" - a common alias for when wanting to update the config,\nonce a newer version is released, usually used with the "),s("code",[t._v("--force")]),t._v(" flag")])]),t._v(" "),s("h2",{attrs:{id:"contributions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contributions","aria-hidden":"true"}},[t._v("#")]),t._v(" Contributions")]),t._v(" "),s("p",[t._v("are welcome. Pull requests are great, but issues are good too.")]),t._v(" "),s("h2",{attrs:{id:"license"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[t._v("#")]),t._v(" License")]),t._v(" "),s("p",[t._v("This package is released under the MIT license.")])])},[],!1,null,null,null);a.default=r.exports}}]);