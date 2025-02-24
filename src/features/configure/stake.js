import { govPoolABI } from './abi';

export const staking = [
  {
    id: 'bifi-bnb',
    name: 'BIFI',
    logo: 'single-assets/BIFI.png',
    token: 'BIFI',
    tokenDecimals: 18,
    tokenAddress: '0xCa3F508B8e4Dd382eE878A314789373D80A5190A',
    earnedToken: 'BNB',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    earnContractAddress: '0x453D4Ba9a2D594314DF88564248497F7D74d6b2C',
    earnContractAbi: govPoolABI,
    partnership: false,
    status: 'active',
    partner: {
      logo: 'stake/beefy/beefyfinance.png',
      background: 'stake/beefy/background.png',
      text:
        "You probably already knew that Beefy is the most trusted Yield optimizer for the Binance Smart Chain. But did you know that Beefy has it’s on token? $BIFI has a maximum supply of 80000 tokens and there is no way to mint more. Everyone who holds one or more of these $BIFI can not only do cool stuff like create and vote on proposals, they also get a share of all harvests done, every hour, every day on all our +120 vaults. That's a lot of BNB that goes straight to our $BIFI holders. All you have to do is stake your $BIFI in this vault, it’s that simple, come back and harvest your BNB whenever you need it! (You can still vote on proposals even though you have staked your $BIFI here).",
      website: 'https://app.beefy.finance',
      social: {
        telegram: 'http://t.me/beefyfinance',
        twitter: 'https://twitter.com/beefyfinance',
      },
    },
  },
  {
    id: 'moo_venus_eth-brew',
    name: 'CafeSwap',
    logo: 'single-assets/ETH.png',
    token: 'mooVenusETH',
    tokenDecimals: 18,
    tokenAddress: '0xA9936272065e6DDAc9D2453C9a2712B581e9aE1B',
    earnedToken: 'BREW',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x790Be81C3cA0e53974bE2688cDb954732C9862e1',
    earnContractAddress: '0xC7e3795259e9f74F4F2265Bf28680a70b41B4334',
    earnContractAbi: govPoolABI,
    partnership: true,
    status: 'closed',
    partner: {
      logo: 'stake/cafeswap/cafeswap.png',
      background: 'stake/cafeswap/background.png',
      text:
        'CafeSwap is a yield farming and staking platform on BSC Chain, We have chosen BSC because of its low tnx fees and faster speed. We have built this project to provide the best experience with farming while regulating the supply, we believe in partnerships hence we aim to bring all BSC DeFi ecosystems in one place to have a friendly ecosystem for all of us.',
      website: 'https://cafeswap.finance',
      social: {
        telegram: 'https://t.me/CafeSwap',
        twitter: 'https://twitter.com/cafeswapfinance',
      },
    },
  },
  {
    id: 'moo_venus_btc-ramen',
    name: 'RamenSwap',
    logo: 'single-assets/BTCB.svg',
    token: 'mooVenusBTC',
    tokenDecimals: 18,
    tokenAddress: '0x7255Ae13BA4484eD33fB48c4b833000dC12888B4',
    earnedToken: 'RAMEN',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x4F47A0d15c1E53F3d94c069C7D16977c29F9CB6B',
    earnContractAddress: '0x07613c90c6f4F4910e53A1A6fF5dAc352C6a16e4',
    earnContractAbi: govPoolABI,
    partnership: true,
    status: 'closed',
    partner: {
      logo: 'stake/ramenswap/ramenswap.png',
      background: 'stake/ramenswap/background.png',
      text:
        'The Most Delicious Yield Farm AMM on Binance Smart Chain. RamenSwap Finance is a community driven Yield Farming, DeFi Aggregator and DEX Aggregator on Binance Smart Chain. You can earn RAMEN by staking it on the pool and farming it by providing the liquidity to earn more delicious RAMEN. You can also maximize your return by compounding your token in the vault and connecting several DEX to find the most efficient swapping routes across all platforms that will be released in Q2 to support BSC space.\n',
      website: 'https://ramenswap.finance/',
      social: {
        telegram: 'https://t.me/ramenswap',
        twitter: 'https://twitter.com/ramenswap',
      },
    },
  },
  {
    id: 'moo_auto_cake-salt',
    name: 'SaltSwap',
    logo: 'single-assets/CAKE.png',
    token: 'mooAutoCAKEfixed',
    tokenDecimals: 18,
    tokenAddress: '0xe0B473c0dD6D7Fea5B395c3Ce7ffd4FEF0ab4373',
    earnedToken: 'SALT',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x2849b1aE7E04A3D9Bc288673A92477CF63F28aF4',
    earnContractAddress: '0xDda39b0a11de6e0Ebce995D4A065960532EB332E',
    earnContractAbi: govPoolABI,
    partnership: true,
    status: 'closed',
    partner: {
      logo: 'stake/saltswap/saltswap.png',
      background: 'stake/saltswap/background.png',
      text:
        'We are a team of experienced software developers and product managers from top tier tech companies (aka the salts) that want to contribute to the BSC DeFi yield farm movement and take it to the next level. Even though we are starting off with a salty yield farm, we will quickly move on to bigger and greater things. We have big plans for the SALT token.\n',
      website: 'https://saltswap.finance/',
      social: {
        telegram: 'https://t.me/saltswap',
        twitter: 'https://twitter.com/saltswap',
      },
    },
  },
  {
    id: 'moo_venus_ada-crow',
    name: 'CrowFinance',
    logo: 'single-assets/ADA.svg',
    token: 'mooVenusADA',
    tokenDecimals: 18,
    tokenAddress: '0x53c0CE2EBdA0c2A39327bE0B58a3c28A8Dcde420',
    earnedToken: 'CROW',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0xcc2E12a9b5b75360c6FBf23B584c275D52cDdb0E',
    earnContractAddress: '0x7fcfD0ceb5e9bD1A8b910b52983fe9c8aB656E20',
    earnContractAbi: govPoolABI,
    partnership: true,
    status: 'closed',
    partner: {
      logo: 'stake/crowfinance/crowfinance.png',
      background: 'stake/crowfinance/background.png',
      text:
        'CrowFinance an Evolution Yield Farming on Binance Smart Chain with daytime and nighttime burn mechanism system fork from fry and add some function from thug + jetfuel',
      website: 'https://www.crowfinance.net/',
      social: {
        telegram: 'https://t.me/CrowFinance',
        twitter: 'https://twitter.com/crowfinance',
      },
    },
  },
  {
    id: 'moo_auto_wbnb-banana',
    name: 'ApeSwap',
    logo: 'single-assets/WBNB.svg',
    token: 'mooWBNB',
    tokenDecimals: 18,
    tokenAddress: '0x5B06aA1ebd2e15bC6001076355E5B4C39Cbc83F3',
    earnedToken: 'BANANA',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
    earnContractAddress: '0xe4267bFDE62B79d27c8BeD68dB8C114ccBbEE545',
    earnContractAbi: govPoolABI,
    partnership: true,
    status: 'active',
    partner: {
      logo: 'stake/apeswap/logo.png',
      background: 'stake/apeswap/background.png',
      text:
        'ApeSwap is an Automated Market Maker, Yield Farming, and Staking platform on Binance Smart Chain (forked from PancakeSwap). ApeSwap was built by DeFi Apes, for DeFi Apes. We have a dedicated team of experienced monkeys, who have been in the crypto space for years. $BANANA is the native currency of our platform. Stake, pool, and earn $BANANA all on ApeSwap.',
      website: 'https://apeswap.finance/',
      social: {
        telegram: 'https://t.me/ape_swap',
        twitter: 'https://twitter.com/ape_swap',
      },
    },
  },
  {
    id: 'moo_auto_beth-soups',
    name: 'Soup Protocol',
    logo: 'uncategorized/BETH-ETH.svg',
    token: 'mooAutoBETH-ETH',
    tokenDecimals: 18,
    tokenAddress: '0xF3C1EB01E40c47fd32D0397e56569809aae0e9c7',
    earnedToken: 'SOUPS',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x69F27E70E820197A6e495219D9aC34C8C6dA7EeE',
    earnContractAddress: '0x2526Bc61506665494E39cacCaF8c76A1f928D838',
    earnContractAbi: govPoolABI,
    partnership: true,
    status: 'active',
    partner: {
      logo: 'stake/soup/logo.png',
      background: 'stake/soup/background.png',
      text:
        "Soup Protocol is an experimental project that enables the generation of SOUP tokens that runs on Binance Smart Chain. Inspired by the likes of Basis Cash & bDollar, SOUP is an algorithmic token that is designed to pegged its value to the Binance (BNB) token instead of a stablecoin. The protocol is designed to expand and contract the supply of SOUP tokens similar to the way central banks trade fiscal debt to stabilise purchasing power, without any rebases or collateral risk. The SOUP token can be used to buy and sell tokens on Pancake Swap and also can be used to interact with Soup Protocol's upcoming games such as Soup3D.",
      website: 'https://soups.finance/',
      social: {
        telegram: 'https://t.me/soup_community',
        twitter: 'https://twitter.com/soupingGood',
      },
    },
  },
];
