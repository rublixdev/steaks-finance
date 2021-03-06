import BigNumber from 'bignumber.js/bignumber'
import Img from '../../assets/img/Star.png'
import Img2 from '../../assets/img/Gold-star.png'
import eth from '../../assets/img/eth.png'
import hedge from '../../assets/img/hedge.png'
import uni from '../../assets/img/uni.png'
import link from '../../assets/img/link.png'
import snx from '../../assets/img/snx.png'
import lend from '../../assets/img/lend.png'
import comp from '../../assets/img/comp.png'
import yfi from '../../assets/img/yfi.png'
import steak from '../../assets/img/steak.png'
import USDC from '../../assets/img/USDC.png'
import usdc from '../../assets/img/USDC.png'
import wbtc from '../../assets/img/wbtc.png'
import sushi from '../../assets/img/sushi.png'
import dai from '../../assets/img/dai.png'
import pickle from '../../assets/img/pickle.png'

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
  UNIRouter: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
  uniswapFactory: '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95',
  uniswapFactoryV2: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  YFI: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
  YCRV: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
  WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  LINK: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
  MKR: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
  SNX: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
  COMP: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
  LEND: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03',
  HEDG: '0xF1290473E210b2108A85237fbCd7b6eb42Cc654F',
  UNI: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
  USDC: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  WBTC: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
  STEAK: '0xeED9e4F2450035D6426276a8aA2084966EE3b1bb',
  PICKLE: '0x429881672b9ae42b8eba0e26cd9c73711b891ca5',
  SUSHI: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
  DAI: '0x6b175474e89094c44da98b954eedeac495271d0f',
}

export const uniswapPools = {
  HEDG_ETH: '0xDA73Ce7778C87131B6aD4210999De8d93B0a28e9',
  USDC_ETH: '0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc',
  USDC_WBTC: '0x004375Dff511095CC5A197A54140a24eFEF3A416',
  LINK_ETH: '0xa2107FA5B38d9bbd2C461D6EDf11B11A50F6b974',
  UNI_ETH: '0xd3d2E2692501A5c9Ca623199D38826e513033a17',
  COMP_ETH: '0xCFfDdeD873554F362Ac02f8Fb1f02E5ada10516f',
  YFI_ETH: '0x2fDbAdf3C4D5A8666Bc06645B8358ab803996E28',
  STEAK_ETH: '0x99b46782E350A37D2850fF3713bF29Ab3902CD31',
  LEND_ETH: '0xaB3F9bF1D81ddb224a2014e98B238638824bCf20',
  WBTC_ETH: '0xBb2b8038a1640196FbE3e38816F3e67Cba72D940',
  SNX_ETH: '0x43AE24960e5534731Fc831386c07755A2dc33D47',
  USDC_STEAK: '0x48e130B740Af7D2bAc0Ee7E0dF95dcdC3F6eA162',
  WBTC_STEAK: '0x82e51A70E199F5a25E56Ea55f4229DcdDB822AFD',
  USDC_HEDG: '0xFc2890ffB3069A1A9d3F7B11C7775a1A1ee721c0',
  HEDG_STEAK: '0xF5cAFa398bEB12dCCFBA917c19922C1EA2d6c056',
  PICKLE_ETH: '0xdc98556Ce24f007A5eF6dC1CE96322d65832A819',
  SUSHI_ETH: '0xCE84867c3c02B05dc570d0135103d3fB9CC19433',
  DAI_USDC: '0xAE461cA67B15dc8dc81CE7615e0320dA1A9aB8D5',
}

export const contractAddresses = {
  steak: {
    1: '0xeED9e4F2450035D6426276a8aA2084966EE3b1bb',
  },
  masterChef: {
    1: '0xd58211d19f1A91a9a379D7BE4E20B4e4C3d42c17',
  },
  weth: {
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  },
  xSteak: {
    1: '0x6810536A08D00d51c2C48e0a06537A26828718ba'
  }
}


export const supportedPools = [
  {
    pid: 8,
    lpAddresses: {
      1: uniswapPools.STEAK_ETH,
    },
    tokenAddresses: {
      1: addressMap.STEAK,
    },
    name: 'Steak Party!',
    symbol: 'STEAK-ETH Uni-LP',
    tokenSymbol: 'STEAK',
    icon: steak,
    icon2: eth,
    link: 'https://uniswap.info/pair/0x99b46782e350a37d2850ff3713bf29ab3902cd31',
    active: false,
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
    icon: hedge,
    icon2: eth,
    link: 'https://uniswap.info/pair/0xda73ce7778c87131b6ad4210999de8d93b0a28e9',
    active: false,
  },
  {
    pid: 12,
    lpAddresses: {
      1: uniswapPools.USDC_HEDG,
    },
    tokenAddresses: {
      1: addressMap.HEDG,
    },
    name: 'Flank',
    symbol: 'USDC-HEDG Uni-LP',
    tokenSymbol: 'USDC',
    icon: hedge,
    icon2: USDC,
    link: 'https://uniswap.info/pair/0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc',
    active: false,
  },
  {
    pid: 9,
    lpAddresses: {
      1: uniswapPools.USDC_STEAK,
    },
    tokenAddresses: {
      1: addressMap.USDC,
      2: addressMap.STEAK,
    },
    name: 'BBQ Cookoff',
    symbol: 'USDC-STEAK Uni-LP',
    tokenSymbol: 'USDC',
    icon: USDC,
    icon2: steak,
    link: 'https://uniswap.info/pair/0x48e130b740af7d2bac0ee7e0df95dcdc3f6ea162',
    active: false,
  },
  {
    pid: 10,
    lpAddresses: {
      1: uniswapPools.WBTC_STEAK,
    },
    tokenAddresses: {
      1: addressMap.WBTC,
      2: addressMap.STEAK,
    },
    name: 'The Steakhouse',
    symbol: 'WBTC-STEAK Uni-LP',
    tokenSymbol: 'WBTC',
    icon: wbtc,
    icon2: steak,
    link: 'https://uniswap.info/pair/0x82e51a70e199f5a25e56ea55f4229dcddb822afd',
    active: false,
  },
  {
    pid: 13,
    lpAddresses: {
      1: uniswapPools.HEDG_STEAK,
    },
    tokenAddresses: {
      1: addressMap.HEDG,
    },
    name: 'T-bone',
    symbol: 'HEDG-STEAK Uni-LP',
    tokenSymbol: 'HEDG',
    icon: hedge,
    icon2: steak,
    link: 'https://uniswap.info/pair/0xf5cafa398beb12dccfba917c19922c1ea2d6c056',
    active: false,
  },
  {
    pid: 1,
    lpAddresses: {
      1: uniswapPools.USDC_ETH,
    },
    tokenAddresses: {
      1: addressMap.USDC,
    },
    name: 'Porterhouse',
    symbol: 'USDC-ETH Uni-LP',
    tokenSymbol: 'USDC',
    icon: USDC,
    icon2: eth,
    link: 'https://uniswap.info/pair/0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc',
    active: false,
  },
  {
    pid: 7,
    lpAddresses: {
      1: uniswapPools.WBTC_ETH,
    },
    tokenAddresses: {
      1: addressMap.WBTC,
    },
    name: 'Kobe',
    symbol: 'WBTC-ETH Uni-LP',
    tokenSymbol: 'WBTC',
    icon: wbtc,
    icon2: eth,
    link: 'https://uniswap.info/pair/0xbb2b8038a1640196fbe3e38816f3e67cba72d940',
    active: false,
  },
  {
    pid: 3,
    lpAddresses: {
      1: uniswapPools.LINK_ETH,
    },
    tokenAddresses: {
      1: addressMap.LINK,
    },
    name: 'Wagyu',
    symbol: 'LINK-ETH Uni-LP',
    tokenSymbol: 'LINK',
    icon: link, 
    icon2: eth,
    link: 'https://uniswap.info/pair/0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974',
    active: false,
  },
  {
    pid: 4,
    lpAddresses: {
      1: uniswapPools.UNI_ETH,
    },
    tokenAddresses: {
      1: addressMap.UNI,
    },
    name: 'Filet',
    symbol: 'UNI-ETH Uni-LP',
    tokenSymbol: 'UNI',
    icon: uni,
    icon2: eth,
    link: 'https://uniswap.info/pair/0xd3d2e2692501a5c9ca623199d38826e513033a17',
    active: false,
  },
  {
    pid: 5,
    lpAddresses: {
      1: uniswapPools.COMP_ETH,
    },
    tokenAddresses: {
      1: addressMap.COMP,
    },
    name: 'Ribeye',
    symbol: 'COMP-ETH Uni-LP',
    tokenSymbol: 'COMP',
    icon: comp,
    icon2: eth,
    link: 'https://uniswap.info/pair/0xcffdded873554f362ac02f8fb1f02e5ada10516f',
    active: false,
  },
  {
    pid: 6,
    lpAddresses: {
      1: uniswapPools.YFI_ETH,
    },
    tokenAddresses: {
      1: addressMap.YFI,
    },
    name: 'New York Strip',
    symbol: 'YFI-ETH Uni-LP',
    tokenSymbol: 'YFI',
    icon: yfi,
    icon2: eth,
    link: 'https://uniswap.info/pair/0x2fdbadf3c4d5a8666bc06645b8358ab803996e28',
    active: false,
  },
  {
    pid: 11,
    lpAddresses: {
      1: uniswapPools.SNX_ETH,
    },
    tokenAddresses: {
      1: addressMap.SNX,
    },
    name: 'Brisket',
    symbol: 'SNX-ETH Uni-LP',
    tokenSymbol: 'SNX',
    icon: snx,
    icon2: eth,
    link: 'https://uniswap.info/pair/0x43ae24960e5534731fc831386c07755a2dc33d47',
    active: false,
  },
  {
    pid: 14,
    lpAddresses: {
      1: uniswapPools.PICKLE_ETH,
    },
    tokenAddresses: {
      1: addressMap.PICKLE,
    },
    name: 'Relish',
    symbol: 'PICKLE-ETH Uni-LP',
    tokenSymbol: 'PICKLE',
    icon: pickle,
    icon2: eth,
    link: 'https://uniswap.info/pair/0xdc98556Ce24f007A5eF6dC1CE96322d65832A819',
    active: false,
  },
  {
    pid: 15,
    lpAddresses: {
      1: uniswapPools.SUSHI_ETH,
    },
    tokenAddresses: {
      1: addressMap.SUSHI,
    },
    name: 'Surf & Turf',
    symbol: 'SUSHI-ETH Uni-LP',
    tokenSymbol: 'SUSHI',
    icon: sushi,
    icon2: eth,
    link: 'https://uniswap.info/pair/0xCE84867c3c02B05dc570d0135103d3fB9CC19433',
    active: false,
  },
  {
    pid: 16,
    lpAddresses: {
      1: uniswapPools.DAI_USDC,
    },
    tokenAddresses: {
      1: addressMap.DAI,
    },
    name: 'Ground Beef',
    symbol: 'DAI-USDC Uni-LP',
    tokenSymbol: 'DAI',
    icon: dai,
    icon2: usdc,
    link: 'https://uniswap.info/pair/0xAE461cA67B15dc8dc81CE7615e0320dA1A9aB8D5',
    active: false,
  },

]

supportedPools.sort(function(a,b){return b.active-a.active});

