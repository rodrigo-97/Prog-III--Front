const axios = require('axios');


const http = axios.create({
  baseURL: 'http://localhost:3333/api',
  timeout: 1000,
});

export default {
  list: async () => {
    return await http.get("/clans");
  },

  insert: async (clan) => {
    return await http.post("/clan", clan);
  },

  update: async(clan) => {
    return await http.put("/clan", clan)
  }
};
