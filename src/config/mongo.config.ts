import { ConfigService } from '@nestjs/config';
import {
  MongooseModuleAsyncOptions,
  MongooseModuleOptions,
} from '@nestjs/mongoose';

export const mongoConnection: MongooseModuleAsyncOptions = {
  useFactory: async (config: ConfigService): Promise<MongooseModuleOptions> => {
    return {
      uri: process.env.MONGO_URL,
    };
  },
};
