require("dotenv").config({ path: `${__dirname}/../.env` })
module.exports = { 
  ...process.env,
  config_dir: `${process.env.CONFIG_DIR || '.sakok'}`,
  config: `${process.env.CONFIG_DIR || '.sakok'}/config.json`,
  serve: `${process.env.SERVICE_DIR || 'services'}`,
  NODE_DIR: `${process.env.NODE_DIR || 'services'}`,
  commands: ['node','react'],
};
