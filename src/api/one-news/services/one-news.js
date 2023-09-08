'use strict';

/**
 * one-news service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::one-news.one-news');
