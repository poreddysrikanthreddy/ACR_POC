import { initPlasmicLoader } from "@plasmicapp/loader-react";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "dXyvLu7j1Po85PHwR2Uoy6",  // ID of a project you are using
      token: "8fkaw53senlNfGT4nwkloMB7XrLaAkkllhZxahq8VHWWFzuOwylCf49ZIou7jv0Vd9BVY6qnhxgR7mkwEZdaw"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})