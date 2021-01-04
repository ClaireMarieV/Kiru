const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

module.exports = {
  /**
   * Create a record.
   *
   * @return {Object}
   */

  async create(ctx) {
    let entity;
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      data.customer = ctx.state.user.id;
      entity = await strapi.services.orders.create(data, { files });
    } else {
      console.log(ctx.state.user);
      console.log(ctx.state.user.id);

      ctx.request.body.customer = ctx.state.user.id;
      entity = await strapi.services.orders.create(ctx.request.body);
    }
    return sanitizeEntity(entity, { model: strapi.models.orders });
  },

  /**
   * Update a record.
   *
   * @return {Object}
   */

  async update(ctx) {
    const { id } = ctx.params;

    let entity;

    const [order] = await strapi.services.order.find({
      id: ctx.params.id,
      "customer.id": ctx.state.user.id,
    });

    if (!order) {
      return ctx.unauthorized(`You can't update this entry`);
    }

    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.order.update({ id }, data, {
        files,
      });
    } else {
      entity = await strapi.services.order.update({ id }, ctx.request.body);
    }

    return sanitizeEntity(entity, { model: strapi.models.order });
  },

  /**
   * Delete a record.
   *
   * @return {Object}
   */

  async delete(ctx) {
    const { id } = ctx.params;

    let entity;

    const [order] = await strapi.services.order.find({
      id: ctx.params.id,
      "customer.id": ctx.state.user.id,
    });

    if (!order) {
      return ctx.unauthorized(`You can't update this entry`);
    }

    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.order.delete({ id }, data, {
        files,
      });
    } else {
      entity = await strapi.services.order.update({ id }, ctx.request.body);
    }

    return sanitizeEntity(entity, { model: strapi.models.order });
  },
};
