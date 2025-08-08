import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.js",
  out: "./drizzle",
  dbCredentials: {
    url:'postgresql://neondb_owner:npg_AMNfb6e4VPUG@ep-purple-cake-aew7zq5r-pooler.c-2.us-east-2.aws.neon.tech/AI-Interview?sslmode=require&channel_binding=require',
  }
});
