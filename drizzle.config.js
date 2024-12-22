import 'dotenv/config';
import {defineConfig} from 'drizzle-kit';

export default defineConfig({
    schema:'./app/config/schema.js',
    dialect:'postgresql',
    dbCredentials:{
        url:'postgresql://rktaakash:veZ4y8YDHMmz@ep-withered-shadow-a5yk6cvp.us-east-2.aws.neon.tech/interiordesign?sslmode=require'
    },
})