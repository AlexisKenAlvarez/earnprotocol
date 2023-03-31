import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";
import SkewDelay from "../anim/Delay/SkewDelay";

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const dexList = [
    'Earning Rewards: $EARN holders will be rewarded with special new kinds of cryptocurrency tokens or incentives for trading on the platform.',
    'Decentralized Governance System: The governance model will allow users to participate in the decision-making process of the platform, ensuring that the community is part of its development.',
    'Automation and Trustless Trade Execution: Orders are executed through a trustless and automated settlement system, providing greater efficiency and reducing counterparty risk.',
    'Built-in Liquidity Pool: By encouraging liquidity providers to participate in high-quality trade execution and a self-funding network, the platform can scale its liquidity pool quickly without depending on external sources.',
    'Low Trading Fees: The protocol aims to limit trading fees by passing them onto liquidity providers via token burn or other incentives rather than charging customers directly.',
    'Secure Custody Services: A secure digital wallet system with built-in custodial features ensures your funds are safe while you have access to all your trading information on one platform in real time.'

]

export const EcoList = [
    {
        name: 'Liquidity Pool',
        sub: 'Liquidity',
        color: '#6C46B9',
        content:
            <>
                <div className="w-full flex flex-col gap-y-7 max-w-[50rem] 2xl:max-w-[55rem] text-sm 2xl:text-base text-desc">
                    <div className="">
                        <div className="relative skew-x-6">
                            <SkewDelay>

                                <h1 className='text-5xl font-[800] relative z-10'>LIQUIDITY POOL</h1>
                            </SkewDelay>

                            <h1 className='text-5xl font-[800] absolute top-4 lg:left-4 opacity-20 stroke left-0 right-0 mx-auto lg:mx-0'>LIQUIDITY POOL</h1>
                        </div>
                    </div>
                    <p className="">
                        <span className="text-white font-semibold">Earn Protocol liquidity pools are a new way for investors to earn additional returns on their digital assets. </span>

                        The pools were created by the Earn Protocol team of developers to provide users with an innovative way to leverage their crypto holdings. By staking digital assets &#40;e.g. BNB, ETH, BUSD&#41; in these pools, investors enjoy attractive rewards in the form of yield generation.
                    </p>

                    <p className="">
                        <span className="text-white font-semibold">The pools are currently offering 500% APR per pool from deposit fees and trading fees paid by other users of the platform. </span>
                        This is a high rate of return compared to traditional methods such as cash deposits or stock market investments. Furthermore, the protocol ensures security and maintains funds through its decentralized architecture which makes it more resistant to theft or fraud. Additionally, liquidity pool operators have full control over each individual pool’s parameters such as trading fees, rebalancing policies and collateral requirements; making it easier for investors to customize their settings based on their strategy needs.
                    </p>

                    <div className="flex flex-col gap-y-7 text-white font-semibold">
                        <p className="">
                            There is 0% deposit and withdraw fee for $EARN pools &#40;e.g. EARN-BNB pool&#41;
                        </p>

                        <p className="">
                            Stable coin pools &#40;e.g. BUSD-USDT pool&#41; have 4% deposit and withdraw fee
                        </p>

                        <p className="">
                            Alt coin pools &#40;e.g. BNB-ETH pool&#41; have 2% deposit and withdraw fee
                        </p>
                    </div>

                </div>
            </>
    },
    {
        name: 'Staking',
        sub: 'staking',
        color: "#6D5FB5",
        content:
            <>
                <div className="w-full flex flex-col gap-y-7 max-w-[50rem] 2xl:max-w-[55rem] text-base text-desc">
                    <div className="">
                        <div className="relative skew-x-6">
                            <SkewDelay>
                                <h1 className='text-5xl font-[800] relative z-10'>STAKING</h1>
                            </SkewDelay>
                            <h1 className='text-5xl font-[800] absolute top-4 lg:left-4 opacity-20 stroke left-0 right-0 mx-auto lg:mx-0'>STAKING</h1>
                        </div>
                    </div>
                    <p className="">
                        <span className="text-white font-semibold">
                            Earn Protocol hot wallet staking on DAPP is a crypto-based yield farming protocol.
                        </span>
                        It lets users stake their crypto assets and earn rewards in the form of APY &#40;Annual Percentage Yield&#41;. The annual percentage yield for Earn Protocol’s hot wallet is 300%. This benefit is distributed to users over a period of one pool cycle, which can last anywhere between 3 days to 7 days depending on the selected pool size and type. The reward rate can be subject to change. Staked assets are fully insured so there are no risks associated with staking your funds. There is also no minimum deposit amount required as well as no lock-up period associated with this staking program, so users are free to withdraw their funds at any time.
                    </p>

                    <div className="flex flex-col gap-y-7 text-white font-semibold">
                        <p className="">
                            Deposit fee is 5% for every pool.
                        </p>
                    </div>

                </div>
            </>
    },
    {
        name: 'Farming',
        sub: 'Farming',
        color: "#6D78B2 ",
        content:
            <>
                <div className="w-full flex flex-col gap-y-7 max-w-[50rem] 2xl:max-w-[55rem] text-base text-desc">
                    <div className="">
                        <div className="relative skew-x-6">
                            <SkewDelay>
                                <h1 className='text-5xl font-[800] relative z-10'>FARMING</h1>

                            </SkewDelay>
                            <h1 className='text-5xl font-[800] absolute top-4 lg:left-4 opacity-20 stroke left-0 right-0 mx-auto lg:mx-0'>FARMING</h1>
                        </div>
                    </div>
                    <p className="">
                        <span className="text-white font-semibold">
                            Earn Protocol is a decentralized protocol designed to provide users and yield farmers with access to high-yielding liquidity pools for hot wallet farming.
                        </span>
                        Through Earn Protocol farms, users can stake their crypto in exchange for rewards from DeFi liquidity pools, staking platforms, and other related projects. The farming experience is designed to be less risky than traditional lending protocols, due to the protective layers that Earn Protocol provides. Hot Wallet Farms provide users with the ability to quickly liquidate without waiting to be whitelisted or approved by the pool. By providing easy access to liquidity pools, yield farmers can take advantage of higher yields on their liquidity investments in a shorter amount of time than would otherwise be possible. Additionally, Earn Protocol offers an intuitive dashboard with real-time views of user income and market performance. This makes it easy for farmers to keep track of their return on investment and make changes as needed.
                    </p>

                </div>
            </>
    },
    {
        name: 'Dex/swap',
        sub: 'dex/swap',
        color: "#6E8FAE",
        content:
            <>
                <>
                    <div className="w-full flex flex-col gap-y-7 max-w-[50rem] 2xl:max-w-[55rem] text-sm 2xl:text-base text-desc">
                        <div className="">
                            <div className="relative skew-x-6">
                                <SkewDelay>
                                    <h1 className='text-5xl font-[800] relative z-10'>DEX/SWAP</h1>
                                </SkewDelay>
                                <h1 className='text-5xl font-[800] absolute top-4 lg:left-4 opacity-20 stroke left-0 right-0 mx-auto lg:mx-0'>DEX/SWAP</h1>
                            </div>
                        </div>
                        <p className="">
                            <span className="text-white font-semibold">
                                Earn Protocol is a decentralized application &#40;DApp&#41; that allows users to easily trade tokenized assets on Ethereum.
                            </span>
                            The protocol is an open source, low-cost, and secure DeFi exchange designed to facilitate trading on the Ethereum blockchain. Through Earn Protocol’s use of smart contracts and off-chain order books, traders can quickly access liquidity and execute trades without sacrificing their privacy. Among other features, Earn Protocol offers simple payment terms for buying and selling tokens, atomic swap capability, trustless trading with lightning speed execution, price alerts, easy liquidity management tools, and token staking options. Additionally, Earn Protocol utilizes off-chain order books that enable anonymous user data storage in a tamper-proof manner while providing fast results in exchange orders. Earn Protocol also offers an integrated wallet that supports ETH and ERC tokens, enabling users to securely store their assets as well as initiate trades within the app.
                        </p>

                        <div className="md:max-w-[36rem] sm:max-w-[25rem] max-w-[19rem] mx-auto lg:mx-0">
                            <Slider {...settings}>
                                {dexList.map((items, i) => {
                                    return (
                                        <motion.div initial={{ scale: 0.5, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7 }} className="md:w-[35rem] w-auto md:h-24 h-auto bg-white/20 rounded-lg border-[1px] border-white/50 backdrop-blur-md flex items-center justify-center p-3" key={i}>
                                            <p className="">{i + 1}.&#41; {items}</p>
                                        </motion.div>
                                    )
                                })}
                            </Slider>
                        </div>


                    </div>
                </>
            </>
    },
    {
        name: 'FAAS',
        sub: 'FAAS',
        color: "#6FA6AB",
        content:
            <>
                <div className="w-full flex flex-col gap-y-7 max-w-[50rem] 2xl:max-w-[55rem] text-base text-desc">
                    <div className="">
                        <div className="relative skew-x-6">
                            <SkewDelay>
                                <h1 className='text-5xl font-[800] relative z-10'>FaaS</h1>
                            </SkewDelay>
                            <h1 className='text-5xl font-[800] absolute top-4 lg:left-4 opacity-20 stroke left-0 right-0 mx-auto lg:mx-0'>FaaS</h1>
                        </div>
                    </div>
                    <p className="">
                        <span className="text-white font-semibold">
                            Earn Protocol FaaS Investing wallet is a decentralized finance protocol that allows users to save, lend, borrow and trade assets within the Earn Protocol ecosystem.
                        </span>
                        The wallet accumulates funds from various sources such as yield farming, buyback and burn of native tokens, contract trading fees and more. These funds are then pooled together in one pot and can be used to purchase additional assets that generate yields or capital gains for its holders. The wallet also serves as a liquidity provider in the form of lending or borrowing for traders looking to leverage their positions.Because the Earn Protocol is a fully decentralized platform with no central authority governing it, users remain in complete control of how their strategy is built and performed, but earn profits through economies of scale. Through collective buying power, users get rewarded for staking larger amounts of BNB along with other tokens within the Earn Protocol ecosystem.
                    </p>

                </div>
            </>
    },

]