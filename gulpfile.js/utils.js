
function headerJunkWorkAround(cb) {

    const outputDir = "./README.md" || null;

    let dirtyReadmeOutput = await fs.readFile(outputDir, (err, data) => {
        if (err) {
            console.error(err);
        }

        return `${data}`;
    });

    // load: target heading from folder to avoid manual input 💤
    let targetHeaders = {

        handler: (err, files) => {
            if (err) {
                throw err;
            }
            return Array.from(`${files}`);
        },

        getTagetHeaders: async function () {

            try {
                const sourceDir = "/.readme";
                let dataTargetHeaders = await fs.readdir(sourceDir, this.handler);
                return dataTargetHeaders;
            }

            catch (e) {
                console.error("A FUCK ERECTED!");
            }
        }
    }
    cb();

}

exports.default = headerJunkWorkAround;