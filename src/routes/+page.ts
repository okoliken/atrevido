import type { PageLoad } from "./$types";

import { workHistory, projects, personal_projects } from "../utils/data";

export const load: PageLoad = () => {
  return {
    workHistory: workHistory,
    // projects: projects,
    personal_projects: personal_projects,
  };
};
