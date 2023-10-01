"use strict";
exports.id = 367;
exports.ids = [367];
exports.modules = {

/***/ 7367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3691);
/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8742);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9755);
/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_legacy_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _layout_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4974);









const ProductCard = ({ product , preview  })=>{
    const colors = (0,_layout_colors__WEBPACK_IMPORTED_MODULE_8__/* .getColors */ .E)();
    const imageUrl = product.attributes.images?.data && product.attributes.images?.data[0].attributes.url;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
            item: true,
            lg: 3,
            md: 4,
            sm: 6,
            xs: 12,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4___default()), {
                sx: {
                    minWidth: "200px",
                    backgroundColor: "#fff",
                    width: "100%",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: "100%",
                    boxShadow: "rgba(0, 0, 0, 0.15) 2px 6px 16px !important"
                },
                children: [
                    product.attributes.isNew && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_2___default()), {
                        sx: {
                            p: 0,
                            pt: 0,
                            position: "absolute",
                            top: 16,
                            zIndex: 99
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_1___default()), {
                            size: "large",
                            variant: "contained",
                            sx: {
                                borderRadius: 0,
                                height: "30px",
                                opacity: "80%",
                                textAlign: "left"
                            },
                            children: "NAUJAS!"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4___default()), {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                passHref: true,
                                href: `/ortopedijos-technika/${product.attributes.slug}`,
                                style: {
                                    width: "100%"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    sx: {
                                        "::hover": {
                                            opacity: .8
                                        },
                                        px: 2,
                                        pt: 3
                                    },
                                    children: imageUrl && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_legacy_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                        src: imageUrl,
                                        loading: "lazy",
                                        alt: product.attributes.title,
                                        height: 340,
                                        width: 340,
                                        objectFit: "contain"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4___default()), {
                                px: 2,
                                py: 2,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        passHref: true,
                                        href: `/ortopedijos-technika/${product.attributes.slug}`,
                                        style: {
                                            width: "100%"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            fontSize: 20,
                                            lineHeight: "22px",
                                            gutterBottom: true,
                                            color: colors.primary,
                                            fontWeight: 900,
                                            sx: {
                                                ":hover": {
                                                    filter: "brightness(75%)",
                                                    cursor: "pointer"
                                                }
                                            },
                                            children: product.attributes.title
                                        })
                                    }),
                                    !preview && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            product?.attributes.category?.data?.attributes.title && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                color: colors.primary,
                                                fontSize: 12,
                                                children: [
                                                    "KATEGORIJA ",
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        style: {
                                                            fontWeight: 600,
                                                            color: colors.grey,
                                                            fontSize: 14,
                                                            lineHeight: "12px",
                                                            textTransform: "uppercase"
                                                        },
                                                        children: product?.attributes.category?.data?.attributes.title
                                                    })
                                                ]
                                            }),
                                            product?.attributes.type && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                color: colors.primary,
                                                fontSize: 12,
                                                pt: 1,
                                                children: [
                                                    "TIPAS ",
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        style: {
                                                            fontWeight: 600,
                                                            color: colors.grey,
                                                            fontSize: 14,
                                                            lineHeight: "12px",
                                                            textTransform: "uppercase"
                                                        },
                                                        children: product?.attributes.type
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_2___default()), {
                        sx: {
                            p: 0,
                            pt: 0,
                            position: "relative",
                            bottom: 0
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                            passHref: true,
                            href: `/ortopedijos-technika/${product.attributes.slug}`,
                            style: {
                                width: "100%"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_1___default()), {
                                size: "large",
                                color: "primary",
                                variant: "contained",
                                fullWidth: true,
                                sx: {
                                    borderRadius: 0,
                                    height: "50px"
                                },
                                children: "Peržiūrėti"
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCard);


/***/ })

};
;