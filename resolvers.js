import { Company, Job } from "./db.js";

let Jobs=[]

export const resolvers= {
    Query: {
        jobs: ()=> Job.findAll(),
        job: (_root,{id})=>Job.findById(id),
        jobs_pushed: ()=>Job.findAll()
    },

    Mutation: {
        createJob:  (_root,{title,descrp},context)=>{
            return Job.create({
               id: "112",
               title:title,
               description: descrp
            })
        }
    },

    Job: {
        
    }
};