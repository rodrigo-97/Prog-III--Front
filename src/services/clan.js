const axios = require('axios');


const http = axios.create({
  baseURL: 'http://localhost:4444/api',
  timeout: 1000,
});

export default {
  list: () => {
    return http.get("/clans");
  },

  insert: (clan) => {
    return http.post("/clan", clan);
  },

  update: (clan) => {
    return http.put("/clan", clan)
  },

  remove: (id) => {
    return http.delete("/clan/" + id)
  },
};
