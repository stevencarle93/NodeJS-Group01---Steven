"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.objectId=void 0;const mongoose_1=require("mongoose");exports.objectId=e=>({type:"objectId",base:e.any(),messages:{objectId:"needs to be a valid ObjectId"},coerce(e){if(e)return String(e).match(/^[0-9a-fA-F]{24}$/)&&(e=new mongoose_1.Types.ObjectId(e)),{value:e}},validate(e,o){if(!(e instanceof mongoose_1.Types.ObjectId)){return{value:e,errors:o.error("objectId")}}}});