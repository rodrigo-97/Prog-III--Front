const axios = require('axios');


const http = axios.create({
  baseURL: 'http://localhost:4444/api',
  timeout: 1000,
});

export default {
  list: async () => {
    return await http.get("/shinobis");
  },

  insert: async (shinobi) => {
    return await http.post("/shinobi", shinobi);
  },

  remove: async (id) => {
    return await http.delete("/shinobi/"+id)
  },

  update: async(shinobi) => {
    return await http.put("/shinobi", shinobi)
  }
};
