// Build-time prerender: render <App /> to static HTML and inline it into
// dist/index.html so the page arrives fully formed ("loads at once") and is
// crawlable. The client then hydrates it and the Motion animations play as
// usual. No Node server is needed at runtime — output stays 100% static.
import { readFileSync, writeFileSync, rmSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const templatePath = resolve(root, "dist/index.html");
const serverEntry = pathToFileURL(resolve(root, "dist-server/entry-server.js")).href;

const template = readFileSync(templatePath, "utf-8");
const { render } = await import(serverEntry);

const appHtml = render();

if (!template.includes('<div id="root"></div>')) {
  throw new Error('prerender: could not find <div id="root"></div> in dist/index.html');
}

const html = template.replace(
  '<div id="root"></div>',
  `<div id="root">${appHtml}</div>`,
);

writeFileSync(templatePath, html);
rmSync(resolve(root, "dist-server"), { recursive: true, force: true });

console.log("prerender: inlined %d chars of markup into dist/index.html", appHtml.length);
