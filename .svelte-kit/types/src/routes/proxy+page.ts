// @ts-nocheck
import type { PageLoad } from "./$types";

import { workHistory, projects, personal_projects } from "../utils/data";

export const load = () => {
  return {
    workHistory: workHistory,
    // projects: projects,
    personal_projects: personal_projects,
  };
};
;null as any as PageLoad;