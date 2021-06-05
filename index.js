var bitUriParser = require("./bitUriParser");
var paymail = require("./paymail");

const defailtOptions = paymail.node.defaultOptions;

module.exports = { ...bitUriParser, paymailResolving,
  parse: (bitcoinUriString, o = defailtOptions) =>
    bitUriParser.parse(bitcoinUriString, {...defailtOptions, ...o}),
};
