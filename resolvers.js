import { Company, Job } from "./db.js";

export const resolvers= {
    Query: {
        jobs: ()=> Job.findAll(),
        job: (_root,{id})=>Job.findById(id)
    },
    Job: {
        id: Job.findById(Job.id)
        
    }
};