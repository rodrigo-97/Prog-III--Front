const { default: Axios } = require("axios");

const url = "http://localhost:3333/api/shinobis";
const urlInsert = "http://localhost:3333/api/shinobi";


export default {
  list: async () => {
    return (await Axios.get(url)).data;
  },

  insert: async (shinobi) => {
    return (await Axios.post(urlInsert, shinobi))
  },
};
