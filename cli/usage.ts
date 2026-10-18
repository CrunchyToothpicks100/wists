import chalk from "chalk";

const usage = {
  download: "Usage: " + chalk.blue("wists download <github_url>") + "\n",
  clone: "Usage: " + chalk.blue("wists clone <github_url>") + "\n",
  scan: "Usage: " + chalk.blue("wists scan <repository_name>") + "\n",
  view: "Usage: " + chalk.blue("wists view <repository_name>") + "\n",
  help: "See " + chalk.blue("wists -h") + " for help!" + "\n",
};

export default usage;
