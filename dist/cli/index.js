"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const [, , filePath] = process.argv;
if (!filePath) {
    console.error('Usage: node index.js <path-to-pseudocode-file>');
    process.exit(1);
}
const absolutePath = path.resolve(filePath);
try {
    const content = fs.readFileSync(absolutePath, 'utf-8');
    console.log(`Analyzing ${filePath}...`);
    const lines = content.split(/\r?\n/);
    lines.forEach((line, index) => {
        if (/\bTODO\b/.test(line)) {
            console.log(`[Line ${index + 1}] Warning: TODO found`);
        }
        if (/\bSet\b/.test(line) && !/=/.test(line)) {
            console.log(`[Line ${index + 1}] Error: 'Set' used without '='`);
        }
    });
    console.log('Analysis complete.');
}
catch (err) {
    if (err instanceof Error) {
        console.error(`Error reading file: ${err.message}`);
    }
    process.exit(1);
}
