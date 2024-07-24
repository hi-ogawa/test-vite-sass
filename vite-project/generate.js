import fs from "node:fs";

async function main() {
  const count = Number(process.env.COUNT ?? "100");

  let indexJs = "";
  for (let i = 0; i < count; i++) {
    const pad = String(i).padStart(3, "0");
    const file = `src/scss/generated/test${pad}.scss`;
    indexJs += `import '/${file}'\n`;
    fs.writeFileSync(file, `.test${pad} { color: red }\n`);
  }
  fs.writeFileSync("src/scss/index.js", indexJs);
}

main();
