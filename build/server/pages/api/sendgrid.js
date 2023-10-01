"use strict";
(() => {
var exports = {};
exports.id = 845;
exports.ids = [845];
exports.modules = {

/***/ 3794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ sendgrid)
});

;// CONCATENATED MODULE: external "@sendgrid/mail"
const mail_namespaceObject = require("@sendgrid/mail");
var mail_default = /*#__PURE__*/__webpack_require__.n(mail_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/sendgrid.ts

mail_default().setApiKey(`${process.env.SENDGRID_API_KEY}`);
async function sendEmail(req, res) {
    try {
        // console.log("REQ.BODY", req.body);
        await mail_default().send({
            to: "info@opklinika.lt",
            from: "info@opklinika.lt",
            subject: `Nauja žinutė nuo: ${req.body.name}, ${req.body.email}`,
            html: `<div>Nauja žinutė nuo: ${req.body.name}, ${req.body.email}: </br>${req.body.message} </div>`
        });
    } catch (error) {
        console.log(error);
    // return res.status(error.statusCode || 500).json({ error: error.message });
    }
    return res.status(200).json({
        error: ""
    });
}
/* harmony default export */ const sendgrid = (sendEmail);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3794));
module.exports = __webpack_exports__;

})();