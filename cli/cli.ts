#!/usr/bin/env Bun

import chalk from "chalk";
import { parseArgs } from "util";
import * as sub from "./subCommand.ts";
import usage from "./usage.ts";

const { values, positionals } = parseArgs({
  args: Bun.argv.slice(2),
  options: {
    help: {
      type: "boolean",
      short: "h",
    },
    version: {
      type: "boolean",
      short: "v",
    },
  },
  strict: true,
  allowPositionals: true,
});

if (values.version) {
  console.log("WIsTs v1.0.0, by CrunchyToothpicks100");
  process.exit(0);
}

if (values.help) {
  console.log(`
Usage: ${chalk.blue("wists [-v | --version] [-h | --help] <command> [<args>]")}

Commands:
${chalk.blue("download <github_url>")}
      Downloads the repository (as a compressed archive) and
      unzips it to "$WISTS_REPOS" before adding it to the list
${chalk.blue("clone <github_url>")}
      Clones the repository to "$WISTS_REPOS" before adding
      it to the list
${chalk.blue("scan <repository_name>")}
      Scans the repository, if it was added. Omitting the name
      will prompt you to select a repository.
${chalk.blue("view <repository_name>")}
      Run web server to view the flow charts. Omitting the name
      will prompt you to select a repository.
  `);
  process.exit(0);
}

if (positionals.length === 0) {
  console.log(chalk.red("No arguments provided"));
  console.log(usage.help);
  process.exit(1);
}

try {
  switch (positionals[0]) {
    case "download":
      sub.download(positionals.slice(1) ?? "");
      break;
    case "clone":
      sub.clone(positionals.slice(1) ?? "");
      break;
    case "scan":
      sub.scan(positionals.slice(1) ?? "");
      break;
    case "view":
      sub.view(positionals.slice(1) ?? "");
      break;
    default:
      console.log(chalk.red(`'${positionals[0]}' is not a command`));
      console.log(usage.help);
  }
} catch (err) {
  const errMessage = err instanceof Error ? err.message : String(err);
  console.log(chalk.redBright(`${positionals[0]} failed: `), errMessage);
  process.exit(1);
}
