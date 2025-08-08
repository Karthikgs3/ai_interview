// import { drizzle } from 'drizzle-orm/neon-http';

// const db = drizzle(process.env.DATABASE_URL);

// const result = await db.execute('select 1');

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema.js';
const sql = neon(process.env.DATABASE_URL);
export const db = drizzle({ client: sql },{schema});

const result = await db.execute('select 1');

