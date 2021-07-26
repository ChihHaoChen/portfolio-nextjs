/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Navbar.tsx":
/*!*******************************!*\
  !*** ./components/Navbar.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/chihhao/workspace/webApp/Nextjs/portfolio/components/Navbar.tsx\";\n\n\n\n\nconst Navbar = () => {\n  const {\n    0: activeItem,\n    1: setActiveItem\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n  const {\n    pathname\n  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n\n  const NavItem = ({\n    activeItem,\n    setActiveItem,\n    name,\n    route\n  }) => {\n    return activeItem !== name ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n      href: route,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          className: \"hover:text-green\",\n          onClick: () => setActiveItem(name),\n          children: name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 13\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 11\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }, undefined) : null;\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    if (pathname === '/') setActiveItem('About');\n    if (pathname === '/projects') setActiveItem('Projects');\n    if (pathname === '/resume') setActiveItem('Resume');\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"flex justify-between px-5 py-3 my-3\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      className: \"text-xl font-bold border-b-4 text-green border-green md:text-2xl\",\n      children: activeItem\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"flex space-x-5 text-lg\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n        activeItem: activeItem,\n        setActiveItem: setActiveItem,\n        name: \"About\",\n        route: \"/\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n        activeItem: activeItem,\n        setActiveItem: setActiveItem,\n        name: \"Projects\",\n        route: \"/projects\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n        activeItem: activeItem,\n        setActiveItem: setActiveItem,\n        name: \"Resume\",\n        route: \"/resume\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9jb21wb25lbnRzL05hdmJhci50c3g/ZTdmYyJdLCJuYW1lcyI6WyJOYXZiYXIiLCJhY3RpdmVJdGVtIiwic2V0QWN0aXZlSXRlbSIsInVzZVN0YXRlIiwicGF0aG5hbWUiLCJ1c2VSb3V0ZXIiLCJOYXZJdGVtIiwibmFtZSIsInJvdXRlIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxNQUFNQSxNQUFNLEdBQUcsTUFBTTtBQUVuQixRQUFNO0FBQUEsT0FBQ0MsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJDLCtDQUFRLENBQVMsRUFBVCxDQUE1QztBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFlQyxzREFBUyxFQUE5Qjs7QUFHQSxRQUFNQyxPQUtKLEdBQUcsQ0FBQztBQUFFTCxjQUFGO0FBQWNDLGlCQUFkO0FBQTZCSyxRQUE3QjtBQUFtQ0M7QUFBbkMsR0FBRCxLQUErQztBQUNsRCxXQUVFUCxVQUFVLEtBQUtNLElBQWYsZ0JBQ0UsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUVDLEtBQVo7QUFBQSw2QkFDRTtBQUFBLCtCQUNFO0FBQU0sbUJBQVMsRUFBQyxrQkFBaEI7QUFBbUMsaUJBQU8sRUFBRSxNQUFNTixhQUFhLENBQUNLLElBQUQsQ0FBL0Q7QUFBQSxvQkFBeUVBO0FBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixHQU1FLElBUko7QUFXRCxHQWpCRDs7QUFtQkFFLGtEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUlMLFFBQVEsS0FBSyxHQUFqQixFQUFzQkYsYUFBYSxDQUFDLE9BQUQsQ0FBYjtBQUN0QixRQUFJRSxRQUFRLEtBQUssV0FBakIsRUFBOEJGLGFBQWEsQ0FBQyxVQUFELENBQWI7QUFDOUIsUUFBSUUsUUFBUSxLQUFLLFNBQWpCLEVBQTRCRixhQUFhLENBQUMsUUFBRCxDQUFiO0FBQzdCLEdBSlEsRUFJTixFQUpNLENBQVQ7QUFNQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxxQ0FBZjtBQUFBLDRCQUNFO0FBQU0sZUFBUyxFQUFDLGtFQUFoQjtBQUFBLGdCQUFvRkQ7QUFBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUssZUFBUyxFQUFDLHdCQUFmO0FBQUEsOEJBQ0UsOERBQUMsT0FBRDtBQUFTLGtCQUFVLEVBQUVBLFVBQXJCO0FBQWlDLHFCQUFhLEVBQUVDLGFBQWhEO0FBQStELFlBQUksRUFBQyxPQUFwRTtBQUE0RSxhQUFLLEVBQUM7QUFBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLDhEQUFDLE9BQUQ7QUFBUyxrQkFBVSxFQUFFRCxVQUFyQjtBQUFpQyxxQkFBYSxFQUFFQyxhQUFoRDtBQUErRCxZQUFJLEVBQUMsVUFBcEU7QUFBK0UsYUFBSyxFQUFDO0FBQXJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRSw4REFBQyxPQUFEO0FBQVMsa0JBQVUsRUFBRUQsVUFBckI7QUFBaUMscUJBQWEsRUFBRUMsYUFBaEQ7QUFBK0QsWUFBSSxFQUFDLFFBQXBFO0FBQTZFLGFBQUssRUFBQztBQUFuRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVdELENBMUNEOztBQTRDQSwrREFBZUYsTUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTmF2YmFyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcblxuICBjb25zdCBbYWN0aXZlSXRlbSwgc2V0QWN0aXZlSXRlbV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKVxuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VSb3V0ZXIoKVxuXG5cbiAgY29uc3QgTmF2SXRlbTogRnVuY3Rpb25Db21wb25lbnQ8e1xuICAgIGFjdGl2ZUl0ZW06IHN0cmluZyxcbiAgICBzZXRBY3RpdmVJdGVtOiBGdW5jdGlvbixcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgcm91dGU6IHN0cmluZ1xuICB9PiA9ICh7IGFjdGl2ZUl0ZW0sIHNldEFjdGl2ZUl0ZW0sIG5hbWUsIHJvdXRlfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBcbiAgICAgIGFjdGl2ZUl0ZW0gIT09IG5hbWUgPyAoXG4gICAgICAgIDxMaW5rIGhyZWY9e3JvdXRlfT5cbiAgICAgICAgICA8YT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZ3JlZW5cIiBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVJdGVtKG5hbWUpfT57IG5hbWUgfTwvc3Bhbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICk6bnVsbFxuICAgICAgXG4gICAgKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocGF0aG5hbWUgPT09ICcvJykgc2V0QWN0aXZlSXRlbSgnQWJvdXQnKVxuICAgIGlmIChwYXRobmFtZSA9PT0gJy9wcm9qZWN0cycpIHNldEFjdGl2ZUl0ZW0oJ1Byb2plY3RzJylcbiAgICBpZiAocGF0aG5hbWUgPT09ICcvcmVzdW1lJykgc2V0QWN0aXZlSXRlbSgnUmVzdW1lJylcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHB4LTUgcHktMyBteS0zXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBib3JkZXItYi00IHRleHQtZ3JlZW4gYm9yZGVyLWdyZWVuIG1kOnRleHQtMnhsXCI+e2FjdGl2ZUl0ZW19PC9zcGFuPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNSB0ZXh0LWxnXCI+XG4gICAgICAgIDxOYXZJdGVtIGFjdGl2ZUl0ZW09e2FjdGl2ZUl0ZW19IHNldEFjdGl2ZUl0ZW09e3NldEFjdGl2ZUl0ZW19IG5hbWU9J0Fib3V0JyByb3V0ZT0nLycgLz5cbiAgICAgICAgPE5hdkl0ZW0gYWN0aXZlSXRlbT17YWN0aXZlSXRlbX0gc2V0QWN0aXZlSXRlbT17c2V0QWN0aXZlSXRlbX0gbmFtZT0nUHJvamVjdHMnIHJvdXRlPScvcHJvamVjdHMnIC8+XG4gICAgICAgIDxOYXZJdGVtIGFjdGl2ZUl0ZW09e2FjdGl2ZUl0ZW19IHNldEFjdGl2ZUl0ZW09e3NldEFjdGl2ZUl0ZW19IG5hbWU9J1Jlc3VtZScgcm91dGU9Jy9yZXN1bWUnIC8+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar.tsx\n");

/***/ }),

/***/ "./components/Sidebar.tsx":
/*!********************************!*\
  !*** ./components/Sidebar.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/go */ \"./node_modules/react-icons/go/index.esm.js\");\n/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/gi */ \"./node_modules/react-icons/gi/index.esm.js\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/chihhao/workspace/webApp/Nextjs/portfolio/components/Sidebar.tsx\";\n\n\n\n\n\n\n\n\nconst Sidebar = () => {\n  const {\n    theme,\n    setTheme\n  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_3__.useTheme)();\n\n  const changeTheme = () => {\n    setTheme(theme === \"light\" ? \"dark\" : \"light\");\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n      src: \"/images/site/CH_images.jpg\",\n      alt: \"Myself image\",\n      className: \"mx-auto border rounded-full \",\n      height: \"128px\",\n      width: \"128px\",\n      layout: \"intrinsic\",\n      quality: \"100\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n      className: \"my-4 text-3xl font-medium tracking-wider font-kaushan\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: \"Hi, I am Chih-Hao\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      className: \"px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500\",\n      children: \"Web/Mobile App Developer\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n      className: \"flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500\",\n      href: \"https://portfoliopdf.s3.us-east-2.amazonaws.com/PDF/ChihHaoChen_Resume_June2021.pdf\",\n      download: \"resume_CHIH-HAO\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_gi__WEBPACK_IMPORTED_MODULE_4__.GiTie, {\n        className: \"w-6 h-6\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, undefined), \"Download Resume\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"flex justify-around w-9/12 mx-auto my-5 text-green md:w-full\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: \"https://www.linkedin.com/in/chih-hao-chen-13583369/\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillLinkedin, {\n          className: \"w-10 h-10 cursor-pointer\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: \"https://github.com/ChihHaoChen\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillGithub, {\n          className: \"w-10 h-10 cursor-pointer\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_6__.MdEmail, {\n        className: \"w-10 h-10 cursor-pointer\",\n        onClick: () => window.open('mailto: c.h.chen.developer@gmail.com')\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500\",\n      style: {\n        marginLeft: '-1rem',\n        marginRight: '-1rem'\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center space-x-2\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_go__WEBPACK_IMPORTED_MODULE_7__.GoLocation, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          children: \"Taipei, Taiwan\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"my-2\",\n        children: \"c.h.chen.developer@gmail.com\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      onClick: changeTheme,\n      className: \"w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105 \",\n      children: \"Toggle Theme\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9jb21wb25lbnRzL1NpZGViYXIudHN4P2U4ZGYiXSwibmFtZXMiOlsiU2lkZWJhciIsInRoZW1lIiwic2V0VGhlbWUiLCJ1c2VUaGVtZSIsImNoYW5nZVRoZW1lIiwid2luZG93Iiwib3BlbiIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE9BQU8sR0FBRyxNQUFNO0FBQ3BCLFFBQU07QUFBRUMsU0FBRjtBQUFTQztBQUFULE1BQXNCQyxxREFBUSxFQUFwQzs7QUFFQSxRQUFNQyxXQUFXLEdBQUcsTUFBTTtBQUN4QkYsWUFBUSxDQUFDRCxLQUFLLEtBQUssT0FBVixHQUFvQixNQUFwQixHQUE2QixPQUE5QixDQUFSO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLG1EQUFEO0FBQ0UsU0FBRyxFQUFDLDRCQUROO0FBRUUsU0FBRyxFQUFDLGNBRk47QUFHRSxlQUFTLEVBQUMsOEJBSFo7QUFJRSxZQUFNLEVBQUMsT0FKVDtBQUtFLFdBQUssRUFBQyxPQUxSO0FBTUUsWUFBTSxFQUFDLFdBTlQ7QUFPRSxhQUFPLEVBQUM7QUFQVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBVUU7QUFBSSxlQUFTLEVBQUMsdURBQWQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkYsZUFhRTtBQUFHLGVBQVMsRUFBQyw0RUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiRixlQWVFO0FBQUcsZUFBUyxFQUFDLDRIQUFiO0FBQTBJLFVBQUksRUFBQyxxRkFBL0k7QUFBcU8sY0FBUSxFQUFDLGlCQUE5TztBQUFBLDhCQUNFLDhEQUFDLGlEQUFEO0FBQU8saUJBQVMsRUFBQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFmRixlQW1CRTtBQUFLLGVBQVMsRUFBQyw4REFBZjtBQUFBLDhCQUNFO0FBQUcsWUFBSSxFQUFDLHFEQUFSO0FBQUEsK0JBQ0UsOERBQUMsMERBQUQ7QUFBZ0IsbUJBQVMsRUFBQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUlFO0FBQUcsWUFBSSxFQUFDLGdDQUFSO0FBQUEsK0JBQ0UsOERBQUMsd0RBQUQ7QUFBYyxtQkFBUyxFQUFDO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLGVBT0UsOERBQUMsbURBQUQ7QUFBUyxpQkFBUyxFQUFDLDBCQUFuQjtBQUE4QyxlQUFPLEVBQUUsTUFBTUksTUFBTSxDQUFDQyxJQUFQLENBQVksc0NBQVo7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbkJGLGVBK0JFO0FBQ0UsZUFBUyxFQUFDLDBEQURaO0FBRUUsV0FBSyxFQUFFO0FBQUVDLGtCQUFVLEVBQUUsT0FBZDtBQUF1QkMsbUJBQVcsRUFBRztBQUFyQyxPQUZUO0FBQUEsOEJBSUU7QUFBSyxpQkFBUyxFQUFDLDRDQUFmO0FBQUEsZ0NBQ0UsOERBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRixlQVFFO0FBQUcsaUJBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEvQkYsZUEwQ0U7QUFDRSxhQUFPLEVBQUVKLFdBRFg7QUFFRSxlQUFTLEVBQUMsbUpBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBMUNGO0FBQUEsa0JBREY7QUFvREQsQ0EzREQ7O0FBNkRBLCtEQUFlSixPQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TaWRlYmFyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgQWlGaWxsR2l0aHViLCBBaUZpbGxMaW5rZWRpbiB9IGZyb20gJ3JlYWN0LWljb25zL2FpJ1xuaW1wb3J0IHsgTWRFbWFpbCB9IGZyb20gJ3JlYWN0LWljb25zL21kJ1xuaW1wb3J0IHsgR29Mb2NhdGlvbiB9IGZyb20gJ3JlYWN0LWljb25zL2dvJ1xuaW1wb3J0IHsgR2lUaWUgfSBmcm9tICdyZWFjdC1pY29ucy9naSdcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnbmV4dC10aGVtZXMnXG5cbmNvbnN0IFNpZGViYXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdGhlbWUsIHNldFRoZW1lIH0gPSB1c2VUaGVtZSgpO1xuXG4gIGNvbnN0IGNoYW5nZVRoZW1lID0gKCkgPT4ge1xuICAgIHNldFRoZW1lKHRoZW1lID09PSBcImxpZ2h0XCIgPyBcImRhcmtcIiA6IFwibGlnaHRcIik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEltYWdlXG4gICAgICAgIHNyYz0nL2ltYWdlcy9zaXRlL0NIX2ltYWdlcy5qcGcnXG4gICAgICAgIGFsdD0nTXlzZWxmIGltYWdlJ1xuICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvIGJvcmRlciByb3VuZGVkLWZ1bGwgXCJcbiAgICAgICAgaGVpZ2h0PVwiMTI4cHhcIlxuICAgICAgICB3aWR0aD1cIjEyOHB4XCJcbiAgICAgICAgbGF5b3V0PVwiaW50cmluc2ljXCJcbiAgICAgICAgcXVhbGl0eT1cIjEwMFwiXG4gICAgICAvPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cIm15LTQgdGV4dC0zeGwgZm9udC1tZWRpdW0gdHJhY2tpbmctd2lkZXIgZm9udC1rYXVzaGFuXCI+XG4gICAgICAgIDxzcGFuPkhpLCBJIGFtIENoaWgtSGFvPC9zcGFuPlxuICAgICAgPC9oMz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInB4LTIgcHktMSBteS0zIGJnLWdyYXktMjAwIHJvdW5kZWQtZnVsbCBkYXJrOmJnLWRhcmstMjAwIGRhcms6YmctYmxhY2stNTAwXCI+V2ViL01vYmlsZSBBcHAgRGV2ZWxvcGVyPC9wPlxuICAgICAgXG4gICAgICA8YSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC0yIHB5LTEgbXktMiBiZy1ncmF5LTIwMCByb3VuZGVkLWZ1bGwgY3Vyc29yLXBvaW50ZXIgZGFyazpiZy1kYXJrLTIwMCBkYXJrOmJnLWJsYWNrLTUwMFwiIGhyZWY9J2h0dHBzOi8vcG9ydGZvbGlvcGRmLnMzLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tL1BERi9DaGloSGFvQ2hlbl9SZXN1bWVfSnVuZTIwMjEucGRmJyBkb3dubG9hZD0ncmVzdW1lX0NISUgtSEFPJz4gXG4gICAgICAgIDxHaVRpZSBjbGFzc05hbWU9XCJ3LTYgaC02XCIgLz5Eb3dubG9hZCBSZXN1bWVcbiAgICAgIDwvYT5cbiAgICAgICAgeyAvKiAvLyBzb2NpYWwgaWNvbnMgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1hcm91bmQgdy05LzEyIG14LWF1dG8gbXktNSB0ZXh0LWdyZWVuIG1kOnctZnVsbFwiPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2NoaWgtaGFvLWNoZW4tMTM1ODMzNjkvXCI+XG4gICAgICAgICAgPEFpRmlsbExpbmtlZGluIGNsYXNzTmFtZT1cInctMTAgaC0xMCBjdXJzb3ItcG9pbnRlclwiIC8+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9DaGloSGFvQ2hlblwiPlxuICAgICAgICAgIDxBaUZpbGxHaXRodWIgY2xhc3NOYW1lPVwidy0xMCBoLTEwIGN1cnNvci1wb2ludGVyXCIgLz5cbiAgICAgICAgPC9hPlxuICAgICAgICA8TWRFbWFpbCBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXsoKSA9PiB3aW5kb3cub3BlbignbWFpbHRvOiBjLmguY2hlbi5kZXZlbG9wZXJAZ21haWwuY29tJyl9Lz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogLy8gbG9jYXRpb24gKi99XG4gICAgICBcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwicHktNCBteS01IGJnLWdyYXktMjAwIGRhcms6YmctZGFyay0yMDAgZGFyazpiZy1ibGFjay01MDBcIlxuICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnLTFyZW0nLCBtYXJnaW5SaWdodDogICctMXJlbSd9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNwYWNlLXgtMlwiPlxuICAgICAgICAgIDxHb0xvY2F0aW9uIC8+XG4gICAgICAgICAgPHNwYW4+VGFpcGVpLCBUYWl3YW48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJteS0yXCI+Yy5oLmNoZW4uZGV2ZWxvcGVyQGdtYWlsLmNvbTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9e2NoYW5nZVRoZW1lfVxuICAgICAgICBjbGFzc05hbWU9XCJ3LTgvMTIgcHgtNSBweS0yIG15LTQgdGV4dC13aGl0ZSBiZy1ibGFjayByb3VuZGVkLWZ1bGwgY3Vyc29yLXBvaW50ZXIgYmctZ3JhZGllbnQtdG8tciBmcm9tLWdyZWVuIHRvLWJsdWUtNTAwIGZvY3VzOm91dGxpbmUtbm9uZSBob3ZlcjpzY2FsZS0xMDUgXCJcbiAgICAgID5cbiAgICAgICAgVG9nZ2xlIFRoZW1lXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIFxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Sidebar.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.tsx\");\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Sidebar */ \"./components/Sidebar.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/Users/chihhao/workspace/webApp/Nextjs/portfolio/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps,\n  router\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(next_themes__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n    attribute: \"class\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"h-full col-span-12 p-4 text-base text-center bg-white lg:col-span-3 rounded-2xl dark:bg-black-500 shadow-custom-light dark:shadow-custom-dark\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex flex-col col-span-12 overflow-hidden bg-white rounded-2xl dark:bg-black-500 dark:text-white lg:col-span-9 shadow-custom-light dark:shadow-custom-dark\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {\n          exitBeforeEnter: true,\n          children: /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, _objectSpread(_objectSpread({}, pageProps), {}, {\n            key: router.route,\n            __self: this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 20,\n              columnNumber: 13\n            }\n          }))\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwicm91dGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUdBLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDLFdBQWI7QUFBd0JDO0FBQXhCLENBQWYsRUFBaUQ7QUFDL0Msc0JBQ0UsOERBQUMsc0RBQUQ7QUFBZSxhQUFTLEVBQUMsT0FBekI7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyx5RkFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQywrSUFBZjtBQUFBLCtCQUNFLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUFLLGlCQUFTLEVBQUMsNEpBQWY7QUFBQSxnQ0FDRSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUsOERBQUMsMERBQUQ7QUFBaUIseUJBQWUsTUFBaEM7QUFBQSxpQ0FDRSxxREFBQyxTQUFELGtDQUFlRCxTQUFmO0FBQTBCLGVBQUcsRUFBRUMsTUFBTSxDQUFDQyxLQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFlRDs7QUFFRCwrREFBZUosS0FBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ25leHQtdGhlbWVzJ1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcidcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZWJhcidcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJvdXRlciB9KSB7XG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgYXR0cmlidXRlPVwiY2xhc3NcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMTIgZ2FwLTYgcHgtNSBteS0xNCBsZzptYi0wIG1kOm1iLTE2IHNtOnB4LTIwIG1kOnB4LTMyIGxnOnB4LTM2IHhsOnB4LTQ4XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIGNvbC1zcGFuLTEyIHAtNCB0ZXh0LWJhc2UgdGV4dC1jZW50ZXIgYmctd2hpdGUgbGc6Y29sLXNwYW4tMyByb3VuZGVkLTJ4bCBkYXJrOmJnLWJsYWNrLTUwMCBzaGFkb3ctY3VzdG9tLWxpZ2h0IGRhcms6c2hhZG93LWN1c3RvbS1kYXJrXCI+XG4gICAgICAgICAgPFNpZGViYXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xMiBvdmVyZmxvdy1oaWRkZW4gYmctd2hpdGUgcm91bmRlZC0yeGwgZGFyazpiZy1ibGFjay01MDAgZGFyazp0ZXh0LXdoaXRlIGxnOmNvbC1zcGFuLTkgc2hhZG93LWN1c3RvbS1saWdodCBkYXJrOnNoYWRvdy1jdXN0b20tZGFya1wiPlxuICAgICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIGV4aXRCZWZvcmVFbnRlcj5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30ga2V5PXtyb3V0ZXIucm91dGV9Lz5cbiAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1RoZW1lUHJvdmlkZXI+ICAgXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("framer-motion");;

/***/ }),

/***/ "next-themes":
/*!******************************!*\
  !*** external "next-themes" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-themes");;

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_react-icons_ai_index_esm_js","vendors-node_modules_babel_runtime_helpers_extends_js-node_modules_babel_runtime_helpers_inte-f89ba9","vendors-node_modules_next_image_js-node_modules_next_link_js-node_modules_react-icons_gi_inde-c795d6"], function() { return __webpack_exec__("./pages/_app.tsx"); });
module.exports = __webpack_exports__;

})();