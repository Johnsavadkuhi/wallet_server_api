const requestData = require("../../request");

module.exports = {
  ResultHeader: {
    __resolveType(obj) {
      console.log(obj.hash);
      if (obj.hash) {
        return "Verbosity_True";
      }
      if (obj.hex) {
        return "Verbosity_False";
      }
    },
  },
  Query: {
    getblockheader: async (_, args) => {
      let param = true;
      if (args.verbosity === true) param = true;
      if (args.verbosity === false) param = false;

      const data = `{"method": "getblockheader", "params":["${args.blockhash}" ,${args.verbosity}]}`;

      const r = await requestData(data);

      if (args.verbosity === false) {
        const d = JSON.stringify({ hex: r.data.result });
        return JSON.parse(d);
      }
      return r.data.result;
    },
  },
};
