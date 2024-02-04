/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var _rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rainbow-me/rainbowkit/wallets */ \"@rainbow-me/rainbowkit/wallets\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/chains */ \"wagmi/chains\");\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/providers/alchemy */ \"wagmi/providers/alchemy\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__, _rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_3__, wagmi__WEBPACK_IMPORTED_MODULE_4__, wagmi_chains__WEBPACK_IMPORTED_MODULE_5__, wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_6__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_7__]);\n([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__, _rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_3__, wagmi__WEBPACK_IMPORTED_MODULE_4__, wagmi_chains__WEBPACK_IMPORTED_MODULE_5__, wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_6__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\nconst { chains , publicClient  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.configureChains)([\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.bsc\n], [\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_7__.publicProvider)()\n]);\nconst projectId = \"6c191cdc27e911bcf5506f798a2f6cec\";\nconst { wallets  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.getDefaultWallets)({\n    appName: \"Mars Coin\",\n    projectId: projectId,\n    chains\n});\nconst connectors = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.connectorsForWallets)([\n    ...wallets,\n    {\n        groupName: \"More\",\n        wallets: [\n            (0,_rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_3__.argentWallet)({\n                projectId,\n                chains\n            }),\n            (0,_rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_3__.trustWallet)({\n                projectId,\n                chains\n            }),\n            (0,_rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_3__.ledgerWallet)({\n                projectId,\n                chains\n            }),\n            (0,_rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_3__.uniswapWallet)({\n                projectId,\n                chains\n            }),\n            (0,_rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_3__.phantomWallet)({\n                chains\n            }), \n        ]\n    }, \n]);\nconst wagmiConfig = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createConfig)({\n    autoConnect: true,\n    connectors,\n    publicClient\n});\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig, {\n        config: wagmiConfig,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.RainbowKitProvider, {\n            theme: (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.darkTheme)({\n                accentColor: \"#20851A\",\n                accentColorForeground: \"white\"\n            }),\n            chains: chains,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/varunvasistakusuma/Desktop/trial/MARS-ICO-System/pages/_app.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/varunvasistakusuma/Desktop/trial/MARS-ICO-System/pages/_app.js\",\n            lineNumber: 63,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/varunvasistakusuma/Desktop/trial/MARS-ICO-System/pages/_app.js\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBOEI7QUFFYTtBQU1YO0FBT1E7QUFDMkI7QUFHN0M7QUFDb0M7QUFDRjtBQUV4RCxNQUFNLEVBQUVlLE1BQU0sR0FBRUMsWUFBWSxHQUFFLEdBQUdQLHNEQUFlLENBQzlDO0lBQUNHLDZDQUFHO0NBQUMsRUFDTDtJQUNFRSxzRUFBYyxFQUFFO0NBQ2pCLENBQ0Y7QUFFRCxNQUFNRyxTQUFTLEdBQUcsa0NBQWtDO0FBR3BELE1BQU0sRUFBRUMsT0FBTyxHQUFFLEdBQUdsQix5RUFBaUIsQ0FBQztJQUNwQ21CLE9BQU8sRUFBRSxXQUFXO0lBQ3BCRixTQUFTLEVBQUVBLFNBQVM7SUFDcEJGLE1BQU07Q0FDUCxDQUFDO0FBRUYsTUFBTUssVUFBVSxHQUFHakIsNEVBQW9CLENBQUM7T0FDbkNlLE9BQU87SUFDVjtRQUNFRyxTQUFTLEVBQUUsTUFBTTtRQUNqQkgsT0FBTyxFQUFFO1lBQ1BkLDRFQUFZLENBQUM7Z0JBQUVhLFNBQVM7Z0JBQUVGLE1BQU07YUFBRSxDQUFDO1lBQ25DViwyRUFBVyxDQUFDO2dCQUFFWSxTQUFTO2dCQUFFRixNQUFNO2FBQUUsQ0FBQztZQUNsQ1QsNEVBQVksQ0FBQztnQkFBRVcsU0FBUztnQkFBRUYsTUFBTTthQUFFLENBQUM7WUFDbkNSLDZFQUFhLENBQUM7Z0JBQUVVLFNBQVM7Z0JBQUVGLE1BQU07YUFBRSxDQUFDO1lBQ3BDUCw2RUFBYSxDQUFDO2dCQUFDTyxNQUFNO2FBQUMsQ0FBQztTQUN4QjtLQUNGO0NBQ0YsQ0FBQztBQUVGLE1BQU1PLFdBQVcsR0FBR1osbURBQVksQ0FBQztJQUMvQmEsV0FBVyxFQUFFLElBQUk7SUFDakJILFVBQVU7SUFDVkosWUFBWTtDQUNiLENBQUM7QUFDRixTQUFTUSxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUN2QyxxQkFFRSw4REFBQ2YsOENBQVc7UUFBQ2dCLE1BQU0sRUFBRUwsV0FBVztrQkFDOUIsNEVBQUNyQixzRUFBa0I7WUFBQzJCLEtBQUssRUFBRTFCLGlFQUFTLENBQUM7Z0JBQ25DMkIsV0FBVyxFQUFFLFNBQVM7Z0JBQ3RCQyxxQkFBcUIsRUFBRSxPQUFPO2FBQy9CLENBQUM7WUFBRWYsTUFBTSxFQUFFQSxNQUFNO3NCQUVsQiw0RUFBQ1UsU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7OztvQkFBSTs7Ozs7Z0JBQ1A7Ozs7O1lBQ1QsQ0FDZDtDQUNIO0FBR0QsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJzLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuXG5pbXBvcnQgJ0ByYWluYm93LW1lL3JhaW5ib3draXQvc3R5bGVzLmNzcyc7XG5pbXBvcnQge1xuICBnZXREZWZhdWx0V2FsbGV0cyxcbiAgUmFpbmJvd0tpdFByb3ZpZGVyLFxuICBkYXJrVGhlbWUsXG4gIGNvbm5lY3RvcnNGb3JXYWxsZXRzXG59IGZyb20gJ0ByYWluYm93LW1lL3JhaW5ib3draXQnO1xuaW1wb3J0IHtcbiAgYXJnZW50V2FsbGV0LFxuICB0cnVzdFdhbGxldCxcbiAgbGVkZ2VyV2FsbGV0LFxuICB1bmlzd2FwV2FsbGV0LFxuICBwaGFudG9tV2FsbGV0XG59IGZyb20gJ0ByYWluYm93LW1lL3JhaW5ib3draXQvd2FsbGV0cyc7XG5pbXBvcnQgeyBjb25maWd1cmVDaGFpbnMsIGNyZWF0ZUNvbmZpZywgV2FnbWlDb25maWcgfSBmcm9tICd3YWdtaSc7XG5pbXBvcnQge1xuICBic2Ncbn0gZnJvbSAnd2FnbWkvY2hhaW5zJztcbmltcG9ydCB7IGFsY2hlbXlQcm92aWRlciB9IGZyb20gJ3dhZ21pL3Byb3ZpZGVycy9hbGNoZW15JztcbmltcG9ydCB7IHB1YmxpY1Byb3ZpZGVyIH0gZnJvbSAnd2FnbWkvcHJvdmlkZXJzL3B1YmxpYyc7XG5cbmNvbnN0IHsgY2hhaW5zLCBwdWJsaWNDbGllbnQgfSA9IGNvbmZpZ3VyZUNoYWlucyhcbiAgW2JzY10sXG4gIFtcbiAgICBwdWJsaWNQcm92aWRlcigpXG4gIF1cbik7XG5cbmNvbnN0IHByb2plY3RJZCA9ICc2YzE5MWNkYzI3ZTkxMWJjZjU1MDZmNzk4YTJmNmNlYyc7XG5cblxuY29uc3QgeyB3YWxsZXRzIH0gPSBnZXREZWZhdWx0V2FsbGV0cyh7XG4gIGFwcE5hbWU6ICdNYXJzIENvaW4nLFxuICBwcm9qZWN0SWQ6IHByb2plY3RJZCxcbiAgY2hhaW5zXG59KTtcblxuY29uc3QgY29ubmVjdG9ycyA9IGNvbm5lY3RvcnNGb3JXYWxsZXRzKFtcbiAgLi4ud2FsbGV0cyxcbiAge1xuICAgIGdyb3VwTmFtZTogJ01vcmUnLFxuICAgIHdhbGxldHM6IFtcbiAgICAgIGFyZ2VudFdhbGxldCh7IHByb2plY3RJZCwgY2hhaW5zIH0pLFxuICAgICAgdHJ1c3RXYWxsZXQoeyBwcm9qZWN0SWQsIGNoYWlucyB9KSxcbiAgICAgIGxlZGdlcldhbGxldCh7IHByb2plY3RJZCwgY2hhaW5zIH0pLFxuICAgICAgdW5pc3dhcFdhbGxldCh7IHByb2plY3RJZCwgY2hhaW5zIH0pLFxuICAgICAgcGhhbnRvbVdhbGxldCh7Y2hhaW5zfSksXG4gICAgXSxcbiAgfSxcbl0pO1xuXG5jb25zdCB3YWdtaUNvbmZpZyA9IGNyZWF0ZUNvbmZpZyh7XG4gIGF1dG9Db25uZWN0OiB0cnVlLFxuICBjb25uZWN0b3JzLFxuICBwdWJsaWNDbGllbnRcbn0pXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgXG4gICAgPFdhZ21pQ29uZmlnIGNvbmZpZz17d2FnbWlDb25maWd9PlxuICAgICAgPFJhaW5ib3dLaXRQcm92aWRlciB0aGVtZT17ZGFya1RoZW1lKHtcbiAgICAgICAgYWNjZW50Q29sb3I6ICcjMjA4NTFBJyxcbiAgICAgICAgYWNjZW50Q29sb3JGb3JlZ3JvdW5kOiAnd2hpdGUnLFxuICAgICAgfSl9IGNoYWlucz17Y2hhaW5zfT5cblxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9SYWluYm93S2l0UHJvdmlkZXI+XG4gICAgPC9XYWdtaUNvbmZpZz5cbiAgKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbImdldERlZmF1bHRXYWxsZXRzIiwiUmFpbmJvd0tpdFByb3ZpZGVyIiwiZGFya1RoZW1lIiwiY29ubmVjdG9yc0ZvcldhbGxldHMiLCJhcmdlbnRXYWxsZXQiLCJ0cnVzdFdhbGxldCIsImxlZGdlcldhbGxldCIsInVuaXN3YXBXYWxsZXQiLCJwaGFudG9tV2FsbGV0IiwiY29uZmlndXJlQ2hhaW5zIiwiY3JlYXRlQ29uZmlnIiwiV2FnbWlDb25maWciLCJic2MiLCJhbGNoZW15UHJvdmlkZXIiLCJwdWJsaWNQcm92aWRlciIsImNoYWlucyIsInB1YmxpY0NsaWVudCIsInByb2plY3RJZCIsIndhbGxldHMiLCJhcHBOYW1lIiwiY29ubmVjdG9ycyIsImdyb3VwTmFtZSIsIndhZ21pQ29uZmlnIiwiYXV0b0Nvbm5lY3QiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNvbmZpZyIsInRoZW1lIiwiYWNjZW50Q29sb3IiLCJhY2NlbnRDb2xvckZvcmVncm91bmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ }),

/***/ "@rainbow-me/rainbowkit/wallets":
/*!*************************************************!*\
  !*** external "@rainbow-me/rainbowkit/wallets" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit/wallets");;

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ }),

/***/ "wagmi/chains":
/*!*******************************!*\
  !*** external "wagmi/chains" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/chains");;

/***/ }),

/***/ "wagmi/providers/alchemy":
/*!******************************************!*\
  !*** external "wagmi/providers/alchemy" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/providers/alchemy");;

/***/ }),

/***/ "wagmi/providers/public":
/*!*****************************************!*\
  !*** external "wagmi/providers/public" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/providers/public");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();