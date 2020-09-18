import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const addressMap = {
  UNIRouter: '0xA64A150C56e4DD59150C3639643DbeC1dEffd66d',   // TODO: change on migration
  uniswapFactory: '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95',  // uniswap v1
  uniswapFactoryV2: '0x8B220B637c8486F8708Cc6244eD576A55c66c01A', // TODO: change on migration
  YFI: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
  YCRV: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
  UNIAmpl: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
  WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  LINK: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
  MKR: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
  SNX: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
  COMP: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
  LEND: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03',
  HEDG: '0xF1290473E210b2108A85237fbCd7b6eb42Cc654F',
  STEAK: '0xF1290473E210b2108A85237fbCd7b6eb42Cc654F',     // TODO: CHANGE
}

export const uniswapPools = {
  HEDG_ETH: '0xf7cB0e9483659b8A29288c74D9f4ecB0a6106E72', // example change
  LINK_ETH: '0xa2107FA5B38d9bbd2C461D6EDf11B11A50F6b974',
  SNX_ETH: '0x43AE24960e5534731Fc831386c07755A2dc33D47',
  LEND_ETH: '0xaB3F9bF1D81ddb224a2014e98B238638824bCf20',
  COMP_ETH: '0xCFfDdeD873554F362Ac02f8Fb1f02E5ada10516f',
  YFI_ETH: '0x2fDbAdf3C4D5A8666Bc06645B8358ab803996E28',
  STEAK_ETH: '0xDA73Ce7778C87131B6aD4210999De8d93B0a28e9', // TODO: CHANGE
}

export const contractAddresses = {
  steak: {
    1: '0xF10320bA62dEdD7F64CF43D0f81B400344458DB8',
  },
  masterChef: {
    1: '0x7817Cb0654a8158Df91f2A9B349594fba423E95E',
  },
  weth: {
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  },
  xSteak: {
    1: '0xeA24Ed230D4e90082f43bA1B745917E3e89149Bf'
  }
}


export const supportedPools = [
  {
    pid: 6,
    lpAddresses: {
      1: uniswapPools.STEAK_ETH,
    },
    tokenAddresses: {
      1: addressMap.STEAK,
    },
    name: 'Steak Party!',
    symbol: 'STEAK-ETH Uni-LP',
    tokenSymbol: 'STEAK',
    icon: '🥩',
  },
  {
    pid: 0,
    lpAddresses: {
      1: uniswapPools.HEDG_ETH,
    },
    tokenAddresses: {
      1: addressMap.HEDG,
    },
    name: 'Tomahawk',
    symbol: 'ETH-HEDG Uni-LP',
    tokenSymbol: 'HEDG',
    icon: '🐢',
  },
  {
    pid: 1,
    lpAddresses: {
      1: uniswapPools.LINK_ETH,
    },
    tokenAddresses: {
      1: addressMap.LINK,
    },
    name: 'Porterhouse',
    symbol: 'LINK-ETH Uni-LP',
    tokenSymbol: 'LINK',
    icon: '🐌',
  },
  {
    pid: 2,
    lpAddresses: {
      1: uniswapPools.SNX_ETH,
    },
    tokenAddresses: {
      1: addressMap.SNX,
    },
    name: 'Kobe',
    symbol: 'SNX-ETH Uni-LP',
    tokenSymbol: 'SNX',
    icon: '🦆',
  },
  {
    pid: 3,
    lpAddresses: {
      1: uniswapPools.LEND_ETH,
    },
    tokenAddresses: {
      1: addressMap.LEND,
    },
    name: 'Wagyu',
    symbol: 'LEND-ETH Uni-LP',
    tokenSymbol: 'LEND',
    icon: '🦍',
  },
  {
    pid: 4,
    lpAddresses: {
      1: uniswapPools.COMP_ETH,
    },
    tokenAddresses: {
      1: addressMap.COMP,
    },
    name: 'Ribeye',
    symbol: 'COMP-ETH Uni-LP',
    tokenSymbol: 'COMP',
    icon: '🦑',
  },
  {
    pid: 5,
    lpAddresses: {
      1: uniswapPools.YFI_ETH,
    },
    tokenAddresses: {
      1: addressMap.YFI,
    },
    name: 'New York Strip',
    symbol: 'YFI-ETH Uni-LP',
    tokenSymbol: 'YFI',
    icon: '🦖',
  },
]
