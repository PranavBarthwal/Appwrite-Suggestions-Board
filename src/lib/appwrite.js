import { Client, Databases, ID } from 'appwrite';

const client = new Client();
const DB_ID = '666c27610032b62ecf0a';
const COLLECTION_ID = '666c2778002832062b84';

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('666c2639002e98303e7c');

export const databases = new Databases(client);
export { DB_ID, COLLECTION_ID, ID }
