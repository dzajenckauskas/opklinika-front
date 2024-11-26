(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3935:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__PT_Sans_2ff8ac', '__PT_Sans_Fallback_2ff8ac'","fontStyle":"normal"},
	"className": "__className_2ff8ac"
};


/***/ }),

/***/ 3437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"path":"pages/_app.tsx","import":"PT_Sans","arguments":[{"weight":["400","700"],"style":["normal"],"subsets":["latin"]}],"variableName":"ptSans"}
var _app_tsx_import_PT_Sans_arguments_weight_400_700_style_normal_subsets_latin_variableName_ptSans_ = __webpack_require__(3935);
var _app_tsx_import_PT_Sans_arguments_weight_400_700_style_normal_subsets_latin_variableName_ptSans_default = /*#__PURE__*/__webpack_require__.n(_app_tsx_import_PT_Sans_arguments_weight_400_700_style_normal_subsets_latin_variableName_ptSans_);
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
;// CONCATENATED MODULE: external "@mui/material/styles"
const styles_namespaceObject = require("@mui/material/styles");
;// CONCATENATED MODULE: ./pages/_app.tsx





const mainTheme = (0,styles_namespaceObject.createTheme)({
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& label": {
                        color: "#fff"
                    },
                    "& label.Mui-focused": {
                        color: "#fff"
                    },
                    "& .MuiInput-underline:after": {
                        borderBottomColor: "#fff"
                    },
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor: "#fff"
                        },
                        "&:hover fieldset": {
                            borderColor: "#fff",
                            borderWidth: "0.15rem"
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "#fff"
                        }
                    }
                }
            }
        }
    },
    typography: {
        h1: {
            fontSize: "25px",
            fontWeight: "600"
        },
        h2: {
            fontSize: "20px",
            fontWeight: "600"
        },
        h3: {
            fontSize: "18px",
            fontWeight: "600"
        },
        h4: {
            fontSize: "16px",
            fontWeight: "500"
        },
        h5: {
            fontSize: "14px",
            fontWeight: "500"
        },
        h6: {
            fontWeight: 300,
            fontSize: "12px",
            letterSpacing: ".5px"
        },
        body2: {
            fontSize: "12px"
        },
        body1: {
            fontSize: "12px"
        },
        button: {
            fontSize: "10px"
        }
    },
    palette: {
        primary: {
            main: "#1E6EA1"
        },
        secondary: {
            main: "#090909"
        },
        error: {
            main: "#fff"
        },
        info: {
            main: "#fff",
            dark: "#f2f2f2"
        }
    }
});
function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            jsx_runtime_.jsx((style_default()), {
                id: "1f0cb071358d1b71",
                dynamic: [
                    (_app_tsx_import_PT_Sans_arguments_weight_400_700_style_normal_subsets_latin_variableName_ptSans_default()).style.fontFamily
                ],
                children: `html{font-family:${(_app_tsx_import_PT_Sans_arguments_weight_400_700_style_normal_subsets_latin_variableName_ptSans_default()).style.fontFamily}}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(styles_namespaceObject.ThemeProvider, {
                theme: mainTheme,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps,
                    className: style_default().dynamic([
                        [
                            "1f0cb071358d1b71",
                            [
                                (_app_tsx_import_PT_Sans_arguments_weight_400_700_style_normal_subsets_latin_variableName_ptSans_default()).style.fontFamily
                            ]
                        ]
                    ]) + " " + (pageProps && pageProps.className != null && pageProps.className || "")
                })
            })
        ]
    });
}
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3437));
module.exports = __webpack_exports__;

})();