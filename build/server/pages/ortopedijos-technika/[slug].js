"use strict";
(() => {
var exports = {};
exports.id = 490;
exports.ids = [490];
exports.modules = {

/***/ 8379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ getProductQuery)
/* harmony export */ });
const getProductQuery = (slug)=>{
    // let url = `${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}?populate=deep`
    let url = `${"https://www.api.opklinika.lt"}/api/products?filters[slug][$eq]=${slug}&populate=deep`;
    return url;
};


/***/ }),

/***/ 1879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7915);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8742);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9755);
/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_legacy_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _layout_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4974);








const ProductViewPage = ({ product  })=>{
    const imageUrl = product?.attributes?.images?.data && product?.attributes.images?.data[0]?.attributes.url;
    const colors = (0,_layout_colors__WEBPACK_IMPORTED_MODULE_7__/* .getColors */ .E)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3___default()), {
        alignItems: "flex-start",
        p: 4,
        maxWidth: "lg",
        mx: "auto",
        minHeight: "80vh",
        sx: {
            backgroundColor: "#f9f9f9"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                href: "/ortopedijos-technikos-katalogas",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3___default()), {
                    direction: "row",
                    sx: {
                        alignItems: "center"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.ArrowBack, {
                            sx: {
                                height: "14px",
                                color: colors.primary
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
                            size: "small",
                            disableRipple: true,
                            sx: {
                                display: "flex",
                                flexDirection: "row",
                                alignContent: "center",
                                ":hover": {
                                    backgroundColor: "transparent",
                                    textDecoration: "underline"
                                }
                            },
                            children: "Ortopedijos priemonių katalogas"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3___default()), {
                color: "primary.main",
                direction: "row",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3___default()), {
                    mt: {
                        lg: 4,
                        md: 4,
                        sm: 4,
                        xs: 2
                    },
                    spacing: {
                        lg: 4,
                        md: 2,
                        sm: 4,
                        xs: 2
                    },
                    pb: 10,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3___default()), {
                            sx: {
                                color: "primary.main"
                            },
                            direction: {
                                lg: "row",
                                md: "row",
                                sm: "column",
                                xs: "column"
                            },
                            pb: 4,
                            spacing: {
                                lg: 4,
                                md: 4,
                                sm: 4,
                                xs: 4
                            },
                            children: [
                                imageUrl && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    sx: {
                                        backgroundColor: "#fff",
                                        boxShadow: "rgba(0, 0, 0, 0.15) 2px 6px 16px !important"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_legacy_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        alt: product?.attributes.title,
                                        src: imageUrl,
                                        width: 1093,
                                        height: 1051,
                                        objectFit: "contain"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    spacing: 1,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            variant: "h1",
                                            maxWidth: 600,
                                            textTransform: "uppercase",
                                            pb: 2,
                                            children: product?.attributes?.title
                                        }),
                                        product?.attributes?.category?.data?.attributes.title && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
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
                                                        fontSize: 16,
                                                        lineHeight: "14px",
                                                        textTransform: "uppercase"
                                                    },
                                                    children: product?.attributes?.category?.data?.attributes.title
                                                })
                                            ]
                                        }),
                                        product?.attributes?.prices && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            color: colors.primary,
                                            fontSize: 12,
                                            children: [
                                                "KAINOS ",
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    style: {
                                                        fontWeight: 600,
                                                        color: colors.grey,
                                                        fontSize: 16,
                                                        lineHeight: "14px"
                                                    },
                                                    children: [
                                                        product?.attributes.prices,
                                                        "€"
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            fontSize: 12,
                                            color: colors.primary,
                                            children: [
                                                "TIPAS ",
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    style: {
                                                        fontWeight: 600,
                                                        color: colors.grey,
                                                        fontSize: 16,
                                                        lineHeight: "14px"
                                                    },
                                                    children: product?.attributes?.type
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            variant: "body1",
                                            fontSize: 14,
                                            lineHeight: "18px",
                                            color: colors.grey,
                                            pt: 1,
                                            textAlign: "justify",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    style: {
                                                        fontWeight: 600,
                                                        textTransform: "uppercase",
                                                        lineHeight: "30px",
                                                        fontSize: "16px"
                                                    },
                                                    children: [
                                                        " ",
                                                        "Techninis aprašymas ir paskirtis"
                                                    ]
                                                }),
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                product?.attributes?.description
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3___default()), {
                            direction: "column",
                            sx: {
                                border: "1px solid #1e6da1",
                                color: "#000000DE",
                                boxShadow: "rgba(0, 0, 0, 0.15) 2px 6px 16px !important"
                            },
                            children: product.attributes?.diagnosesTable.map((diagnose, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    sx: {
                                        boxShadow: "rgba(0, 0, 0, 0.15) 2px 6px 16px !important"
                                    },
                                    children: [
                                        product.attributes.diagnosesTable[index !== 1 ? index - 1 : 0]?.percent !== product.attributes.diagnosesTable[index].percent && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    direction: "row",
                                                    justifyContent: "space-between",
                                                    width: {
                                                        lg: "100%",
                                                        md: "100%",
                                                        sm: "100%",
                                                        xs: "100%"
                                                    },
                                                    sx: {
                                                        py: 0,
                                                        px: 1,
                                                        backgroundColor: colors.primary
                                                    },
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                        color: colors.white,
                                                        fontSize: 22,
                                                        py: 1,
                                                        fontWeight: 600,
                                                        textTransform: "uppercase",
                                                        children: [
                                                            "Kompensuojama",
                                                            " ",
                                                            diagnose.percent,
                                                            "%"
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    direction: {
                                                        lg: "row",
                                                        md: "row",
                                                        sm: "row",
                                                        xs: "column"
                                                    },
                                                    sx: {
                                                        backgroundColor: "#fff",
                                                        border: "1px solid #1e6da1"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            width: {
                                                                lg: "50%",
                                                                md: "50%",
                                                                sm: "50%",
                                                                xs: "100%"
                                                            },
                                                            direction: "row",
                                                            p: 1,
                                                            sx: {
                                                                borderRight: "1px solid #1e6da1"
                                                            },
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                color: colors.primary,
                                                                fontSize: 16,
                                                                fontWeight: 600,
                                                                textTransform: "uppercase",
                                                                lineHeight: "15px",
                                                                children: "Diagnozės"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            display: {
                                                                lg: "flex",
                                                                md: "flex",
                                                                sm: "flex",
                                                                xs: "none"
                                                            },
                                                            width: {
                                                                lg: "50%",
                                                                md: "50%",
                                                                sm: "50%",
                                                                xs: "100%"
                                                            },
                                                            direction: "row",
                                                            alignItems: "center",
                                                            p: 1,
                                                            sx: {
                                                                borderLeft: "1px solid #1e6da1"
                                                            },
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                color: colors.primary,
                                                                fontSize: 16,
                                                                fontWeight: 600,
                                                                textTransform: "uppercase",
                                                                lineHeight: "15px",
                                                                children: "Gydytojai"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            direction: {
                                                lg: "row",
                                                md: "row",
                                                sm: "row",
                                                xs: "column"
                                            },
                                            sx: {
                                                border: ".5px solid #1e6da1",
                                                backgroundColor: "#fff"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    width: {
                                                        lg: "50%",
                                                        md: "50%",
                                                        sm: "50%",
                                                        xs: "100%"
                                                    },
                                                    children: diagnose.diagnoses?.map((diagnose)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            sx: {
                                                                border: ".5px solid #1e6da1",
                                                                borderRight: "1px solid #1e6da1",
                                                                p: 1,
                                                                height: "100%",
                                                                alignItems: "center"
                                                            },
                                                            direction: "row",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                fontSize: 14,
                                                                lineHeight: "18px",
                                                                children: diagnose.diagnose
                                                            })
                                                        }, diagnose.id))
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    width: {
                                                        lg: "50%",
                                                        md: "50%",
                                                        sm: "50%",
                                                        xs: "100%"
                                                    },
                                                    direction: "row",
                                                    alignItems: "center",
                                                    p: 1,
                                                    sx: {
                                                        border: "1px solid #1e6da1"
                                                    },
                                                    display: {
                                                        lg: "none",
                                                        md: "none",
                                                        sm: "none",
                                                        xs: "flex"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                        color: colors.primary,
                                                        fontSize: 16,
                                                        fontWeight: 600,
                                                        textTransform: "uppercase",
                                                        lineHeight: "15px",
                                                        children: "Gydytojai"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    justifyContent: "center",
                                                    width: {
                                                        lg: "50%",
                                                        md: "50%",
                                                        sm: "50%",
                                                        xs: "100%"
                                                    },
                                                    sx: {
                                                        border: ".5px solid #1e6da1",
                                                        p: 1,
                                                        borderLeft: "1px solid #1e6da1"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                        fontSize: 14,
                                                        lineHeight: "15px",
                                                        textAlign: {
                                                            lg: "center",
                                                            md: "center",
                                                            sm: "center",
                                                            xs: "left"
                                                        },
                                                        children: diagnose.specialists
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }, diagnose.id))
                        }),
                        product?.attributes?.notes?.map((note)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3___default()), {
                                justifyContent: "center",
                                width: {
                                    lg: "100%",
                                    md: "100%",
                                    sm: "100%",
                                    xs: "100%"
                                },
                                pt: 0,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    color: colors.primary,
                                    fontStyle: "italic",
                                    fontSize: 12,
                                    lineHeight: "14px",
                                    children: note?.text
                                })
                            }, note.id))
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductViewPage);


/***/ }),

/***/ 8152:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_products_getProductQuery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8379);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(932);
/* harmony import */ var _components_layout_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8165);
/* harmony import */ var _components_pages_ProductViewPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1879);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8742);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9648);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Footer__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_5__]);
([_components_Footer__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const ProductView = ({ product  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: `${product.attributes.title} - Ortopedijos paslaugų klinika`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: `${product.attributes.title}. ${product.attributes.description}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4___default()), {
                sx: {
                    minHeight: "100vh",
                    height: "100%",
                    backgroundColor: "#f9f9f9"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_ProductViewPage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        product: product
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductView);
const getServerSideProps = async (context)=>{
    const slug = context.query.slug;
    const data = await axios__WEBPACK_IMPORTED_MODULE_5__["default"].get((0,_app_products_getProductQuery__WEBPACK_IMPORTED_MODULE_8__/* .getProductQuery */ .v)(slug));
    return {
        props: {
            product: data.data.data[0]
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7915:
/***/ ((module) => {

module.exports = require("@mui/icons-material");

/***/ }),

/***/ 2475:
/***/ ((module) => {

module.exports = require("@mui/icons-material/LocalPhoneOutlined");

/***/ }),

/***/ 7235:
/***/ ((module) => {

module.exports = require("@mui/icons-material/MailOutlined");

/***/ }),

/***/ 7865:
/***/ ((module) => {

module.exports = require("@mui/icons-material/PlaceOutlined");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 8742:
/***/ ((module) => {

module.exports = require("@mui/material/Stack");

/***/ }),

/***/ 6042:
/***/ ((module) => {

module.exports = require("@mui/material/TextField");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

/***/ }),

/***/ 1908:
/***/ ((module) => {

module.exports = import("@hookform/resolvers/yup");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,877,876], () => (__webpack_exec__(8152)));
module.exports = __webpack_exports__;

})();