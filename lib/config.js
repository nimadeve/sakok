require("dotenv").config({ path: `${__dirname}/../.env` })
module.exports = { 
  ...process.env,
  config_dir: `${process.env.CONFIG_DIR || '.sakok'}`,
  config: `${process.env.CONFIG_DIR || '.sakok'}/config.json`,
  serve: `${process.env.SERVICE_DIR || 'services'}`,
  NODE_DIR: `${process.env.NODE_DIR || 'services'}`,
  REACT_DIR: `${process.env.REACT_DIR || 'components'}`,
  commands: ['node','react'],
};
