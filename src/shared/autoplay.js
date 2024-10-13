"use strict";

/**
 * @param  {...any} configs 
 * @returns 
 * @description Auto Mapping Config { options, methods, register, key}
 */
async function autoplayMethods(...configs) {
    try {
        const firstConfig = configs[1];

        if (Array.isArray(firstConfig) && configs[3] && Array.isArray(configs[3])) {
            for (const method of firstConfig) {
                if (configs[0][method] !== undefined) {
                    const active = await configs[2][method](configs[0][method], ...configs[3]);
                    if (active) {
                        const index = this.Conditions.indexOf(method);
                        if (index > -1) {
                            this.Conditions.splice(index, 1);
                        }
                    }
                }
            }
        }

        return this.Conditions.length === 0;
    } catch (err) {
        console.log(err);
    }
};

export default autoplayMethods;
