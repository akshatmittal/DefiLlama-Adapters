const { getUniTVL } = require("../helper/unknownTokens");

module.exports = {
  misrepresentedTokens: true,
  start: 1669075200,
  arbitrum: {
    tvl: getUniTVL({ factory: '0x6EcCab422D763aC031210895C81787E87B43A652', useDefaultCoreAssets: true,}),
  },
  sanko: {
    tvl: getUniTVL({factory: '0x7d8c6B58BA2d40FC6E34C25f9A488067Fe0D2dB4', useDefaultCoreAssets: true})
  }
};