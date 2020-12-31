/*
 Title: 
 Date: 12.30.2020
 Mach: 0.0.1
 Version: MVP
*/

const fs = require('fs').promises;


// for whatever reason, @appnest/readme concats an additional `#<heading-name>` text in the output,
// so we'll just filter them out for now functional regex style. 
export default function headerJunkWorkAround() {

    const outputDir = "./README.md" || null;

    let dirtyReadmeOutput = await fs.readFile(outputDir, (err, data) => {
        if(err) {
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

}

