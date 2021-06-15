(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9295:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: external "next-themes"
var external_next_themes_namespaceObject = require("next-themes");;
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: external "next/router"
var router_namespaceObject = require("next/router");;
;// CONCATENATED MODULE: ./components/Navbar.tsx






const Navbar = () => {
  const {
    0: activeItem,
    1: setActiveItem
  } = (0,external_react_.useState)('');
  const {
    pathname
  } = (0,router_namespaceObject.useRouter)();

  const NavItem = ({
    activeItem,
    setActiveItem,
    name,
    route
  }) => {
    return activeItem !== name ? /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: route,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "hover:text-green",
          onClick: () => setActiveItem(name),
          children: name
        })
      })
    }) : null;
  };

  (0,external_react_.useEffect)(() => {
    if (pathname === '/') setActiveItem('About');
    if (pathname === '/projects') setActiveItem('Projects');
    if (pathname === '/resume') setActiveItem('Resume');
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex justify-between px-5 py-3 my-3",
    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "text-xl font-bold border-b-4 text-green border-green md:text-2xl",
      children: activeItem
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex space-x-5 text-lg",
      children: [/*#__PURE__*/jsx_runtime_.jsx(NavItem, {
        activeItem: activeItem,
        setActiveItem: setActiveItem,
        name: "About",
        route: "/"
      }), /*#__PURE__*/jsx_runtime_.jsx(NavItem, {
        activeItem: activeItem,
        setActiveItem: setActiveItem,
        name: "Projects",
        route: "/projects"
      }), /*#__PURE__*/jsx_runtime_.jsx(NavItem, {
        activeItem: activeItem,
        setActiveItem: setActiveItem,
        name: "Resume",
        route: "/resume"
      })]
    })]
  });
};

/* harmony default export */ var components_Navbar = (Navbar);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/react-icons/ai/index.esm.js
var index_esm = __webpack_require__(2821);
// EXTERNAL MODULE: ./node_modules/react-icons/go/index.esm.js
var go_index_esm = __webpack_require__(6653);
// EXTERNAL MODULE: ./node_modules/react-icons/gi/index.esm.js
var gi_index_esm = __webpack_require__(2585);
;// CONCATENATED MODULE: ./components/Sidebar.tsx










const Sidebar = () => {
  const {
    theme,
    setTheme
  } = (0,external_next_themes_namespaceObject.useTheme)();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
      src: "/images/site/CH_images.jpg",
      alt: "Myself image",
      className: "mx-auto border rounded-full ",
      height: "128px",
      width: "128px",
      layout: "intrinsic",
      quality: "100"
    }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
      className: "my-4 text-3xl font-medium tracking-wider font-kaushan",
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "Hi, I am Chih-Hao"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500",
      children: "Web/Mobile App Developer"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
      className: "flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500",
      href: "",
      download: "name",
      children: [/*#__PURE__*/jsx_runtime_.jsx(gi_index_esm/* GiTie */.Gww, {
        className: "w-6 h-6"
      }), "Download Resume"]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex justify-around w-9/12 mx-auto my-5 text-green md:w-full",
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "",
        children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* AiFillLinkedin */._iD, {
          className: "w-8 h-8 cursor-pointer"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "",
        children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* AiFillGithub */.RrF, {
          className: "w-8 h-8 cursor-pointer"
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500",
      style: {
        marginLeft: '-1rem',
        marginRight: '-1rem'
      },
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center justify-center space-x-2",
        children: [/*#__PURE__*/jsx_runtime_.jsx(go_index_esm/* GoLocation */.Sw5, {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "Taipei, Taiwan"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "my-2",
        children: "c.h.chen.developer@gmail.com"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("button", {
      className: "w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none",
      onClick: () => window.open('mailto: c.h.chen.developer@gmail.com'),
      children: "Email Me"
    }), /*#__PURE__*/jsx_runtime_.jsx("button", {
      onClick: changeTheme,
      className: "w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105 ",
      children: "Toggle Theme"
    })]
  });
};

/* harmony default export */ var components_Sidebar = (Sidebar);
;// CONCATENATED MODULE: ./pages/_app.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function MyApp({
  Component,
  pageProps,
  router
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(external_next_themes_namespaceObject.ThemeProvider, {
    attribute: "class",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "h-full col-span-12 p-4 text-base text-center bg-white lg:col-span-3 rounded-2xl dark:bg-black-500 shadow-custom-light dark:shadow-custom-dark",
        children: /*#__PURE__*/jsx_runtime_.jsx(components_Sidebar, {})
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col col-span-12 overflow-hidden bg-white rounded-2xl dark:bg-black-500 dark:text-white lg:col-span-9 shadow-custom-light dark:shadow-custom-dark",
        children: [/*#__PURE__*/jsx_runtime_.jsx(components_Navbar, {}), /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.AnimatePresence, {
          exitBeforeEnter: true,
          children: /*#__PURE__*/(0,external_react_.createElement)(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
            key: router.route
          }))
        })]
      })]
    })
  });
}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 762:
/***/ (function(module) {

"use strict";
module.exports = require("framer-motion");;

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [193,297,653,675,75], function() { return __webpack_exec__(9295); });
module.exports = __webpack_exports__;

})();