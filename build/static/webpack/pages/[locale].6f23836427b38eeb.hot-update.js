"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[locale]",{

/***/ "./components/Testimonials/Testimonials.js":
/*!*************************************************!*\
  !*** ./components/Testimonials/Testimonials.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var E_Development_2024_05_05_Ahaux_Agency_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/useMediaQuery */ \"./node_modules/@mui/material/useMediaQuery/index.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Container */ \"./node_modules/@mui/material/Container/index.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-i18next */ \"./node_modules/next-i18next/dist/esm/index.js\");\n/* harmony import */ var _Cards_Testimonial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Cards/Testimonial */ \"./components/Cards/Testimonial.js\");\n/* harmony import */ var _Title_WithIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Title/WithIcon */ \"./components/Title/WithIcon.js\");\n/* harmony import */ var _CompanyLogo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../CompanyLogo */ \"./components/CompanyLogo/index.js\");\n/* harmony import */ var _Parallax_SingleSquare__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Parallax/SingleSquare */ \"./components/Parallax/SingleSquare.js\");\n/* harmony import */ var _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/images/imgAPI */ \"./public/images/imgAPI.js\");\n/* harmony import */ var _testi_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./testi-style */ \"./components/Testimonials/testi-style.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);\n\n\nvar _jsxFileName = \"E:\\\\Development\\\\2024-05-05-Ahaux\\\\Agency\\\\components\\\\Testimonials\\\\Testimonials.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,E_Development_2024_05_05_Ahaux_Agency_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar testiContent = [{\n  text: \"En Ahau-X, fusionamos tradición agrícola y tecnología para llevar la producción a nuevas alturas.\",\n  avatar: _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_8__[\"default\"].avatar[1],\n  name: \"Claudia Gómez\",\n  title: \"CEO\",\n  rating: 0\n}, {\n  text: \"Artificial intelligence is invaluable, enhancing efficiency and effectiveness across all sectors.\",\n  avatar: _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_8__[\"default\"].avatar[9],\n  name: \"Esteban Rivas\",\n  title: \"COO\",\n  rating: 0\n}, {\n  text: \"I am delighted to recognize the Hunab and Kaax platform for their great ideas.\",\n  avatar: _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_8__[\"default\"].avatar[8],\n  name: \"Abel Tony\",\n  title: \"Developer\",\n  rating: 5\n}];\n\nfunction Testimonials() {\n  _s();\n\n  var _this = this;\n\n  // Theme breakpoints\n  var theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_11__.useTheme)();\n  var isDesktop = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(theme.breakpoints.up(\"lg\"));\n\n  var _useStyle = (0,_testi_style__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(),\n      classes = _useStyle.classes; // Carousel Setting\n\n\n  var settings = {\n    dots: true,\n    infinite: false,\n    speed: 500,\n    slidesToShow: 4,\n    arrows: false,\n    slidesToScroll: 1,\n    variableWidth: true,\n    responsive: [{\n      breakpoint: 1100,\n      settings: {\n        slidesToShow: 2,\n        slidesToScroll: 1,\n        infinite: true,\n        dots: true\n      }\n    }, {\n      breakpoint: 800,\n      settings: {\n        slidesToShow: 2\n      }\n    }, {\n      breakpoint: 600,\n      settings: {\n        slidesToShow: 1\n      }\n    }]\n  }; // Translation function\n\n  var _useTranslation = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)(\"common\"),\n      t = _useTranslation.t; // Carousel\n\n\n  var slider = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (theme.direction === \"ltr\" && window.innerWidth > 1279) {\n      var limit = window.innerWidth > 1400 ? 3 : 2;\n      var lastSlide = Math.floor(testiContent.length - limit);\n      slider.current.slickGoTo(lastSlide);\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n    className: classes.root,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_Parallax_SingleSquare__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n      className: classes.carousel,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _objectSpread(_objectSpread({\n        ref: slider\n      }, settings), {}, {\n        children: [isDesktop && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n          className: classes.item,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n            className: classes.itemPropsFirst\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 13\n        }, this), testiContent.map(function (item, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n            className: classes.item,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_Cards_Testimonial__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n              avatar: item.avatar,\n              title: item.title,\n              name: item.name,\n              text: item.text,\n              star: item.rating\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 103,\n              columnNumber: 15\n            }, _this)\n          }, index.toString(), false, {\n            fileName: _jsxFileName,\n            lineNumber: 102,\n            columnNumber: 13\n          }, _this);\n        }), isDesktop && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n          className: classes.item,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n            className: classes.itemPropsLast\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 114,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 13\n        }, this)]\n      }), void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n      className: classes.floatingTitle,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n        fixed: true,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n          className: classes.title,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_Title_WithIcon__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            text: t(\"agency-landing.testimonial_title\"),\n            icon: \"format_quote\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 122,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_CompanyLogo__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 92,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Testimonials, \"YBnm8nTOLjREYnOlW8nzBx3YOAE=\", false, function () {\n  return [_mui_material_styles__WEBPACK_IMPORTED_MODULE_11__.useTheme, _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_12__[\"default\"], _testi_style__WEBPACK_IMPORTED_MODULE_9__[\"default\"], next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation];\n});\n\n_c = Testimonials;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Testimonials);\n\nvar _c;\n\n$RefreshReg$(_c, \"Testimonials\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Rlc3RpbW9uaWFscy9UZXN0aW1vbmlhbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTWMsWUFBWSxHQUFHLENBQ25CO0VBQ0VDLElBQUksRUFBRSxtR0FEUjtFQUVFQyxNQUFNLEVBQUVKLHVFQUZWO0VBR0VLLElBQUksRUFBRSxlQUhSO0VBSUVDLEtBQUssRUFBRSxLQUpUO0VBS0VDLE1BQU0sRUFBRTtBQUxWLENBRG1CLEVBUW5CO0VBQ0VKLElBQUksRUFBRSxtR0FEUjtFQUVFQyxNQUFNLEVBQUVKLHVFQUZWO0VBR0VLLElBQUksRUFBRSxlQUhSO0VBSUVDLEtBQUssRUFBRSxLQUpUO0VBS0VDLE1BQU0sRUFBRTtBQUxWLENBUm1CLEVBZW5CO0VBQ0VKLElBQUksRUFBRSxnRkFEUjtFQUVFQyxNQUFNLEVBQUVKLHVFQUZWO0VBR0VLLElBQUksRUFBRSxXQUhSO0VBSUVDLEtBQUssRUFBRSxXQUpUO0VBS0VDLE1BQU0sRUFBRTtBQUxWLENBZm1CLENBQXJCOztBQXdCQSxTQUFTQyxZQUFULEdBQXdCO0VBQUE7O0VBQUE7O0VBQ3RCO0VBQ0EsSUFBTUMsS0FBSyxHQUFHakIsK0RBQVEsRUFBdEI7RUFDQSxJQUFNa0IsU0FBUyxHQUFHbkIsd0VBQWEsQ0FBQ2tCLEtBQUssQ0FBQ0UsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FBRCxDQUEvQjs7RUFDQSxnQkFBb0JYLHdEQUFRLEVBQTVCO0VBQUEsSUFBUVksT0FBUixhQUFRQSxPQUFSLENBSnNCLENBTXRCOzs7RUFDQSxJQUFNQyxRQUFRLEdBQUc7SUFDZkMsSUFBSSxFQUFFLElBRFM7SUFFZkMsUUFBUSxFQUFFLEtBRks7SUFHZkMsS0FBSyxFQUFFLEdBSFE7SUFJZkMsWUFBWSxFQUFFLENBSkM7SUFLZkMsTUFB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QU8sQ0FBQytCLGFBQXhCO01BQUEsdUJBQ0UsK0RBQUMsZ0VBQUQ7UUFBVyxLQUFLLE1BQWhCO1FBQUEsdUJBQ0U7VUFBSyxTQUFTLEVBQUUvQixPQUFPLENBQUNQLEtBQXhCO1VBQUEsdUJBQ0UsK0RBQUMsdURBQUQ7WUFDRSxJQUFJLEVBQUVrQixDQUFDLENBQUMsa0NBQUQsQ0FEVDtZQUVFLElBQUksRUFBQztVQUZQO1lBQUE7WUFBQTtZQUFBO1VBQUE7UUFERjtVQUFBO1VBQUE7VUFBQTtRQUFBO01BREY7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUEsUUEzQkYsZUFxQ0UsK0RBQUMsb0RBQUQ7TUFBQTtNQUFBO01BQUE7SUFBQSxRQXJDRjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFERjtBQXlDRDs7R0E5RlFoQjtVQUVPaEIsNkRBQ0lELHNFQUNFVSxzREFxQ05OOzs7S0F6Q1BhO0FBZ0dULCtEQUFlQSxZQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGVzdGltb25pYWxzL1Rlc3RpbW9uaWFscy5qcz8wM2M3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tIFwiQG11aS9tYXRlcmlhbC91c2VNZWRpYVF1ZXJ5XCI7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ29udGFpbmVyXCI7XHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tIFwibmV4dC1pMThuZXh0XCI7XHJcbmltcG9ydCBUZXN0aW1vbmlhbENhcmQgZnJvbSBcIi4uL0NhcmRzL1Rlc3RpbW9uaWFsXCI7XHJcbmltcG9ydCBUaXRsZUljb24gZnJvbSBcIi4uL1RpdGxlL1dpdGhJY29uXCI7XHJcbmltcG9ydCBDb21wYW55TG9nbyBmcm9tIFwiLi4vQ29tcGFueUxvZ29cIjtcclxuaW1wb3J0IFNxdWFyZVBhcmFsbGF4IGZyb20gXCIuLi9QYXJhbGxheC9TaW5nbGVTcXVhcmVcIjtcclxuaW1wb3J0IGltZ0FQSSBmcm9tIFwifi9wdWJsaWMvaW1hZ2VzL2ltZ0FQSVwiO1xyXG5pbXBvcnQgdXNlU3R5bGUgZnJvbSBcIi4vdGVzdGktc3R5bGVcIjtcclxuXHJcbmNvbnN0IHRlc3RpQ29udGVudCA9IFtcclxuICB7XHJcbiAgICB0ZXh0OiBcIkVuIEFoYXUtWCwgZnVzaW9uYW1vcyB0cmFkaWNpw7NuIGFncsOtY29sYSB5IHRlY25vbG9nw61hIHBhcmEgbGxldmFyIGxhIHByb2R1Y2Npw7NuIGEgbnVldmFzIGFsdHVyYXMuXCIsXHJcbiAgICBhdmF0YXI6IGltZ0FQSS5hdmF0YXJbMV0sXHJcbiAgICBuYW1lOiBcIkNsYXVkaWEgR8OzbWV6XCIsXHJcbiAgICB0aXRsZTogXCJDRU9cIixcclxuICAgIHJhdGluZzogMCxcclxuICB9LFxyXG4gIHtcclxuICAgIHRleHQ6IFwiQXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2UgaXMgaW52YWx1YWJsZSwgZW5oYW5jaW5nIGVmZmljaWVuY3kgYW5kIGVmZmVjdGl2ZW5lc3MgYWNyb3NzIGFsbCBzZWN0b3JzLlwiLFxyXG4gICAgYXZhdGFyOiBpbWdBUEkuYXZhdGFyWzldLFxyXG4gICAgbmFtZTogXCJFc3RlYmFuIFJpdmFzXCIsXHJcbiAgICB0aXRsZTogXCJDT09cIixcclxuICAgIHJhdGluZzogMCxcclxuICB9LFxyXG4gIHtcclxuICAgIHRleHQ6IFwiSSBhbSBkZWxpZ2h0ZWQgdG8gcmVjb2duaXplIHRoZSBIdW5hYiBhbmQgS2FheCBwbGF0Zm9ybSBmb3IgdGhlaXIgZ3JlYXQgaWRlYXMuXCIsXHJcbiAgICBhdmF0YXI6IGltZ0FQSS5hdmF0YXJbOF0sXHJcbiAgICBuYW1lOiBcIkFiZWwgVG9ueVwiLFxyXG4gICAgdGl0bGU6IFwiRGV2ZWxvcGVyXCIsXHJcbiAgICByYXRpbmc6IDUsXHJcbiAgfSxcclxuXTtcclxuXHJcbmZ1bmN0aW9uIFRlc3RpbW9uaWFscygpIHtcclxuICAvLyBUaGVtZSBicmVha3BvaW50c1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICBjb25zdCBpc0Rlc2t0b3AgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLnVwKFwibGdcIikpO1xyXG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gdXNlU3R5bGUoKTtcclxuXHJcbiAgLy8gQ2Fyb3VzZWwgU2V0dGluZ1xyXG4gIGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogMTEwMCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDgwMCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA2MDAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9O1xyXG5cclxuICAvLyBUcmFuc2xhdGlvbiBmdW5jdGlvblxyXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oXCJjb21tb25cIik7XHJcblxyXG4gIC8vIENhcm91c2VsXHJcbiAgY29uc3Qgc2xpZGVyID0gdXNlUmVmKG51bGwpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodGhlbWUuZGlyZWN0aW9uID09PSBcImx0clwiICYmIHdpbmRvdy5pbm5lcldpZHRoID4gMTI3OSkge1xyXG4gICAgICBjb25zdCBsaW1pdCA9IHdpbmRvdy5pbm5lcldpZHRoID4gMTQwMCA/IDMgOiAyO1xyXG4gICAgICBjb25zdCBsYXN0U2xpZGUgPSBNYXRoLmZsb29yKHRlc3RpQ29udGVudC5sZW5ndGggLSBsaW1pdCk7XHJcbiAgICAgIHNsaWRlci5jdXJyZW50LnNsaWNrR29UbyhsYXN0U2xpZGUpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8U3F1YXJlUGFyYWxsYXggLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2Fyb3VzZWx9PlxyXG4gICAgICAgIDxDYXJvdXNlbCByZWY9e3NsaWRlcn0gey4uLnNldHRpbmdzfT5cclxuICAgICAgICAgIHtpc0Rlc2t0b3AgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtUHJvcHNGaXJzdH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge3Rlc3RpQ29udGVudC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleC50b1N0cmluZygpfSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0+XHJcbiAgICAgICAgICAgICAgPFRlc3RpbW9uaWFsQ2FyZFxyXG4gICAgICAgICAgICAgICAgYXZhdGFyPXtpdGVtLmF2YXRhcn1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgbmFtZT17aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgdGV4dD17aXRlbS50ZXh0fVxyXG4gICAgICAgICAgICAgICAgc3Rhcj17aXRlbS5yYXRpbmd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIHtpc0Rlc2t0b3AgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtUHJvcHNMYXN0fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZsb2F0aW5nVGl0bGV9PlxyXG4gICAgICAgIDxDb250YWluZXIgZml4ZWQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICAgIDxUaXRsZUljb25cclxuICAgICAgICAgICAgICB0ZXh0PXt0KFwiYWdlbmN5LWxhbmRpbmcudGVzdGltb25pYWxfdGl0bGVcIil9XHJcbiAgICAgICAgICAgICAgaWNvbj1cImZvcm1hdF9xdW90ZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxDb21wYW55TG9nbyAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVzdGltb25pYWxzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ1c2VNZWRpYVF1ZXJ5IiwidXNlVGhlbWUiLCJDb250YWluZXIiLCJDYXJvdXNlbCIsInVzZVRyYW5zbGF0aW9uIiwiVGVzdGltb25pYWxDYXJkIiwiVGl0bGVJY29uIiwiQ29tcGFueUxvZ28iLCJTcXVhcmVQYXJhbGxheCIsImltZ0FQSSIsInVzZVN0eWxlIiwidGVzdGlDb250ZW50IiwidGV4dCIsImF2YXRhciIsIm5hbWUiLCJ0aXRsZSIsInJhdGluZyIsIlRlc3RpbW9uaWFscyIsInRoZW1lIiwiaXNEZXNrdG9wIiwiYnJlYWtwb2ludHMiLCJ1cCIsImNsYXNzZXMiLCJzZXR0aW5ncyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93IiwiYXJyb3dzIiwic2xpZGVzVG9TY3JvbGwiLCJ2YXJpYWJsZVdpZHRoIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJ0Iiwic2xpZGVyIiwiZGlyZWN0aW9uIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImxpbWl0IiwibGFzdFNsaWRlIiwiTWF0aCIsImZsb29yIiwibGVuZ3RoIiwiY3VycmVudCIsInNsaWNrR29UbyIsInJvb3QiLCJjYXJvdXNlbCIsIml0ZW0iLCJpdGVtUHJvcHNGaXJzdCIsIm1hcCIsImluZGV4IiwidG9TdHJpbmciLCJpdGVtUHJvcHNMYXN0IiwiZmxvYXRpbmdUaXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Testimonials/Testimonials.js\n"));

/***/ })

});