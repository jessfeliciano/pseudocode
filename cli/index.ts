import * as fs from 'fs';
import * as path from 'path';

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
    
} catch (err) {
    if (err instanceof Error){
        console.error(`Error reading file: ${err.message}`);
    }
    process.exit(1);
}