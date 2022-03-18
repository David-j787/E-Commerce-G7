import { fetchUtils } from 'react-admin';
const API = process.env.REACT_APP_API;
const apiUrl = API || 'http://localhost:3001';
const httpClient = fetchUtils.fetchJson;



const provi={

     getList: (resource) => {
        
        return httpClient(`${apiUrl}/${resource}`).then(({ json }) => {
           
            let data = json
      
            return {
              data: data,
              total: null
            }
          })
    }
} 
export default provi;