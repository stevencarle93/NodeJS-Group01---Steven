"use strict";var __awaiter=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function u(e){try{_(i.next(e))}catch(e){o(e)}}function a(e){try{_(i.throw(e))}catch(e){o(e)}}function _(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}_((i=i.apply(e,t||[])).next())}))},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});const http_1=__importDefault(require("http")),yenv_1=__importDefault(require("yenv")),message_util_1=__importDefault(require("../utils/message.util")),env=yenv_1.default(),initializeServer=e=>__awaiter(void 0,void 0,void 0,(function*(){const t=new Promise((t,n)=>{http_1.default.createServer(e).listen(env.PORT).on("listening",()=>{message_util_1.default.log("Server is running on port "+env.PORT),t()}).on("error",e=>{message_util_1.default.log("An error ocurred on connection to server"),n(e)})});yield t}));exports.default=initializeServer;