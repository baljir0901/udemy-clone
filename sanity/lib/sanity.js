import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "your-project-id", // Find this in sanity.json
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-03",
});
