"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/sendgrid";
exports.ids = ["pages/api/sendgrid"];
exports.modules = {

/***/ "@sendgrid/mail":
/*!*********************************!*\
  !*** external "@sendgrid/mail" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sendgrid/mail");

/***/ }),

/***/ "(api)/./pages/api/sendgrid.ts":
/*!*******************************!*\
  !*** ./pages/api/sendgrid.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sendgrid/mail */ \"@sendgrid/mail\");\n/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sendgrid_mail__WEBPACK_IMPORTED_MODULE_0__);\n\n_sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default().setApiKey(`${process.env.SENDGRID_API_KEY}`);\nasync function sendEmail(req, res) {\n    try {\n        // console.log(\"REQ.BODY\", req.body);\n        await _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default().send({\n            to: \"info@opklinika.lt\",\n            from: \"info@opklinika.lt\",\n            subject: `Nauja žinutė nuo: ${req.body.name}, ${req.body.email}`,\n            html: `<div>Nauja žinutė nuo: ${req.body.name}, ${req.body.email}: </br>${req.body.message} </div>`\n        });\n    } catch (error) {\n        console.log(error);\n    // return res.status(error.statusCode || 500).json({ error: error.message });\n    }\n    return res.status(200).json({\n        error: \"\"\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendEmail);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VuZGdyaWQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBRXRDQSwrREFBa0IsQ0FBQyxDQUFDLEVBQUVFLFFBQVFDLEdBQUcsQ0FBQ0MsZ0JBQWdCLENBQUMsQ0FBQztBQUVwRCxlQUFlQyxVQUFVQyxHQUFRLEVBQUVDLEdBQVEsRUFBRTtJQUN6QyxJQUFJO1FBQ0EscUNBQXFDO1FBQ3JDLE1BQU1QLDBEQUFhLENBQUM7WUFDaEJTLElBQUk7WUFDSkMsTUFBTTtZQUNOQyxTQUFTLENBQUMsa0JBQWtCLEVBQUVMLElBQUlNLElBQUksQ0FBQ0MsSUFBSSxDQUFDLEVBQUUsRUFBRVAsSUFBSU0sSUFBSSxDQUFDRSxLQUFLLENBQUMsQ0FBQztZQUNoRUMsTUFBTSxDQUFDLHVCQUF1QixFQUFFVCxJQUFJTSxJQUFJLENBQUNDLElBQUksQ0FBQyxFQUFFLEVBQUVQLElBQUlNLElBQUksQ0FBQ0UsS0FBSyxDQUFDLE9BQU8sRUFBRVIsSUFBSU0sSUFBSSxDQUFDSSxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQ3ZHO0lBQ0osRUFBRSxPQUFPQyxPQUFPO1FBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWiw2RUFBNkU7SUFDakY7SUFFQSxPQUFPVixJQUFJYSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQUVKLE9BQU87SUFBRztBQUM1QztBQUVBLGlFQUFlWixTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3BrbGluaWthLy4vcGFnZXMvYXBpL3NlbmRncmlkLnRzPzk2NWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNlbmRncmlkIGZyb20gXCJAc2VuZGdyaWQvbWFpbFwiO1xuXG5zZW5kZ3JpZC5zZXRBcGlLZXkoYCR7cHJvY2Vzcy5lbnYuU0VOREdSSURfQVBJX0tFWX1gKTtcblxuYXN5bmMgZnVuY3Rpb24gc2VuZEVtYWlsKHJlcTogYW55LCByZXM6IGFueSkge1xuICAgIHRyeSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUkVRLkJPRFlcIiwgcmVxLmJvZHkpO1xuICAgICAgICBhd2FpdCBzZW5kZ3JpZC5zZW5kKHtcbiAgICAgICAgICAgIHRvOiBcImluZm9Ab3BrbGluaWthLmx0XCIsIC8vIFlvdXIgZW1haWwgd2hlcmUgeW91J2xsIHJlY2VpdmUgZW1haWxzXG4gICAgICAgICAgICBmcm9tOiBcImluZm9Ab3BrbGluaWthLmx0XCIsIC8vIHlvdXIgd2Vic2l0ZSBlbWFpbCBhZGRyZXNzIGhlcmVcbiAgICAgICAgICAgIHN1YmplY3Q6IGBOYXVqYSDFvmludXTElyBudW86ICR7cmVxLmJvZHkubmFtZX0sICR7cmVxLmJvZHkuZW1haWx9YCxcbiAgICAgICAgICAgIGh0bWw6IGA8ZGl2Pk5hdWphIMW+aW51dMSXIG51bzogJHtyZXEuYm9keS5uYW1lfSwgJHtyZXEuYm9keS5lbWFpbH06IDwvYnI+JHtyZXEuYm9keS5tZXNzYWdlfSA8L2Rpdj5gLFxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIC8vIHJldHVybiByZXMuc3RhdHVzKGVycm9yLnN0YXR1c0NvZGUgfHwgNTAwKS5qc29uKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZXJyb3I6IFwiXCIgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNlbmRFbWFpbDsiXSwibmFtZXMiOlsic2VuZGdyaWQiLCJzZXRBcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiU0VOREdSSURfQVBJX0tFWSIsInNlbmRFbWFpbCIsInJlcSIsInJlcyIsInNlbmQiLCJ0byIsImZyb20iLCJzdWJqZWN0IiwiYm9keSIsIm5hbWUiLCJlbWFpbCIsImh0bWwiLCJtZXNzYWdlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/sendgrid.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/sendgrid.ts"));
module.exports = __webpack_exports__;

})();