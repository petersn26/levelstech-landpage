"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/Navbar.tsx":
/*!***********************************!*\
  !*** ./app/components/Navbar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ \"(app-pages-browser)/./constants/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const [toggle, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"w-full flex py-6 justify-between items-center navbar\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                src: \"/assets/logo.png\",\n                alt: \"logo\",\n                width: 124,\n                height: 32,\n                className: \"contain\"\n            }, void 0, false, {\n                fileName: \"/home/bruno/Documents/levelstech/app/components/Navbar.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"list-none sm:flex hidden justify-end items-center flex-1\",\n                children: _constants__WEBPACK_IMPORTED_MODULE_1__.navLinks.map((nav, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"font-poppins font-normal cursor-pointer text-[16px] mr-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\".concat(nav.id),\n                            children: nav.title\n                        }, void 0, false, {\n                            fileName: \"/home/bruno/Documents/levelstech/app/components/Navbar.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, undefined)\n                    }, nav.id, false, {\n                        fileName: \"/home/bruno/Documents/levelstech/app/components/Navbar.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/bruno/Documents/levelstech/app/components/Navbar.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sm:hidden flex flex-1 justify-end items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75  dark:bg-gray-800 dark:text-white dark:hover:text-white/75\",\n                        onClick: ()=>setToggle((prev)=>!prev),\n                        children: toggle ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            className: \"h-5 w-5\",\n                            fill: \"none\",\n                            viewBox: \"0 0 24 24\",\n                            stroke: \"currentColor\",\n                            strokeWidth: \"2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                strokeLinecap: \"round\",\n                                strokeLinejoin: \"round\",\n                                strokeWidth: 2,\n                                d: \"M6 18L18 6M6 6l12 12\"\n                            }, void 0, false, {\n                                fileName: \"/home/bruno/Documents/levelstech/app/components/Navbar.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/bruno/Documents/levelstech/app/components/Navbar.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            className: \"h-6 w-6\",\n                            fill: \"none\",\n                            viewBox: \"0 0 24 24\",\n                            stroke: \"currentColor\",\n                            strokeWidth: \"2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                strokeLinecap: \"round\",\n                                strokeLinejoin: \"round\",\n                                d: \"M4 6h16M4 12h16m-7 6h7\"\n                            }, void 0, false, {\n                                fileName: \"/home/bruno/Documents/levelstech/app/components/Navbar.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/bruno/Documents/levelstech/app/components/Navbar.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/bruno/Documents/levelstech/app/components/Navbar.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(toggle ? \"flex\" : \"hidden\", \" p-6 bg-black\\n        absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar\\n        \"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"list-none flex flex-col justify-end items-center flex-1\",\n                            children: _constants__WEBPACK_IMPORTED_MODULE_1__.navLinks.map((nav, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"text-white font-poppins font-normal cursor-pointer text-[16px] mr-10\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#\".concat(nav.id),\n                                        children: nav.title\n                                    }, void 0, false, {\n                                        fileName: \"/home/bruno/Documents/levelstech/app/components/Navbar.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, nav.id, false, {\n                                    fileName: \"/home/bruno/Documents/levelstech/app/components/Navbar.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/home/bruno/Documents/levelstech/app/components/Navbar.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/bruno/Documents/levelstech/app/components/Navbar.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/bruno/Documents/levelstech/app/components/Navbar.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/bruno/Documents/levelstech/app/components/Navbar.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"KMOoc8w16Lq5ZnA3xKzfamBycFo=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL05hdmJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDMkM7QUFDWjtBQUVFO0FBRWpDLE1BQU1HLFNBQVM7O0lBQ2IsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdILCtDQUFRQSxDQUFDO0lBQ3JDLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ04sa0RBQUtBO2dCQUNKTyxLQUFJO2dCQUNKQyxLQUFJO2dCQUNKQyxPQUFPO2dCQUNQQyxRQUFRO2dCQUNSSixXQUFVOzs7Ozs7MEJBR1osOERBQUNLO2dCQUFHTCxXQUFVOzBCQUNYUCxnREFBUUEsQ0FBQ2EsR0FBRyxDQUFDLENBQUNQLEtBQUtRLHNCQUNsQiw4REFBQ0M7d0JBRUNSLFdBQVk7a0NBRVosNEVBQUNTOzRCQUFFQyxNQUFNLElBQVcsT0FBUFgsSUFBSVksRUFBRTtzQ0FBS1osSUFBSWEsS0FBSzs7Ozs7O3VCQUg1QmIsSUFBSVksRUFBRTs7Ozs7Ozs7OzswQkFRakIsOERBQUNFO2dCQUFJYixXQUFVOztrQ0FDYiw4REFBQ2M7d0JBQ0NkLFdBQVU7d0JBRVZlLFNBQVMsSUFBTWpCLFVBQVUsQ0FBQ2tCLE9BQVMsQ0FBQ0E7a0NBRW5DbkIsdUJBQ0MsOERBQUNvQjs0QkFDQ0MsT0FBTTs0QkFDTmxCLFdBQVU7NEJBQ1ZtQixNQUFLOzRCQUNMQyxTQUFROzRCQUNSQyxRQUFPOzRCQUNQQyxhQUFZO3NDQUVaLDRFQUFDQztnQ0FDQ0MsZUFBYztnQ0FDZEMsZ0JBQWU7Z0NBQ2ZILGFBQWE7Z0NBQ2JJLEdBQUU7Ozs7Ozs7Ozs7c0RBSU4sOERBQUNUOzRCQUNDQyxPQUFNOzRCQUNObEIsV0FBVTs0QkFDVm1CLE1BQUs7NEJBQ0xDLFNBQVE7NEJBQ1JDLFFBQU87NEJBQ1BDLGFBQVk7c0NBRVosNEVBQUNDO2dDQUNDQyxlQUFjO2dDQUNkQyxnQkFBZTtnQ0FDZkMsR0FBRTs7Ozs7Ozs7Ozs7Ozs7OztrQ0FNViw4REFBQ2I7d0JBQ0NiLFdBQVcsR0FBOEIsT0FBM0JILFNBQVMsU0FBUyxVQUFTO2tDQUl6Qyw0RUFBQ1E7NEJBQUdMLFdBQVU7c0NBQ1hQLGdEQUFRQSxDQUFDYSxHQUFHLENBQUMsQ0FBQ1AsS0FBS1Esc0JBQ2xCLDhEQUFDQztvQ0FFQ1IsV0FBWTs4Q0FFWiw0RUFBQ1M7d0NBQUVDLE1BQU0sSUFBVyxPQUFQWCxJQUFJWSxFQUFFO2tEQUFLWixJQUFJYSxLQUFLOzs7Ozs7bUNBSDVCYixJQUFJWSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXM0I7R0FsRk1mO0tBQUFBO0FBb0ZOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL05hdmJhci50c3g/NjMwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IG5hdkxpbmtzIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgbG9nbyBmcm9tIFwiLi4vLi4vYXNzZXRzL2xvZ28ucG5nXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBweS02IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbmF2YmFyXCI+XG4gICAgICA8SW1hZ2VcbiAgICAgICAgc3JjPVwiL2Fzc2V0cy9sb2dvLnBuZ1wiXG4gICAgICAgIGFsdD1cImxvZ29cIlxuICAgICAgICB3aWR0aD17MTI0fVxuICAgICAgICBoZWlnaHQ9ezMyfVxuICAgICAgICBjbGFzc05hbWU9XCJjb250YWluXCJcbiAgICAgIC8+XG5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LW5vbmUgc206ZmxleCBoaWRkZW4ganVzdGlmeS1lbmQgaXRlbXMtY2VudGVyIGZsZXgtMVwiPlxuICAgICAgICB7bmF2TGlua3MubWFwKChuYXYsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGxpXG4gICAgICAgICAgICBrZXk9e25hdi5pZH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvbnQtcG9wcGlucyBmb250LW5vcm1hbCBjdXJzb3ItcG9pbnRlciB0ZXh0LVsxNnB4XSBtci0xMGB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGEgaHJlZj17YCMke25hdi5pZH1gfT57bmF2LnRpdGxlfTwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206aGlkZGVuIGZsZXggZmxleC0xIGp1c3RpZnktZW5kIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZCBiZy1ncmF5LTEwMCBwLTIgdGV4dC1ncmF5LTYwMCB0cmFuc2l0aW9uIGhvdmVyOnRleHQtZ3JheS02MDAvNzUgXG4gICAgICAgICAgICAgIGRhcms6YmctZ3JheS04MDAgZGFyazp0ZXh0LXdoaXRlIGRhcms6aG92ZXI6dGV4dC13aGl0ZS83NVwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlKChwcmV2KSA9PiAhcHJldil9XG4gICAgICAgID5cbiAgICAgICAgICB7dG9nZ2xlID8gKFxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC01IHctNVwiXG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgICAgICAgICBkPVwiTTYgMThMMTggNk02IDZsMTIgMTJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNiB3LTZcIlxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgZD1cIk00IDZoMTZNNCAxMmgxNm0tNyA2aDdcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7dG9nZ2xlID8gXCJmbGV4XCIgOiBcImhpZGRlblwifSBwLTYgYmctYmxhY2tcbiAgICAgICAgYWJzb2x1dGUgdG9wLTIwIHJpZ2h0LTAgbXgtNCBteS0yIG1pbi13LVsxNDBweF0gcm91bmRlZC14bCBzaWRlYmFyXG4gICAgICAgIGB9XG4gICAgICAgID5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ub25lIGZsZXggZmxleC1jb2wganVzdGlmeS1lbmQgaXRlbXMtY2VudGVyIGZsZXgtMVwiPlxuICAgICAgICAgICAge25hdkxpbmtzLm1hcCgobmF2LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBrZXk9e25hdi5pZH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXdoaXRlIGZvbnQtcG9wcGlucyBmb250LW5vcm1hbCBjdXJzb3ItcG9pbnRlciB0ZXh0LVsxNnB4XSBtci0xMGB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtgIyR7bmF2LmlkfWB9PntuYXYudGl0bGV9PC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdLCJuYW1lcyI6WyJuYXZMaW5rcyIsIkltYWdlIiwidXNlU3RhdGUiLCJOYXZiYXIiLCJ0b2dnbGUiLCJzZXRUb2dnbGUiLCJuYXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInVsIiwibWFwIiwiaW5kZXgiLCJsaSIsImEiLCJocmVmIiwiaWQiLCJ0aXRsZSIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwcmV2Iiwic3ZnIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwicGF0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsImQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Navbar.tsx\n"));

/***/ })

});