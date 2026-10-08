const fs = require('fs');

const logPath = 'C:\\Users\\yoges\\.gemini\\antigravity-ide\\brain\\85ea791b-e09f-47b7-a522-930f23d2c9f3\\.system_generated\\logs\\transcript.jsonl';
const lines = fs.readFileSync(logPath, 'utf8').split('\n');

let styleContent = null;
let foundStep = false;

// Step 45 had the big write_to_file for style.css
for (const line of lines) {
  if (!line.trim()) continue;
  try {
    const entry = JSON.parse(line);
    if (entry.tool_calls) {
      for (const call of entry.tool_calls) {
        if (call.name === 'default_api:write_to_file') {
          // The args might be nested depending on structure
          const args = call.args || {};
          if (args.TargetFile && args.TargetFile.endsWith('style.css')) {
            styleContent = args.CodeContent;
            // keep going to get the LAST write_to_file if there were multiple, though step 45 is what we want.
          }
        }
      }
    }
  } catch (e) {
    // Ignore parse errors on truncated lines
  }
}

if (styleContent) {
  fs.writeFileSync('style.css', styleContent);
  console.log('Successfully extracted style.css from transcript!');
} else {
  console.log('Could not find style.css in transcript.');
}
