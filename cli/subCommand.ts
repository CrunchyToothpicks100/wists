import chalk from "chalk";
import usage from "./usage.ts";

export const download = (args: string[]) => {
  if (args.length > 1) {
    console.log(chalk.red("Too many arguments!"));
    console.log(usage.download);
    process.exit(1);
  }
  const url = args[0];
};

export const clone = (args: string[]) => {
  if (args.length > 1) {
    console.log(chalk.red("Too many arguments!"));
    console.log(usage.clone);
    process.exit(1);
  }
  const url = args[0];
};

export const scan = (args: string[]) => {
  if (args.length > 1) {
    console.log(chalk.red("Too many arguments!"));
    console.log(usage.scan);
    process.exit(1);
  }
  const repo = args[0];
};

export const view = (args: string[]) => {
  if (args.length > 1) {
    console.log(chalk.red("Too many arguments!"));
    console.log(usage.view);
    process.exit(1);
  }
  const repo = args[0];
};
