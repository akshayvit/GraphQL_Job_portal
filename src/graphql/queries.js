import {request,gql} from 'graphql-request';

const GRAPHQL_URL="http://localhost:9000/graphql";

export async function getJobs() {
    const query=gql`
    query 
    {
      jobs {
        id,
        title,
    }
    }
    `;
    const data=await request(GRAPHQL_URL,query);
    return data.jobs;
}

export async function getJob(id) {
    const query=gql`
    query myquery($id: ID!)
{
  job (id: $id){
    id,
    title,
    description
  }
}
    `;
    const variables={id}
    const data=await request(GRAPHQL_URL,query,variables);
    console.log(data);
    return data.job;
}
