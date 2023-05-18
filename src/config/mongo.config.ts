import { MongooseModuleAsyncOptions, MongooseModuleOptions } from "@nestjs/mongoose";

export const mongoConnection: MongooseModuleAsyncOptions ={
    useFactory: async(): Promise<MongooseModuleOptions> =>{
        return{
           uri: `{}` 
        }
    },
}