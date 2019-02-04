if (!process.env.API_KEY || !process.env.DOMAIN || !process.env.FROM_WHO) {
  console.error(`
  [post_application] Environment variables for Mailing not set
                      - API_KEY
                      - DOMAIN
                      - FROM_WHO
                     All letters will be ignored!`);
}

if (!process.env.PORT) {
  console.error('[post_application] WARN: Environment variable PORT not set. Use default :8000\n');
}

if (!process.env.DATABASE_CONNECTION_URL) {
  console.error('[post_application] WARN: DATABASE_CONNECTION_URL environment variable not set. Can`t load server without database\n');
  throw 'Database Exception: Database url not set';
}

if (!process.env.JWT_PRIVATE_KEY) {
  console.error('[post_application] WARN: JWT_PRIVATE_KEY not set. Use default `some_key`\n');
}



