#!/usr/bin/env node

import { downloadTemplate } from "giget";
import prompts from "prompts";
import { red, green, bold, cyan } from "kleur/colors";
import fs from "fs-extra";
import path from "path";
import process from "process";

async function init() {
  console.log(bold(cyan("\n🚀 Welcome to create-falin-next!\n")));

  const args = process.argv.slice(2);
  let projectDir = args[0];

  if (!projectDir) {
    const response = await prompts({
      type: "text",
      name: "projectDir",
      message: "Where do you want to create your project?",
      initial: "falin-next-app",
    });
    projectDir = response.projectDir;
  }

  if (!projectDir) {
    console.log(red("✖ Operation cancelled"));
    process.exit(1);
  }

  const targetDir = path.resolve(process.cwd(), projectDir);

  if (fs.existsSync(targetDir) && fs.readdirSync(targetDir).length > 0) {
    const { overwrite } = await prompts({
      type: "confirm",
      name: "overwrite",
      message: `Target directory "${projectDir}" is not empty. Continue?`,
      initial: false,
    });

    if (!overwrite) {
      console.log(red("✖ Operation cancelled"));
      process.exit(1);
    }
  }

  console.log(`\n📥 Downloading template to ${bold(projectDir)}...`);

  try {
    // Download the repo
    // Using github:DuLatif/falin-next refers to the main branch by default
    await downloadTemplate("github:DuLatif/falin-next", {
      dir: targetDir,
      force: true,
    });

    // Cleanup: Remove the cli folder from the downloaded project
    // We don't want the user to have the CLI code in their new app
    const cliDir = path.join(targetDir, "cli");
    if (await fs.pathExists(cliDir)) {
      await fs.remove(cliDir);
    }

    console.log(green("\n✅ Project created successfully!\n"));
    console.log("Next steps:");
    console.log(`  cd ${projectDir}`);
    console.log("  npm install");
    console.log("  npm run dev\n");
  } catch (err) {
    console.error(red("✖ Failed to download template:"), err.message);
    process.exit(1);
  }
}

init().catch((err) => {
  console.error(err);
  process.exit(1);
});
