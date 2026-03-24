import { useWallet } from '@txnlab/use-wallet-react'
import { Link } from 'react-router-dom'

/**
 * Home Page
 * Landing page showcasing the RWA tokenization platform
 * Displays features, how it works, and CTAs to connect wallet and create assets
 */
export default function Home() {
  const { activeAddress } = useWallet()

  return (
    <div className="bg-white dark:bg-[#141938]">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center">
          <div className="inline-block mb-4 px-3 py-1 bg-[#FFD1FF] dark:bg-[#1333fa]/20 text-[#1333fa] dark:text-[#FFD1FF] text-sm font-semibold rounded-full">
            Proof-of-Concept · Built on Algorand
          </div>

          <h1 className="mt-4 text-5xl sm:text-6xl font-bold text-[#141938] dark:text-white leading-tight">
            Tokenize Unpaid Care Work
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Project Care Coin turns invisible labour — childcare, eldercare, household work — into verifiable on-chain assets. A trust-first platform for care givers, operators, and institutions ready to reimagine how society values care.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/tokenize"
              className={`px-8 py-3 rounded-lg font-semibold transition text-white shadow-md ${
                activeAddress
                  ? 'bg-[#1333fa] hover:bg-[#fa1179]'
                  : 'bg-slate-400 cursor-not-allowed'
              }`}
            >
              Start Tokenizing
            </Link>

            <a
              className="px-8 py-3 border-2 border-[#1333fa] dark:border-[#FFD1FF]/40 text-[#1333fa] dark:text-[#FFD1FF] rounded-lg font-semibold hover:bg-[#FFD1FF] dark:hover:bg-[#1333fa]/20 transition"
              target="_blank"
              rel="noreferrer"
              href="https://dev.algorand.co/concepts/assets/overview/"
            >
              Learn about ASAs
            </a>
          </div>

          {!activeAddress && (
            <p className="mt-6 text-slate-500 dark:text-slate-400">Connect your wallet using the button in the top-right to get started.</p>
          )}
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#141938] dark:text-white">How it works</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl">
              Four steps from wallet to verified care token — no technical background required.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="inline-flex h-2 w-2 rounded-full bg-[#fb9b0c]" />
            Live on TestNet
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Step 1 */}
          <div
            className="group rounded-2xl border border-[#FFD1FF] dark:border-[#1333fa]/30 bg-white/70 dark:bg-[#1333fa]/5 backdrop-blur
                          p-6 hover:shadow-lg hover:shadow-[#1333fa]/10 dark:hover:shadow-[#1333fa]/20 transition"
          >
            <div className="flex items-start gap-4">
              <div
                className="shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-xl
                              bg-[#FFD1FF] text-[#1333fa] dark:bg-[#1333fa]/20 dark:text-[#FFD1FF] font-bold"
              >
                1
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-[#141938] dark:text-white">Connect Wallet</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Use Pera, Defly, Exodus, or KMD on localnet. One click to connect.
                </p>
              </div>
            </div>

            <div className="mt-4 h-px bg-[#FFD1FF] dark:bg-[#1333fa]/20" />

            <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>Wallet sign-in</span>
              <span className="group-hover:text-[#1333fa] dark:group-hover:text-[#FFD1FF] transition">Instant</span>
            </div>
          </div>

          {/* Step 2 */}
          <div
            className="group rounded-2xl border border-[#FFD1FF] dark:border-[#1333fa]/30 bg-white/70 dark:bg-[#1333fa]/5 backdrop-blur
                          p-6 hover:shadow-lg hover:shadow-[#1333fa]/10 dark:hover:shadow-[#1333fa]/20 transition"
          >
            <div className="flex items-start gap-4">
              <div
                className="shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-xl
                              bg-[#FFD1FF] text-[#1333fa] dark:bg-[#1333fa]/20 dark:text-[#FFD1FF] font-bold"
              >
                2
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-[#141938] dark:text-white">Define Your Care Asset</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Name your token, set supply, and attach metadata — representing hours, roles, or care contributions.
                </p>
              </div>
            </div>

            <div className="mt-4 h-px bg-[#FFD1FF] dark:bg-[#1333fa]/20" />

            <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>Mint on TestNet</span>
              <span className="group-hover:text-[#1333fa] dark:group-hover:text-[#FFD1FF] transition">Fast</span>
            </div>
          </div>

          {/* Step 3 */}
          <div
            className="group rounded-2xl border border-[#FFD1FF] dark:border-[#1333fa]/30 bg-white/70 dark:bg-[#1333fa]/5 backdrop-blur
                          p-6 hover:shadow-lg hover:shadow-[#1333fa]/10 dark:hover:shadow-[#1333fa]/20 transition"
          >
            <div className="flex items-start gap-4">
              <div
                className="shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-xl
                              bg-[#FFD1FF] text-[#1333fa] dark:bg-[#1333fa]/20 dark:text-[#FFD1FF] font-bold"
              >
                3
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-[#141938] dark:text-white">Track Contributions</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  View your issued care tokens in a local history table — a transparent record of recognised labour.
                </p>
              </div>
            </div>

            <div className="mt-4 h-px bg-[#FFD1FF] dark:bg-[#1333fa]/20" />

            <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>Local history</span>
              <span className="group-hover:text-[#1333fa] dark:group-hover:text-[#FFD1FF] transition">Simple</span>
            </div>
          </div>

          {/* Step 4 */}
          <div
            className="group rounded-2xl border border-[#FFD1FF] dark:border-[#1333fa]/30 bg-white/70 dark:bg-[#1333fa]/5 backdrop-blur
                          p-6 hover:shadow-lg hover:shadow-[#1333fa]/10 dark:hover:shadow-[#1333fa]/20 transition"
          >
            <div className="flex items-start gap-4">
              <div
                className="shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-xl
                              bg-[#FFD1FF] text-[#1333fa] dark:bg-[#1333fa]/20 dark:text-[#FFD1FF] font-bold"
              >
                4
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-[#141938] dark:text-white">Transfer & Recognise</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Send ALGO, TestNet USDC, or any care token to carers, institutions, or pilot participants.
                </p>
              </div>
            </div>

            <div className="mt-4 h-px bg-[#FFD1FF] dark:bg-[#1333fa]/20" />

            <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>Built-in transfers</span>
              <span className="group-hover:text-[#1333fa] dark:group-hover:text-[#FFD1FF] transition">All-in-one</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Highlight */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#141938] dark:text-white mb-4">Built for Trust & Compliance</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm leading-relaxed">
              Every Care Coin asset inherits Algorand's institutional-grade controls — giving operators, regulators, and pilot partners the oversight they need.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-[#fa1179] font-bold text-xl">✓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Manager Role:</strong> Update asset settings as your programme evolves
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#fa1179] font-bold text-xl">✓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Freeze Account:</strong> Pause transfers for audits or compliance reviews
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#fa1179] font-bold text-xl">✓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Clawback Authority:</strong> Recover tokens in the event of errors or disputes
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#fa1179] font-bold text-xl">✓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Metadata Support:</strong> Link off-chain records — care plans, hours logs, or certifications
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-[#FFD1FF]/40 dark:bg-[#1333fa]/10 rounded-2xl p-8">
            <div className="bg-white dark:bg-[#141938] rounded-xl border border-[#FFD1FF] dark:border-[#1333fa]/30 p-6 shadow-sm">
              <p className="text-xs text-[#1333fa] dark:text-[#FFD1FF] mb-4 font-semibold uppercase tracking-wide">Sample Care Token</p>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Name</span>
                  <span className="font-semibold text-[#141938] dark:text-white">Family Care Credit</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Symbol</span>
                  <span className="font-semibold text-[#141938] dark:text-white">CARE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Total Supply</span>
                  <span className="font-semibold text-[#141938] dark:text-white">52,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Unit</span>
                  <span className="font-semibold text-[#141938] dark:text-white">1 token = 1 hour</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Manager</span>
                  <span className="font-semibold text-[#141938] dark:text-white">Your Wallet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof / Context Strip */}
      <div className="border-y border-[#FFD1FF] dark:border-[#1333fa]/20 bg-[#FFD1FF]/20 dark:bg-[#1333fa]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-[#fb9b0c]">€374bn</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Annual value of unpaid care work in Germany alone</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#fb9b0c]">64%</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Of all unpaid carers in the EU are women</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#fb9b0c]">0</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Verifiable records exist today — Care Coin changes that</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#1333fa] dark:bg-[#141938] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to run a pilot?</h2>
          <p className="text-lg text-[#FFD1FF] mb-2 max-w-2xl mx-auto">
            Mint your first care token in minutes. This is a proof-of-concept demo — no real assets, no hidden fees.
          </p>
          <p className="text-sm text-[#FFD1FF]/70 mb-8">Perfect for founders, welfare institutions, and impact investors exploring tokenised care models.</p>
          <Link
            to="/tokenize"
            className={`inline-block px-8 py-3 rounded-lg font-semibold transition shadow-md ${
              activeAddress
                ? 'bg-white text-[#1333fa] hover:bg-[#fa1179] hover:text-white dark:bg-[#FFD1FF] dark:text-[#141938] dark:hover:bg-[#fa1179] dark:hover:text-white'
                : 'bg-[#1333fa]/40 text-white/60 cursor-not-allowed'
            }`}
          >
            Create Your First Asset
          </Link>
        </div>
      </div>
    </div>
  )
}
