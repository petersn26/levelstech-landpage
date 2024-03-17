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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ \"(app-pages-browser)/./constants/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const [toggle, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"w-full flex py-6 justify-between items-center navbar\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                src: \"/assets/logo.png\",\n                alt: \"logo\",\n                width: 124,\n                height: 32,\n                className: \"contain\"\n            }, void 0, false, {\n                fileName: \"/home/bruno/Documents/levelstech/app/components/Navbar.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"list-none sm:flex hidden justify-end items-center flex-1\",\n                children: _constants__WEBPACK_IMPORTED_MODULE_1__.navLinks.map((nav, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"font-poppins font-normal cursor-pointer text-[16px] mr-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\".concat(nav.id),\n                            children: nav.title\n                        }, void 0, false, {\n                            fileName: \"/home/bruno/Documents/levelstech/app/components/Navbar.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, undefined)\n                    }, nav.id, false, {\n                        fileName: \"/home/bruno/Documents/levelstech/app/components/Navbar.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/bruno/Documents/levelstech/app/components/Navbar.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sm:hidden flex flex-1 justify-end items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75  dark:bg-gray-800 dark:text-white dark:hover:text-white/75\",\n                    onClick: ()=>setToggle((prev)=>!prev),\n                    children: toggle ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        className: \"h-5 w-5\",\n                        fill: \"none\",\n                        viewBox: \"0 0 24 24\",\n                        stroke: \"currentColor\",\n                        strokeWidth: \"2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            strokeLinecap: \"round\",\n                            strokeLinejoin: \"round\",\n                            strokeWidth: 2,\n                            d: \"M6 18L18 6M6 6l12 12\"\n                        }, void 0, false, {\n                            fileName: \"/home/bruno/Documents/levelstech/app/components/Navbar.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/bruno/Documents/levelstech/app/components/Navbar.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        className: \"h-6 w-6\",\n                        fill: \"none\",\n                        viewBox: \"0 0 24 24\",\n                        stroke: \"currentColor\",\n                        strokeWidth: \"2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            strokeLinecap: \"round\",\n                            strokeLinejoin: \"round\",\n                            d: \"M4 6h16M4 12h16m-7 6h7\"\n                        }, void 0, false, {\n                            fileName: \"/home/bruno/Documents/levelstech/app/components/Navbar.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/bruno/Documents/levelstech/app/components/Navbar.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/bruno/Documents/levelstech/app/components/Navbar.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/bruno/Documents/levelstech/app/components/Navbar.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/bruno/Documents/levelstech/app/components/Navbar.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"KMOoc8w16Lq5ZnA3xKzfamBycFo=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL05hdmJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDMkM7QUFDWjtBQUVFO0FBRWpDLE1BQU1HLFNBQVM7O0lBQ2IsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdILCtDQUFRQSxDQUFDO0lBQ3JDLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ04sa0RBQUtBO2dCQUNKTyxLQUFJO2dCQUNKQyxLQUFJO2dCQUNKQyxPQUFPO2dCQUNQQyxRQUFRO2dCQUNSSixXQUFVOzs7Ozs7MEJBR1osOERBQUNLO2dCQUFHTCxXQUFVOzBCQUNYUCxnREFBUUEsQ0FBQ2EsR0FBRyxDQUFDLENBQUNQLEtBQUtRLHNCQUNsQiw4REFBQ0M7d0JBRUNSLFdBQVk7a0NBRVosNEVBQUNTOzRCQUFFQyxNQUFNLElBQVcsT0FBUFgsSUFBSVksRUFBRTtzQ0FBS1osSUFBSWEsS0FBSzs7Ozs7O3VCQUg1QmIsSUFBSVksRUFBRTs7Ozs7Ozs7OzswQkFRakIsOERBQUNFO2dCQUFJYixXQUFVOzBCQUNiLDRFQUFDYztvQkFDQ2QsV0FBVTtvQkFFVmUsU0FBUyxJQUFNakIsVUFBVSxDQUFDa0IsT0FBUyxDQUFDQTs4QkFFbkNuQix1QkFDQyw4REFBQ29CO3dCQUNDQyxPQUFNO3dCQUNObEIsV0FBVTt3QkFDVm1CLE1BQUs7d0JBQ0xDLFNBQVE7d0JBQ1JDLFFBQU87d0JBQ1BDLGFBQVk7a0NBRVosNEVBQUNDOzRCQUNDQyxlQUFjOzRCQUNkQyxnQkFBZTs0QkFDZkgsYUFBYTs0QkFDYkksR0FBRTs7Ozs7Ozs7OztrREFJTiw4REFBQ1Q7d0JBQ0NDLE9BQU07d0JBQ05sQixXQUFVO3dCQUNWbUIsTUFBSzt3QkFDTEMsU0FBUTt3QkFDUkMsUUFBTzt3QkFDUEMsYUFBWTtrQ0FFWiw0RUFBQ0M7NEJBQ0NDLGVBQWM7NEJBQ2RDLGdCQUFlOzRCQUNmQyxHQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRbEI7R0FqRU05QjtLQUFBQTtBQW1FTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9OYXZiYXIudHN4PzYzMGUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBuYXZMaW5rcyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IGxvZ28gZnJvbSBcIi4uLy4uL2Fzc2V0cy9sb2dvLnBuZ1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xuICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggcHktNiBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG5hdmJhclwiPlxuICAgICAgPEltYWdlXG4gICAgICAgIHNyYz1cIi9hc3NldHMvbG9nby5wbmdcIlxuICAgICAgICBhbHQ9XCJsb2dvXCJcbiAgICAgICAgd2lkdGg9ezEyNH1cbiAgICAgICAgaGVpZ2h0PXszMn1cbiAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpblwiXG4gICAgICAvPlxuXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ub25lIHNtOmZsZXggaGlkZGVuIGp1c3RpZnktZW5kIGl0ZW1zLWNlbnRlciBmbGV4LTFcIj5cbiAgICAgICAge25hdkxpbmtzLm1hcCgobmF2LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxsaVxuICAgICAgICAgICAga2V5PXtuYXYuaWR9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Bmb250LXBvcHBpbnMgZm9udC1ub3JtYWwgY3Vyc29yLXBvaW50ZXIgdGV4dC1bMTZweF0gbXItMTBgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxhIGhyZWY9e2AjJHtuYXYuaWR9YH0+e25hdi50aXRsZX08L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOmhpZGRlbiBmbGV4IGZsZXgtMSBqdXN0aWZ5LWVuZCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQgYmctZ3JheS0xMDAgcC0yIHRleHQtZ3JheS02MDAgdHJhbnNpdGlvbiBob3Zlcjp0ZXh0LWdyYXktNjAwLzc1IFxuICAgICAgICAgICAgICBkYXJrOmJnLWdyYXktODAwIGRhcms6dGV4dC13aGl0ZSBkYXJrOmhvdmVyOnRleHQtd2hpdGUvNzVcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZSgocHJldikgPT4gIXByZXYpfVxuICAgICAgICA+XG4gICAgICAgICAge3RvZ2dsZSA/IChcbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNSB3LTVcIlxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgICAgICAgZD1cIk02IDE4TDE4IDZNNiA2bDEyIDEyXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy02XCJcbiAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNNCA2aDE2TTQgMTJoMTZtLTcgNmg3XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iXSwibmFtZXMiOlsibmF2TGlua3MiLCJJbWFnZSIsInVzZVN0YXRlIiwiTmF2YmFyIiwidG9nZ2xlIiwic2V0VG9nZ2xlIiwibmF2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJ1bCIsIm1hcCIsImluZGV4IiwibGkiLCJhIiwiaHJlZiIsImlkIiwidGl0bGUiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwicHJldiIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsInBhdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Navbar.tsx\n"));

/***/ })

});