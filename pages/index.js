/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-img-element */
import React, {useState} from "react";
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import styles from '../styles/Home.module.css'

export default function Home() {
  const [page, setPage] = useState("");

  const linkClicked = (arg) => {
    console.log("clicked");
    setPage(arg);
  }

  return (
    <div>
      <Head>
        <title>ApeCoin</title>
        <meta name="description" content="Apecoin.com" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/1b19a4652a24cde4.css"
          as="style"
        />
        <link
          rel="stylesheet"
          href="/1b19a4652a24cde4.css"
          data-n-g=""
        />
        <noscript data-n-css=""></noscript>

        {/* <!-- Twitter universal website tag code --> */}
        <script>
          !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
          },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
          a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
          {/* // Insert Twitter Pixel ID and Standard Event data below */}
          twq('init','o84pb');
          twq('track','PageView');
        </script>
        {/* <!-- End Twitter universal website tag code --> */}
      </Head>

    <div id="__next" data-reactroot="">
      <div
        className="pointer-events-none fixed top-0 left-0 -z-10 h-screen w-full bg-black/75 backdrop-blur transition-opacity duration-1000 opacity-0"
      ></div>
      <div id="__layout" style={{opacity: 1}}>
        <header className="sticky top-0 left-0 z-50 h-header w-full bg-dither">
          <div
            className="wrapper flex h-full items-center justify-between gap-x-gutter"
          >
            <img
              src="/wordmark.svg"
              alt="ApeCoin"
              className="w-[96px] laptop:w-[76px]"
              style={{cursor: "pointer"}}
              onClick={() => setPage("")}
            />
            <div className="border-t laptop:flex-1">
              <ul className="flex overflow-hidden">
                <li
                  className="tick group relative flex h-nav text-xs uppercase hover:before:h-[12px]"
                  onClick={() => linkClicked("about")}
                >
                  <a
                    className="-ml-px flex items-center pr-lg"
                    target="_self"
                    rel=""
                    ><span>About</span>
                    {/* <!-- --> */}
                  </a>
                </li>
                <li
                  className="tick group relative flex h-nav text-xs uppercase hover:before:h-[12px]"
                >
                  <a
                    className="-ml-px flex items-center pr-lg"
                    target="_self"
                    rel=""
                    onClick={() => linkClicked("governance")}
                    ><span>Governance</span>
                    {/* <!-- --> */}
                  </a>
                </li>
                <li
                  className="tick group relative flex h-nav text-xs uppercase hover:before:h-[12px]"
                >
                  <a
                    className="-ml-px flex items-center pr-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://snapshot.org/#/apecoin.eth"
                    ><span>Proposals</span>
                    <svg
                      className="ml-[6px]"
                      width="7"
                      height="7"
                      viewBox="0 0 7 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.5 0.5H0M6.5 0.5V7M6.5 0.5L0.382353 6.61765"
                        stroke="#E5E5E5"
                        strokeWidth="0.7"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li
                  className="tick group relative flex h-nav text-xs uppercase hover:before:h-[12px]"
                >
                  <a
                    className="-ml-px flex items-center pr-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://forum.apecoin.com"
                    ><span>Discussion</span>
                    <svg
                      className="ml-[6px]"
                      width="7"
                      height="7"
                      viewBox="0 0 7 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.5 0.5H0M6.5 0.5V7M6.5 0.5L0.382353 6.61765"
                        stroke="#E5E5E5"
                        strokeWidth="0.7"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="relative z-50 hidden flex-1 border-t text-xs uppercase laptop:block laptop:flex-[0_0_25%]"
            >
              <ul className="flex overflow-hidden">
                <li
                  className="tick group relative flex h-nav text-xs uppercase hover:before:h-[12px]"
                  onClick={() => linkClicked("buy")}
                >
                  <a
                    className="-ml-px flex items-center pr-lg"
                    target="_self"
                    rel=""
                    ><span>Buy/Sell</span>
                    {/* <!-- --> */}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <main id="__main" style={{opacity: 1}}>
          <video
            id="myVideo"
            autoPlay={true}
            muted={true}
            loop={true}
            className="pointer-events-none fixed top-0 left-0 -z-20 h-screen w-full object-contain"
          >
            <source src="/videos/wen.webm" type="video/webm" />
            <source src="/videos/wen.mp4" type="video/mp4" />
          </video>

          {
            page === "about" && (
              <div className="wrapper mt-sm laptop:pt-xxl" style={{fontFamily: "MD IO"}}><h1 id="ape-coin-is-for-the-web3-economy" className="mx-auto mb-md w-full max-w-2xl text-2xl font-bold uppercase tablet:text-3xl"><span className="relative">ApeCoin is for the web3 economy.</span></h1>
<p className="mx-auto mb-md mt-md w-full max-w-2xl text-lg font-semibold tablet:text-xl">Culture has found new expression in web3 through art, gaming,
entertainment, and events. The possibilities for blockchain’s impact on culture
are so endless that they can’t possibly all be predicted yet. APE is a token
made to support what’s next, controlled and built on by the community. It will
serve as a decentralized protocol layer for community-led initiatives that drive
culture forward into the metaverse.</p>
<h2 id="the-ape-foundation" className="mx-auto mt-xl mb-md w-full max-w-2xl text-xl font-bold uppercase tablet:text-2xl">The APE Foundation</h2>
<p className="mx-auto mb-sm w-full max-w-2xl text-base">The APE Foundation is the steward of ApeCoin. It is not an overseer, but the
base layer on which ApeCoin holders in the ApeCoin DAO can build.</p>
<p className="mx-auto mb-sm w-full max-w-2xl text-base">The Foundation facilitates decentralized and community-led governance and is
designed to become more decentralized over time. It is tasked with administering
the decisions of the ApeCoin DAO, and is responsible for day-to-day
administration, bookkeeping, project management, and other tasks that ensure the
DAO community’s ideas have the support they need to become a reality.</p>
<p className="mx-auto mb-sm w-full max-w-2xl text-base">The goal of the APE Foundation is to steward the growth and development of the
APE ecosystem in a fair and inclusive way. It utilizes the Ecosystem Fund, which
is controlled by a multisig wallet, to pay its expenses as directed by the
ApeCoin DAO and provides an infrastructure for ApeCoin holders to collaborate
through open and permissionless <a className="border-b" href="/governance">governance</a> processes.</p>
<h2 id="the-dao" className="mx-auto mt-xl mb-md w-full max-w-2xl text-xl font-bold uppercase tablet:text-2xl">The DAO</h2>
<p className="mx-auto mb-sm w-full max-w-2xl text-base">ApeCoin DAO exists because decentralized governance is critical to building and
managing a globally dispersed community—and therefore critical to the success of
the APE ecosystem.</p>
<p className="mx-auto mb-sm w-full max-w-2xl text-base">The APE Improvement Proposal Process (see <a className="border-b" href="/governance">Governance</a>) will allow
ApeCoin DAO members to make decisions regarding Ecosystem Fund allocations,
governance rules, projects, partnerships, and beyond. ApeCoin DAO membership is
open to all ApeCoin holders.</p>
<h2 id="the-board" className="mx-auto mt-xl mb-md w-full max-w-2xl text-xl font-bold uppercase tablet:text-2xl">The Board</h2>
<p className="mx-auto mb-sm w-full max-w-2xl text-base">A special council on the APE Foundation (the DAO’s “Board”) provides, at the
behest of the ApeCoin DAO members, oversight of the Foundation administrators.
The purpose of the Board is to administer DAO proposals and serve the vision of
the community. It meets on proposals requiring administrative review under
ApeCoin DAO rules. The initial Board serves a term of six months, after which
DAO members will vote annually on Board members.</p>
<picture className="my-xl mx-auto block w-full max-w-4xl"><source srcSet="/images/ape-foundation-board-mobile.png" media="(max-width: 768px)" /><img alt="The Apecoin Board" src="/images/ape-foundation-board.png" /></picture>
<ul className="mx-auto mb-md w-full max-w-2xl list-disc pl-sm">
<li className="mb-xs pl-sm"><strong>Alexis Ohanian</strong> <br/>Co-founder of Reddit; General Partner &amp; Founder of Seven Seven Six</li>
<li className="mb-xs pl-sm"><strong>Amy Wu</strong> <br/>Head of Ventures &amp; Gaming at FTX</li>
<li className="mb-xs pl-sm"><strong>Maaria Bajwa</strong> <br/>Principal at Sound Ventures</li>
<li className="mb-xs pl-sm"><strong>Yat Siu</strong> <br/>Co-founder &amp; Chairman of Animoca Brands</li>
<li className="mb-xs pl-sm"><strong>Dean Steinbeck</strong> <br/>President &amp; General Counsel at Horizen Labs</li>
</ul>
<h2 id="ape-coin-protocol" className="mx-auto mt-xl mb-md w-full max-w-2xl text-xl font-bold uppercase tablet:text-2xl">ApeCoin Protocol</h2>
<p className="mx-auto mb-sm w-full max-w-2xl text-base">ApeCoin is an ERC-20 governance and utility token used within the APE ecosystem
to empower a decentralized community building at the forefront of web3.</p>
<p className="mx-auto mb-sm w-full max-w-2xl text-base">As the open-source protocol layer of the ecosystem, ApeCoin serves several
purposes:</p>
<table className="mx-auto mt-lg w-full max-w-2xl table-fixed"><thead><tr className="flex border-b border-white/10"><th className="flex flex-1 py-sm pr-gutter text-left text-sm font-semibold uppercase last-of-type:pr-0"></th><th className="flex flex-1 py-sm pr-gutter text-left text-sm font-semibold uppercase last-of-type:pr-0"></th></tr></thead><tbody><tr className="flex border-b border-white/10"><td className="flex-1 items-start py-sm pr-gutter text-sm last-of-type:pr-0">Governance</td><td className="flex-1 items-start py-sm pr-gutter text-sm last-of-type:pr-0">ApeCoin is the ecosystem’s governance token, allowing ApeCoin holders to participate in ApeCoin DAO.</td></tr><tr className="flex border-b border-white/10"><td className="flex-1 items-start py-sm pr-gutter text-sm last-of-type:pr-0">Unification of Spend</td><td className="flex-1 items-start py-sm pr-gutter text-sm last-of-type:pr-0">ApeCoin is the ecosystem’s utility token, giving all its participants a shared and open currency that can be used without centralized intermediaries.</td></tr><tr className="flex border-b border-white/10"><td className="flex-1 items-start py-sm pr-gutter text-sm last-of-type:pr-0">Access</td><td className="flex-1 items-start py-sm pr-gutter text-sm last-of-type:pr-0">ApeCoin provides access to certain parts of the ecosystem that are otherwise unavailable, such as exclusive games, merch, events, and services.</td></tr><tr className="flex border-b border-white/10"><td className="flex-1 items-start py-sm pr-gutter text-sm last-of-type:pr-0">Incentivization</td><td className="flex-1 items-start py-sm pr-gutter text-sm last-of-type:pr-0">ApeCoin is a tool for third-party developers to participate in the ecosystem by incorporating APE into services, games, and other projects.</td></tr></tbody></table>
<h2 id="ape-coin-allocation" className="mx-auto mt-xl mb-md w-full max-w-2xl text-xl font-bold uppercase tablet:text-2xl">ApeCoin Allocation</h2>
<p className="mx-auto mb-sm w-full max-w-2xl text-base">The total supply of ApeCoin is permanently fixed at 1 billion tokens. No minting
capability is exposed through the contract interface, thus the total supply will
never increase. Similarly, the contract interface does not expose any token
burning capability, so the total supply will never decrease.</p>
<p className="mx-auto mb-sm w-full max-w-2xl text-base">In line with the standard practice, a portion of the tokens for contributors to
the project will be initially locked. Locked tokens will be unlocked over a
period of 48 months, in accordance with the predetermined unlock schedule in the
chart below, starting on launch day, March 17, 2022.</p>
<p className="mx-auto mb-sm w-full max-w-2xl text-base">ApeCoin will be distributed among four main groups, as detailed in the chart
below. Wallets holding tokens alloted to the DAO treasury and resources can be
viewed <a className="border-b" href="/treasury-wallets">here</a>.</p>
<picture className="my-xl mx-auto block w-full max-w-4xl"><source srcSet="/images/apecoin-allocation-mobile.png" media="(max-width: 768px)" /><img alt="ApeCoin allocation" src="/images/apecoin-allocation.png"/></picture>
<section className="mx-auto max-w-4xl"><div className="flex flex-col tablet:flex-row border-b border-white/10"><div className="flex-[0_0_50%] mr-gutter py-sm"><div className="text-xl font-semibold">62%</div>
<h3 className="uppercase text-base font-semibold mb-xs">Ecosystem Fund</h3>
<div className="text-xs max-w-sm">BAYC/MAYC NFT holders and treasury/resources</div></div><div className="text-sm py-sm"><div>150,000,000 tokens to BAYC/MAYC</div>
<div className="italic text-xs mb-sm text-white/50">All unlocked for claim at launch</div>
<div>470,000,000 tokens to DAO treasury and resources</div>
<div className="italic text-xs mb-sm text-white/50">117,500,000 unlocked at launch, then 7,343,750 unlocked per month for 48 months</div></div></div><div className="flex flex-col tablet:flex-row border-b border-white/10"><div className="flex-[0_0_50%] mr-gutter py-sm"><div className="text-xl font-semibold">16%<sup>*</sup></div>
<h3 className="uppercase text-base font-semibold mb-xs">Yuga Labs + Charity</h3>
<div className="text-xs max-w-sm">The company behind BAYC and continuing contributor</div>
<div className="text-xs text-white/50 italic max-w-sm">*6.25% worth of Yuga Labs holdings are being donated to the Jane Goodall Legacy Foundation.</div></div><div className="text-sm py-sm"><div>150,000,000 tokens to Yuga Labs</div>
<div className="italic text-xs mb-sm text-white/50">Initial lock-up 12 months, then 4,166,666.67 unlocked per month for 36 months</div>
<div>10,000,000 tokens or equal value donated to the Jane Goodall Legacy Foundation</div>
<div className="italic text-xs text-white/50">Initial lock-up 12 months, then 277,777.78 tokens unlocked per month for 36 months</div></div></div><div className="flex flex-col tablet:flex-row border-b border-white/10"><div className="flex-[0_0_50%] mr-gutter py-sm"><div className="text-xl font-semibold">14%</div>
<h3 className="uppercase text-base font-semibold mb-xs">Launch Contributors</h3>
<div className="text-xs max-w-sm">The companies and people that helped make this project a reality</div></div><div className="text-sm py-sm"><div>140,000,000 tokens to launch contributors. Lockup schedules vary by contributor but fall into one of the following:</div>
<div className="italic text-xs text-white/50">• 10,000,000 tokens upfront, 25,000,000 after 6 months, 25,000,000 after 12 months, and 25,000,000 after 18 months</div>
<div className="italic text-xs text-white/50">• Initial lock-up for 12 months, then 757,575.76 unlocked per month for 33 months</div>
<div className="italic text-xs text-white/50">• Initial lock-up for 12 months, then 833,333.33 unlocked per month for 36 months</div></div></div><div className="flex flex-col tablet:flex-row border-b border-white/10"><div className="flex-[0_0_50%] mr-gutter py-sm"><div className="text-xl font-semibold">8%</div>
<h3 className="uppercase text-base font-semibold mb-xs">BAYC Founders</h3>
<div className="text-xs max-w-sm">The ones who put the Ape in ApeCoin, the four founders of Yuga Labs and BAYC</div></div><div className="text-sm py-sm"><div>80,000,000 tokens to founders of Yuga Labs</div>
<div className="italic text-xs text-white/50">Initial lock-up for 12 months, then  2,222,222.22 unlocked per month for 36 months</div></div></div></section>
<h2 id="ape-coin-claiming-for-bayc-and-mayc-holders" className="mx-auto mt-xl mb-md w-full max-w-2xl text-xl font-bold uppercase tablet:text-2xl">ApeCoin Claiming for BAYC and MAYC Holders</h2>
<p className="mx-auto mb-sm w-full max-w-2xl text-base">Tokens will be allocated to BAYC/MAYC members via the claim page
starting on March 17, 2022 at 8:30AM ET.</p>
<p className="mx-auto mb-sm w-full max-w-2xl text-base">To ensure a fair launch of ApeCoin to BAYC and MAYC NFT holders, the allocation
is informed by the difference in floor price between each collection of NFTs,
roughly the month prior to the token claim launch (02/07/22 to 03/08/22). Each
Bored Ape or Mutant Ape NFT that has a companion Bored Ape Kennel Club NFT will
be able to claim the amount of ApeCoin specified below.</p>
<table className="mx-auto mt-lg w-full max-w-2xl table-fixed"><thead><tr className="flex border-b border-white/10"><th className="flex flex-1 py-sm pr-gutter text-left text-sm font-semibold uppercase last-of-type:pr-0">NFT</th><th className="flex flex-1 py-sm pr-gutter text-left text-sm font-semibold uppercase last-of-type:pr-0">ApeCoin Allocated Per NFT</th></tr></thead><tbody><tr className="flex border-b border-white/10"><td className="flex-1 items-start py-sm pr-gutter text-sm last-of-type:pr-0">Bored Ape only</td><td className="flex-1 items-start py-sm pr-gutter text-sm last-of-type:pr-0">10,094 tokens</td></tr><tr className="flex border-b border-white/10"><td className="flex-1 items-start py-sm pr-gutter text-sm last-of-type:pr-0">Mutant Ape only</td><td className="flex-1 items-start py-sm pr-gutter text-sm last-of-type:pr-0">2,042 tokens</td></tr><tr className="flex border-b border-white/10"><td className="flex-1 items-start py-sm pr-gutter text-sm last-of-type:pr-0">Bored Ape + Kennel Club <span className="block text-xs">(token IDs do not need to match)</span></td><td className="flex-1 items-start py-sm pr-gutter text-sm last-of-type:pr-0">10,950 tokens</td></tr><tr className="flex border-b border-white/10"><td className="flex-1 items-start py-sm pr-gutter text-sm last-of-type:pr-0">Mutant Ape + Kennel Club <span className="block text-xs">(token IDs do not need to match)</span></td><td className="flex-1 items-start py-sm pr-gutter text-sm last-of-type:pr-0">2,898 tokens</td></tr></tbody></table>
<p className="mx-auto mt-md mb-lg w-full max-w-2xl text-xs italic text-white/50">
<li className="mb-xs pl-sm">There is no distinction between Mutant Ape types for the claim.</li>
<li className="mb-xs pl-sm">Ape + Kennel token IDs do not need to match to claim, nor does having the original pairing entitle any extra tokens.</li>
<li className="mb-xs pl-sm">This is a one-time claim that will identify all eligible NFTs in your wallet, in the order that they appear. There will not be an option to deselect an eligible NFT if it is present in your wallet. If you wish to claim for one of your NFTs but not another, you will need to move them to separate wallets.</li>
<li className="mb-xs pl-sm">A Bored Ape or Mutant Ape that has claimed its tokens cannot be used later to claim tokens for an accompanying Kennel Club. All paired NFTs must be claimed together at the same time.</li>
<li className="mb-xs pl-sm">Unused Bored Ape Chemistry Club serums do not qualify for token claim.</li>
<li className="mb-xs pl-sm">The airdrop claim tokens associated with any NFT can only be claimed once. In order to check whether a certain BAYC, MAYC (or companion BAKC) has claimed its tokens, use the below checker.</li>
<li className="mb-xs pl-sm">There will be Ethereum network gas fees incurred to claim ApeCoin.</li>
</p>
<h3 id="how-it-works" className="mx-auto mt-lg mb-sm w-full max-w-2xl text-lg font-semibold uppercase">How it works</h3>
<p className="mx-auto mb-sm w-full max-w-2xl text-base">15% of the total ApeCoin token supply allocated to BAYC/MAYC holders for claim
will be transferred to a smart contract. Ownership of the contract will be
transferred to a multisig wallet, which will be responsible for:</p>
<ul className="mx-auto mb-md w-full max-w-2xl list-disc pl-sm">
<li className="mb-xs pl-sm">initiating the BAYC/MAYC/BAKC claim period</li>
<li className="mb-xs pl-sm">ending the claim period 90 days after launch</li>
<li className="mb-xs pl-sm">taking ownership of all unclaimed APE tokens at the end of the claim period</li>
<li className="mb-xs pl-sm">transferring these unclaimed tokens to the Coinbase Custody wallets that constitute the Ecosystem Fund</li>
</ul>
<p className="mx-auto mb-sm w-full max-w-2xl text-base">The airdrop claim tokens associated with any NFT can only be claimed once. You
will be able to check whether a certain BAYC, MAYC (or BAYC or MAYC with a
companion BAKC) has claimed its tokens once the claiming period has started.</p>
<h3 id="ape-foundation-ip" className="mx-auto mt-lg mb-sm w-full max-w-2xl text-lg font-semibold uppercase">APE Foundation IP</h3>
<p className="mx-auto mb-sm w-full max-w-2xl text-base">The APE Foundation was gifted a 1 of 1 NFT by Yuga Labs, the creators of Bored
Ape Yacht Club. You can see it <a className="border-b" href="https://opensea.io/assets/0x635ddfed0d0a86f5b330c8898d78fc222d6e5ff5/0">here</a>.
Yuga Labs has conveyed all rights and privileges to this NFT and its underlying
artwork to the APE Foundation. The ApeCoin DAO can decide how this intellectual
property is used.</p>
<h2 id="faq" className="mx-auto mt-xl mb-md w-full max-w-2xl text-xl font-bold uppercase tablet:text-2xl">FAQ</h2>
<h3 id="who-what-are-the-different-entities-and-names-and-how-do-they-relate-to-each-other" className="mx-auto mt-lg mb-sm w-full max-w-2xl text-lg font-semibold uppercase">Who/what are the different entities and names, and how do they relate to each other?</h3>
<ul className="mx-auto mb-md w-full max-w-2xl list-disc pl-sm">
<li className="mb-xs pl-sm"><strong>Yuga Labs</strong> - Yuga Labs is a web3 company best known for the creation of the Bored Ape Yacht Club. It will be a community member in the ApeCoin DAO and will adopt APE as the primary token across new projects.</li>
<li className="mb-xs pl-sm"><strong>BAYC</strong> - The Bored Ape Yacht Club is a collection of digital art crafted into NFTs where the token itself doubles as a membership to a swamp club for apes.</li>
<li className="mb-xs pl-sm"><strong>APE Foundation</strong> - The APE Foundation is the steward of ApeCoin, a legal entity that exists to administer the decisions of the ApeCoin DAO.</li>
<li className="mb-xs pl-sm"><strong>ApeCoin DAO</strong> - A decentralized governance organization that will make decisions regarding Ecosystem Fund allocations, governance rules, projects, partnerships, and more. ApeCoin DAO membership is open to all ApeCoin holders.</li>
<li className="mb-xs pl-sm"><strong>APE</strong> - The symbol for ApeCoin token.</li>
</ul>
<h3 id="does-the-foundation-control-ape-coin-and-or-the-ape-coin-dao-if-not-what-role-do-they-play" className="mx-auto mt-lg mb-sm w-full max-w-2xl text-lg font-semibold uppercase">Does the Foundation control ApeCoin and/or the ApeCoin DAO? If not, what role do they play?</h3>
<p className="mx-auto mb-sm w-full max-w-2xl text-base">The Foundation does not control ApeCoin or the ApeCoin DAO. The Foundation
consists of an administrative Board, which exists solely to oversee the
decisions of the ApeCoin DAO, as well as a third party project management team
in charge of ensuring ApeCoin DAO decisions are implemented.</p>
<p className="mx-auto mb-sm w-full max-w-2xl text-base">A decentralized autonomous organization (DAO) is the best way to give every
member of the community a vote on important decisions whether it&apos;s a technical
upgrade or a decision to fund a new idea. However, the reality is that today a
DAO cannot sign a lease or hire people or make merch or whatever the community
decides to do on its own. The Foundation is responsible for the day-to-day
administration, bookkeeping, project management, and other tasks that ensure the
ApeCoin DAO community&apos;s ideas have the support they need to become a reality.</p>
<h3 id="how-was-the-foundation-board-selected" className="mx-auto mt-lg mb-sm w-full max-w-2xl text-lg font-semibold uppercase">How was the Foundation Board selected?</h3>
<p className="mx-auto mb-sm w-full max-w-2xl text-base">Certain members of the community that have strong operational experience were
consulted on how to best structure the ApeCoin DAO. Several of these members
voiced their willingness to join the Board to oversee the decisions of the
community and are committed to upholding and furthering the decentralization of
the ApeCoin DAO. The initial Board will serve 6 months.</p>
<h3 id="will-there-be-a-chance-for-other-individuals-to-join-the-board" className="mx-auto mt-lg mb-sm w-full max-w-2xl text-lg font-semibold uppercase">Will there be a chance for other individuals to join the Board?</h3>
<p className="mx-auto mb-sm w-full max-w-2xl text-base">Yes. After the initial 6-month term, DAO members will vote annually to keep
existing or appoint new Board members. ApeCoin token holders (the DAO members)
can also remove or replace a Board member at any time with a majority “In favor”
vote.</p>
<h3 id="what-role-does-yuga-labs-play-in-all-of-this" className="mx-auto mt-lg mb-sm w-full max-w-2xl text-lg font-semibold uppercase">What role does Yuga Labs play in all of this?</h3>
<p className="mx-auto mb-sm w-full max-w-2xl text-base">Yuga Labs is a contributor to the APE Ecosystem  and will assist in the creation
of products and experiences for the ecosystem as a whole.</p>
<h3 id="what-will-the-charitable-donation-to-the-jane-goodall-legacy-foundation-be-used-for" className="mx-auto mt-lg mb-sm w-full max-w-2xl text-lg font-semibold uppercase">What will the charitable donation to the Jane Goodall Legacy Foundation be used for?</h3>
<p className="mx-auto mb-sm w-full max-w-2xl text-base">The donation will help secure an invested endowment for the JGLF, the earnings
from which will provide ongoing funding for the programs of the Jane Goodall
Institute (JGI). These include the long-term research at the Gombe Stream
Research Center in Western Tanzania (which has been conducted continuously for
more than six decades), community centered conservation (Tacare) to preserve
chimp habitat in six African countries, conservation science, and Roots &amp;
Shoots. Roots &amp; Shoots empowers young people of all ages (kindergarten through
university) to become involved in hands-on projects for people, animals and the
environment and is now active in more than 60 countries.</p>
<h3 id="how-were-the-token-allotments-for-bayc-mayc-and-bakc-nft-holders-calculated" className="mx-auto mt-lg mb-sm w-full max-w-2xl text-lg font-semibold uppercase">How were the token allotments for BAYC, MAYC, and BAKC NFT holders calculated?</h3>
<p className="mx-auto mb-sm w-full max-w-2xl text-base">The allotment of ApeCoin to NFT holders was a ratio based on the average floor
price of BAYC and MAYC from roughly the month prior to launch (02/07/22 to
03/08/22).</p>
<h3 id="why-don-t-those-with-only-bakc-nf-ts-get-a-token-allotment" className="mx-auto mt-lg mb-sm w-full max-w-2xl text-lg font-semibold uppercase">Why don’t those with only BAKC NFTs get a token allotment?</h3>
<p className="mx-auto mb-sm w-full max-w-2xl text-base">BAKC NFTs are companion NFTs to BAYC and MAYC, meaning they don’t have utility
on their own, only when paired with a BAYC or MAYC.</p></div>
            )
          }


          {page === "governance" && (
            <article style={{fontFamily: "MD IO"}} className="wrapper gap-x-gutter tablet:grid tablet:grid-cols-12 laptop:pt-xl"><div className="hidden tablet:col-span-4 tablet:block desktop:col-span-3"><nav aria-label="Table of Contents" className="articles_toc_sidebar__F4fbz sticky top-header overflow-y-auto border-t border-white/10 pt-md"><div className="mb-md text-xs font-semibold uppercase">Table of Contents</div><ul className="toc"><li className="articles_counter__joUem articles_toc_counter__w0CT9 mt-sm flex items-center border-t border-white/10 py-xs"><a href="#ape-coin-dao-governance" className="text-[14px] font-semibold uppercase">ApeCoin DAO Governance</a></li><li className="articles_l_decorator__pJVL_ ml-[2.3334rem] mb-[0.25em] flex items-center text-[12px]"><a href="#guiding-values" className="font-semibold text-white/70 hover:text-white/90">Guiding Values</a></li><li className="articles_l_decorator__pJVL_ ml-[2.3334rem] mb-[0.25em] flex items-center text-[12px]"><a href="#communication-channels" className="font-semibold text-white/70 hover:text-white/90">Communication Channels</a></li><li className="articles_counter__joUem articles_toc_counter__w0CT9 mt-sm flex items-center border-t border-white/10 py-xs"><a href="#proposal-process" className="text-[14px] font-semibold uppercase">Proposal Process</a></li><li className="articles_l_decorator__pJVL_ ml-[2.3334rem] mb-[0.25em] flex items-center text-[12px]"><a href="#proposal-categories" className="font-semibold text-white/70 hover:text-white/90">Proposal Categories</a></li><li className="articles_l_decorator__pJVL_ ml-[2.3334rem] mb-[0.25em] flex items-center text-[12px]"><a href="#proposal-template" className="font-semibold text-white/70 hover:text-white/90">Proposal Template</a></li><li className="articles_l_decorator__pJVL_ ml-[2.3334rem] mb-[0.25em] flex items-center text-[12px]"><a href="#proposal-process" className="font-semibold text-white/70 hover:text-white/90">Proposal Process</a></li><li className="articles_l_decorator__pJVL_ ml-[2.3334rem] mb-[0.25em] flex items-center text-[12px]"><a href="#proposal-conflicts" className="font-semibold text-white/70 hover:text-white/90">Proposal Conflicts</a></li><li className="articles_counter__joUem articles_toc_counter__w0CT9 mt-sm flex items-center border-t border-white/10 py-xs"><a href="#voting" className="text-[14px] font-semibold uppercase">Voting</a></li><li className="articles_l_decorator__pJVL_ ml-[2.3334rem] mb-[0.25em] flex items-center text-[12px]"><a href="#voting-mechanism" className="font-semibold text-white/70 hover:text-white/90">Voting Mechanism</a></li><li className="articles_l_decorator__pJVL_ ml-[2.3334rem] mb-[0.25em] flex items-center text-[12px]"><a href="#voting-process" className="font-semibold text-white/70 hover:text-white/90">Voting Process</a></li><li className="articles_l_decorator__pJVL_ ml-[2.3334rem] mb-[0.25em] flex items-center text-[12px]"><a href="#voting-delegation" className="font-semibold text-white/70 hover:text-white/90">Voting Delegation</a></li><li className="articles_counter__joUem articles_toc_counter__w0CT9 mt-sm flex items-center border-t border-white/10 py-xs"><a href="#the-future-of-ape-coin-dao" className="text-[14px] font-semibold uppercase">The Future of ApeCoin DAO</a></li><li className="articles_counter__joUem articles_toc_counter__w0CT9 mt-sm flex items-center border-t border-white/10 py-xs"><a href="#reference" className="text-[14px] font-semibold uppercase">Reference</a></li><li className="articles_l_decorator__pJVL_ ml-[2.3334rem] mb-[0.25em] flex items-center text-[12px]"><a href="#ape-coin-dao-terminology" className="font-semibold text-white/70 hover:text-white/90">ApeCoin DAO Terminology</a></li><li className="articles_l_decorator__pJVL_ ml-[2.3334rem] mb-[0.25em] flex items-center text-[12px]"><a href="#general-guidelines" className="font-semibold text-white/70 hover:text-white/90">General Guidelines</a></li></ul></nav></div><div className="tablet:col-span-8 desktop:col-span-9"><h1 id="ape-coin-dao-governance" className="articles_section_counter__X8tln peer relative mb-sm mt-xl border-t border-white/10 pt-xl text-2xl font-bold uppercase first:mt-0 tablet:text-3xl"><span className="articles_counter__joUem articles_section_counter_attach__eOkps relative max-w-2xl">ApeCoin DAO Governance</span></h1>
<p className="mb-sm w-full max-w-2xl text-base">The ApeCoin community governs itself via the ApeCoin DAO, the decentralized
governance framework that supports the Ecosystem Fund. The DAO follows a
proposal process to vote on how the Ecosystem Fund will be distributed by the
APE Foundation to promote a diverse and self-sustaining ecosystem.</p>
<p className="mb-sm w-full max-w-2xl text-base">This governance guide is an overview of the proposal process. It’s a living
document that will evolve and improve with the DAO community’s input.</p>
<h3 id="membership" className="mt-lg mb-sm w-full max-w-2xl border-t border-white/10 pt-md text-lg font-semibold uppercase">Membership</h3>
<p className="mb-sm w-full max-w-2xl text-base">Participating in idea submission, commentary, proposal submission, and voting is
restricted to ApeCoin DAO members. Holding ApeCoin is the only requirement for
membership in the DAO.</p>
<h2 id="guiding-values" className="mt-xl mb-sm max-w-2xl border-t border-white/10 pt-md text-xl font-black uppercase tablet:text-2xl"><span className="articles_l_decorator__pJVL_"> Guiding Values</span></h2>
<ul className="mt-md mb-md w-full max-w-2xl list-disc pl-md">
<li className="mb-xs"><strong>Boldness:</strong> We don’t shy away from the weird, the hard, or the new.</li>
<li className="mb-xs"><strong>Equality:</strong> One APE equals one APE.</li>
<li className="mb-xs"><strong>Transparency:</strong> Processes and decisions are shared openly with the community.</li>
<li className="mb-xs"><strong>Collective Responsibility:</strong> We leave everything better than we found it.</li>
<li className="mb-xs"><strong>Persistence:</strong> Success is an ouroboros, not a straight line.</li>
</ul>
<h2 id="communication-channels" className="mt-xl mb-sm max-w-2xl border-t border-white/10 pt-md text-xl font-black uppercase tablet:text-2xl"><span className="articles_l_decorator__pJVL_"> Communication Channels</span></h2>
<p className="mb-sm w-full max-w-2xl text-base">The APE Foundation website is the DAO hub, providing an interface to educate DAO
members on the governance process and provide easy access to the channels below
in order to streamline the DAO’s operation and enhance its utility.</p>
<p className="mb-sm w-full max-w-2xl text-base"><strong>Discourse</strong> is the first stop for all proposals. An AIP (Ape Improvement Proposal)
Idea is submitted as a post in Discourse and must receive confirmation from a
moderator that it complies with DAO-approved <a href="#guidelines">guidelines</a> before it
appears to the community. ApeCoin holders must go through a wallet
authentication process to post ideas or give feedback to ideas via comments.</p>
<p className="mb-sm w-full max-w-2xl text-base"><strong>Snapshot</strong> is used for voting. Proposal drafts that have passed their respective
approval processes become available for voting on Snapshot. ApeCoin holders must
go through a wallet authentication process to vote.</p>
<h1 id="proposal-process" className="articles_section_counter__X8tln peer relative mb-sm mt-xl border-t border-white/10 pt-xl text-2xl font-bold uppercase first:mt-0 tablet:text-3xl"><span className="articles_counter__joUem articles_section_counter_attach__eOkps relative max-w-2xl">Proposal Process</span></h1>
<p className="mb-sm w-full max-w-2xl text-base">ApeCoin DAO is launching its community-led governance via a formal proposal
process based on the one implemented and proven out over time by Ethereum’s EIP
system.</p>
<h2 id="proposal-categories" className="mt-xl mb-sm max-w-2xl border-t border-white/10 pt-md text-xl font-black uppercase tablet:text-2xl"><span className="articles_l_decorator__pJVL_"> Proposal Categories</span></h2>
<p className="mb-sm w-full max-w-2xl text-base">There are three main categories an AIP (Ape Improvement Proposal) can fall under:
Core, Process, or Informational. Core proposals have two subcategories, Brand
Decision and Ecosystem Fund Allocation. Proposals that are being resubmitted
must be classified as such.</p>
<h3 id="core-ecosystem-fund-allocation" className="mt-lg mb-sm w-full max-w-2xl border-t border-white/10 pt-md text-lg font-semibold uppercase">Core: Ecosystem Fund Allocation</h3>
<p className="mb-sm w-full max-w-2xl text-base">Proposals for how DAO funds should be utilized.</p>
<h3 id="core-ecosystem-fund-allocation-resubmission" className="mt-lg mb-sm w-full max-w-2xl border-t border-white/10 pt-md text-lg font-semibold uppercase">Core: Ecosystem Fund Allocation (Resubmission)</h3>
<p className="mb-sm w-full max-w-2xl text-base">Resubmitted proposals for how DAO funds should be utilized.</p>
<h3 id="core-brand-decision" className="mt-lg mb-sm w-full max-w-2xl border-t border-white/10 pt-md text-lg font-semibold uppercase">Core: Brand Decision</h3>
<p className="mb-sm w-full max-w-2xl text-base">Proposals for anything the DAO attaches its name to, including projects and collaborations.</p>
<h3 id="core-brand-decision-resubmission" className="mt-lg mb-sm w-full max-w-2xl border-t border-white/10 pt-md text-lg font-semibold uppercase">Core: Brand Decision (Resubmission)</h3>
<p className="mb-sm w-full max-w-2xl text-base">Resubmitted proposals for anything the DAO attaches its name to, including projects and collaborations.</p>
<h3 id="process" className="mt-lg mb-sm w-full max-w-2xl border-t border-white/10 pt-md text-lg font-semibold uppercase">Process</h3>
<p className="mb-sm w-full max-w-2xl text-base">Proposals for making a change to a process or implementation. Examples include procedures, guidelines, changes to the decision-making process, and changes to the tools or environment of the DAO or Foundation.</p>
<h3 id="process-resubmission" className="mt-lg mb-sm w-full max-w-2xl border-t border-white/10 pt-md text-lg font-semibold uppercase">Process (Resubmission)</h3>
<p className="mb-sm w-full max-w-2xl text-base">Resubmitted proposals for making a change to a process or implementation. Examples include procedures, guidelines, changes to the decision-making process, and changes to the tools or environment of the DAO or Foundation.</p>
<h3 id="informational" className="mt-lg mb-sm w-full max-w-2xl border-t border-white/10 pt-md text-lg font-semibold uppercase">Informational</h3>
<p className="mb-sm w-full max-w-2xl text-base">Proposals for general guidelines or information for the community.</p>
<h3 id="informational-resubmission" className="mt-lg mb-sm w-full max-w-2xl border-t border-white/10 pt-md text-lg font-semibold uppercase">Informational (Resubmission)</h3>
<p className="mb-sm w-full max-w-2xl text-base">Resubmitted proposals for general guidelines or information for the community.</p>
<h2 id="proposal-template" className="mt-xl mb-sm max-w-2xl border-t border-white/10 pt-md text-xl font-black uppercase tablet:text-2xl"><span className="articles_l_decorator__pJVL_"> Proposal Template</span></h2>
<p className="mb-sm w-full max-w-2xl text-base">A proposal typically includes:</p>
<ul className="mt-md mb-md w-full max-w-2xl list-disc pl-md">
<li className="mb-xs"><strong>Abstract</strong> - Two or three sentences that summarize the proposal.</li>
<li className="mb-xs"><strong>Motivation</strong> - A statement on why the APE Community should implement the proposal.</li>
<li className="mb-xs"><strong>Rationale</strong> - An explanation of how the proposal aligns with the APE Community’s mission and guiding values.</li>
<li className="mb-xs"><strong>Key Terms (optional)</strong> - Definitions of any terms within the proposal that are unique to the proposal, new to the APE Community, and/or industry-specific.</li>
<li className="mb-xs"><strong>Specifications</strong> - A detailed breakdown of the platforms and technologies that will be used.</li>
<li className="mb-xs"><strong>Steps to Implement</strong> - The steps to implement the proposal, including associated costs, manpower, and other resources for each step where applicable.</li>
<li className="mb-xs"><strong>Timeline</strong> - Relevant timing details, including but not limited to start date, milestones, and completion dates.</li>
<li className="mb-xs"><strong>Overall Cost</strong> - The total cost to implement the proposal.</li>
</ul>
<p className="mb-sm w-full max-w-2xl text-base">The author can add additional fields to any template if necessary to fully communicate the intentions, specifics, and implications of the AIP Draft.</p>
<p className="mb-sm w-full max-w-2xl text-base"><strong>Proposals that did not make it through the respective approval process and are being resubmitted should also include:</strong></p>
<ul className="mt-md mb-md w-full max-w-2xl list-disc pl-md">
<li className="mb-xs">Link to original proposal</li>
<li className="mb-xs">Reason it was not approved</li>
<li className="mb-xs">Changes that have been made and why it should now be approved</li>
</ul>
<p className="mb-sm w-full max-w-2xl text-base">The author can add additional fields to any template if necessary to fully
communicate the changes made and the intentions, specifics, and implications of
the resubmitted AIP Draft.</p>
<h2 id="proposal-process" className="mt-xl mb-sm max-w-2xl border-t border-white/10 pt-md text-xl font-black uppercase tablet:text-2xl"><span className="articles_l_decorator__pJVL_"> Proposal Process</span></h2>
<h3 id="phase-1-aip-idea" className="mt-lg mb-sm w-full max-w-2xl border-t border-white/10 pt-md text-lg font-semibold uppercase">Phase 1: AIP Idea</h3>
<p className="mb-sm w-full max-w-2xl text-base">An AIP Idea is submitted as a post in Discourse and must receive moderator
confirmation that it complies with DAO-approved guidelines before it appears to
the community. The person or people submitting the AIP Idea will be referred to
as the author or authors (please note that multiple members can work together on
an AIP idea, but it should be submitted only once). The AIP idea informally
gathers comments via Discourse for seven days. The author cannot edit the
original post — if the author wants to propose changes to the original idea,
they must do this via the comments.</p>
<h3 id="phase-2-aip-draft" className="mt-lg mb-sm w-full max-w-2xl border-t border-white/10 pt-md text-lg font-semibold uppercase">Phase 2: AIP Draft</h3>
<p className="mb-sm w-full max-w-2xl text-base">Once the seven-day feedback window has passed and a moderator closes the
Discourse topic, a moderator will send the author the proposal template and next
steps for submission and voting. They may also suggest a proposal category, if
not already specified in Discourse.</p>
<p className="mb-sm w-full max-w-2xl text-base">The author will fill out the template, incorporating any Discourse feedback that
helps the idea better serve the DAO. The author can add additional fields to the
template if necessary to fully communicate the intentions, specifics, and
implications of the AIP Draft. The moderator may also inform the author of
incorrect or missing information that needs to be changed or clarifications that
need to be made. If the author does not respond to those moderator requests
within 30 days, the AIP Draft will be automatically rejected.</p>
<p className="mb-sm w-full max-w-2xl text-base">When the moderator confirms an AIP Draft complies with DAO-approved guidelines,
they assign a number to the AIP for identification purposes throughout the rest
of the process. From this point on, the AIP is referred to as “AIP-#: (Name) -
(Category)”. For example the first AIP is “AIP-1: Proposing the DAO - Process”.</p>
<h3 id="phase-3-aip-analysis-report" className="mt-lg mb-sm w-full max-w-2xl border-t border-white/10 pt-md text-lg font-semibold uppercase">Phase 3: AIP Analysis Report</h3>
<p className="mb-sm w-full max-w-2xl text-base">The AIP Draft is reviewed by a project management team engaged by APE Foundation
who will provide an AIP Analysis Report to ensure costs, steps to implement,
legal considerations, third-party review requirements, potential conflicts of
interests, and any further implications have been identified. Given that AIP
authors may be submitting drafts with little to no resources, this service for
the DAO community ensures that DAO members have enough information about
proposals to make informed decisions when voting.</p>
<h3 id="phase-4-aip-moderation" className="mt-lg mb-sm w-full max-w-2xl border-t border-white/10 pt-md text-lg font-semibold uppercase">Phase 4: AIP Moderation</h3>
<p className="mb-sm w-full max-w-2xl text-base">The AIP Draft + Analysis Report (DAR) Package is reviewed by a team of
moderators and either approved or not approved based on whether it adheres to
the DAO-approved guidelines. If approved, it becomes a Pending AIP and moves to
Phase 5. If not approved, it is eligible for resubmission, except in cases of
violation of the law or reasonable suspicion of fraud or other misleading
information.</p>
<h3 id="phase-5-post-moderation-tagging" className="mt-lg mb-sm w-full max-w-2xl border-t border-white/10 pt-md text-lg font-semibold uppercase">Phase 5: Post-Moderation Tagging</h3>
<p className="mb-sm w-full max-w-2xl text-base">Pending AIPs that have passed AIP Moderation are tagged as “Straight to Vote” or
“Needs Administrative Review.”</p>
<p className="mb-sm w-full max-w-2xl text-base">The “Straight to Vote” tag is given to a pending AIP whose costs, content, and
implications are considered straightforward and of no risk to the well-being of
the DAO. Any Pending AIP that is tagged as “Straight to Vote” will skip to Phase 7.</p>
<p className="mb-sm w-full max-w-2xl text-base">The “Needs Administrative Review” tag is given to a pending AIP whose costs,
content, or implications are considered complicated or a potential risk to the
well-being of the DAO. Any Pending AIP that is tagged as “Needs Administrative
Review” must go through Phase 6.</p>
<h3 id="phase-6-administrative-review" className="mt-lg mb-sm w-full max-w-2xl border-t border-white/10 pt-md text-lg font-semibold uppercase">Phase 6: Administrative Review</h3>
<p className="mb-sm w-full max-w-2xl text-base">For Pending AIPs that have been tagged with “Needs Administrative Review,” the
Board, serving in an administrative capacity, will determine whether
clarification or action is required before moving a Pending AIP to Phase 7. If
clarification or action is not needed, the Pending AIP is tagged as “Approved
for Voting” and proceeds to Phase 7. If the Board decides to return a Pending
AIP for further clarification or action, they must provide a clear explanation
of why and tag it as either “Return for Clarification” or “Return for
Reconstruction.”</p>
<p className="mb-sm w-full max-w-2xl text-base">Reasons to tag as “Return for Clarification” may include but are not limited to:</p>
<ul className="mt-md mb-md w-full max-w-2xl list-disc pl-md">
<li className="mb-xs">Cost to implement unclear/not able to be calculated</li>
<li className="mb-xs">Would use more than 5% of the DAO treasury</li>
<li className="mb-xs">Conflicts with another proposal</li>
</ul>
<p className="mb-sm w-full max-w-2xl text-base">Reasons to tag as “Return for Reconstruction” may include but are not limited to:</p>
<ul className="mt-md mb-md w-full max-w-2xl list-disc pl-md">
<li className="mb-xs">Proposal is at odds with the mission/values of the DAO</li>
<li className="mb-xs">Proposal is at odds with the well-being of the DAO</li>
<li className="mb-xs">Violations of law, or against advice of counsel for APE Foundation</li>
<li className="mb-xs">Reasonable suspicion of fraud or other misleading information</li>
</ul>
<h3 id="phase-7-live-aip" className="mt-lg mb-sm w-full max-w-2xl border-t border-white/10 pt-md text-lg font-semibold uppercase">Phase 7: Live AIP</h3>
<p className="mb-sm w-full max-w-2xl text-base">Drafts that have passed their respective approval processes will become Live
AIPs on Snapshot during the next Weekly AIP Release, which is when new AIPs are
released in batches Thursdays at 9PM ET. Once live on Snapshot, Live AIPs
are open to voting until Weekly Voting Close, which is at 9PM ET on the
Wednesday following their release. Moderators are the only ones that can post
AIPs to Snapshot because they must confirm that each one has gone through the
correct approvals process.</p>
<h3 id="phase-8-final-aip" className="mt-lg mb-sm w-full max-w-2xl border-t border-white/10 pt-md text-lg font-semibold uppercase">Phase 8: Final AIP</h3>
<p className="mb-sm w-full max-w-2xl text-base">If a Live AIP has not gotten any votes or is tied by the Vote Close Time, it
will be tagged as “Stalled” and be eligible for Resubmission. In all other
cases, Live AIPs are moved to one of two Final AIP categories. Rejected Final
AIPs can be resubmitted via the appropriate Resubmission Template if the author
contacts a moderator. Accepted Final AIPs move into Implementation.</p>
<h3 id="phase-9-implementation" className="mt-lg mb-sm w-full max-w-2xl border-t border-white/10 pt-md text-lg font-semibold uppercase">Phase 9: Implementation</h3>
<p className="mb-sm w-full max-w-2xl text-base">For Accepted Final AIPs, implementation will begin based on the steps outlined
in the AIP template. The project management team engaged by the APE Foundation
is responsible for making sure this happens, but is not responsible for doing it
themselves.</p>
<h2 id="proposal-conflicts" className="mt-xl mb-sm max-w-2xl border-t border-white/10 pt-md text-xl font-black uppercase tablet:text-2xl"><span className="articles_l_decorator__pJVL_"> Proposal Conflicts</span></h2>
<p className="mb-sm w-full max-w-2xl text-base">If a suggested proposal directly conflicts with a proposal that is currently up
for vote, the second proposal should not go for a vote until a decision is made
on the first proposal to avoid approval of opposing requirements.</p>
<p className="mb-sm w-full max-w-2xl text-base">A suggested proposal that directly conflicts with another approved proposal
cannot go to vote for three months after the original proposal has been
implemented to avoid wasting community assets.</p>
<h1 id="voting" className="articles_section_counter__X8tln peer relative mb-sm mt-xl border-t border-white/10 pt-xl text-2xl font-bold uppercase first:mt-0 tablet:text-3xl"><span className="articles_counter__joUem articles_section_counter_attach__eOkps relative max-w-2xl">Voting</span></h1>
<p className="mb-sm w-full max-w-2xl text-base">ApeCoin DAO’s consensus mechanism aims to make placing votes fair, transparent,
and low-cost, so that ApeCoin holders can participate in the decision-making of
the DAO.</p>
<h2 id="voting-mechanism" className="mt-xl mb-sm max-w-2xl border-t border-white/10 pt-md text-xl font-black uppercase tablet:text-2xl"><span className="articles_l_decorator__pJVL_"> Voting Mechanism</span></h2>
<p className="mb-sm w-full max-w-2xl text-base">Snapshot was chosen as a voting tool that:</p>
<ul className="mt-md mb-md w-full max-w-2xl list-disc pl-md">
<li className="mb-xs">doesn’t require gas payment</li>
<li className="mb-xs">ensures transparency</li>
<li className="mb-xs">expands governance participation to all holders of ApeCoin</li>
</ul>
<h2 id="voting-process" className="mt-xl mb-sm max-w-2xl border-t border-white/10 pt-md text-xl font-black uppercase tablet:text-2xl"><span className="articles_l_decorator__pJVL_"> Voting Process</span></h2>
<ol className="mt-md mb-md w-full max-w-2xl list-decimal pl-md">
<li className="mb-xs">Moderators post AIPs to Snapshot after ensuring that each one has gone
through the correct approvals process. New AIPs are posted every week on
Thursday at 9PM ET. This is when the six-day voting window opens as well.</li>
<li className="mb-xs">DAO members vote on Snapshot. One ApeCoin is equal to one vote. As votes
cannot be divided into fractions and the total number of votes shouldn’t ever
exceed the number of tokens minted, the number of votes will be rounded down
if a fractional number of tokens is owned by the voter (i.e., 100.1 tokens
will result in 100 votes, and so will 100.9 tokens). The voting options for a
Live AIP are “In favor” and “Against.” Voting “In favor” means the voter is
in favor of implementing the AIP exactly as-is. Voting “Against” means the
vote is against implementing the AIP exactly as-is — you may vote “Against”
to encourage the author to resubmit the AIP after making changes.</li>
<li className="mb-xs">The voting for each proposal in each weekly batch will be open for voting for
six days, closing at 9PM ET on the following Wednesday.</li>
<li className="mb-xs">Proposals that receive a majority “In favor” vote are moved into
implementation. Proposals that are rejected will have the chance to be
resubmitted via the appropriate Resubmission Template if the author contacts
a moderator to initiate this process. If by the Vote Close Time the Live AIP
has not gotten any votes or is tied, it will be tagged as “Stalled” and be
eligible for Resubmission.</li>
</ol>
<h2 id="voting-delegation" className="mt-xl mb-sm max-w-2xl border-t border-white/10 pt-md text-xl font-black uppercase tablet:text-2xl"><span className="articles_l_decorator__pJVL_"> Voting Delegation</span></h2>
<p className="mb-sm w-full max-w-2xl text-base">DAO members have the ability to delegate their vote.</p>
<ul className="mt-md mb-md w-full max-w-2xl list-disc pl-md">
<li className="mb-xs">DAO members can delegate their vote to another DAO member that they consider
to be a trusted subject matter expert.</li>
<li className="mb-xs">Voting delegation is the mechanism by which DAO members with tokens under
initial lock-up will be able to vote.</li>
</ul>
<h1 id="the-future-of-ape-coin-dao" className="articles_section_counter__X8tln peer relative mb-sm mt-xl border-t border-white/10 pt-xl text-2xl font-bold uppercase first:mt-0 tablet:text-3xl"><span className="articles_counter__joUem articles_section_counter_attach__eOkps relative max-w-2xl">The Future of ApeCoin DAO</span></h1>
<p className="mb-sm w-full max-w-2xl text-base">Over time, ApeCoin DAO will transition the proposal and voting mechanisms into a
full, on-chain platform in a form determined by the community. The DAO can do
this by:</p>
<ul className="mt-md mb-md w-full max-w-2xl list-disc pl-md">
<li className="mb-xs">Hiring DAO members to take care of administrative, project management, and
moderation tasks to replace the company appointed</li>
<li className="mb-xs">Creating a community-steering committee</li>
<li className="mb-xs">Implementing on-chain voting</li>
<li className="mb-xs">Voting annually to elect members for the DAO’s Board (the initial Board is in
place for a shorter term of six months)</li>
</ul>
<h1 id="reference" className="articles_section_counter__X8tln peer relative mb-sm mt-xl border-t border-white/10 pt-xl text-2xl font-bold uppercase first:mt-0 tablet:text-3xl"><span className="articles_counter__joUem articles_section_counter_attach__eOkps relative max-w-2xl">Reference</span></h1>
<h2 id="ape-coin-dao-terminology" className="mt-xl mb-sm max-w-2xl border-t border-white/10 pt-md text-xl font-black uppercase tablet:text-2xl"><span className="articles_l_decorator__pJVL_"> ApeCoin DAO Terminology</span></h2>
<ul className="mt-md mb-md w-full max-w-2xl list-disc pl-md">
<li className="mb-xs"><strong>AIP (APE Improvement Proposal)</strong> - a document proposing a new feature, project, activity, goal, piece of information, or change to any proposal that has already been implemented.</li>
<li className="mb-xs"><strong>AIP Idea</strong> - the first step in the process of creating an official AIP, which will be presented to the community for gathering informal feedback for a period of seven days.</li>
<li className="mb-xs"><strong>AIP Draft</strong> - the second step in the process of creating an official AIP, which can only be submitted after the original AIP idea has gathered feedback from the community for seven days in the proper channel. An AIP draft must be submitted directly to a moderator via predetermined AIP templates.</li>
<li className="mb-xs"><strong>AIP Template</strong> - the preset format for an AIP draft, which will vary slightly depending on the nature of the intended AIP.</li>
<li className="mb-xs"><strong>AIP Author</strong> - the DAO member responsible for beginning the APE Improvement Process, starting with presenting the idea to the community via the proper AIP idea process. The AIP author is responsible for incorporating relevant feedback, submitting the subsequent AIP draft via the proper AIP template to the moderator, and responding to questions or requests for clarifications from DAO members and moderators. Any ApeCoin holder can be an AIP author.</li>
<li className="mb-xs"><strong>AIP Categories</strong> - the predetermined classification system for organizing AIPs by their nature or intent. They are: Core Proposal, Ecosystem Fund Allocation Proposal (a subcategory of Core Proposal), Brand Decision Proposal (a subcategory of Core Proposal), Process Proposal, and Informational Proposal.</li>
<li className="mb-xs"><strong>Core Proposal</strong> - a proposal that would be considered the main activities of the DAO, with subcategories that can be expanded on over time via proposal submission.</li>
<li className="mb-xs"><strong>Ecosystem Fund Allocation Proposal</strong> - a proposal about how the Ecosystem Fund should be spent. A subcategory of Core Proposals.</li>
<li className="mb-xs"><strong>Brand Decision Proposal</strong> - a proposal about to whom the community wants to attach its name. This is different from an Ecosystem Fund Allocation Proposal in that it can have associated costs to implement but is not at its core a proposal about Ecosystem Fund Allocation. A subcategory of Core Proposals.</li>
<li className="mb-xs"><strong>Process Proposal</strong> - a proposal about making a change to a process or proposing an implementation. Examples include procedures, guidelines, changes to the decision-making process, and changes to the tools or environment of the DAO or Foundation.</li>
<li className="mb-xs"><strong>Informational Proposal</strong> - a proposal that provides general guidelines or information to the community but does not propose a new feature.</li>
<li className="mb-xs"><strong>Resubmission Proposal</strong> - a proposal that was previously submitted but did not pass either due to initial rejection by moderators or the Board, or by not passing a vote. All proposal categories have a special template for resubmission that the author must link to the original proposal, clearly state why it did not pass, and clearly explain how the resubmission is different.</li>
<li className="mb-xs"><strong>AIP Analysis Report</strong> - a report conducted by a project management team engaged by the APE Foundation to ensure that all costs, steps to implement, legal considerations, third-party review requirements, potential conflicts of interests, and any further implications have been properly considered and identified. This is considered to be a service for the community given that AIP authors will be submitting drafts with little to no resources.</li>
<li className="mb-xs"><strong>APE Improvement Proposal Draft &amp; Analysis Report (AIP DAR Package)</strong> - both the AIP Draft (submitted by the author) and the AIP Analysis Report (submitted by the project management team engaged by the APE Foundation) should be defined as a package after the analysis report is conducted, as they should only be considered together from that point on.</li>
<li className="mb-xs"><strong>AIP Moderation</strong> - the act of reviewing an AIP DAR Package to determine whether or not the AIP draft meets the predetermined and DAO-approved guidelines and therefore is eligible to move to the next step in the process. If an AIP DAR Package passes AIP Moderation, it becomes a Pending AIP.</li>
<li className="mb-xs"><strong>Pending AIP</strong> - the AIP status after AIP DAR, which is only reached if it passes AIP Moderation.</li>
<li className="mb-xs"><strong>Post-Moderation Tagging</strong> - the process of tagging all Pending AIPs that have successfully been through the AIP analysis report and AIP moderation phases. There are two tags given at this stage: 1) “Straight to Vote,” which is for any pending AIP where costs, content, and implications are considered to be straightforward and of no risk to the well-being of the DAO. 2) “Needs Administrative Review,” which is for any pending AIP with costs, content, or implications that are considered to be complicated or a potential risk to the well-being of the DAO and therefore must be reviewed by the Board of the DAO.</li>
<li className="mb-xs"><strong>Administrative Review</strong> - the process of evaluating pending AIPs that have been tagged as “Needs Administrative Review” to determine whether they should be halted or sent to vote by the community.</li>
<li className="mb-xs"><strong>Return for Clarification</strong> - a type of administrative classification that requires the AIP author to clarify certain information regarding the Pending AIP. This classification would be given in cases such as cost to implement being unclear, proposing to utilize a larger percentage of the Ecosystem Fund than is justified based on the value it would provide to the community, or being in direct conflict with an active AIP.</li>
<li className="mb-xs"><strong>Return for Reconstruction</strong> - a type of administrative classification that requires the proposer to restart the proposal submission process because the Pending AIP violates DAO-approved requirements, or in cases of violation of the law, reasonable suspicion of fraud or other misleading information, or the pending AIP being at odds with the mission, values, or well-being of the Foundation or DAO.</li>
<li className="mb-xs"><strong>Weekly AIP Release</strong> - every Thursday at 9PM ET, when all AIPs that are ready to go live are released together in a batch.</li>
<li className="mb-xs"><strong>Weekly Voting Close</strong> - when all AIPs in a Weekly AIP Release batch close for voting, which happens the following Wednesday at 9PM ET.</li>
<li className="mb-xs"><strong>Live AIP</strong> - an AIP that has passed all required approval stages and is launched for the community to vote on it. The voting options for a Live AIP are “In favor” and “Against.” Voting “In favor” means the voter is in favor of implementing the AIP exactly as-is. Voting “Against” means the voter is against implementing the AIP exactly as-is — voters may vote “Against” to encourage the author to resubmit the AIP after making changes.</li>
<li className="mb-xs"><strong>Final AIP</strong> - an AIP that has completed the voting process. There are two subcategories here: Accepted and Rejected.</li>
<li className="mb-xs"><strong>Implementation of Accepted AIP</strong> - the process of implementing an AIP that has been accepted by the community via a vote, based on the predetermined steps laid out in the Draft/Template and Analysis Report phases.</li>
</ul>
<h2 id="general-guidelines" className="mt-xl mb-sm max-w-2xl border-t border-white/10 pt-md text-xl font-black uppercase tablet:text-2xl"><span className="articles_l_decorator__pJVL_"> General Guidelines</span></h2>
<ol className="mt-md mb-md w-full max-w-2xl list-decimal pl-md">
<li className="mb-xs">Every year, there is a DAO-wide vote to determine which DAO members will
serve on a special council on the APE Foundation (the DAO’s “Board”). The
purpose of the Board is to administer DAO proposals and serve the vision of
the community. This initial Board will only serve six months.</li>
<li className="mb-xs">A Board member may be removed and replaced prior to the term’s end pursuant
to a majority vote of token holders.</li>
<li className="mb-xs">The total cost of implementation must be clear in order for a proposal to go
to vote.</li>
<li className="mb-xs">DAO members must search past proposals to ensure any idea they intend to
write a proposal for has not already been submitted.</li>
<li className="mb-xs">If a suggested proposal directly conflicts with a proposal that is currently
up for vote, the second proposal should not go for a vote until a decision is
made on the first proposal to avoid approval of opposing requirements.</li>
<li className="mb-xs">A suggested proposal that directly conflicts with another approved proposal
cannot go to vote for three months after the original proposal has been
implemented to avoid wasting community assets.</li>
<li className="mb-xs">Proposals will not be put up for a vote if they involve illegal activity,
hate speech, pornographic material, or are at odds with the mission or values
of the APE Foundation.</li>
</ol></div></article>
          )}

          {page === "terms" && (
            <div style={{fontFamily: "MD IO"}} className="wrapper mt-sm laptop:pt-xxl"><h1 id="terms-of-use" className="mx-auto mb-md w-full max-w-2xl text-2xl font-bold uppercase tablet:text-3xl"><span className="relative">Terms of Use</span></h1>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">Last Updated: <em>March 3, 2022</em></p>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">Please read these Terms of Use (the <strong>“Terms”</strong>) and our <a className="border-b" href="/privacy">Privacy Policy</a> (<strong>“Privacy Policy”</strong>) carefully because they govern
            your use of the website located at <a className="border-b" href="https://apecoin.com/">ApeCoin.com</a> and the
            content and functionalities accessible via the Site (collectively, the
            <strong>“Site”</strong>) offered by the APE Foundation (<strong>“APE Foundation”</strong>), a Cayman
            Islands foundation limited by guarantee and without share capital.</p>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">The APE Foundation maintains the Site as a portal for information, news and
            updates about the decentralized digital ecosystem utilizing units of value
            denominated as <strong>“Ape Coins.”</strong> For the avoidance of doubt, the APE Foundation does
            not control the blockchain on which Ape Coins are tradable or useable (the
            <strong>“Protocol”</strong>) and cannot control activity and data on the Protocol, the validation
            of transactions on the Protocol, or use of the Protocol. The Protocol is an
            open-source protocol that is maintained and processed by validators across the
            globe.</p>
            <ol className="mx-auto mt-md mb-md w-full max-w-2xl list-decimal pl-lg">
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Agreement to Terms.</strong> By using our Site, you agree to be bound by these
            Terms. If you don’t agree to be bound by these Terms, do not use the Site.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Privacy Policy.</strong> Please review our <a className="border-b" href="/privacy">Privacy Policy</a>, which also
            governs your use of the Site, for information on how we collect, use, and
            share your information.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Changes to these Terms or the Site.</strong> We may update the Terms from time to
            time at our sole discretion. If we do, we’ll let you know by posting the
            updated Terms on the Site. It’s important that you review the Terms whenever
            we update them or you use the Site. If you continue to use the Site after we
            have posted updated Terms it means that you accept and agree to the changes.
            If you don’t agree to be bound by the changes, you may not use the Site
            anymore. We may change or discontinue all or any part of the Site, at any
            time and without notice, at our sole discretion.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Who May Use the Site?</strong> You may use the Site only if you are 18 years or
            older and capable of forming a binding contract with the APE Foundation, and
            not otherwise barred from using the Site under applicable law.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Feedback.</strong> We value your feedback on the Site, but please don’t send us
            suggestions for improvements, creative ideas, designs, pitch portfolios, or
            other materials (collectively <strong>“Unsolicited Ideas”</strong>). This policy is aimed
            at avoiding potential disputes or misunderstandings when our Site might seem
            similar to Unsolicited Ideas that people submit. We may currently be
            developing, have developed, or in the future will develop ideas or materials
            internally or receive ideas or materials from other parties that may be
            similar to Unsolicited Ideas. If you ignore this policy and send us your
            Unsolicited Ideas anyway, you grant us a non-exclusive, worldwide, perpetual,
            irrevocable, fully-paid, royalty-free, sublicensable and transferable license
            under any and all intellectual property or other rights that you own or
            control to use, copy, modify, create derivative works based upon, make, have
            made, sell, offer for sale, import, and otherwise exploit in any manner or
            medium whatsoever known now or in the future your Unsolicited Ideas for any
            purpose, without compensation to you.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>APE Foundation’s Intellectual Property.</strong> We may make available through the
            Site content that is subject to intellectual property rights. We or our
            licensors, or the third parties who otherwise own the intellectual property
            rights, retain all rights to that content.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>General Prohibitions and APE Foundation’s Enforcement Rights.</strong> You agree
            not to do any of the following:</p>
            <ul className="mx-auto mb-md w-full max-w-2xl list-disc pl-sm">
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">Use, display, mirror, or frame the Site or any individual element within
            the Site, Site’s name, any APE Foundation trademark, logo or other
            proprietary information, or the layout and design of any page or form
            contained on a page, without the APE Foundation’s express written consent;</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">Access, tamper with, or use non-public areas of the Site, APE Foundation’s
            computer systems, or the technical delivery systems of APE Foundation’s
            providers;</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">Attempt to probe, scan, or test the vulnerability of any APE Foundation’s
            system or network or breach any security or authentication measures;</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">Avoid, bypass, remove, deactivate, impair, descramble, or otherwise
            circumvent any technological measure implemented by the APE Foundation or
            any of APE Foundation’s providers or any other third party (including
            another user) to protect the Site;</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">Attempt to access or search the Site or download content from the Site
            using any engine, software, tool, agent, device, or mechanism (including
            spiders, robots, crawlers, data mining tools, or the like) other than the
            software and/or search agents provided by the APE Foundation or other
            generally available third-party web browsers;</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">Use the Site, or any portion thereof, for any commercial purpose or for
            the benefit of any third party or in any manner not permitted by these
            Terms;</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">Attempt to decipher, decompile, disassemble, or reverse engineer any of
            the software used to provide the Site;</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">Interfere with, or attempt to interfere with, the access of any user,
            host, or network, including, without limitation, sending a virus,
            overloading, flooding, spamming, or mail-bombing the Site;</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">Impersonate or misrepresent your affiliation with any person or entity;</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">Violate any applicable law or regulation; or</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">Encourage or enable any other individual to do any of the foregoing.</p>
            </li>
            </ul>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">The APE Foundation is not obligated to monitor access to or use of the Site
            or to review or edit any content. However, we have the right to do so for
            the purpose of operating the Site, to ensure compliance with these Terms and
            to comply with applicable law or other legal requirements. We reserve the
            right, but are not obligated, to remove or disable access to any content, at
            any time and without notice, including, but not limited to, if we, at our
            sole discretion, consider it objectionable or in violation of these Terms.
            We have the right to investigate violations of these Terms or conduct that
            affects the Site. We may also consult and cooperate with law enforcement
            authorities to prosecute users who violate the law.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Links to Third Party Websites or Resources.</strong> The Site may allow you to
            access third-party websites or other resources. We provide access only as a
            convenience and are not responsible for the content, products, or services on
            or available from those resources or links displayed on such websites. You
            acknowledge sole responsibility for, and assume all risk arising from, your
            use of any third-party resources.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Termination.</strong> We may suspend or terminate your access to and use of the
            Site at our sole discretion at any time and without notice to you. Upon any
            termination, discontinuation, or cancellation of these Terms or the Site, the
            following Sections will survive: 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, and 15.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Geographic Restrictions.</strong> The APE Foundation is based in the Cayman
            Islands. We make no claims that the Site or any of its content is accessible
            or appropriate outside of the Cayman Islands. Access to the Site may not be
            legal by certain persons or in certain countries. If you access the Site
            from outside the Cayman Islands, you do so on your own initiative and are
            responsible for compliance with local laws.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Warranty Disclaimers.</strong></p>
            <ul className="mx-auto mb-md w-full max-w-2xl list-disc pl-sm">
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">THE SITE IS PROVIDED “AS IS,” WITHOUT WARRANTY OF ANY KIND. WITHOUT
            LIMITING THE FOREGOING, WE EXPLICITLY DISCLAIM ANY IMPLIED WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, QUIET ENJOYMENT, AND
            NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR
            USAGE OF TRADE. We make no warranty that the Site will meet your
            requirements or be available on an uninterrupted, secure, or error-free
            basis. We make no warranty regarding the quality, accuracy, timeliness,
            truthfulness, completeness, or reliability of any information or content
            on the Site. Any reliance you place on such information or content is
            strictly at your own risk.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">To the extent the Site allows you to interact with the Protocol, you
            understand that your use of the Protocol is entirely at your own risk. The
            Protocol is available on an “as is” basis without warranties of any kind,
            either express or implied, including, but not limited to, warranties of
            merchantability, fitness for a particular purpose, quiet enjoyment, and
            non-infringement. You assume all risks associated with using the Protocol,
            and digital assets and decentralized systems generally, including, but not
            limited to, that digital assets are highly volatile; you may not have
            ready access to assets; and you may lose some or all of your tokens or
            other assets. You agree that you will have no recourse against the APE
            Foundation or anyone else for any losses due to the use of the Protocol.
            For example, these losses may arise from or relate to: (i) lost funds;
            (ii) server failure or data loss; (iii) corrupted cryptocurrency wallet
            files; (iv) unauthorized access; (v) errors, mistakes, or inaccuracies; or
            (vi) third-party activities.</p>
            </li>
            </ul>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Indemnity.</strong> You will indemnify and hold the APE Foundation and its
            officers, directors, employees, and agents, harmless from and against any
            claims, disputes, demands, liabilities, damages, losses, and costs and
            expenses, including, without limitation, reasonable legal and accounting
            fees arising out of or in any way connected with (a) your access to or use
            of the Site, or (b) your violation of these Terms.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Limitation of Liability.</strong></p>
            <ul className="mx-auto mb-md w-full max-w-2xl list-disc pl-sm">
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEITHER THE APE FOUNDATION NOR ITS
            SERVICE PROVIDERS INVOLVED IN CREATING, PRODUCING, OR DELIVERING THE SITE
            WILL BE LIABLE FOR ANY INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
            DAMAGES, OR DAMAGES FOR LOST PROFITS, LOST REVENUES, LOST SAVINGS, LOST
            BUSINESS OPPORTUNITY, LOSS OF DATA OR GOODWILL, SERVICE INTERRUPTION,
            COMPUTER DAMAGE, OR SYSTEM FAILURE. OR THE COST OF SUBSTITUTE SERVICES OF
            ANY KIND ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR FROM THE USE
            OF OR INABILITY TO USE THE SITE, WHETHER BASED ON WARRANTY, CONTRACT, TORT
            (INCLUDING NEGLIGENCE), PRODUCT LIABILITY, OR ANY OTHER LEGAL THEORY, AND
            WHETHER OR NOT THE APE FOUNDATION OR ITS SERVICE PROVIDERS HAVE BEEN
            INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, EVEN IF A LIMITED REMEDY SET
            FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL THE APE
            FOUNDATION’S TOTAL LIABILITY ARISING OUT OF OR IN CONNECTION WITH THESE
            TERMS OR FROM THE USE OF OR INABILITY TO USE THE SITE EXCEED ONE HUNDRED
            U.S. DOLLARS ($100).</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">THE EXCLUSIONS AND LIMITATIONS OF DAMAGES SET FORTH ABOVE ARE FUNDAMENTAL
            ELEMENTS OF THE BASIS OF THE BARGAIN BETWEEN THE APE FOUNDATION AND YOU.</p>
            </li>
            </ul>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Governing Law and Forum Choice.</strong> These Terms and any action related
            thereto will be governed by the laws of the Cayman Islands, without regard
            to its conflict of laws provisions. The parties expressly consent to
            personal and exclusive jurisdiction in the courts located in the Cayman
            Islands, and you and the APE Foundation each waive any objection to
            jurisdiction and venue in such courts.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>General Terms.</strong></p>
            <ul className="mx-auto mb-md w-full max-w-2xl list-disc pl-sm">
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Reservation of Rights.</strong> The APE Foundation and its licensors
            exclusively own all right, title and interest in and to the Site,
            including all associated intellectual property rights. You acknowledge
            that the Site is protected by copyright, trademark, and other laws of the
            Cayman Islands and other jurisdictions. You agree not to remove, alter, or
            obscure any copyright, trademark, service mark, or other proprietary
            rights notices incorporated in or accompanying the Site.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Entire Agreement.</strong> These Terms constitute the entire and exclusive
            understanding and agreement between the APE Foundation and you regarding
            the Site, and these Terms supersede and replace all prior oral or written
            understandings or agreements between the APE Foundation and you regarding
            the Site. If any provision of these Terms is held invalid or unenforceable
            by a court of competent jurisdiction, that provision will be enforced to
            the maximum extent permissible and the other provisions of these Terms
            will remain in full force and effect. Except where provided by applicable
            law in your jurisdiction, you may not assign or transfer these Terms, by
            operation of law or otherwise, without the APE Foundation’s prior written
            consent. Any attempt by you to assign or transfer these Terms absent our
            consent or your statutory right without such consent will be null. The
            APE Foundation may freely assign or transfer these Terms without
            restriction. Subject to the foregoing, these Terms will bind and inure to
            the benefit of the parties, their successors, and permitted assigns.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Notices.</strong> Any notices or other communications provided by the APE
            Foundation under these Terms will be given by posting to the Site.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Waiver of Rights.</strong> The APE Foundation’s failure to enforce any right or
            provision of these Terms will not be considered a waiver of such right or
            provision. The waiver of any such right or provision will be effective
            only if in writing and signed by a duly authorized representative of the
            APE Foundation. Except as expressly set forth in these Terms, the exercise
            by either party of any of its remedies under these Terms will be without
            prejudice to its other remedies under these Terms or otherwise.</p>
            </li>
            </ul>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Contact Information.</strong> If you have any questions about these Terms or the
            Site, please contact APE Foundation at <a className="border-b" href="mailto:privacy@apecoin.com">privacy@apecoin.com</a>.</p>
            </li>
            </ol></div>
          )}

          {page === "privacy" && (
            <div style={{fontFamily: "MD IO"}} className="wrapper mt-sm laptop:pt-xxl"><h1 id="privacy-policy" className="mx-auto mb-md w-full max-w-2xl text-2xl font-bold uppercase tablet:text-3xl"><span className="relative">Privacy Policy</span></h1>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">Last Updated: <em>March 3, 2022</em></p>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">This Privacy Policy is designed to help you understand how the APE Foundation
            (called “APE Foundation”, “we,” “us,” and “our”) collects, uses, and shares your
            personal information and to help you understand and exercise your privacy
            rights.</p>
            <ul className="mx-auto mb-md w-full max-w-2xl list-disc pl-sm">
            <li className="mb-xs pl-sm"><a className="border-b" href="/privacy#scope">Scope</a></li>
            <li className="mb-xs pl-sm"><a className="border-b" href="/privacy#changes-to-our-privacy-policy">Changes To Our Privacy Policy</a></li>
            <li className="mb-xs pl-sm"><a className="border-b" href="/privacy#personal-information-we-collect">Personal Information We Collect</a></li>
            <li className="mb-xs pl-sm"><a className="border-b" href="/privacy#how-we-use-your-information">How We Use Your Information</a></li>
            <li className="mb-xs pl-sm"><a className="border-b" href="/privacy#how-we-disclose-your-information">How We Disclose Your Information</a></li>
            <li className="mb-xs pl-sm"><a className="border-b" href="/privacy#your-privacy-choices-and-rights">Your Privacy Choices And Rights</a></li>
            <li className="mb-xs pl-sm"><a className="border-b" href="/privacy#security-of-your-information">Security Of Your Information</a></li>
            <li className="mb-xs pl-sm"><a className="border-b" href="/privacy#international-data-transfers">International Data Transfers</a></li>
            <li className="mb-xs pl-sm"><a className="border-b" href="/privacy#retention-of-personal-information">Retention Of Personal Information</a></li>
            <li className="mb-xs pl-sm"><a className="border-b" href="/privacy#supplemental-notice-for-california-residents">Supplemental Notice For California Residents</a></li>
            <li className="mb-xs pl-sm"><a className="border-b" href="/privacy#supplemental-notice-for-nevada-residents">Supplemental Notice For Nevada Residents</a></li>
            <li className="mb-xs pl-sm"><a className="border-b" href="/privacy#children-s-information">Children’S Information</a></li>
            <li className="mb-xs pl-sm"><a className="border-b" href="/privacy#third-party-websites-applications">Third-Party Websites/Applications</a></li>
            <li className="mb-xs pl-sm"><a className="border-b" href="/privacy#supervisory-authority">Supervisory Authority</a></li>
            <li className="mb-xs pl-sm"><a className="border-b" href="/privacy#contact-us">Contact Us</a></li>
            </ul>
            <h2 id="scope" className="mx-auto mt-xl mb-md w-full max-w-2xl text-xl font-bold uppercase tablet:text-2xl">Scope</h2>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">This Privacy Policy applies to personal information processed by us, including
            on our website located at <a className="border-b" href="https://apecoin.com/">apecoin.com</a> (the <strong>“Site”</strong>).
            To make this Privacy Policy easier to read, our Site and the content and
            functionalities accessible via the Site are collectively referred to as the
            <strong>“Site.”</strong> For the avoidance of doubt, this Privacy Policy does not apply to
            the decentralized digital ecosystem developed by the APE Foundation (the
            <strong>“Protocol”</strong>) and the APE Foundation cannot control activity and data on the
            Protocol, the validation of transactions on the Protocol, or use of the
            Protocol. The Protocol is an open-source protocol that is maintained and
            processed by validators across the globe.</p>
            <h2 id="changes-to-our-privacy-policy" className="mx-auto mt-xl mb-md w-full max-w-2xl text-xl font-bold uppercase tablet:text-2xl">Changes To Our Privacy Policy</h2>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">We may revise this Privacy Policy from time to time at our sole discretion. If
            there are any material changes to this Privacy Policy, we will notify you as
            required by applicable law. You understand and agree that you will be deemed to
            have accepted the updated Privacy Policy if you continue to use our Site after
            the new Privacy Policy takes effect.</p>
            <h2 id="personal-information-we-collect" className="mx-auto mt-xl mb-md w-full max-w-2xl text-xl font-bold uppercase tablet:text-2xl">Personal Information We Collect</h2>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">The categories of personal information we collect depend on how you interact
            with us, our Site, and the requirements of applicable law. We collect
            information that you provide to us, information we obtain automatically when you
            use our Site, and information from other sources such as third-party services
            and organizations, as described below.</p>
            <h3 id="a-information-you-provide-to-us-directly" className="mx-auto mt-lg mb-sm w-full max-w-2xl text-lg font-semibold uppercase">A. Information You Provide To Us Directly</h3>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">We may collect the following personal information that you provide to us:</p>
            <ul className="mx-auto mb-md w-full max-w-2xl list-disc pl-sm">
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Account Creation.</strong> We may collect information if you create an account with us,
            such as your name, username, email address, or password.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Wallet and Transaction Information.</strong> In order to engage in transactions on the
            Site, you may need to provide us or our third-party payment processors with
            access to or information about your digital wallet. We will never ask you or
            collect your private keys.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Other Transactions.</strong> We may collect personal information and details associated
            with your activities on our Site, including token issuance. Any payments made
            via our Site are processed by third-party payment processors.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Your Communications with Us.</strong> We may collect personal information, such as
            email address when you request information about our Site, register for our
            newsletter or marketing promotions, request customer or technical support,
            apply for a job or otherwise communicate with us.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Interactive Features.</strong> We and others who use our Site may collect personal
            information that you submit or make available through our interactive features
            (e.g., via the APE Foundation community, messaging and chat features,
            commenting functionalities, forums, blogs, and social media pages). Any
            personal information you provide on the public sections of these features will
            be considered “public” (the <strong>“User Content”</strong>) unless otherwise required by
            applicable law, and is not subject to the privacy protections referenced
            herein. Please exercise caution before revealing any information that may
            identify you in the real world to other users.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Surveys.</strong> We may contact you to participate in surveys. If you decide to
            participate, you may be asked to provide certain information that may include
            personal information.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Sweepstakes, Giveaways, or Contests.</strong> We may collect personal information you
            provide for any sweepstakes, giveaways, or contests that we offer. In some
            jurisdictions, we are required to publicly share information of sweepstakes
            and contest winners.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Conferences, Trade Shows, and Other Events.</strong> We may collect personal
            information from individuals when we attend or host conferences, trade shows,
            and other events.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Business Development and Strategic Partnerships.</strong> We may collect personal
            information from individuals and third parties to assess and pursue potential
            business opportunities.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Job Applications.</strong> We may post job openings and opportunities on our Site. If
            you reply to one of these postings by submitting your application, CV, and/or
            cover letter to us, we will collect and use this information to assess your
            qualifications.</p>
            </li>
            </ul>
            <h3 id="b-information-collected-automatically" className="mx-auto mt-lg mb-sm w-full max-w-2xl text-lg font-semibold uppercase">B. Information Collected Automatically</h3>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">We may collect personal information automatically when you use our Site:</p>
            <ul className="mx-auto mb-md w-full max-w-2xl list-disc pl-sm">
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Automatic Data Collection.</strong> We may collect certain information
            automatically when you use our Site, such as your Internet protocol (IP)
            address, user settings, MAC address, cookie identifiers, mobile carrier,
            mobile advertising and other unique identifiers, browser or device
            information, location information (including approximate location derived from
            IP address), Internet service provider, and metadata about the content you
            provide. We may also automatically collect information regarding your use of
            our Site, such as pages that you visit before, during, and after using our
            Site, information about the links you click, the types of content you interact
            with, the frequency and duration of your activities, and other information
            about how you use our Site.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Cookie Policy for Cookies, Pixel Tags/Web Beacons, and Other Technologies.</strong>
            We, as well as third parties that provide content, advertising, or other
            functionality on our Site, may use cookies, pixel tags, local storage, and
            other technologies (“Technologies”) to automatically collect information
            through your use of our Site.</p>
            <ul className="mx-auto mb-md w-full max-w-2xl list-disc pl-sm">
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Cookies.</strong> Cookies are small text files placed in device browsers that store
            preferences and facilitate and enhance your experience.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Pixel Tags/Web Beacons and Other Technologies.</strong> A pixel tag (also known as
            a web beacon) is a piece of code embedded in our Site that collects
            information about engagement on our Site. The use of a pixel tag allows us
            to record, for example, that a user has visited a particular web page or
            clicked on a particular advertisement. We may also include web beacons in
            emails to understand whether messages have been opened, acted on, or
            forwarded.</p>
            </li>
            </ul>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">Our uses of these Technologies fall into the following general categories:</p>
            <ul className="mx-auto mb-md w-full max-w-2xl list-disc pl-sm">
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Operationally Necessary.</strong> This includes Technologies that allow you access
            to our Site, applications, and tools that are required to identify
            irregular website behavior, prevent fraudulent activity, improve security,
            or allow you to make use of our functionality;</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Performance-Related.</strong> We may use Technologies to assess the performance of
            our Site, including as part of our analytic practices to help us
            understand how individuals use our Site (see <a className="border-b" href="/privacy#analytics">Analytics</a> below);</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Functionality-Related.</strong> We may use Technologies that allow us to offer you
            enhanced functionality when accessing or using our Site. This may include
            identifying you when you sign into our Site or keeping track of your
            specified preferences, interests, or past items viewed;</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Advertising- or Targeting-Related.</strong> We may use first-party or third-party
            Technologies to deliver content, including ads relevant to your interests,
            on our Site or on third-party websites.</p>
            </li>
            </ul>
            </li>
            </ul>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">See <a className="border-b" href="/privacy#your-privacy-choices-and-right">“Your Privacy Choices and Rights”</a> below to understand your choices
            regarding these Technologies.</p>
            <ul className="mx-auto mb-md w-full max-w-2xl list-disc pl-sm">
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">Analytics. We may use our Technologies and other third-party tools to process
            analytics information on our Site. These technologies allow us to process
            usage data to better understand how our website and web-related services are
            used, and to continually improve and personalize our Site. Some of our
            analytics partners include:</p>
            <ul className="mx-auto mb-md w-full max-w-2xl list-disc pl-sm">
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Google Analytics.</strong> For more information about how Google uses your data
            (including for its own purposes, e.g., for profiling or linking it to
            other data), please visit <a className="border-b" href="http://www.google.com/policies/privacy/partners/">Google Analytics Privacy Policy</a>. To learn more
            about how to opt-out of Google Analytics use of your information, please
            click <a className="border-b" href="http://tools.google.com/dlpage/gaoptout">here</a>.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Intercom.</strong> For more information about how Intercom uses your data for
            customer interaction purposes, please visit <a className="border-b" href="https://www.intercom.com/legal/privacy">Intercom&apos;s Privacy Policy</a>.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Mixpanel.</strong> For more information about how Mixpanel uses your data for
            customer interaction purposes, please visit <a className="border-b" href="https://mixpanel.com/legal/privacy-policy/">Mixpanel&apos;s Privacy Policy</a>.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Segment.</strong> For more information about how Segment uses your data for
            customer interaction purposes, please visit <a className="border-b" href="https://segment.com/legal/privacy/">Segment&apos;s Privacy Policy</a>.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Social Media Platforms.</strong> Our Site may contain social media buttons, such as
            Discord, Snapchat, Twitter, and Telegram that might include widgets such
            as the “share this” button or other interactive mini programs). These
            features may collect your IP address and which page you are visiting on
            our Site, and may set a cookie to enable the feature to function properly.
            Your interactions with these platforms are governed by the privacy policy
            of the company providing it.</p>
            </li>
            </ul>
            </li>
            </ul>
            <h3 id="c-information-collected-from-other-sources" className="mx-auto mt-lg mb-sm w-full max-w-2xl text-lg font-semibold uppercase">C. Information Collected From Other Sources</h3>
            <ul className="mx-auto mb-md w-full max-w-2xl list-disc pl-sm">
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Third-Party Sources.</strong> We may obtain information about you from other
            sources, including through third-party services and organizations. For example,
            if you access our Site through a third-party application, such as an app store,
            a third-party login service, or a social networking site, we may collect
            information about you from that third-party application that you have made
            available via your privacy settings.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Referrals, Sharing, and Other Features.</strong> Our Site may offer various tools
            and functionalities that allow you to provide information about your friends
            through our referral service; third parties may also use these services to
            upload information about you. Our referral services may also allow you to
            forward or share certain content with a friend or colleague, such as an email
            inviting your friend to use our Site. Please only share with us contact
            information of people with whom you have a relationship (e.g., relative,
            friend, neighbor, or co-worker).</p>
            </li>
            </ul>
            <h2 id="how-we-use-your-information" className="mx-auto mt-xl mb-md w-full max-w-2xl text-xl font-bold uppercase tablet:text-2xl">How We Use Your Information</h2>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">We use your information for a variety of business purposes, including to provide
            our Site, for administrative purposes, and to market our products and services,
            as described below.</p>
            <h3 id="a-provide-our-site" className="mx-auto mt-lg mb-sm w-full max-w-2xl text-lg font-semibold uppercase">A. Provide Our Site</h3>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">We use your information to fulfill our contract with you and provide you with
            our Site and perform our contract with you, such as:</p>
            <ul className="mx-auto mb-md w-full max-w-2xl list-disc pl-sm">
            <li className="mb-xs pl-sm">Managing your information and accounts;</li>
            <li className="mb-xs pl-sm">Providing access to certain areas, functionalities, and features of our Site;</li>
            <li className="mb-xs pl-sm">Answering requests for customer or technical support;</li>
            <li className="mb-xs pl-sm">Communicating with you about your account, activities on our Site, and policy
            changes;</li>
            <li className="mb-xs pl-sm">Processing information about your wallet to facilitate transfers via the Site;</li>
            <li className="mb-xs pl-sm">Processing applications if you apply for a job we post on our Site; and</li>
            <li className="mb-xs pl-sm">Allowing you to register for events.</li>
            </ul>
            <h3 id="b-administrative-purposes" className="mx-auto mt-lg mb-sm w-full max-w-2xl text-lg font-semibold uppercase">B. Administrative Purposes</h3>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">We use your information for our legitimate interest, such as:</p>
            <ul className="mx-auto mb-md w-full max-w-2xl list-disc pl-sm">
            <li className="mb-xs pl-sm">Pursuing our legitimate interests such as direct marketing, research and
            development (including marketing research), network and information security,
            and fraud prevention;</li>
            <li className="mb-xs pl-sm">Detecting security incidents, protecting against malicious, deceptive,
            fraudulent, or illegal activity, and prosecuting those responsible for that
            activity;</li>
            <li className="mb-xs pl-sm">Measuring interest and engagement in our Site;</li>
            <li className="mb-xs pl-sm">Improving, upgrading, or enhancing our Site;</li>
            <li className="mb-xs pl-sm">Developing new products and Site;</li>
            <li className="mb-xs pl-sm">Ensuring internal quality control and safety;</li>
            <li className="mb-xs pl-sm">Authenticating and verifying individual identities;</li>
            <li className="mb-xs pl-sm">Debugging to identify and repair errors with our Site;</li>
            <li className="mb-xs pl-sm">Auditing relating to interactions, transfers, and other compliance activities;</li>
            <li className="mb-xs pl-sm">Sharing information with third parties as needed to provide the Site;</li>
            <li className="mb-xs pl-sm">Enforcing our agreements and policies; and</li>
            <li className="mb-xs pl-sm">Other uses as required to comply with our legal obligations.</li>
            </ul>
            <h3 id="c-marketing-and-advertising-our-products-and-services" className="mx-auto mt-lg mb-sm w-full max-w-2xl text-lg font-semibold uppercase">C. Marketing And Advertising Our Products And Services</h3>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">We may use personal information to tailor and provide you with content and
            advertisements. We may provide you with these materials as permitted by
            applicable law.</p>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">Some of the ways we may market to you include email campaigns, custom audiences
            advertising, and “interest-based” or “personalized advertising,” including
            through cross-device tracking.</p>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">If you have any questions about our marketing practices or if you would like to
            opt out of the use of your personal information for marketing purposes, you may
            contact us at any time as set forth in “<a className="border-b" href="/privacy#contact-us">Contact Us</a>” below.</p>
            <h3 id="d-with-your-consent" className="mx-auto mt-lg mb-sm w-full max-w-2xl text-lg font-semibold uppercase">D. With Your Consent</h3>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">We may use personal information for other purposes that are clearly disclosed to
            you at the time you provide personal information or with your consent.</p>
            <h3 id="e-other-purposes" className="mx-auto mt-lg mb-sm w-full max-w-2xl text-lg font-semibold uppercase">E. Other Purposes</h3>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">We also use your information for other purposes as requested by you or as
            permitted by applicable law.</p>
            <ul className="mx-auto mb-md w-full max-w-2xl list-disc pl-sm">
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Automated Decision-Making.</strong> We may engage in automated decision-making,
            including profiling. The APE Foundation&apos;s processing of your personal
            information will not result in a decision based solely on automated processing
            that significantly affects you unless such a decision is necessary as part of
            a contract we have with you, we have your consent, or we are permitted by law
            to engage in such automated-decision making. If you have questions about our
            automated decision-making, you may contact us as set forth in “<a className="border-b" href="/privacy#contact-us">Contact Us</a>”
            below.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>De-identified and Aggregated Information.</strong> We may use personal information
            and other information about you to create de-identified and/or aggregated
            information, such as de-identified demographic information, de-identified
            location information, information about the device from which you access our
            Site, or other analyses we create.</p>
            </li>
            </ul>
            <h2 id="how-we-disclose-your-information" className="mx-auto mt-xl mb-md w-full max-w-2xl text-xl font-bold uppercase tablet:text-2xl">How We Disclose Your Information</h2>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">We disclose your information to third parties for a variety of business
            purposes, including to provide our Site, to protect us or others, or in the
            event of a major business transaction such as a merger, sale, or asset transfer,
            as described below.</p>
            <h3 id="a-disclosures-to-provide-our-site" className="mx-auto mt-lg mb-sm w-full max-w-2xl text-lg font-semibold uppercase">A. Disclosures To Provide Our Site</h3>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">The categories of third parties with whom we may share your information are
            described below.</p>
            <ul className="mx-auto mb-md w-full max-w-2xl list-disc pl-sm">
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Notice Regarding Use of Blockchain.</strong> Transactions involving Ape Coins will be
            conducted via the Ethereum blockchain. Information about your transfers will
            be provided to the blockchain and may be accessible to third parties due to
            the public nature of the blockchain. Because entries to the blockchain are, by
            their nature, public, and because it may be possible for someone to identify
            you through your pseudonymous, public wallet address using external sources of
            information, any transaction you enter onto the blockchain could possibly be
            used to identify you or information about you.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Other Users of the Site and Parties You Transact With.</strong> Some of your personal
            information may be visible to other users of the Site (e.g., information
            featured on generally accessible parts of your profile). In addition, to
            complete transfers via the Site, we will need to share some of your personal
            information with the party that you are transacting with.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Third-Party Websites and Applications.</strong> You may choose to share personal
            information or interact with third-party websites and/or third-party
            applications, including, but not limited to, third-party electronic wallet
            extensions. Once your personal information has been shared with a third-party
            website or a third-party application, it will also be subject to such
            third-party’s privacy policy. We encourage you to closely read each
            third-party website or third-party application privacy policy before sharing
            your personal information or otherwise interacting with them. Please note that
            we do not control, and we are not responsible for the third-party website’s or
            the third-party application’s processing of your personal information.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Service Providers.</strong> We may share your personal information with our third-party
            service providers who use that information to help us provide our Site. This
            includes service providers that provide us with IT support, hosting, customer
            service, and related services.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Business Partners.</strong> We may share your personal information with business
            partners to provide you with a product or service you have requested. We may
            also share your personal information to business partners with whom we jointly
            offer products or services.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Affiliates.</strong> We may share your personal information with members of our
            corporate family.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Advertising Partners.</strong> We may share your personal information with
            third-party advertising partners. These third-party advertising partners may
            set Technologies and other tracking tools on our Site to collect information
            regarding your activities and your device (e.g., your IP address, cookie
            identifiers, page(s) visited, location, time of day). These advertising
            partners may use this information (and similar information collected from
            other services) for purposes of delivering personalized advertisements to you
            when you visit digital properties within their networks. This practice is
            commonly referred to as “interest-based advertising” or “personalized
            advertising.”</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>APIs/SDKs.</strong> We may use third-party application program interfaces
            (<strong>“APIs”</strong>) and software development kits (<strong>“SDKs”</strong>) as part of the
            functionality of our Site. For more information about our use of APIs and
            SDKs, please contact us as set forth in “<a className="border-b" href="/privacy#contact-us">Contact Us</a>” below.</p>
            </li>
            </ul>
            <h3 id="b-disclosures-to-protect-us-or-others" className="mx-auto mt-lg mb-sm w-full max-w-2xl text-lg font-semibold uppercase">B.Disclosures To Protect Us Or Others</h3>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">We may access, preserve, and disclose any information we store associated with
            you to external parties if we, in good faith, believe doing so is required or
            appropriate to: comply with law enforcement or national security requests and
            legal process, such as a court order or subpoena; protect your, our, or others’
            rights, property, or safety; enforce our policies or contracts; collect amounts
            owed to us; or assist with an investigation or prosecution of suspected or
            actual illegal activity.</p>
            <h3 id="c-disclosure-in-the-event-of-merger-sale-or-other-asset-transfers" className="mx-auto mt-lg mb-sm w-full max-w-2xl text-lg font-semibold uppercase">C. Disclosure In The Event Of Merger, Sale, Or Other Asset Transfers</h3>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">If we are involved in a merger, acquisition, financing due diligence,
            reorganization, bankruptcy, receivership, purchase or sale of assets, or
            transition of service to another provider, your information may be sold or
            transferred as part of such a transaction, as permitted by law and/or contract.</p>
            <h2 id="your-privacy-choices-and-rights" className="mx-auto mt-xl mb-md w-full max-w-2xl text-xl font-bold uppercase tablet:text-2xl">Your Privacy Choices And Rights</h2>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Your Privacy Choices.</strong> The privacy choices you may have about your personal
            information are determined by applicable law and are described below.</p>
            <ul className="mx-auto mb-md w-full max-w-2xl list-disc pl-sm">
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Email Communications.</strong> If you receive an unwanted email from us, you can use
            the unsubscribe link found at the bottom of the email to opt out of receiving
            future emails. Note that you will continue to receive transfer-related emails
            regarding services you have requested. We may also send you certain
            non-promotional communications regarding us and our Site, and you will not be
            able to opt out of those communications (e.g., communications regarding our
            Site or updates to our Terms of Service or this Privacy Policy).</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Text Messages.</strong> You may opt out of receiving text messages from us by following
            the instructions in the text message you have received from us or by otherwise
            contacting us.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Mobile Devices.</strong> We may send you push notifications through our mobile
            application. You may opt out from receiving these push notifications by
            changing the settings on your mobile device. With your consent, we may also
            collect precise location-based information via our mobile application. You may
            opt out of this collection by changing the settings on your mobile device.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>“Do Not Track.”</strong> Do Not Track (<strong>“DNT”</strong>) is a privacy preference that
            users can set in certain web browsers. Please note that we do not respond to
            or honor DNT signals or similar mechanisms transmitted by web browsers.</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Cookies and Interest-Based Advertising.</strong> You may stop or restrict the placement
            of Technologies on your device or remove them by adjusting your preferences as
            your browser or device permits. However, if you adjust your preferences, our
            Site may not work properly. Please note that cookie-based opt-outs are not
            effective on mobile applications. However, you may opt-out of personalized
            advertisements on some mobile applications by following the instructions for
            <a className="border-b" href="https://support.google.com/googleplay/android-developer/answer/6048248?hl=en">Android</a>,
            <a className="border-b" href="https://support.apple.com/en-us/HT202074">iOS</a>, and
            <a className="border-b" href="https://www.networkadvertising.org/mobile-choice/">others</a>. Please note you
            must separately opt out in each browser and on each device. <br/><br/>The
            online advertising industry also provides websites from which you may opt out
            of receiving targeted ads from data partners and other advertising partners
            that participate in self-regulatory programs. You can access these and learn
            more about targeted advertising and consumer choice and privacy by visiting
            the <a className="border-b" href="http://www.networkadvertising.org/managing/opt_out.asp">Network Advertising Initiative</a>,
            the <a className="border-b" href="http://www.aboutads.info/choices/">Digital Advertising Alliance</a>,
            the <a className="border-b" href="https://www.youronlinechoices.eu/">European Digital Advertising Alliance</a>,
            and the <a className="border-b" href="https://youradchoices.ca/choices/">Digital Advertising Alliance of Canada</a>.</p>
            </li>
            </ul>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Your Privacy Rights.</strong> In accordance with applicable law, you may have the right
            to:</p>
            <ul className="mx-auto mb-md w-full max-w-2xl list-disc pl-sm">
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Access Personal Information</strong> about you, including: (i) confirming whether we
            are processing your personal information; (ii) obtaining access to or a copy
            of your personal information; or (iii) receiving an electronic copy of
            personal information that you have provided to us, or asking us to send that
            information to another company (aka the right of data portability);</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Request Correction</strong> of your personal information where it is inaccurate or
            incomplete. In some cases, we may provide self-service tools that enable you
            to update your personal information;</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Request Deletion</strong> of your personal information;</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Request Restriction of or Object</strong> to our processing of your personal
            information, including where the processing of your personal information is
            based on our legitimate interest or for direct marketing purposes; and</p>
            </li>
            <li className="mb-xs pl-sm">
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Withdraw Your Consent</strong> to our processing of your personal information. Please
            note that your withdrawal will only take effect for future processing and will
            not affect the lawfulness of processing before the withdrawal.</p>
            </li>
            </ul>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">If you would like to exercise any of these rights, please contact us as set
            forth in “<a className="border-b" href="/privacy#contact-us">Contact Us</a>” below. We will process such requests in
            accordance with applicable laws.</p>
            <h2 id="security-of-your-information" className="mx-auto mt-xl mb-md w-full max-w-2xl text-xl font-bold uppercase tablet:text-2xl">Security Of Your Information</h2>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">We take steps designed to ensure that your information is treated securely and
            in accordance with this Privacy Policy. Unfortunately, no system is 100% secure,
            and we cannot ensure or warrant the security of any information you provide to
            us. To the fullest extent permitted by applicable law, we do not accept
            liability for unauthorized disclosure.</p>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">By using our Site or providing personal information to us, you agree that we may
            communicate with you electronically regarding security, privacy, and
            administrative issues relating to your use of our Site. If we learn of a
            security system’s breach, we may attempt to notify you electronically by posting
            a notice on our Site, by mail, or by sending an email to you.</p>
            <h2 id="international-data-transfers" className="mx-auto mt-xl mb-md w-full max-w-2xl text-xl font-bold uppercase tablet:text-2xl">International Data Transfers</h2>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">All information processed by us may be transferred, processed, and stored
            anywhere in the world, including, but not limited to, the United States or other
            countries, which may have data protection laws that are different from the laws
            where you live. We endeavor to safeguard your information consistent with the
            requirements of applicable laws.</p>
            <h2 id="retention-of-personal-information" className="mx-auto mt-xl mb-md w-full max-w-2xl text-xl font-bold uppercase tablet:text-2xl">Retention Of Personal Information</h2>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">We store the personal information we collect as described in this Privacy Policy
            for as long as you use our Site or as necessary to fulfill the purpose(s) for
            which it was collected, provide our Site, resolve disputes, establish legal
            defenses, conduct audits, pursue legitimate business purposes, enforce our
            agreements, and comply with applicable laws.</p>
            <h2 id="supplemental-notice-for-california-residents" className="mx-auto mt-xl mb-md w-full max-w-2xl text-xl font-bold uppercase tablet:text-2xl">Supplemental Notice For California Residents</h2>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">This Supplemental Notice for California Residents only applies to our processing
            of personal information that is subject to the California Consumer Privacy Act
            of 2018 (“<strong>CCPA</strong>”). The APE Foundation does not believe it is subject to the CCPA.
            That said, the APE Foundation provides this supplemental notice for purposes of
            transparency. The CCPA provides California residents with the right to know what
            categories of personal information the APE Foundation has collected about them
            and whether the APE Foundation disclosed that personal information for a
            business purpose (e.g., to a service provider) in the preceding twelve months.
            California residents can find this information below:</p>
            <table className="table-fixed  my-lg"><thead><tr className="border-b border-white/10"><th className="text-left font-normal uppercase">Category of Personal Information Collected by the APE Foundation</th>
            <th className="text-left font-normal uppercase">Categories of Third Parties Personal Information is Disclosed to for a Business Purpose</th></tr></thead><tbody><tr className="border-b border-white/10"><td className="align-top py-md pr-md last:pr-0"><p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Identifiers</strong></p><p className="mx-auto mb-sm w-full max-w-2xl text-base">A real name, postal address, unique personal identifier, online identifier,
            Internet Protocol address, email address, account name, or other similar
            identifiers.</p></td><td className="align-top py-md pr-md last:pr-0"><ul className="mx-auto mb-md w-full max-w-2xl list-disc pl-sm">
            <li className="mb-xs pl-sm">Service providers</li>
            <li className="mb-xs pl-sm">Third-party websites or applications</li>
            <li className="mb-xs pl-sm">Blockchain networks</li>
            <li className="mb-xs pl-sm">Other users or third parties you interact with</li>
            <li className="mb-xs pl-sm">Advertising partners</li>
            </ul></td></tr><tr className="border-b border-white/10"><td className="align-top py-md pr-md last:pr-0"><p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Personal information categories listed in Cal. Civ. Code § 1798.80(e)</strong></p><p className="mx-auto mb-sm w-full max-w-2xl text-base">A name, signature, Social Security number, address, telephone number, passport
            number, driver&apos;s license or state identification card number, insurance policy
            number, education, employment, employment history, bank account number, credit
            card number, debit card number, or any other financial information. Personal
            information does not include publicly available information that is lawfully
            made available to the general public from federal, state, or local government
            records. Note: Some personal information included in this category may overlap
            with other categories</p></td><td className="align-top py-md pr-md last:pr-0"><ul className="mx-auto mb-md w-full max-w-2xl list-disc pl-sm">
            <li className="mb-xs pl-sm">Service providers</li>
            <li className="mb-xs pl-sm">Third-party websites or applications (e.g., wallet providers; third-party identity verification services)</li>
            <li className="mb-xs pl-sm">Blockchain networks</li>
            <li className="mb-xs pl-sm">Other users or third parties you interact with</li>
            </ul></td></tr><tr className="border-b border-white/10"><td className="align-top py-md pr-md last:pr-0"><p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Protected classification characteristics under California or federal law</strong></p><p className="mx-auto mb-sm w-full max-w-2xl text-base">Age (40 years or older), race, color, ancestry, national origin, citizenship,
            religion or creed, marital status, medical condition, physical or mental
            disability, sex (including gender, gender identity, gender expression, pregnancy
            or childbirth and related medical conditions), sexual orientation, veteran or
            military status, genetic information (including familial genetic information).</p></td><td className="align-top py-md pr-md last:pr-0"><ul className="mx-auto mb-md w-full max-w-2xl list-disc pl-sm">
            <li className="mb-xs pl-sm">Service providers (recruitment context)</li>
            </ul></td></tr><tr className="border-b border-white/10"><td className="align-top py-md pr-md last:pr-0"><p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Commercial information</strong></p><p className="mx-auto mb-sm w-full max-w-2xl text-base">Records of personal property, products or services purchased, obtained, or
            considered, or other purchasing or consuming histories or tendencies.</p></td><td className="align-top py-md pr-md last:pr-0"><ul className="mx-auto mb-md w-full max-w-2xl list-disc pl-sm">
            <li className="mb-xs pl-sm">Service providers</li>
            <li className="mb-xs pl-sm">Blockchain networks</li>
            <li className="mb-xs pl-sm">Other users or third parties you interact with</li>
            </ul></td></tr><tr className="border-b border-white/10"><td className="align-top py-md pr-md last:pr-0"><p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Internet or other electronic network activity</strong></p><p className="mx-auto mb-sm w-full max-w-2xl text-base">Browsing history, search history, information on a consumer&apos;s interaction with
            an Internet website, application, or advertisement.</p></td><td className="align-top py-md pr-md last:pr-0"><ul className="mx-auto mb-md w-full max-w-2xl list-disc pl-sm">
            <li className="mb-xs pl-sm">Service providers</li>
            <li className="mb-xs pl-sm">Blockchain networks</li>
            <li className="mb-xs pl-sm">Other users or third parties you interact with</li>
            <li className="mb-xs pl-sm">Advertising partners</li>
            </ul></td></tr><tr className="border-b border-white/10"><td className="align-top py-md pr-md last:pr-0"><p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Professional or employment-related information</strong></p><p className="mx-auto mb-sm w-full max-w-2xl text-base">Current or past job history or performance evaluations.</p></td><td className="align-top py-md pr-md last:pr-0"><ul className="mx-auto mb-md w-full max-w-2xl list-disc pl-sm">
            <li className="mb-xs pl-sm">Service providers</li>
            </ul></td></tr><tr className="border-b border-white/10"><td className="align-top py-md pr-md last:pr-0"><p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Inferences drawn from other personal information to create a profile about a consumer</strong></p><p className="mx-auto mb-sm w-full max-w-2xl text-base">Profile reflecting a consumer&apos;s preferences, characteristics, psychological
            trends, predispositions, behavior, attitudes, intelligence, abilities, and
            aptitudes.</p></td><td className="align-top py-md pr-md last:pr-0"><ul className="mx-auto mb-md w-full max-w-2xl list-disc pl-sm">
            <li className="mb-xs pl-sm">Service providers</li>
            <li className="mb-xs pl-sm">Advertising partners</li>
            </ul></td></tr></tbody></table>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">The categories of sources from which we collect personal information and our
            business and commercial purposes for using personal information are set forth in
            “<a className="border-b" href="/privacy#personal-information-we-collect">Personal Information We Collect</a>” and
            “<a className="border-b" href="/privacy#how-we-use-your-information">How We Use Your Information</a>” above, respectively.</p>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>“Sales” of Personal Information under the CCPA.</strong> For purposes of the CCPA,
            the APE Foundation does not “sell” personal information, nor do we have actual
            knowledge of any “sale” of personal information of minors under 16 years of age.</p>
            <h3 id="additional-privacy-rights-for-california-residents" className="mx-auto mt-lg mb-sm w-full max-w-2xl text-lg font-semibold uppercase">Additional Privacy Rights For California Residents</h3>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Non-Discrimination.</strong> California residents have the right not to receive
            discriminatory treatment by us for the exercise of their rights conferred by the
            CCPA.</p>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Authorized Agent.</strong> Only you, or someone legally authorized to act on your
            behalf, may make a verifiable consumer request related to your personal
            information. To designate an authorized agent, please contact us as set forth in
            “<a className="border-b" href="/privacy#contact-us">Contact Us</a>” below.</p>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Verification.</strong> When you make a request, we will ask you to provide sufficient
            information that allows us to reasonably verify you are the person about whom we
            collected personal information or an authorized representative, which may
            include confirming the email address associated with any personal information we
            have about you. If you are a California resident and would like to exercise any
            of your rights under the CCPA, please contact us as set forth in “<a className="border-b" href="/privacy#contact-us">Contact Us</a>”
            below. We will process such requests in accordance with applicable laws.</p>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>Accessibility.</strong> This Privacy Policy uses industry-standard technologies and
            was developed in line with the World Wide Web Consortium’s Web Content
            Accessibility Guidelines, version 2.1. If you wish to print this policy, please
            do so from your web browser or by saving the page as a PDF.</p>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base"><strong>California Shine the Light.</strong> The California “Shine the Light” law permits
            users who are California residents to request and obtain from us once a year,
            free of charge, a list of the third parties to whom we have disclosed their
            personal information (if any) for their direct marketing purposes in the prior
            calendar year, as well as the type of personal information disclosed to those
            parties.</p>
            <h2 id="supplemental-notice-for-nevada-residents" className="mx-auto mt-xl mb-md w-full max-w-2xl text-xl font-bold uppercase tablet:text-2xl">Supplemental Notice For Nevada Residents</h2>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">If you are a resident of Nevada, you have the right to opt-out of the sale of
            certain personal information to third parties who intend to license or sell that
            personal information. You can exercise this right by contacting us as set forth
            in “<a className="border-b" href="/privacy#contact-us">Contact Us</a>” below with the subject line “Nevada Do Not Sell Request” and
            providing us with your name and the email address associated with your account.
            Please note that we do not currently sell your personal information as sales are
            defined in Nevada Revised Statutes Chapter 603A.</p>
            <h2 id="children-s-information" className="mx-auto mt-xl mb-md w-full max-w-2xl text-xl font-bold uppercase tablet:text-2xl">Children’S Information</h2>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">The Site is not directed to children under 13 (or other age as required by local
            law), and we do not knowingly collect personal information from children. If you
            learn that your child has provided us with personal information without your
            consent, you may contact us as set forth in “<a className="border-b" href="/privacy#contact-us">Contact Us</a>” below.
            If we learn that we have collected a child’s personal information in violation
            of applicable law, we will promptly take steps to delete such information.</p>
            <h2 id="third-party-websites-applications" className="mx-auto mt-xl mb-md w-full max-w-2xl text-xl font-bold uppercase tablet:text-2xl">Third-Party Websites/Applications</h2>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">The Site may contain links to other websites/applications and other
            websites/applications may reference or link to our Site. These third-party
            services are not controlled by us. We encourage our users to read the privacy
            policies of each website and application with which they interact. We do not
            endorse, screen, or approve, and are not responsible for, the privacy practices
            or content of such other websites or applications. Providing personal
            information to third-party websites or applications is at your own risk.</p>
            <h2 id="supervisory-authority" className="mx-auto mt-xl mb-md w-full max-w-2xl text-xl font-bold uppercase tablet:text-2xl">Supervisory Authority</h2>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">If you are located in the European Economic Area, Switzerland, or the United
            Kingdom you have the right to lodge a complaint with a supervisory authority if
            you believe our processing of your personal information violates applicable law.</p>
            <h2 id="contact-us" className="mx-auto mt-xl mb-md w-full max-w-2xl text-xl font-bold uppercase tablet:text-2xl">Contact Us</h2>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">If you have any questions about our privacy practices or this Privacy Policy, or
            to exercise your rights as detailed in this Privacy Policy, please contact us
            at:</p>
            <p className="mx-auto mb-sm w-full max-w-2xl text-base">The APE Foundation<br/>
            <a className="border-b" href="mailto:privacy@apecoin.com">privacy@apecoin.com</a></p></div>
          )}

          {page === "buy" &&
            (<div className="wrapper mt-sm laptop:mt-xl" style={{display: "flex", flexDirection: "column", minHeight: "100vh", fontFamily: "MD IO"}}>
              <h1 className="mx-auto max-w-xl text-center text-xl font-black uppercase laptop:text-3xl">ApeCoin (APE) is available on these exchanges.</h1>
              <h2 className="mx-auto mt-lg max-w-xl text-center text-lg font-black uppercase laptop:text-2xl">
                <Link href="https://app.uniswap.org/#/swap?chain=mainnet&inputCurrency=ETH&outputCurrency=0x3a2743567b510427F14d6b757BeD2e4946160396&slippage=15">
                  <a target="_blank" rel="noreferrer noopener">UNISWAP</a>
                </Link>
                <iframe
                  src="https://app.uniswap.org/#/swap?exactField=input&inputCurrency=ETH&outputCurrency=0x3a2743567b510427F14d6b757BeD2e4946160396"
                  height="600px"
                  width="350px"
                  style={{
                    border: 0,
                    margin: "0 auto",
                    marginBottom: ".5rem",
                    display: "block",
                    borderRadius: "10px",
                    maxWidth: "960px",
                    minWidth: "300px"
                  }}
                />
              </h2>
              <div className="mx-auto mt-xl block max-w-sm text-center">
                Check back here and follow our announcements on <a href="https://twitter.com/apecoin" target="_blank" rel="noreferrer nopener" className="underline">Twitter</a> as APE gets added to more exchanges.
              </div>
            </div>)
          }
        </main>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        {
          page === "" && (
            <footer
          className="wrapper mt-md flex h-header items-center opacity-60 laptop:mt-xxl"
        >
          <div className="flex w-full items-center gap-gutter">
            <div className="hidden flex-1 border-t laptop:block">
              <ul className="flex overflow-hidden">
                <li
                  className="tick group relative flex h-nav text-xs uppercase hover:before:h-[12px]"
                >
                  <a
                    className="-ml-px flex items-center pr-lg"
                    target="_self"
                    rel=""
                    onClick={() => linkClicked("terms")}
                    ><span>Terms</span>
                    {/* <!-- --> */}
                  </a>
                </li>
                <li
                  className="tick group relative flex h-nav text-xs uppercase hover:before:h-[12px]"
                >
                  <a
                    className="-ml-px flex items-center pr-lg"
                    target="_self"
                    rel=""
                    onClick={() => linkClicked("privacy")}
                    ><span>Privacy</span>
                    {/* <!-- --> */}
                  </a>
                </li>
                <li
                  className="tick group relative flex h-nav text-xs uppercase hover:before:h-[12px]"
                >
                  <a
                    className="-ml-px flex items-center pr-lg"
                    target="_self"
                    rel=""
                    href="https://apecoin.com/cdn-cgi/l/email-protection#91e2e4e1e1fee3e5d1f0e1f4f2fef8ffbff2fefc"
                    ><span>Support</span>
                    {/* <!-- --> */}
                  </a>
                </li>
                <li
                  className="tick group relative flex h-nav text-xs uppercase hover:before:h-[12px]"
                >
                  <a
                    className="-ml-px flex items-center pr-lg"
                    target="_self"
                    rel=""
                    href="https://apecoin.com/cdn-cgi/l/email-protection#5c2c2e392f2f1c3d2c393f333532723f3331"
                    ><span>Press Inquiries</span>
                    {/* <!-- --> */}
                  </a>
                </li>
                <li
                  className="tick group relative flex h-nav text-xs uppercase hover:before:h-[12px]"
                >
                  <a
                    className="-ml-px flex items-center pr-lg"
                    target="_self"
                    rel=""
                    href="/ApeCoin_Press_Kit.zip"
                    ><span>Press Kit</span>
                    {/* <!-- --> */}
                    <svg
                      className="ml-[6px]"
                      width="7"
                      height="8"
                      viewBox="0 0 7 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.5 7H6.5M3.5 0V5.6M3.5 5.6L1 3M3.5 5.6L6 3"
                        stroke="#E5E5E5"
                        strokeWidth="0.7"
                      ></path></svg
                  ></a>
                </li>
              </ul>
            </div>
            <div
              className="tick relative z-50 flex h-nav flex-1 items-center border-t text-xs uppercase laptop:flex-[0_0_25%]"
            >
              <div className="relative">
                <a
                  className="tick flex h-nav w-lg items-center pr-sm"
                  href="https://twitter.com/apecoin"
                  target="_blank"
                  rel="noreferrer noopener"
                  ><span className="sr-only">Twitter</span
                  ><svg
                    fill="none"
                    height="11"
                    viewBox="0 0 14 11"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m13.1613 1.49865c-.4842.21497-1.0047.35974-1.5508.425.5577-.33397.986-.86316 1.1872-1.493809-.5215.309291-1.0995.534129-1.7148.655319-.4919-.524803-1.19438-.852738-1.9709-.852738-1.74332 0-3.02435 1.626518-2.63061 3.314998-2.24345-.11242-4.233-1.18726-5.565035-2.820901-.707419 1.213581-.366871 2.801161.835195 3.605101-.442-.01426-.858776-.13546-1.222356-.33781-.029613 1.25087.866996 2.42113 2.165576 2.68161-.38003.1031-.79625.12723-1.21961.04607.34329 1.07264 1.34026 1.853 2.52258 1.87493-1.13516.89003-2.56535 1.28762-3.99774 1.11871 1.19494.76607 2.61471 1.21307 4.13923 1.21307 5.01335 0 7.84577-4.23413 7.67467-8.03171.5276-.38113.9855-.85658 1.3474-1.39784z"
                      fill="#8a8a8a"
                    ></path></svg
                ></a>
              </div>
              <div className="ml-auto">
                ©
                {/* <!-- -->*/}2022{/* <!-- --> */}
                Ape Foundation
              </div>
            </div>
          </div>
        </footer>
          )
        }
        </div>
      </div>
    </div>
    </div>
  )
}
