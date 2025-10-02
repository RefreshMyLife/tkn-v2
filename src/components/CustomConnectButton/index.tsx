import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

export const CustomConnectButton = () => {
  const { chain: fullChain } = useAccount();
  
  return (
    <ConnectButton.Custom>
      {({ account, chain, openAccountModal, openChainModal, openConnectModal, mounted }) => {
        const ready = mounted;
        const connected = ready && account && chain;

        const renderNotConnected = () => (
          <button
            onClick={openConnectModal}
            className="px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50"
          >
            CONNECT
          </button>
        );

        const renderUnsupportedChain = () => (
          <button
            onClick={openChainModal}
            className="px-4 py-2 text-sm font-medium border border-red-500 text-red-500 rounded hover:bg-red-50"
          >
            Wrong network
          </button>
        );

        const renderConnected = () => (
          <button
            onClick={openAccountModal}
            className="px-4 py-2 bg-black/4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-3"
          >
            <div className="flex items-center gap-2 text-black">
              {/* Используем символ нативного токена из wagmi */}
              <span className="text-xs font-bold">
                {fullChain?.nativeCurrency?.symbol ?? chain?.name ?? 'Unknown'}
              </span>
              <span className="text-sm font-semibold">
                {account?.displayBalance?.split(' ')[0] ?? '0'}
              </span>
            </div>

            <div className="w-px h-5 bg-gray-300" />

            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-900">
                {account ? `${account.address.slice(0, 6)}...${account.address.slice(-4)}` : ''}
              </span>
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                className="text-gray-600"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
        );

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: { opacity: 0, pointerEvents: 'none', userSelect: 'none' },
            })}
          >
            {!connected
              ? renderNotConnected()
              : chain?.unsupported
              ? renderUnsupportedChain()
              : renderConnected()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};