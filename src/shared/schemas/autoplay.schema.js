'use strict';

import { z } from "zod";

const autoplayMethodSchema = z.object({
    options: z.object({}),
    methods: z.array(z.string()),
    register: z.object({}),
    keys: z.array(z.string()),
});

export default autoplayMethodSchema;
