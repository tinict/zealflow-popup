"use strict";

import autoplayMethodSchema from "../schemas/autoplay.schema.js";

/**
 * 
 * @param {*} autoplayData 
 */
function autoplayMethodValidate(autoplayData) {
    if (!autoplayData || typeof autoplayData !== 'object') {
        console.error("Invalid input: autoplayData must be a non-null object.");
        return;
    }

    const result = autoplayMethodSchema.safeParse(autoplayData);

    if (result.success) {
        console.log("Autoplay Method data is valid!", result.data);
    } else {
        console.error("Validation error:", result.error.errors);
    }
};

export default autoplayMethodValidate;