import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function run() {
  console.log('Starting pre-rendering...');

  // 1. Path definitions
  const templatePath = path.resolve(__dirname, 'dist/index.html');
  const serverBuildPath = path.resolve(__dirname, 'dist-server/entry-server.js');

  // 2. Verify files exist
  if (!fs.existsSync(templatePath)) {
    console.error(`Error: Client build HTML not found at ${templatePath}. Run client build first.`);
    process.exit(1);
  }
  if (!fs.existsSync(serverBuildPath)) {
    console.error(`Error: Server build JS not found at ${serverBuildPath}. Run SSR build first.`);
    process.exit(1);
  }

  // 3. Read template and import SSR render function
  const template = fs.readFileSync(templatePath, 'utf-8');
  const { render } = await import(serverBuildPath);

  // 4. Render App to HTML
  console.log('Rendering React components to static HTML...');
  const appHtml = render();

  // 5. Inject HTML into target container
  console.log('Injecting static HTML into dist/index.html...');
  const finalHtml = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );

  // 6. Write file back
  fs.writeFileSync(templatePath, finalHtml);
  console.log('Pre-rendering completed successfully!');

  // 7. Clean up temporary server build
  try {
    fs.rmSync(path.resolve(__dirname, 'dist-server'), { recursive: true, force: true });
    console.log('Cleaned up temporary server build files.');
  } catch (err) {
    console.warn('Could not remove dist-server directory:', err.message);
  }
}

run().catch((err) => {
  console.error('Pre-rendering failed:', err);
  process.exit(1);
});
