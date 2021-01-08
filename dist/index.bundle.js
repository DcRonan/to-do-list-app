(()=>{"use strict";var n={541:(n,e,t)=>{t.d(e,{Z:()=>i});var o=t(645),r=t.n(o)()((function(n){return n[1]}));r.push([n.id,"/*! modern-normalize v1.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\n:root {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n  margin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n  font-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\n/**\nAdd the correct font size in all browsers.\n*/\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\n\nh1,\np {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\n/**\n * Work around a Firefox/IE bug where the transparent `button` background\n * results in a loss of the default `button` focus styles.\n */\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  color: #9ca3af;\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  color: #9ca3af;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  color: #9ca3af;\n}\n\nbutton {\n  cursor: pointer;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\n/**\n * Make replaced elements `display: block` by default as that's\n * the behavior you want almost all of the time. Inspired by\n * CSS Remedy, with `svg` added as well.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\n\nobject {\n  display: block;\n  vertical-align: middle;\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their instrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\n.form-input {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: #fff;\n  padding-top: 0.5rem;\n  padding-right: 0.75rem;\n  padding-bottom: 0.5rem;\n  padding-left: 0.75rem;\n  font-size: 1rem;\n  font-size: [object Object];\n  line-height: 1.5;\n}\n\n.form-input::-moz-placeholder {\n  color: #6b7280;\n  opacity: 1;\n}\n\n.form-input:-ms-input-placeholder {\n  color: #6b7280;\n  opacity: 1;\n}\n\n.form-input::placeholder {\n  color: #6b7280;\n  opacity: 1;\n}\n\n.form-input:focus {\n  outline: none;\n  border-color: #60a5fa;\n}\n\n.form-textarea {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: #fff;\n  padding-top: 0.5rem;\n  padding-right: 0.75rem;\n  padding-bottom: 0.5rem;\n  padding-left: 0.75rem;\n  font-size: 1rem;\n  font-size: [object Object];\n  line-height: 1.5;\n}\n\n.form-textarea::-moz-placeholder {\n  color: #6b7280;\n  opacity: 1;\n}\n\n.form-textarea:-ms-input-placeholder {\n  color: #6b7280;\n  opacity: 1;\n}\n\n.form-textarea::placeholder {\n  color: #6b7280;\n  opacity: 1;\n}\n\n.form-textarea:focus {\n  outline: none;\n  border-color: #60a5fa;\n}\n\n.form-select {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%236b7280'%3e%3cpath d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/%3e%3c/svg%3e\");\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  -webkit-print-color-adjust: exact;\n          color-adjust: exact;\n  background-repeat: no-repeat;\n  background-color: #fff;\n  padding-top: 0.5rem;\n  padding-right: 2.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 0.75rem;\n  font-size: 1rem;\n  font-size: [object Object];\n  line-height: 1.5;\n  background-position: right 0.5rem center;\n  background-size: 1.5em 1.5em;\n}\n\n.form-select::-ms-expand {\n  color: #6b7280;\n  border: none;\n}\n\n@media not print {\n  .form-select::-ms-expand {\n    display: none;\n  }\n}\n\n@media print and (-ms-high-contrast: active), print and (-ms-high-contrast: none) {\n  .form-select {\n    padding-right: 0.75rem;\n  }\n}\n\n.form-select:focus {\n  outline: none;\n  border-color: #60a5fa;\n}\n\n.bg-gray-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(243, 244, 246, var(--tw-bg-opacity));\n}\n\n.bg-gray-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(229, 231, 235, var(--tw-bg-opacity));\n}\n\n.bg-gray-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(209, 213, 219, var(--tw-bg-opacity));\n}\n\n.bg-gray-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(75, 85, 99, var(--tw-bg-opacity));\n}\n\n.bg-gray-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(31, 41, 55, var(--tw-bg-opacity));\n}\n\n.bg-gray-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(17, 24, 39, var(--tw-bg-opacity));\n}\n\n.bg-red-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(239, 68, 68, var(--tw-bg-opacity));\n}\n\n.bg-red-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(185, 28, 28, var(--tw-bg-opacity));\n}\n\n.bg-yellow-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(251, 191, 36, var(--tw-bg-opacity));\n}\n\n.bg-green-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(16, 185, 129, var(--tw-bg-opacity));\n}\n\n.bg-green-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(5, 150, 105, var(--tw-bg-opacity));\n}\n\n.bg-indigo-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(99, 102, 241, var(--tw-bg-opacity));\n}\n\n.bg-purple-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(124, 58, 237, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-gray-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(55, 65, 81, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-gray-800:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(31, 41, 55, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-green-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(4, 120, 87, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-indigo-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(67, 56, 202, var(--tw-bg-opacity));\n}\n\n.border-blue-400 {\n  --tw-border-opacity: 1;\n  border-color: rgba(96, 165, 250, var(--tw-border-opacity));\n}\n\n.rounded-sm {\n  border-radius: 0.125rem;\n}\n\n.rounded {\n  border-radius: 0.25rem;\n}\n\n.rounded-md {\n  border-radius: 0.375rem;\n}\n\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n\n.rounded-full {\n  border-radius: 9999px;\n}\n\n.border-none {\n  border-style: none;\n}\n\n.border {\n  border-width: 1px;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.block {\n  display: block;\n}\n\n.flex {\n  display: flex;\n}\n\n.inline-flex {\n  display: inline-flex;\n}\n\n.table {\n  display: table;\n}\n\n.hidden {\n  display: none;\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.items-center {\n  align-items: center;\n}\n\n.justify-between {\n  justify-content: space-between;\n}\n\n.h-4 {\n  height: 1rem;\n}\n\n.h-6 {\n  height: 1.5rem;\n}\n\n.h-auto {\n  height: auto;\n}\n\n.h-screen {\n  height: 100vh;\n}\n\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n\n.m-2 {\n  margin: 0.5rem;\n}\n\n.m-3 {\n  margin: 0.75rem;\n}\n\n.mt-1 {\n  margin-top: 0.25rem;\n}\n\n.mt-2 {\n  margin-top: 0.5rem;\n}\n\n.mr-2 {\n  margin-right: 0.5rem;\n}\n\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n\n.mt-3 {\n  margin-top: 0.75rem;\n}\n\n.mr-3 {\n  margin-right: 0.75rem;\n}\n\n.mt-4 {\n  margin-top: 1rem;\n}\n\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n.p-1 {\n  padding: 0.25rem;\n}\n\n.p-2 {\n  padding: 0.5rem;\n}\n\n.p-3 {\n  padding: 0.75rem;\n}\n\n.p-4 {\n  padding: 1rem;\n}\n\n.pt-1 {\n  padding-top: 0.25rem;\n}\n\n* {\n  --tw-shadow: 0 0 #0000;\n}\n\n* {\n  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n\n.text-gray-700 {\n  --tw-text-opacity: 1;\n  color: rgba(55, 65, 81, var(--tw-text-opacity));\n}\n\n.hover\\:text-white:hover {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n\n.hover\\:text-blue-300:hover {\n  --tw-text-opacity: 1;\n  color: rgba(147, 197, 253, var(--tw-text-opacity));\n}\n\n.w-4 {\n  width: 1rem;\n}\n\n.w-6 {\n  width: 1.5rem;\n}\n\n.w-80 {\n  width: 20rem;\n}\n\n.w-full {\n  width: 100%;\n}\n\n.duration-300 {\n  transition-duration: 300ms;\n}\n\n@-webkit-keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes ping {\n  75%, 100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}\n\n@keyframes pulse {\n  50% {\n    opacity: .5;\n  }\n}\n\n@keyframes bounce {\n  0%, 100% {\n    transform: translateY(-25%);\n    -webkit-animation-timing-function: cubic-bezier(0.8,0,1,1);\n            animation-timing-function: cubic-bezier(0.8,0,1,1);\n  }\n\n  50% {\n    transform: none;\n    -webkit-animation-timing-function: cubic-bezier(0,0,0.2,1);\n            animation-timing-function: cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@media (min-width: 640px) {\n\n  .sm\\:block {\n    display: block;\n  }\n}",""]);const i=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);o&&r[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),e.push(d))}},e}},379:(n,e,t)=>{var o,r=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function a(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function s(n,e){for(var t={},o=[],r=0;r<n.length;r++){var s=n[r],d=e.base?s[0]+e.base:s[0],c=t[d]||0,l="".concat(d," ").concat(c);t[d]=c+1;var u=a(l),m={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(i[u].references++,i[u].updater(m)):i.push({identifier:l,updater:b(m,e),references:1}),o.push(l)}return o}function d(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var a=r(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var c,l=(c=[],function(n,e){return c[n]=e,c.filter(Boolean).join("\n")});function u(n,e,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=l(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function m(n,e,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var p=null,h=0;function b(n,e){var t,o,r;if(e.singleton){var i=h++;t=p||(p=d(e)),o=u.bind(null,t,i,!1),r=u.bind(null,t,i,!0)}else t=d(e),o=m.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var r=a(t[o]);i[r].references--}for(var d=s(n,e),c=0;c<t.length;c++){var l=a(t[c]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=d}}}}},e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},(()=>{var n={};t.r(n),t.d(n,{addNewBtn:()=>M,addProject:()=>L,addToDo:()=>z,checkInput:()=>y,checkListDiv:()=>E,content:()=>l,defaultProject:()=>a,descDiv:()=>k,descInput:()=>h,dueDateDiv:()=>S,dueInput:()=>b,getPriority:()=>D,listProjects:()=>I,noteInput:()=>f,notesDiv:()=>j,numOfTasks:()=>q,openToDos:()=>T,priority:()=>c,priorityDiv:()=>C,priorityInput:()=>g,projectAndTaskBtn:()=>A,projectAndTaskBtnDiv:()=>O,projectForm:()=>m,projectTitle:()=>v,projectToDo:()=>w,projects:()=>s,titleDiv:()=>x,titleInput:()=>p,toDoForm:()=>u,toDos:()=>d});var e=t(379),o=t.n(e),r=t(541);o()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;const i=class{constructor(n){this.title=n}},a=new i("Work"),s=JSON.parse(localStorage.getItem("projects"))||[a],d=JSON.parse(localStorage.getItem("toDos"))||[],c=["Low","Medium","High"],l=document.querySelector("#content"),u=document.querySelector("#to-do-form"),m=document.querySelector("#project-form"),p=document.getElementById("title"),h=document.getElementById("desc"),b=document.getElementById("dueDate"),g=document.getElementById("priority"),f=document.getElementById("notes"),y=document.getElementById("checkList"),v=document.getElementById("projectTitle"),w=document.getElementById("projectToDo"),x=document.querySelector(".task-title"),k=document.querySelector(".task-desc"),S=document.querySelector(".task-due-date"),C=document.querySelector(".task-priority"),j=document.querySelector(".task-notes"),E=document.querySelector(".task-check-list"),z=document.querySelector("#open-todo"),L=document.querySelector("#open-project"),I=document.querySelector("#open-projects-list"),T=document.querySelector("#open-items-list"),D=document.querySelector("#set-priority"),M=document.querySelector("#new-btn"),O=document.querySelector("#project-and-task-buttons"),A=document.querySelector("#project-and-task"),q=document.querySelector("#num-of-tasks"),N=()=>{const n=document.createElement("table");return n.setAttribute("id","to-do-list-items"),n.classList="w-full",d.forEach((e=>{const t=document.createElement("tr"),o=document.createElement("button");o.classList="delete-btn",o.textContent="Delete",o.addEventListener("click",(()=>{t.parentNode.removeChild(t),1!==d.indexOf(e)&&(d.splice(d.indexOf(e),1),q.textContent=d.length,localStorage.setItem("toDos",JSON.stringify(d)))}));const r=document.createElement("button");r.classList="edit-btn",r.textContent="Edit",r.addEventListener("click",(()=>{1!==d.indexOf(e)&&d.splice(d.indexOf(e),1),l.innerHTML="",p.value=e.title,h.value=e.description,b.value=e.dueDate,D.value=e.priority,f.value=e.notes,y.value=e.checkList,l.appendChild(u)}));const i=document.createElement("button");var a;i.classList="border border-none bg-gray-600 text-white rounded-lg duration-300 focus:outline-none p-1 text-sm",o.classList="border border-none bg-red-500 text-white rounded-lg duration-300 focus:outline-none p-1 text-sm mr-2",r.classList="border border-none bg-green-500 text-white rounded-lg duration-300 focus:outline-none p-1 text-sm mr-2",i.textContent="Info",i.addEventListener("click",(()=>{l.innerHTML=`<h1>${e.title}</h1><p>${e.description}</p><p>Due Date: ${e.dueDate}</p><p>Priority: ${e.priority}</p><p>Notes: ${e.notes}</p><p>Checklist: ${e.checkList}</p>`})),t.innerHTML=`<div class="flex justify-between mt-2 mb-2 ${a=e.priority,"Low"===a?"bg-gray-200":"Medium"===a?"bg-yellow-400":"High"===a?"bg-red-700 text-white":null} p-3 rounded-md w-full">\n    <div class="flex items-center"> \n    <div class="h-4 w-4 mr-3 rounded-sm border border-blue-400"></div>\n    <div>${e.title}</div>\n    </div>\n    <div class="flex items-center"> \n    <div class="mr-3">${e.dueDate}</div>\n    </div>\n  </div>`,t.appendChild(o),t.appendChild(r),t.appendChild(i),n.appendChild(t)})),n},B=n=>{const e=document.createElement("div"),t=document.createElement("ul");n.projects.forEach((e=>{const o=document.createElement("li");o.classList="p-3 rounded-md w-full m-3 bg-gray-300 cursor-pointer duration-300 hover:text-white hover:bg-gray-800",o.addEventListener("click",(()=>{const t=n.toDos.filter((n=>n.project.title===e.title)),o=document.createElement("ul");t.forEach((n=>{const e=document.createElement("li");e.innerHTML=`\n        <div class="flex justify-between"> \n        <div class="flex items-center"> \n        <div class="h-4 w-4 mr-3 rounded-sm border border-blue-400"></div>\n        <div>${n.title}</div>\n        </div>\n        <div class="flex items-center"> \n        <div class="mr-3">${n.dueDate}</div>\n        </div>\n        </div>`,e.classList="p-3 rounded-md w-full m-3 bg-gray-300 cursor-pointer",o.appendChild(e)})),n.content.innerHTML="",n.content.appendChild(o)})),o.textContent=e.title,t.appendChild(o)})),t.classList="text-center",e.appendChild(t),n.content.appendChild(e)},R=n=>{const e=new class{constructor(n,e,t,o,r,i){this.title=n,this.description=e,this.dueDate=t,this.priority=o,this.notes=r,this.checkList=i}}(n.titleInput.value,n.descInput.value,n.dueInput.value,"disabled"===n.getPriority.value?n.getPriority.value="Low":n.getPriority.value,n.noteInput.value,n.checkInput.value);n.projects.forEach((t=>{t.title===n.projectToDo.value&&(e.project=t)})),n.toDos.push(e),localStorage.setItem("toDos",JSON.stringify(n.toDos))};l.removeChild(u),l.removeChild(m),O.removeChild(A),s.forEach((n=>{const e=document.createElement("option");e.textContent=n.title,w.appendChild(e)})),q.textContent=d.length,c.forEach((n=>{const e=document.createElement("option");e.setAttribute("value",n),e.textContent=n,D.appendChild(e)})),z.addEventListener("click",(()=>{l.innerHTML="",l.appendChild(u),O.removeChild(A)})),L.addEventListener("click",(()=>{l.innerHTML="",l.appendChild(m),O.removeChild(A)})),I.addEventListener("click",(()=>{l.innerHTML="",B(n)})),u.addEventListener("submit",(e=>{e.preventDefault(),l.innerHTML="",R(n);let t=document.createElement("div");t.setAttribute("id","to-do-list"),l.appendChild(t),t=document.querySelector("#to-do-list"),t.innerHTML="",t.appendChild(N()),u.reset(),q.textContent=d.length})),m.addEventListener("submit",(e=>{e.preventDefault();const t=new i(v.value);s.push(t),localStorage.setItem("projects",JSON.stringify(s));const o=document.createElement("option");o.setAttribute("value",t.title),o.textContent=t.title,w.appendChild(o),m.reset(),l.removeChild(m),B(n)})),T.addEventListener("click",(()=>{l.innerHTML="",l.appendChild(N())})),M.addEventListener("click",(()=>{O.appendChild(A)}))})()})();