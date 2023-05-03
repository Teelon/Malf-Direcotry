import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';
import Page from './collections/Page';
import Media from './collections/Media';
import Users from './collections/Users';
import Extension from './collections/Extensions'
import Position from './collections/Positions'
import Department from './collections/Departments'

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [
    Page,
    Media,
    Users,
    Extension,
    Position,
    Department
  ],
});
