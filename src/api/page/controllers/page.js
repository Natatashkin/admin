"use strict";

/**
 * page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::page.page", ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;

    console.log(id);
    const entity = await strapi.db.query("api::page.page").findOne({
      where: { slug: id },
    });

    // strapi.log.debug(entity.customSlug);
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },
}));
