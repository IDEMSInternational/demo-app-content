import { generateDeploymentConfig } from "scripts";
const config = generateDeploymentConfig("demo")

config.git = {
  content_repo: "https://github.com/IDEMSInternational/demo-app-content",
  content_tag_latest: "1.0.2",
}

config.google_drive = {
  sheets_folder_ids: ["12LHuYxe0rCUZ0Bsk8nx_ce59tVa-8vFL"],
  assets_folder_ids: ["10MM04twOG2iDVmW5VgbmN0Cd1YLU5BsD"],
}
// Override any app constants here
config.app_config.APP_HEADER_DEFAULTS.title = "demo"
config.app_config.APP_SIDEMENU_DEFAULTS.title = "demo"
  
export default config;