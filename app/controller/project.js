'use strict';

const Controller = require('egg').Controller;

class ProjectController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg ProjectController';
  }
}

module.exports = ProjectController;
