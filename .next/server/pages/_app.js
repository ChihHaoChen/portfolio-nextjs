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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/chihhao/workspace/webApp/frontend/Nextjs/portfolio/components/Navbar.tsx\";\n\n\n\n\nconst Navbar = () => {\n  const {\n    0: activeItem,\n    1: setActiveItem\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n  const {\n    pathname\n  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n\n  const NavItem = ({\n    activeItem,\n    setActiveItem,\n    name,\n    route\n  }) => {\n    return activeItem !== name ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n      href: route,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          className: \"hover:text-orange\",\n          onClick: () => setActiveItem(name),\n          children: name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, undefined) : null;\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    if (pathname === '/') setActiveItem('About');\n    if (pathname === '/projects') setActiveItem('Projects');\n    if (pathname === '/resume') setActiveItem('Resume');\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"flex justify-between px-5 py-3 my-3\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      className: \"text-xl font-bold border-b-4 text-orange border-orange md:text-2xl hover:text-blue-500 hover:border-blue-500\",\n      children: activeItem\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"flex space-x-5 text-lg\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n        activeItem: activeItem,\n        setActiveItem: setActiveItem,\n        name: \"About\",\n        route: \"/\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n        activeItem: activeItem,\n        setActiveItem: setActiveItem,\n        name: \"Projects\",\n        route: \"/projects\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n        activeItem: activeItem,\n        setActiveItem: setActiveItem,\n        name: \"Resume\",\n        route: \"/resume\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9jb21wb25lbnRzL05hdmJhci50c3g/ZTdmYyJdLCJuYW1lcyI6WyJOYXZiYXIiLCJhY3RpdmVJdGVtIiwic2V0QWN0aXZlSXRlbSIsInVzZVN0YXRlIiwicGF0aG5hbWUiLCJ1c2VSb3V0ZXIiLCJOYXZJdGVtIiwibmFtZSIsInJvdXRlIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxNQUFNQSxNQUFNLEdBQUcsTUFBTTtBQUNuQixRQUFNO0FBQUEsT0FBQ0MsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJDLCtDQUFRLENBQVMsRUFBVCxDQUE1QztBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFlQyxzREFBUyxFQUE5Qjs7QUFFQSxRQUFNQyxPQUtKLEdBQUcsQ0FBQztBQUFFTCxjQUFGO0FBQWNDLGlCQUFkO0FBQTZCSyxRQUE3QjtBQUFtQ0M7QUFBbkMsR0FBRCxLQUFnRDtBQUNuRCxXQUFPUCxVQUFVLEtBQUtNLElBQWYsZ0JBQ0wsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUVDLEtBQVo7QUFBQSw2QkFDRTtBQUFBLCtCQUNFO0FBQ0UsbUJBQVMsRUFBQyxtQkFEWjtBQUVFLGlCQUFPLEVBQUUsTUFBTU4sYUFBYSxDQUFDSyxJQUFELENBRjlCO0FBQUEsb0JBSUdBO0FBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURLLEdBV0gsSUFYSjtBQVlELEdBbEJEOztBQW9CQUUsa0RBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSUwsUUFBUSxLQUFLLEdBQWpCLEVBQXNCRixhQUFhLENBQUMsT0FBRCxDQUFiO0FBQ3RCLFFBQUlFLFFBQVEsS0FBSyxXQUFqQixFQUE4QkYsYUFBYSxDQUFDLFVBQUQsQ0FBYjtBQUM5QixRQUFJRSxRQUFRLEtBQUssU0FBakIsRUFBNEJGLGFBQWEsQ0FBQyxRQUFELENBQWI7QUFDN0IsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BLHNCQUNFO0FBQUssYUFBUyxFQUFDLHFDQUFmO0FBQUEsNEJBQ0U7QUFBTSxlQUFTLEVBQUMsOEdBQWhCO0FBQUEsZ0JBQ0dEO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFO0FBQUssZUFBUyxFQUFDLHdCQUFmO0FBQUEsOEJBQ0UsOERBQUMsT0FBRDtBQUNFLGtCQUFVLEVBQUVBLFVBRGQ7QUFFRSxxQkFBYSxFQUFFQyxhQUZqQjtBQUdFLFlBQUksRUFBQyxPQUhQO0FBSUUsYUFBSyxFQUFDO0FBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQU9FLDhEQUFDLE9BQUQ7QUFDRSxrQkFBVSxFQUFFRCxVQURkO0FBRUUscUJBQWEsRUFBRUMsYUFGakI7QUFHRSxZQUFJLEVBQUMsVUFIUDtBQUlFLGFBQUssRUFBQztBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEYsZUFhRSw4REFBQyxPQUFEO0FBQ0Usa0JBQVUsRUFBRUQsVUFEZDtBQUVFLHFCQUFhLEVBQUVDLGFBRmpCO0FBR0UsWUFBSSxFQUFDLFFBSFA7QUFJRSxhQUFLLEVBQUM7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQTJCRCxDQXpERDs7QUEyREEsK0RBQWVGLE1BQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gIGNvbnN0IFthY3RpdmVJdGVtLCBzZXRBY3RpdmVJdGVtXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpXG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3QgTmF2SXRlbTogRnVuY3Rpb25Db21wb25lbnQ8e1xuICAgIGFjdGl2ZUl0ZW06IHN0cmluZ1xuICAgIHNldEFjdGl2ZUl0ZW06IEZ1bmN0aW9uXG4gICAgbmFtZTogc3RyaW5nXG4gICAgcm91dGU6IHN0cmluZ1xuICB9PiA9ICh7IGFjdGl2ZUl0ZW0sIHNldEFjdGl2ZUl0ZW0sIG5hbWUsIHJvdXRlIH0pID0+IHtcbiAgICByZXR1cm4gYWN0aXZlSXRlbSAhPT0gbmFtZSA/IChcbiAgICAgIDxMaW5rIGhyZWY9e3JvdXRlfT5cbiAgICAgICAgPGE+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtb3JhbmdlXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZUl0ZW0obmFtZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgKSA6IG51bGxcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHBhdGhuYW1lID09PSAnLycpIHNldEFjdGl2ZUl0ZW0oJ0Fib3V0JylcbiAgICBpZiAocGF0aG5hbWUgPT09ICcvcHJvamVjdHMnKSBzZXRBY3RpdmVJdGVtKCdQcm9qZWN0cycpXG4gICAgaWYgKHBhdGhuYW1lID09PSAnL3Jlc3VtZScpIHNldEFjdGl2ZUl0ZW0oJ1Jlc3VtZScpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBweC01IHB5LTMgbXktM1wiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgYm9yZGVyLWItNCB0ZXh0LW9yYW5nZSBib3JkZXItb3JhbmdlIG1kOnRleHQtMnhsIGhvdmVyOnRleHQtYmx1ZS01MDAgaG92ZXI6Ym9yZGVyLWJsdWUtNTAwXCI+XG4gICAgICAgIHthY3RpdmVJdGVtfVxuICAgICAgPC9zcGFuPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNSB0ZXh0LWxnXCI+XG4gICAgICAgIDxOYXZJdGVtXG4gICAgICAgICAgYWN0aXZlSXRlbT17YWN0aXZlSXRlbX1cbiAgICAgICAgICBzZXRBY3RpdmVJdGVtPXtzZXRBY3RpdmVJdGVtfVxuICAgICAgICAgIG5hbWU9XCJBYm91dFwiXG4gICAgICAgICAgcm91dGU9XCIvXCJcbiAgICAgICAgLz5cbiAgICAgICAgPE5hdkl0ZW1cbiAgICAgICAgICBhY3RpdmVJdGVtPXthY3RpdmVJdGVtfVxuICAgICAgICAgIHNldEFjdGl2ZUl0ZW09e3NldEFjdGl2ZUl0ZW19XG4gICAgICAgICAgbmFtZT1cIlByb2plY3RzXCJcbiAgICAgICAgICByb3V0ZT1cIi9wcm9qZWN0c1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxOYXZJdGVtXG4gICAgICAgICAgYWN0aXZlSXRlbT17YWN0aXZlSXRlbX1cbiAgICAgICAgICBzZXRBY3RpdmVJdGVtPXtzZXRBY3RpdmVJdGVtfVxuICAgICAgICAgIG5hbWU9XCJSZXN1bWVcIlxuICAgICAgICAgIHJvdXRlPVwiL3Jlc3VtZVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Navbar.tsx\n");

/***/ }),

/***/ "./components/Sidebar.tsx":
/*!********************************!*\
  !*** ./components/Sidebar.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/go */ \"./node_modules/react-icons/go/index.esm.js\");\n/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/gi */ \"./node_modules/react-icons/gi/index.esm.js\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/chihhao/workspace/webApp/frontend/Nextjs/portfolio/components/Sidebar.tsx\";\n\n\n\n\n\n\n\n\nconst Sidebar = () => {\n  const {\n    theme,\n    setTheme\n  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_3__.useTheme)();\n\n  const changeTheme = () => {\n    setTheme(theme === 'light' ? 'dark' : 'light');\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n      src: \"/images/site/CH_images.jpg\",\n      alt: \"Myself image\",\n      className: \"mx-auto border rounded-full \",\n      height: \"128px\",\n      width: \"128px\",\n      layout: \"intrinsic\",\n      quality: \"100\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n      className: \"my-4 text-3xl font-medium tracking-wider font-kaushan\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: \"Hi, I am Chih-Hao\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      className: \"px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500\",\n      children: \"Web/Mobile App Developer\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n      className: \"flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500\",\n      href: \"/pdf/ChihHaoChen_Resume_202301.pdf\",\n      download: \"resume_CHIH-HAO\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_gi__WEBPACK_IMPORTED_MODULE_4__.GiTie, {\n        className: \"w-6 h-6\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, undefined), \"Download Resume\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"flex justify-around w-9/12 mx-auto my-5 text-orange md:w-full\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: \"https://www.linkedin.com/in/chih-hao-chen-13583369/\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillLinkedin, {\n          className: \"w-10 h-10 cursor-pointer hover:text-blue-500\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: \"https://github.com/ChihHaoChen\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillGithub, {\n          className: \"w-10 h-10 cursor-pointer hover:text-blue-500\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_6__.MdEmail, {\n        className: \"w-10 h-10 cursor-pointer hover:text-blue-500\",\n        onClick: () => window.open('mailto: c.h.chen.developer@gmail.com')\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500\",\n      style: {\n        marginLeft: '-1rem',\n        marginRight: '-1rem'\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center space-x-2\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_go__WEBPACK_IMPORTED_MODULE_7__.GoLocation, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          children: \"Sapporo, Japan\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"my-2\",\n        children: \"c.h.chen.developer@gmail.com\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      onClick: changeTheme,\n      className: \"w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-orange to-blue-500 focus:outline-none hover:scale-105\",\n      children: \"Toggle Theme\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9jb21wb25lbnRzL1NpZGViYXIudHN4P2U4ZGYiXSwibmFtZXMiOlsiU2lkZWJhciIsInRoZW1lIiwic2V0VGhlbWUiLCJ1c2VUaGVtZSIsImNoYW5nZVRoZW1lIiwid2luZG93Iiwib3BlbiIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE9BQU8sR0FBRyxNQUFNO0FBQ3BCLFFBQU07QUFBRUMsU0FBRjtBQUFTQztBQUFULE1BQXNCQyxxREFBUSxFQUFwQzs7QUFFQSxRQUFNQyxXQUFXLEdBQUcsTUFBTTtBQUN4QkYsWUFBUSxDQUFDRCxLQUFLLEtBQUssT0FBVixHQUFvQixNQUFwQixHQUE2QixPQUE5QixDQUFSO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLG1EQUFEO0FBQ0UsU0FBRyxFQUFDLDRCQUROO0FBRUUsU0FBRyxFQUFDLGNBRk47QUFHRSxlQUFTLEVBQUMsOEJBSFo7QUFJRSxZQUFNLEVBQUMsT0FKVDtBQUtFLFdBQUssRUFBQyxPQUxSO0FBTUUsWUFBTSxFQUFDLFdBTlQ7QUFPRSxhQUFPLEVBQUM7QUFQVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBVUU7QUFBSSxlQUFTLEVBQUMsdURBQWQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkYsZUFhRTtBQUFHLGVBQVMsRUFBQyw0RUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiRixlQWlCRTtBQUNFLGVBQVMsRUFBQyw0SEFEWjtBQUVFLFVBQUksRUFBQyxvQ0FGUDtBQUdFLGNBQVEsRUFBQyxpQkFIWDtBQUFBLDhCQUtFLDhEQUFDLGlEQUFEO0FBQU8saUJBQVMsRUFBQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqQkYsZUEwQkU7QUFBSyxlQUFTLEVBQUMsK0RBQWY7QUFBQSw4QkFDRTtBQUFHLFlBQUksRUFBQyxxREFBUjtBQUFBLCtCQUNFLDhEQUFDLDBEQUFEO0FBQWdCLG1CQUFTLEVBQUM7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRTtBQUFHLFlBQUksRUFBQyxnQ0FBUjtBQUFBLCtCQUNFLDhEQUFDLHdEQUFEO0FBQWMsbUJBQVMsRUFBQztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRixlQU9FLDhEQUFDLG1EQUFEO0FBQ0UsaUJBQVMsRUFBQyw4Q0FEWjtBQUVFLGVBQU8sRUFBRSxNQUNQSSxNQUFNLENBQUNDLElBQVAsQ0FBWSxzQ0FBWjtBQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTFCRixlQTJDRTtBQUNFLGVBQVMsRUFBQywwREFEWjtBQUVFLFdBQUssRUFBRTtBQUFFQyxrQkFBVSxFQUFFLE9BQWQ7QUFBdUJDLG1CQUFXLEVBQUU7QUFBcEMsT0FGVDtBQUFBLDhCQUlFO0FBQUssaUJBQVMsRUFBQyw0Q0FBZjtBQUFBLGdDQUNFLDhEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsZUFRRTtBQUFHLGlCQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBM0NGLGVBc0RFO0FBQ0UsYUFBTyxFQUFFSixXQURYO0FBRUUsZUFBUyxFQUFDLG1KQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXRERjtBQUFBLGtCQURGO0FBK0RELENBdEVEOztBQXdFQSwrREFBZUosT0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2lkZWJhci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IEFpRmlsbEdpdGh1YiwgQWlGaWxsTGlua2VkaW4gfSBmcm9tICdyZWFjdC1pY29ucy9haSdcbmltcG9ydCB7IE1kRW1haWwgfSBmcm9tICdyZWFjdC1pY29ucy9tZCdcbmltcG9ydCB7IEdvTG9jYXRpb24gfSBmcm9tICdyZWFjdC1pY29ucy9nbydcbmltcG9ydCB7IEdpVGllIH0gZnJvbSAncmVhY3QtaWNvbnMvZ2knXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ25leHQtdGhlbWVzJ1xuXG5jb25zdCBTaWRlYmFyID0gKCkgPT4ge1xuICBjb25zdCB7IHRoZW1lLCBzZXRUaGVtZSB9ID0gdXNlVGhlbWUoKVxuXG4gIGNvbnN0IGNoYW5nZVRoZW1lID0gKCkgPT4ge1xuICAgIHNldFRoZW1lKHRoZW1lID09PSAnbGlnaHQnID8gJ2RhcmsnIDogJ2xpZ2h0JylcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxJbWFnZVxuICAgICAgICBzcmM9XCIvaW1hZ2VzL3NpdGUvQ0hfaW1hZ2VzLmpwZ1wiXG4gICAgICAgIGFsdD1cIk15c2VsZiBpbWFnZVwiXG4gICAgICAgIGNsYXNzTmFtZT1cIm14LWF1dG8gYm9yZGVyIHJvdW5kZWQtZnVsbCBcIlxuICAgICAgICBoZWlnaHQ9XCIxMjhweFwiXG4gICAgICAgIHdpZHRoPVwiMTI4cHhcIlxuICAgICAgICBsYXlvdXQ9XCJpbnRyaW5zaWNcIlxuICAgICAgICBxdWFsaXR5PVwiMTAwXCJcbiAgICAgIC8+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwibXktNCB0ZXh0LTN4bCBmb250LW1lZGl1bSB0cmFja2luZy13aWRlciBmb250LWthdXNoYW5cIj5cbiAgICAgICAgPHNwYW4+SGksIEkgYW0gQ2hpaC1IYW88L3NwYW4+XG4gICAgICA8L2gzPlxuICAgICAgPHAgY2xhc3NOYW1lPVwicHgtMiBweS0xIG15LTMgYmctZ3JheS0yMDAgcm91bmRlZC1mdWxsIGRhcms6YmctZGFyay0yMDAgZGFyazpiZy1ibGFjay01MDBcIj5cbiAgICAgICAgV2ViL01vYmlsZSBBcHAgRGV2ZWxvcGVyXG4gICAgICA8L3A+XG5cbiAgICAgIDxhXG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTIgcHktMSBteS0yIGJnLWdyYXktMjAwIHJvdW5kZWQtZnVsbCBjdXJzb3ItcG9pbnRlciBkYXJrOmJnLWRhcmstMjAwIGRhcms6YmctYmxhY2stNTAwXCJcbiAgICAgICAgaHJlZj1cIi9wZGYvQ2hpaEhhb0NoZW5fUmVzdW1lXzIwMjMwMS5wZGZcIlxuICAgICAgICBkb3dubG9hZD1cInJlc3VtZV9DSElILUhBT1wiXG4gICAgICA+XG4gICAgICAgIDxHaVRpZSBjbGFzc05hbWU9XCJ3LTYgaC02XCIgLz5cbiAgICAgICAgRG93bmxvYWQgUmVzdW1lXG4gICAgICA8L2E+XG4gICAgICB7LyogLy8gc29jaWFsIGljb25zICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYXJvdW5kIHctOS8xMiBteC1hdXRvIG15LTUgdGV4dC1vcmFuZ2UgbWQ6dy1mdWxsXCI+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vY2hpaC1oYW8tY2hlbi0xMzU4MzM2OS9cIj5cbiAgICAgICAgICA8QWlGaWxsTGlua2VkaW4gY2xhc3NOYW1lPVwidy0xMCBoLTEwIGN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtYmx1ZS01MDBcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vQ2hpaEhhb0NoZW5cIj5cbiAgICAgICAgICA8QWlGaWxsR2l0aHViIGNsYXNzTmFtZT1cInctMTAgaC0xMCBjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LWJsdWUtNTAwXCIgLz5cbiAgICAgICAgPC9hPlxuICAgICAgICA8TWRFbWFpbFxuICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAgaC0xMCBjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LWJsdWUtNTAwXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgd2luZG93Lm9wZW4oJ21haWx0bzogYy5oLmNoZW4uZGV2ZWxvcGVyQGdtYWlsLmNvbScpXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiAvLyBsb2NhdGlvbiAqL31cblxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJweS00IG15LTUgYmctZ3JheS0yMDAgZGFyazpiZy1kYXJrLTIwMCBkYXJrOmJnLWJsYWNrLTUwMFwiXG4gICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICctMXJlbScsIG1hcmdpblJpZ2h0OiAnLTFyZW0nIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc3BhY2UteC0yXCI+XG4gICAgICAgICAgPEdvTG9jYXRpb24gLz5cbiAgICAgICAgICA8c3Bhbj5TYXBwb3JvLCBKYXBhbjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm15LTJcIj5jLmguY2hlbi5kZXZlbG9wZXJAZ21haWwuY29tPC9wPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17Y2hhbmdlVGhlbWV9XG4gICAgICAgIGNsYXNzTmFtZT1cInctOC8xMiBweC01IHB5LTIgbXktNCB0ZXh0LXdoaXRlIGJnLWJsYWNrIHJvdW5kZWQtZnVsbCBjdXJzb3ItcG9pbnRlciBiZy1ncmFkaWVudC10by1yIGZyb20tb3JhbmdlIHRvLWJsdWUtNTAwIGZvY3VzOm91dGxpbmUtbm9uZSBob3ZlcjpzY2FsZS0xMDVcIlxuICAgICAgPlxuICAgICAgICBUb2dnbGUgVGhlbWVcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Sidebar.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.tsx\");\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Sidebar */ \"./components/Sidebar.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/Users/chihhao/workspace/webApp/frontend/Nextjs/portfolio/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps,\n  router\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(next_themes__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n    attribute: \"class\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"h-full col-span-12 p-4 text-base text-center bg-white lg:col-span-3 rounded-2xl dark:bg-black-500 shadow-custom-light dark:shadow-custom-dark\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex flex-col col-span-12 overflow-hidden bg-white rounded-2xl dark:bg-black-500 dark:text-white lg:col-span-9 shadow-custom-light dark:shadow-custom-dark\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {\n          exitBeforeEnter: true,\n          children: /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, _objectSpread(_objectSpread({}, pageProps), {}, {\n            key: router.route,\n            __self: this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 20,\n              columnNumber: 13\n            }\n          }))\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwicm91dGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUdBLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDLFdBQWI7QUFBd0JDO0FBQXhCLENBQWYsRUFBaUQ7QUFDL0Msc0JBQ0UsOERBQUMsc0RBQUQ7QUFBZSxhQUFTLEVBQUMsT0FBekI7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyx5RkFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQywrSUFBZjtBQUFBLCtCQUNFLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUFLLGlCQUFTLEVBQUMsNEpBQWY7QUFBQSxnQ0FDRSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUsOERBQUMsMERBQUQ7QUFBaUIseUJBQWUsTUFBaEM7QUFBQSxpQ0FDRSxxREFBQyxTQUFELGtDQUFlRCxTQUFmO0FBQTBCLGVBQUcsRUFBRUMsTUFBTSxDQUFDQyxLQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFlRDs7QUFFRCwrREFBZUosS0FBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ25leHQtdGhlbWVzJ1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcidcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZWJhcidcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJvdXRlciB9KSB7XG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgYXR0cmlidXRlPVwiY2xhc3NcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMTIgZ2FwLTYgcHgtNSBteS0xNCBsZzptYi0wIG1kOm1iLTE2IHNtOnB4LTIwIG1kOnB4LTMyIGxnOnB4LTM2IHhsOnB4LTQ4XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIGNvbC1zcGFuLTEyIHAtNCB0ZXh0LWJhc2UgdGV4dC1jZW50ZXIgYmctd2hpdGUgbGc6Y29sLXNwYW4tMyByb3VuZGVkLTJ4bCBkYXJrOmJnLWJsYWNrLTUwMCBzaGFkb3ctY3VzdG9tLWxpZ2h0IGRhcms6c2hhZG93LWN1c3RvbS1kYXJrXCI+XG4gICAgICAgICAgPFNpZGViYXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xMiBvdmVyZmxvdy1oaWRkZW4gYmctd2hpdGUgcm91bmRlZC0yeGwgZGFyazpiZy1ibGFjay01MDAgZGFyazp0ZXh0LXdoaXRlIGxnOmNvbC1zcGFuLTkgc2hhZG93LWN1c3RvbS1saWdodCBkYXJrOnNoYWRvdy1jdXN0b20tZGFya1wiPlxuICAgICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIGV4aXRCZWZvcmVFbnRlcj5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30ga2V5PXtyb3V0ZXIucm91dGV9Lz5cbiAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1RoZW1lUHJvdmlkZXI+ICAgXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_extends_js-node_modules_babel_runtime_helpers_inte-f89ba9","vendors-node_modules_next_image_js-node_modules_react-icons_ai_index_esm_js-node_modules_reac-2a51f3","vendors-node_modules_next_link_js-node_modules_react-icons_gi_index_esm_js-node_modules_react-4f5e55"], function() { return __webpack_exec__("./pages/_app.tsx"); });
module.exports = __webpack_exports__;

})();