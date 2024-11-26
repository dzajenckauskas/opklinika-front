"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ getCategoriesQuery)
/* harmony export */ });
const getCategoriesQuery = ()=>{
    let url = `${"https://www.api.opklinika.lt"}/api/categories?populate=*`;
    url = `${url}`;
    return url;
};


/***/ }),

/***/ 7602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ getServicesQuery)
/* harmony export */ });
const getServicesQuery = ()=>{
    let url = `${"https://www.api.opklinika.lt"}/api/services?populate=*`;
    url = `${url}`;
    return url;
};


/***/ }),

/***/ 1090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8742);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9755);
/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_legacy_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layout_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4974);





const HeroBanner = ()=>{
    const colors = (0,_layout_colors__WEBPACK_IMPORTED_MODULE_4__/* .getColors */ .E)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_1___default()), {
        overflow: "hidden",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_1___default()), {
                direction: "row",
                maxHeight: 700,
                height: "100%",
                width: "100vw",
                overflow: "hidden",
                position: "absolute",
                left: 0,
                top: {
                    lg: 130,
                    md: 130,
                    sm: 80,
                    xs: 80
                },
                zIndex: 9,
                sx: {
                    background: "linear-gradient(#f9f9f910,#1e6da119);",
                    backgroundColor: colors.primary,
                    opacity: .7
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_1___default()), {
                direction: "row",
                overflow: "hidden",
                width: "100vw",
                height: {
                    lg: "700px",
                    md: "700px",
                    sm: "700px",
                    xs: "700px"
                },
                alignItems: "center",
                position: "absolute",
                left: 0,
                top: {
                    lg: 130,
                    md: 130,
                    sm: 80,
                    xs: 80
                },
                sx: {
                    opacity: .7
                },
                pt: {
                    lg: 30,
                    md: 20,
                    sm: 10,
                    xs: 0
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_legacy_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                    alt: "ortopedijos specialistai",
                    src: "/media/banner.webp",
                    layout: "fill",
                    objectFit: "cover",
                    priority: true
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_1___default()), {
                minHeight: "460px",
                zIndex: 100,
                justifyContent: "flex-end",
                alignItems: "flex-start",
                sx: {
                    px: {
                        lg: 4,
                        md: 4,
                        sm: 3,
                        xs: 3
                    },
                    mx: "auto",
                    maxWidth: "1200px",
                    width: "100%"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_1___default()), {
                    sx: {
                        borderLeft: "2px solid #1E6EA1"
                    },
                    mb: 8,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
                            variant: "h1",
                            fontSize: "34px",
                            color: "#fff",
                            px: 2,
                            textAlign: "left",
                            lineHeight: "35px",
                            children: "ORTOPEDIJOS PASLAUGŲ KLINIKA"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
                            color: "#fff",
                            px: 2,
                            textAlign: "left",
                            maxWidth: "600px",
                            lineHeight: "16px",
                            fontWeight: 300,
                            fontSize: 14,
                            children: "Profesionalus patyrusių ir jaunų energingų specialistų kolektyvas, kuris kiekvieno paciento problemas sprendžia individualiai"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroBanner);


/***/ }),

/***/ 7492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ home_CategoriesSection)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Stack"
var Stack_ = __webpack_require__(8742);
var Stack_default = /*#__PURE__*/__webpack_require__.n(Stack_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/CardContent"
var CardContent_ = __webpack_require__(8455);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);
// EXTERNAL MODULE: ./node_modules/next/legacy/image.js
var legacy_image = __webpack_require__(9755);
var image_default = /*#__PURE__*/__webpack_require__.n(legacy_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/layout/colors.ts
var layout_colors = __webpack_require__(4974);
;// CONCATENATED MODULE: ./components/categories/CategoryCard.tsx









const CategoryCard = ({ category  })=>{
    const [first, setfirst] = (0,external_react_.useState)(false);
    const imageUrl = category.attributes.images?.data && category.attributes.images?.data[0].attributes.url;
    const colors = (0,layout_colors/* getColors */.E)();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
            item: true,
            lg: 4,
            md: 4,
            sm: 6,
            xs: 12,
            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/ortopedijos-technikos-katalogas/1",
                passHref: true,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Stack_default()), {
                    onMouseEnter: ()=>setfirst(!first),
                    onMouseLeave: ()=>setfirst(false),
                    sx: {
                        overflow: "hidden",
                        minWidth: 200,
                        width: "100%",
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        boxShadow: "rgba(0, 0, 0, 0.1) 2px 4px 12px !important",
                        cursor: "pointer",
                        ":hover": {
                            opacity: .91
                        },
                        opacity: first ? .8 : 1
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Stack_default()), {
                            direction: "row",
                            height: 120,
                            width: "100%",
                            position: "absolute",
                            zIndex: 991,
                            children: imageUrl && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                alt: category.attributes.title,
                                objectFit: "cover",
                                src: imageUrl,
                                layout: "fill",
                                loading: "lazy",
                                style: {
                                    position: "relative",
                                    opacity: 0.1,
                                    objectFit: "cover"
                                }
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Stack_default()), {
                            direction: "row",
                            height: 120,
                            sx: {
                                background: "linear-gradient(#f9f9f940,#1e6da199);",
                                backgroundColor: colors.primary,
                                opacity: .9
                            },
                            position: "relative",
                            zIndex: 99
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                            sx: {
                                height: "100%",
                                position: "absolute",
                                bottom: 0,
                                zIndex: 99
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Stack_default()), {
                                height: "100%",
                                flexDirection: "column",
                                justifyContent: "flex-end",
                                alignContent: "flex-start",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        fontSize: 18,
                                        lineHeight: "22px",
                                        fontWeight: 700,
                                        color: colors.white,
                                        sx: {
                                            textTransform: "uppercase",
                                            ":hover": {
                                                filter: "brightness(75%)",
                                                cursor: "pointer",
                                                color: colors.white
                                            }
                                        },
                                        children: category.attributes.title
                                    }),
                                    first && /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        mt: .5,
                                        fontSize: 15,
                                        lineHeight: "17px",
                                        fontWeight: 300,
                                        color: colors.white,
                                        sx: {
                                            ":hover": {
                                                filter: "brightness(75%)",
                                                cursor: "pointer",
                                                color: colors.white
                                            }
                                        },
                                        children: category.attributes.description
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const categories_CategoryCard = (CategoryCard);

;// CONCATENATED MODULE: ./components/home/CategoriesSection.tsx







const CategoriesSection = ({ categories , color  })=>{
    const colors = (0,layout_colors/* getColors */.E)();
    const renderCategories = categories?.data.map((category)=>/*#__PURE__*/ jsx_runtime_.jsx(categories_CategoryCard, {
            category: category
        }, category.id));
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx((Stack_default()), {
            sx: {
                backgroundColor: colors.white,
                mx: "auto",
                width: "100%",
                position: "relative",
                zIndex: 99,
                pt: 5
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx((Stack_default()), {
                sx: {
                    maxWidth: "1200px",
                    mx: "auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Stack_default()), {
                    id: "services",
                    sx: {
                        scrollMarginTop: "200px",
                        maxWidth: "1200px",
                        mx: "auto",
                        px: {
                            lg: 4,
                            md: 4,
                            sm: 3,
                            xs: 3
                        }
                    },
                    pb: 10,
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "h1",
                            color: color ?? "#1E6EA1",
                            pb: 5,
                            pt: 2,
                            textAlign: "center",
                            children: "ORTOPEDIJOS PRIEMONĖS"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            container: true,
                            spacing: 2,
                            children: renderCategories
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const home_CategoriesSection = (CategoriesSection);


/***/ }),

/***/ 2619:
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
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8742);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _layout_colors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4974);
/* harmony import */ var _products_ProductCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7367);










const ProductsSection = ({ products , color , title  })=>{
    const colors = (0,_layout_colors__WEBPACK_IMPORTED_MODULE_9__/* .getColors */ .E)();
    const renderProducts = products?.data.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_products_ProductCard__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            product: product,
            preview: true
        }, product.id));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4___default()), {
            sx: {
                backgroundColor: colors.softGrey,
                mx: "auto",
                width: "100%",
                position: "relative",
                zIndex: 99
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4___default()), {
                sx: {
                    maxWidth: "1200px",
                    mx: "auto",
                    px: {
                        lg: 4,
                        md: 4,
                        sm: 3,
                        xs: 3
                    }
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4___default()), {
                    sx: {
                        maxWidth: "1200px",
                        mx: "auto"
                    },
                    pt: 2,
                    pb: 10,
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                            variant: "h1",
                            color: color ?? "#1E6EA1",
                            py: 5,
                            textAlign: "center",
                            children: title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4___default()), {
                            color: "primary.main",
                            direction: "row",
                            sx: {
                                maxWidth: "1200px",
                                mx: "auto"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4___default()), {
                                spacing: 4,
                                direction: "column",
                                children: [
                                    products && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        container: true,
                                        spacing: 4,
                                        sx: {
                                            position: "relative",
                                            left: -32
                                        },
                                        children: renderProducts
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        direction: "row",
                                        sx: {
                                            width: "100%",
                                            justifyContent: "flex-end"
                                        },
                                        pt: 0,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            href: "/ortopedijos-technikos-katalogas/1",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
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
                                                children: [
                                                    "PERŽIŪRĖTI KATALOGĄ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.ArrowForward, {
                                                        sx: {
                                                            height: "14px",
                                                            color: colors.primary
                                                        }
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductsSection);


/***/ }),

/***/ 8697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ home_ServicesSection)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/icons-material"
var icons_material_ = __webpack_require__(7915);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Stack"
var Stack_ = __webpack_require__(8742);
var Stack_default = /*#__PURE__*/__webpack_require__.n(Stack_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/layout/colors.ts
var layout_colors = __webpack_require__(4974);
// EXTERNAL MODULE: external "@mui/material/CardContent"
var CardContent_ = __webpack_require__(8455);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);
// EXTERNAL MODULE: ./node_modules/next/legacy/image.js
var legacy_image = __webpack_require__(9755);
var image_default = /*#__PURE__*/__webpack_require__.n(legacy_image);
;// CONCATENATED MODULE: ./components/services/ServiceCard.tsx








const ServiceCard = ({ service  })=>{
    const [first, setfirst] = (0,external_react_.useState)(false);
    const imageUrl = service.attributes.images?.data && service.attributes.images?.data[0].attributes.url;
    const colors = (0,layout_colors/* getColors */.E)();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
            item: true,
            lg: 3,
            md: 4,
            sm: 6,
            xs: 12,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Stack_default()), {
                onMouseEnter: ()=>setfirst(!first),
                onMouseLeave: ()=>setfirst(false),
                sx: {
                    overflow: "hidden",
                    minWidth: 200,
                    width: "100%",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    // minHeight: '100%',
                    boxShadow: "rgba(0, 0, 0, 0.1) 2px 4px 12px !important",
                    cursor: "pointer",
                    ":hover": {
                        opacity: .91
                    },
                    opacity: first ? .8 : 1
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Stack_default()), {
                        direction: "row",
                        height: 300,
                        width: "100%",
                        position: "absolute",
                        zIndex: 991,
                        children: imageUrl && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            alt: service.attributes.title,
                            objectFit: "cover",
                            src: imageUrl,
                            layout: "fill",
                            loading: "lazy",
                            style: {
                                position: "relative",
                                opacity: 0.1,
                                objectFit: "cover"
                            }
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Stack_default()), {
                        direction: "row",
                        height: 300,
                        sx: {
                            background: "linear-gradient(#f9f9f940,#1e6da199);",
                            backgroundColor: colors.primary,
                            opacity: .9
                        },
                        position: "relative",
                        zIndex: 99
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                        sx: {
                            height: "100%",
                            position: "absolute",
                            bottom: 0,
                            zIndex: 99
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Stack_default()), {
                            height: "100%",
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            alignContent: "flex-start",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    fontSize: 20,
                                    lineHeight: "22px",
                                    fontWeight: 700,
                                    color: colors.white,
                                    sx: {
                                        ":hover": {
                                            filter: "brightness(75%)",
                                            cursor: "pointer",
                                            color: colors.white
                                        }
                                    },
                                    children: service.attributes.title
                                }),
                                first && /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    mt: .5,
                                    fontSize: 15,
                                    lineHeight: "17px",
                                    fontWeight: 300,
                                    color: colors.white,
                                    sx: {
                                        ":hover": {
                                            filter: "brightness(75%)",
                                            cursor: "pointer",
                                            color: colors.white
                                        }
                                    },
                                    children: service.attributes.description
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const services_ServiceCard = (ServiceCard);

;// CONCATENATED MODULE: ./components/home/ServicesSection.tsx










const ServicesSection = ({ services , color  })=>{
    const colors = (0,layout_colors/* getColors */.E)();
    const renderServices = services.data.map((service)=>/*#__PURE__*/ jsx_runtime_.jsx(services_ServiceCard, {
            service: service
        }, service.id));
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx((Stack_default()), {
            sx: {
                backgroundColor: colors.softGrey,
                mx: "auto",
                width: "100%",
                position: "relative",
                zIndex: 99,
                pt: 5
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx((Stack_default()), {
                sx: {
                    maxWidth: "1200px",
                    mx: "auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Stack_default()), {
                    id: "ortopedijos-paslaugos",
                    sx: {
                        scrollMarginTop: "160px",
                        maxWidth: "1200px",
                        mx: "auto",
                        px: {
                            lg: 4,
                            md: 4,
                            sm: 3,
                            xs: 3
                        }
                    },
                    pb: 10,
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "h1",
                            color: color ?? "#1E6EA1",
                            pb: 5,
                            pt: 2,
                            textAlign: "center",
                            children: "ORTOPEDIJOS PASLAUGOS"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            container: true,
                            spacing: 2,
                            children: renderServices
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Stack_default()), {
                            direction: "row",
                            sx: {
                                width: "100%",
                                justifyContent: "flex-end"
                            },
                            pt: 4,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/paslaugu-kainorastis",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Button_default()), {
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
                                    children: [
                                        "PASLAUGŲ KAINORAŠTIS",
                                        /*#__PURE__*/ jsx_runtime_.jsx(icons_material_.ArrowForward, {
                                            sx: {
                                                height: "14px",
                                                color: colors.primary
                                            }
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const home_ServicesSection = (ServicesSection);


/***/ }),

/***/ 6454:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7915);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8742);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9755);
/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_legacy_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _banner_HeroBanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1090);
/* harmony import */ var _home_CategoriesSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7492);
/* harmony import */ var _home_ProductsSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2619);
/* harmony import */ var _home_ServicesSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8697);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2391);
/* harmony import */ var _layout_colors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4974);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Layout__WEBPACK_IMPORTED_MODULE_9__]);
_Layout__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const HomePage = ({ services , reviews , newProducts , individualProducts , categories  })=>{
    const colors = (0,_layout_colors__WEBPACK_IMPORTED_MODULE_10__/* .getColors */ .E)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        color: colors.primary,
        reviews: reviews,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_banner_HeroBanner__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_home_ProductsSection__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                products: newProducts,
                title: "NAUJOS PRIEMONĖS"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_home_CategoriesSection__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                categories: categories
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2___default()), {
                sx: {
                    backgroundColor: colors.white,
                    mx: "auto",
                    width: "100%",
                    position: "relative",
                    zIndex: 99,
                    pt: 0,
                    pb: 10
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2___default()), {
                    sx: {
                        maxWidth: "1200px",
                        mx: "auto",
                        px: {
                            lg: 4,
                            md: 4,
                            sm: 3,
                            xs: 3
                        }
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                            fontSize: 18,
                            color: colors.primary,
                            py: 2,
                            lineHeight: "20px",
                            fontWeight: 600,
                            children: "Mūsų vizija – būti profesionalia, dinamiška ir konkurencinga ortopedijos techninių priemonių gamybos ir prekybos įmone. Įmonės misija – aprūpinti gyventojus atsakingai ir kokybiškai pagamintomis ortopedijos techninėmis priemonėmis, užtikrinančiomis aukštesnę jų gyvenimo kokybę."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                            lineHeight: "18px",
                            fontSize: 16,
                            textAlign: "justify",
                            color: "secondary.main",
                            fontWeight: 300,
                            children: "Glaudžiai bendradarbiaujame su įvairiomis medicinos įstaigomis, neįgalius pacientus vizituojame ir konsultuojame jų gyvenamosiose vietose, ortopedijos techninės priemonės užsakomos, gaminamos ir pritaikomos beveik visoje Lietuvoje. Gamyboje naudojamos kokybiškos, nekenksmingos ir saugios žaliavos, iš kurių gaminamos ortopedijos priemonės yra puikiai vertinamos gydytojų ir pacientų."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                            lineHeight: "18px",
                            fontSize: 16,
                            textAlign: "justify",
                            color: "secondary.main",
                            fontWeight: 300,
                            children: "Mūsų gaminamos ortopedijos techninės priemonės yra aprobuotos Lietuvos sveikatos apsaugos ministerijos, atitinka Europos direktyvos 93/42/EEB reikalavimus ir Lietuvos medicinos normos MN 4:2009 būtinuosius reikalavimus. Visiems mūsų gaminiams yra taikomi garantiniai įsipareigojimai."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                            lineHeight: "18px",
                            fontSize: 16,
                            textAlign: "justify",
                            color: "secondary.main",
                            fontWeight: 300,
                            children: "Įmonė yra sudariusi sutartį su Valstybine ligonių kasa prie Lietuvos Respublikos sveikatos apsaugos ministerijos, todėl atsižvelgiant į paciento diagnozę ortopediniai gaminiai bei gydytojų konsultacijos yra visiškai arba iš dalies kompensuojami pagal nustatytą tvarką."
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_home_ProductsSection__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                products: individualProducts,
                title: "INDIVIDUALIAI GAMINAMA TECHNIKA"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2___default()), {
                sx: {
                    backgroundColor: colors.primary,
                    width: "100%",
                    position: "relative",
                    zIndex: 99
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2___default()), {
                        direction: "row",
                        justifyContent: "center",
                        py: 8,
                        sx: {
                            maxWidth: "1200px",
                            mx: "auto",
                            width: "100%",
                            px: {
                                lg: 4,
                                md: 4,
                                sm: 3,
                                xs: 3
                            }
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2___default()), {
                            width: "100%",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    pb: 2,
                                    fontSize: 18,
                                    color: colors.white,
                                    fontWeight: 900,
                                    lineHeight: "18px",
                                    children: "Patyrę ir atsakingi ortopedai-protezuotojai bei ortopedai-technikai užsako, pagamina ir individualiai pritaiko ortopedijos technines priemones:"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    spacing: 1,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            fontSize: 16,
                                            color: colors.white,
                                            fontWeight: 300,
                                            pl: 1,
                                            lineHeight: "20px",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.ArrowForward, {
                                                    sx: {
                                                        height: "16px",
                                                        position: "relative",
                                                        top: "3px",
                                                        color: colors.white
                                                    }
                                                }),
                                                "po galūnių amputacijų – rankų ir kojų protezus;"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            fontSize: 16,
                                            color: colors.white,
                                            fontWeight: 300,
                                            pl: 1,
                                            lineHeight: "20px",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.ArrowForward, {
                                                    sx: {
                                                        height: "16px",
                                                        position: "relative",
                                                        top: "3px",
                                                        color: colors.white
                                                    }
                                                }),
                                                "po traumų ir kitų susirgimų – rankų, kojų, stuburo plastikinius ir tekstilinius įtvarus, korsetus;"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            fontSize: 16,
                                            color: colors.white,
                                            fontWeight: 300,
                                            pl: 1,
                                            lineHeight: "20px",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.ArrowForward, {
                                                    sx: {
                                                        height: "16px",
                                                        position: "relative",
                                                        top: "3px",
                                                        color: colors.white
                                                    }
                                                }),
                                                "avalynės įdėklus, skirtus gydymui, reabilitacijai, sportui ir kasdieniniam naudojimui;"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            fontSize: 16,
                                            color: colors.white,
                                            fontWeight: 300,
                                            pl: 1,
                                            lineHeight: "20px",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.ArrowForward, {
                                                    sx: {
                                                        height: "16px",
                                                        position: "relative",
                                                        top: "3px",
                                                        color: colors.white
                                                    }
                                                }),
                                                "kitus ortopedinės paskirties gaminius ir įvairias pagalbines priemones neįgaliems žmonėms."
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2___default()), {
                        direction: "row",
                        height: 400,
                        width: "100%",
                        overflow: "hidden",
                        position: "absolute",
                        zIndex: -1,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_legacy_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                            loading: "lazy",
                            alt: ".attributes.title",
                            objectFit: "cover",
                            src: "/assets/images/cover.webp",
                            layout: "fill",
                            style: {
                                position: "relative",
                                opacity: 0.15,
                                objectFit: "cover",
                                objectPosition: "center"
                            }
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_home_ServicesSection__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                services: services
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2603:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_categories_getCategoriesQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5271);
/* harmony import */ var _app_reviews_getCustomerReviewsQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3408);
/* harmony import */ var _app_services_getServicesQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7602);
/* harmony import */ var _components_pages_HomePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6454);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8742);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_pages_HomePage__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_3__]);
([_components_pages_HomePage__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function Home({ newProducts , individualProducts , services , reviews , categories  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Ortopedijos paslaugų klinika | Kokybiškos Ortopedijos Paslaugos Vilniuje"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Ortopedijos paslaugų klinika Vilniuje teikia profesionalias ortopedijos paslaugas: konsultacijos, diagnostika, reabilitacija ir individualių ortopedinių priemonių gamyba. Rūpinamės jūsų sveikata ir judėjimo komfortu."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "canonical",
                        href: "https://www.opklinika.lt"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: "Ortopedijos paslaugų klinika | Kokybiškos Ortopedijos Paslaugos Vilniuje"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:description",
                        content: "Apsilankykite Ortopedijos paslaugų klinikoje Vilniuje! Teikiame profesionalias konsultacijas, ortopedinių priemonių gamybą, reabilitacijos paslaugas. Mūsų prioritetas – jūsų sveikata!"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:url",
                        content: "https://www.opklinika.lt"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image",
                        content: `${"https://www.opklinika.lt"}/media/homepage-banner.jpg`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:title",
                        content: "Ortopedijos paslaugų klinika | Kokybiškos Ortopedijos Paslaugos Vilniuje"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:description",
                        content: "Profesionali ortopedijos klinika Vilniuje – individualios ortopedinės priemonės, konsultacijos ir reabilitacija. Kreipkitės į mūsų specialistus šiandien!"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:image",
                        content: `${"https://www.opklinika.lt"}/media/homepage-banner.jpg`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "robots",
                        content: "index, follow"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "keywords",
                        content: "ortopedijos klinika Vilniuje, ortopedijos paslaugos, reabilitacija Vilnius, ortopediniai įtvarai, ortopedinės priemonės, ortopedijos specialistai, protezai, ortopedinės konsultacijos"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "author",
                        content: "Ortopedijos paslaugų klinika"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        type: "application/ld+json",
                        children: `
    {
      "@context": "https://schema.org",
      "@type": "MedicalOrganization",
      "name": "Ortopedijos paslaugų klinika",
      "url": "${"https://www.opklinika.lt"}",
      "logo": "${"https://www.opklinika.lt"}/favicon.ico",
      "description": "Profesionali ortopedijos klinika Vilniuje. Gydytojų konsultacijos, diagnostika, reabilitacija ir individualių ortopedijos priemonių gamyba.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Laisvės pr. 77",
        "addressLocality": "Vilnius",
        "addressCountry": "LT"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+37060792111",
        "contactType": "customer service"
      }
    }
    `
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2___default()), {
                sx: {
                    minHeight: "100vh",
                    backgroundColor: "#fff"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_HomePage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    services: services,
                    reviews: reviews,
                    individualProducts: individualProducts,
                    newProducts: newProducts,
                    categories: categories
                })
            })
        ]
    });
}
const getStaticProps = async ()=>{
    const services = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get((0,_app_services_getServicesQuery__WEBPACK_IMPORTED_MODULE_5__/* .getServicesQuery */ .V)());
    const categories = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get((0,_app_categories_getCategoriesQuery__WEBPACK_IMPORTED_MODULE_6__/* .getCategoriesQuery */ .X)());
    const reviews = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get((0,_app_reviews_getCustomerReviewsQuery__WEBPACK_IMPORTED_MODULE_7__/* .getCustomerReviewsQuery */ .Y)());
    const newProducts = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(`${"https://www.api.opklinika.lt"}/api/products?filters[isNew][$eq]=true&populate=*`);
    const individualProducts = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(`${"https://www.api.opklinika.lt"}/api/products?filters[individualyMade][$eq]=true&populate=*`);
    return {
        props: {
            newProducts: newProducts.data,
            individualProducts: individualProducts.data,
            services: services.data,
            categories: categories.data,
            reviews: reviews.data
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

/***/ 7849:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Star");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 3691:
/***/ ((module) => {

module.exports = require("@mui/material/CardActions");

/***/ }),

/***/ 8455:
/***/ ((module) => {

module.exports = require("@mui/material/CardContent");

/***/ }),

/***/ 5612:
/***/ ((module) => {

module.exports = require("@mui/material/Grid");

/***/ }),

/***/ 802:
/***/ ((module) => {

module.exports = require("@mui/material/Rating");

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

/***/ 5515:
/***/ ((module) => {

module.exports = require("react-cookie");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,877,876,980,367], () => (__webpack_exec__(2603)));
module.exports = __webpack_exports__;

})();