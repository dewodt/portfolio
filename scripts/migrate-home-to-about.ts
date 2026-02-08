import { createClient } from "@sanity/client";

const projectId = process.env.PUBLIC_SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.PUBLIC_SANITY_STUDIO_DATASET;
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId || !dataset || !token) {
  console.error(
    "Missing environment variables: PUBLIC_SANITY_STUDIO_PROJECT_ID, PUBLIC_SANITY_STUDIO_DATASET, SANITY_WRITE_TOKEN",
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  useCdn: false,
  apiVersion: "2024-04-19",
});

async function migrate() {
  console.log("Fetching home-page document...");

  const homeDoc = await client.fetch(`*[_type == "home-page"][0]`);

  if (!homeDoc) {
    console.error("No home-page document found. Nothing to migrate.");
    process.exit(1);
  }

  console.log(`Found home-page document: ${homeDoc._id}`);

  // Copy all fields except internal ones that need to change
  const { _id, _type, _rev, ...fields } = homeDoc;

  const transaction = client.transaction();

  // Create new about-page document
  transaction.createOrReplace({
    ...fields,
    _id: "about-page",
    _type: "about-page",
  });

  // Delete old published document
  transaction.delete("home-page");

  // Delete old draft document if it exists
  transaction.delete("drafts.home-page");

  console.log("Committing transaction...");
  await transaction.commit();

  console.log("Migration complete! home-page → about-page");
  console.log(
    "Remember to populate the new fields (heroMonoLabel, location, education, etc.) in Sanity Studio.",
  );
}

migrate().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
