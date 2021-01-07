const { time } = require("./utils");

const args = process.argv.slice(2);

if (args.length !== 1) {
  throw new Error("Invalid arguments. Usage: node . <Problem #>");
}

const problem = args[0].padStart(3, "0");
run(problem);

function run(problem) {
  const { solve } = require(`./problem.${problem}`);

  console.log(`----- Problem ${problem} -----`);

  const { result, elapsed } = time(solve);
  console.log(`Answer: ${result} [${elapsed} ms]`);
}
