require("dotenv").config({ path: `${__dirname}\\..\\.env` })
module.exports = { 
  ...process.env,
  config_dir: `${process.env.CONFIG_DIR}`,
  config: `${process.env.CONFIG_DIR}/config.json`,
  serve: `${process.env.SERVICE_DIR}`,
  commands: process.env.COMMANDS.split(',') || ['node'],
};
