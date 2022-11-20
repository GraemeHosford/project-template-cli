import arg = require("arg");

const parseProcessArgsToOptions = (processArgs: string[]) => {
    const args = arg(
        {
            "--help": Boolean,
            "--gitlab-ci-file": Boolean,
            "--ci": "--gitlab-ci-file"
        },
        {
            argv: processArgs.slice(2)
        }
    );

    return {
        help: args["--help"] || false,
        genCiFile: args["--gitlab-ci-file"] || false
    }
};

const cli = (args: string[]) => {
    const options = parseProcessArgsToOptions(args);
    console.log(options);
    if (options.help) {

    }
};

cli(process.argv);