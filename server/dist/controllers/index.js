"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const user_1 = __importDefault(require("./user"));
const api_1 = __importDefault(require("./api"));
router.use("/user", user_1.default);
router.use("/api", api_1.default);
exports.default = router;
