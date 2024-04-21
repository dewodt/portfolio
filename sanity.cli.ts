import { defineCliConfig } from "sanity/cli";
import { getStudioEnvironmentVariables } from "sanity/cli";

const projectId = getStudioEnvironmentVariables().SANITY_STUDIO_PROJECT_ID;
const dataset = getStudioEnvironmentVariables().SANITY_STUDIO_DATASET;

export default defineCliConfig({
  api: { projectId, dataset },
});
