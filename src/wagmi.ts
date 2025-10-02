import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, polygon, optimism, arbitrum, base,sepolia  } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'tkn',
  projectId: '35acd6917d0bbfce0cb18b0287d9103f', 
  chains: [mainnet, polygon, optimism, arbitrum, base,sepolia],
  ssr: false,
});