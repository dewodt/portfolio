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
  console.log("Fetching about-page document...");

  const aboutDoc = await client.fetch(`*[_type == "about-page"][0]`);

  if (!aboutDoc) {
    console.error("No about-page document found. Nothing to migrate.");
    process.exit(1);
  }

  console.log(`Found about-page document: ${aboutDoc._id}`);

  const skillCategories = aboutDoc.skillCategories;

  if (!skillCategories || skillCategories.length === 0) {
    console.log("No skill categories found. Nothing to migrate.");
    process.exit(0);
  }

  let patch = client.patch(aboutDoc._id);
  let migratedCount = 0;

  for (let i = 0; i < skillCategories.length; i++) {
    const category = skillCategories[i];
    const skills = category.skills;

    if (!skills) continue;

    for (let j = 0; j < skills.length; j++) {
      const skill = skills[j];

      if (skill.logo) {
        const basePath = `skillCategories[${i}].skills[${j}]`;

        // Copy logo → logoLight
        patch = patch.set({ [`${basePath}.logoLight`]: skill.logo });

        // Copy logo → logoDark (most logos work in both modes)
        if (!skill.logoDark) {
          patch = patch.set({ [`${basePath}.logoDark`]: skill.logo });
        }

        // Remove old logo field
        patch = patch.unset([`${basePath}.logo`]);

        migratedCount++;
        console.log(`  Migrated skill: ${skill.title}`);
      }
    }
  }

  if (migratedCount === 0) {
    console.log(
      "No skills with 'logo' field found. Migration may have already been applied.",
    );
    process.exit(0);
  }

  console.log(`\nCommitting patch for ${migratedCount} skills...`);
  await patch.commit();

  console.log(
    `Migration complete! ${migratedCount} skill(s) migrated: logo → logoLight + logoDark`,
  );
}

migrate().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
