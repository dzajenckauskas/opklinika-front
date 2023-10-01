"use strict";
exports.id = 980;
exports.ids = [980];
exports.modules = {

/***/ 3408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ getCustomerReviewsQuery)
/* harmony export */ });
const getCustomerReviewsQuery = ()=>{
    let url = `${"https://www.api.opklinika.lt"}/api/reviews`;
    url = `${url}`;
    return url;
};


/***/ }),

/***/ 2391:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7915);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Rating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(802);
/* harmony import */ var _mui_material_Rating__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Rating__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8742);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(932);
/* harmony import */ var _layout_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8165);
/* harmony import */ var _layout_colors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4974);
/* harmony import */ var _mui_icons_material_Star__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7849);
/* harmony import */ var _mui_icons_material_Star__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Star__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_icons_material_LocalPhoneOutlined__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2475);
/* harmony import */ var _mui_icons_material_LocalPhoneOutlined__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_LocalPhoneOutlined__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _cookies_Cookies__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8296);
/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9755);
/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_legacy_image__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Footer__WEBPACK_IMPORTED_MODULE_7__]);
_Footer__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];















const Layout = ({ children , title , color , reviews , catalog  })=>{
    const [activeSlide, setActiveSlide] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0);
    // const [touchStart, setTouchStart] = useState(0);
    // const [touchEnd, setTouchEnd] = useState(0);
    // function handleTouchStart(e: any) {
    //     setTouchStart(e.targetTouches[0].clientX);
    // }
    // function handleTouchMove(e: any) {
    //     setTouchEnd(e.targetTouches[0].clientX);
    // }
    const toNextSlide = ()=>{
        if (reviews?.data) {
            const max = reviews.data && reviews.data.length - 1;
            setActiveSlide(activeSlide + 1 > max ? 0 : activeSlide + 1);
        }
    };
    const toPreviousSlide = ()=>{
        if (reviews?.data) {
            const max = reviews.data && reviews.data.length - 1;
            setActiveSlide(activeSlide - 1 < 0 ? max : activeSlide - 1);
        }
    };
    // function handleTouchEnd() {
    //     if (reviews?.data)
    //         if (touchStart - touchEnd > 100) {
    //             toNextSlide()
    //         }
    //     if (touchStart - touchEnd < -100) {
    //         toPreviousSlide()
    //     }
    // }
    const colors = (0,_layout_colors__WEBPACK_IMPORTED_MODULE_14__/* .getColors */ .E)();
    const renderReviews = reviews?.data.map((review)=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4___default()), {
            sx: {
                minHeight: 50,
                justifyContent: "center",
                width: "100%",
                px: {
                    lg: 1,
                    md: 1,
                    sm: 1,
                    xs: 0
                }
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                    color: colors.dark,
                    fontWeight: 300,
                    fontSize: "14px",
                    fontStyle: "italic",
                    lineHeight: {
                        lg: "25px",
                        md: "25px",
                        sm: "20px",
                        xs: "18px"
                    },
                    sx: {
                        textAlign: "justify",
                        minHeight: "70px"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            style: {
                                fontSize: 26,
                                color: colors.primary,
                                opacity: 0.75,
                                position: "relative",
                                left: "-2px",
                                bottom: "2px"
                            },
                            children: "„"
                        }),
                        review.attributes.review,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            style: {
                                fontSize: 26,
                                color: colors.primary,
                                opacity: 0.75,
                                position: "relative",
                                right: "2px",
                                top: "2px"
                            },
                            children: "“"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4___default()), {
                    pt: 3,
                    alignItems: "flex-end",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Rating__WEBPACK_IMPORTED_MODULE_3___default()), {
                            size: "small",
                            disabled: true,
                            value: review.attributes.rate,
                            emptyIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Star__WEBPACK_IMPORTED_MODULE_9___default()), {
                                style: {
                                    opacity: 0.85,
                                    width: "14px",
                                    color: colors.primary
                                }
                            }),
                            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Star__WEBPACK_IMPORTED_MODULE_9___default()), {
                                style: {
                                    opacity: 1,
                                    width: "14px",
                                    color: colors.primary
                                }
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                            color: "primary.main",
                            fontWeight: 700,
                            fontSize: "12px",
                            textAlign: "right",
                            children: review.attributes.customer.toUpperCase()
                        })
                    ]
                })
            ]
        }, review.id);
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4___default()), {
        sx: {
            minHeight: "100vh",
            height: "100%",
            backgroundColor: "#f9f9f9"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_Header__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4___default()), {
                minHeight: "80vh",
                children: [
                    !catalog && title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                        fontSize: 25,
                        fontWeight: 900,
                        lineHeight: "20px",
                        color: color ?? "#1E6EA1",
                        mb: 4,
                        sx: {
                            textAlign: "left",
                            width: "100%",
                            pt: 8,
                            textTransform: "uppercase",
                            maxWidth: "1200px",
                            mx: "auto",
                            px: {
                                lg: 4,
                                md: 4,
                                sm: 3,
                                xs: 3
                            }
                        },
                        children: title
                    }),
                    catalog && title && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4___default()), {
                        mb: 2,
                        sx: {
                            px: {
                                lg: 4,
                                md: 4,
                                sm: 3,
                                xs: 3
                            },
                            mx: "auto",
                            width: "100%",
                            maxWidth: "1200px"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                                fontSize: 25,
                                fontWeight: 900,
                                lineHeight: "20px",
                                color: color ?? "#1E6EA1",
                                sx: {
                                    textAlign: "left",
                                    pt: 8,
                                    textTransform: "uppercase"
                                },
                                children: title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
                                size: "small",
                                disableRipple: true,
                                sx: {
                                    px: 0,
                                    pt: 2,
                                    width: "max-content",
                                    ":hover": {
                                        backgroundColor: "transparent",
                                        textDecoration: "underline"
                                    }
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {
                                    passHref: true,
                                    href: "/MC-katalogas.pdf",
                                    target: "_blank",
                                    children: [
                                        "ATSISIŲSTI KATALOGĄ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.ArrowForward, {
                                            sx: {
                                                height: "14px",
                                                color: colors.primary,
                                                transform: "rotate(90deg)",
                                                position: "relative",
                                                top: 2
                                            }
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    children
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4___default()), {
                sx: {
                    backgroundColor: colors.primary,
                    overflow: "hidden",
                    width: "100%",
                    position: "relative",
                    zIndex: 99
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4___default()), {
                        direction: {
                            lg: "row",
                            md: "row",
                            sm: "column",
                            xs: "column"
                        },
                        justifyContent: "center",
                        py: 8,
                        sx: {
                            maxWidth: "1200px",
                            mx: "auto",
                            width: "100%"
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4___default()), {
                                direction: "column",
                                spacing: 1,
                                sx: {
                                    mx: "auto",
                                    alignItems: "flex-start",
                                    position: "relative",
                                    width: "100%",
                                    px: {
                                        lg: 4,
                                        md: 4,
                                        sm: 3,
                                        xs: 3
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        fontSize: 25,
                                        fontWeight: 900,
                                        lineHeight: "20px",
                                        color: "#fff",
                                        mb: 1,
                                        sx: {
                                            textTransform: "uppercase",
                                            textAlign: "left"
                                        },
                                        children: "Registracija"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        fontSize: 16,
                                        color: colors.white,
                                        fontWeight: 300,
                                        children: "Mūsų ortopedijos klinikoje kiekvieno paciento vizitus deriname individualiai registracijos laikus pas specialistus. Kreipkitės telefonu, kad galėtumėte paskirti Jums tinkamą vizito laiką pas kvalifikuotus specialistus, kurie padės rasti tinkamiausią sprendimą Jūsų poreikiams spręsti."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4___default()), {
                                direction: "column",
                                sx: {
                                    my: "auto",
                                    mx: "auto",
                                    alignItems: "flex-end",
                                    width: "100%",
                                    px: {
                                        lg: 4,
                                        md: 4,
                                        sm: 3,
                                        xs: 3
                                    }
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    variant: "h2",
                                    lineHeight: "20px",
                                    color: "#fff",
                                    mb: 1,
                                    mt: {
                                        lg: 0,
                                        md: 0,
                                        sm: 3,
                                        xs: 3
                                    },
                                    sx: {
                                        textTransform: "uppercase",
                                        textAlign: "left"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {
                                        href: `tel:${"+370 607 921 11"}`,
                                        passHref: true,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            direction: "row",
                                            spacing: 3,
                                            sx: {
                                                cursor: "pointer"
                                            },
                                            alignItems: "center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_LocalPhoneOutlined__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                    fontSize: "large",
                                                    sx: {
                                                        height: "50px",
                                                        marginRight: "-5px"
                                                    }
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    fontSize: 25,
                                                    fontWeight: 900,
                                                    lineHeight: "20px",
                                                    children: "+370 607 92111"
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4___default()), {
                        direction: "row",
                        height: 400,
                        width: "100%",
                        position: "absolute",
                        zIndex: -1,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_legacy_image__WEBPACK_IMPORTED_MODULE_13___default()), {
                            loading: "lazy",
                            alt: ".attributes.title",
                            objectFit: "cover",
                            src: "/assets/images/cover.webp",
                            layout: "fill",
                            style: {
                                position: "relative",
                                opacity: 0.05,
                                objectFit: "cover",
                                objectPosition: "center"
                            }
                        })
                    })
                ]
            }),
            reviews && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4___default()), {
                sx: {
                    width: "100%",
                    backgroundColor: "#f9f9f9"
                },
                pt: 8,
                pb: 6,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                        fontSize: 25,
                        fontWeight: 900,
                        lineHeight: "20px",
                        color: "#1E6EA1",
                        mb: 2,
                        sx: {
                            textTransform: "uppercase",
                            textAlign: "center"
                        },
                        children: "Pacientų atsiliepimai"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4___default()), {
                        direction: "row",
                        sx: {
                            maxWidth: "650px",
                            mx: "auto",
                            alignItems: "center",
                            position: "relative",
                            width: "100%",
                            px: {
                                lg: 10,
                                md: 10,
                                sm: 10,
                                xs: 8
                            },
                            pb: 2
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
                                "aria-label": "to previous slide",
                                variant: "contained",
                                sx: {
                                    position: "absolute",
                                    opacity: .5,
                                    left: "20px",
                                    height: 20,
                                    width: 20,
                                    borderRadius: "50%",
                                    p: 0,
                                    minWidth: 20
                                },
                                onClick: toPreviousSlide,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.ArrowBackIosNew, {
                                    sx: {
                                        p: .7
                                    }
                                })
                            }),
                            renderReviews && renderReviews[activeSlide],
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
                                "aria-label": "to next slide",
                                variant: "contained",
                                sx: {
                                    position: "absolute",
                                    opacity: .5,
                                    right: "20px",
                                    height: 20,
                                    width: 20,
                                    borderRadius: "50%",
                                    p: 0,
                                    minWidth: 20
                                },
                                onClick: toNextSlide,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.ArrowForwardIos, {
                                    sx: {
                                        p: .7
                                    }
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_cookies_Cookies__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8296:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8742);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5515);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _layout_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4974);








function Cookies() {
    const [cookies, setCookie] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_4__.useCookies)([
        "gdpr-google-analytics"
    ]);
    const [showBar, setShowBar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const isCookie = cookies["gdpr-google-analytics"];
    const colors = (0,_layout_colors__WEBPACK_IMPORTED_MODULE_7__/* .getColors */ .E)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setMounted(true);
        setTimeout(function() {
            setTimeout(function() {
                if (mounted && !cookies["gdpr-google-analytics"]) setShowBar(true);
            }, 500);
        }, 2000);
        return ()=>setMounted(false);
    }, [
        cookies,
        showBar,
        mounted
    ]);
    if (!mounted) {
        return null;
    }
    const acceptPrivacyPolicy = ()=>{
        // initializeAndTrack(location);
        setCookie("gdpr-google-analytics", "true", {
            path: "/"
        });
    };
    const rejectPrivacyPolicy = ()=>{
        // initializeAndTrack(location);
        setCookie("gdpr-google-analytics", "false", {
            path: "/"
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            isCookie && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
            !isCookie && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3___default()), {
                direction: {
                    lg: "row",
                    md: "row",
                    sm: "column",
                    xs: "column"
                },
                justifyContent: "space-between",
                alignItems: {
                    lg: "center",
                    md: "center",
                    sm: "flex-start",
                    xs: "flex-start"
                },
                px: {
                    lg: 5,
                    md: 5,
                    sm: 3,
                    xs: 3
                },
                py: 3,
                position: "fixed",
                bottom: 0,
                zIndex: 999,
                sx: {
                    backgroundColor: colors.primaryTransparent,
                    width: "100%",
                    boxShadow: "rgba(0, 0, 0, 0.16) 20px 2px 35px 4px"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3___default()), {
                        width: "100%",
                        mb: 1,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                                color: colors.white,
                                fontSize: "16px",
                                fontWeight: 600,
                                pb: 1,
                                children: "Šioje svetainėje naudojami slapukai"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3___default()), {
                                direction: "row",
                                justifyContent: "flex-start",
                                alignItems: "top",
                                pr: {
                                    lg: 4,
                                    md: 4,
                                    sm: 0,
                                    xs: 0
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    color: "#fff",
                                    fontSize: "14px",
                                    fontWeight: 400,
                                    lineHeight: "16px",
                                    children: [
                                        "Šios internetinės parduotuvės veikimui reikalingi slapukai (angl. cookies). Dėl detalesnės informacijos, kuri saugoma slapukuose, skaitykite mūsų ",
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/privatumo-politika",
                                            passHref: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                style: {
                                                    textDecoration: "underline"
                                                },
                                                children: "privatumo politiką."
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3___default()), {
                        direction: "row",
                        spacing: 2,
                        pt: 1,
                        width: {
                            sm: "50%",
                            xs: "100%"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
                                sx: {
                                    width: {
                                        sm: "50%",
                                        xs: "100%"
                                    }
                                },
                                onClick: acceptPrivacyPolicy,
                                variant: "contained",
                                color: "info",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    color: "#154d73",
                                    fontSize: "14px",
                                    fontWeight: 400,
                                    px: 3,
                                    py: 1,
                                    children: "LEISTI"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
                                sx: {
                                    width: {
                                        sm: "50%",
                                        xs: "100%"
                                    }
                                },
                                onClick: rejectPrivacyPolicy,
                                variant: "outlined",
                                color: "info",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    color: "#fff",
                                    fontSize: "14px",
                                    fontWeight: 400,
                                    px: 3,
                                    py: 1,
                                    children: "NELEISTI"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cookies);


/***/ })

};
;