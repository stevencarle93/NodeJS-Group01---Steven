"use strict";var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function u(e){try{s(n.next(e))}catch(e){o(e)}}function d(e){try{s(n.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(u,d)}s((n=n.apply(e,t||[])).next())}))},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});const user_model_1=__importDefault(require("../models/user.model")),user_dto_1=require("../dtos/user.dto");class UserRepository{getAll(){return __awaiter(this,void 0,void 0,(function*(){const e=yield user_model_1.default.find();return e.length?user_dto_1.UserMapping.mapArray(e):null}))}getById(e){return __awaiter(this,void 0,void 0,(function*(){const t=yield user_model_1.default.findById(e);return t?user_dto_1.UserMapping.map(t):null}))}insert(e,t){return __awaiter(this,void 0,void 0,(function*(){e.refreshToken=t;const r=yield user_model_1.default.create(e);return r?user_dto_1.UserMapping.map(r):null}))}update(e,t){return __awaiter(this,void 0,void 0,(function*(){const r=yield user_model_1.default.findOne({_id:e}),n=Object.assign({},t);for(const e in n)e&&(r[e]=n[e]);return yield r.save(),r?user_dto_1.UserMapping.map(r):null}))}delete(e){return __awaiter(this,void 0,void 0,(function*(){const t=yield user_model_1.default.findOne({_id:e}),r=yield user_model_1.default.findByIdAndUpdate({_id:e},{isActive:!1});return t?user_dto_1.UserMapping.map(r):null}))}}exports.default=UserRepository;