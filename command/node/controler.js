module.exports = {
    init: (name) => {
      return `
const  ${name.fUC()}Ctrl = new (class ${name.fUC()}Controller {
async index(req, res) {
    try {
    } catch (e) {}
}

async show(req, res) {
    try {
    } catch (e) {}
}

async insert(req, res) {
    try {
    } catch (e) {}
}

async update(req, res) {
    try {
    } catch (e) {}
}

async destroy(req, res) {
    try {
    } catch (e) {}
}
})();

export default ${name.fUC()}Ctrl;
      `
    },
  };
