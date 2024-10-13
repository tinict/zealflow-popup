"use strict";

class core {
    constructor(userconfig) {
        this.config = userconfig;
        this.Conditions = [];
    }

    async readConfig(...args) {
        const configMethods = args[1];
        
        if (Array.isArray(configMethods) && args[3] && Array.isArray(args[3])) {
            for (const method of configMethods) {
                if (args[0][method] !== undefined) {
                    const active = await args[2][method](args[0][method], ...args[3]);
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
    }
    
    activeConditions (config, methods) {
        methods.forEach((method) => {
            if (config[method] && config[method].enable == true) 
                this.Conditions.push(method);
        });
    }
};

export default core;