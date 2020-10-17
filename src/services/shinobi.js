const axios = require('axios');


const http = axios.create({
  baseURL: 'http://localhost:4444/api',
  timeout: 1000,
});

export default {
  list: () => {
    return http.get("/shinobis");
  },

  insert: (shinobi) => {
    return http.post("/shinobi", shinobi);
  },

  remove: (id) => {
    return http.delete("/shinobi/"+id)
  },

  update:(shinobi) => {
    return http.put("/shinobi", shinobi)
  }
};
