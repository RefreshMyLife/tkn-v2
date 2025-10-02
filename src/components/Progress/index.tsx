import { SearchingProgress } from './SearchingProgress';
import { CompletedProgress } from './CompletedProgress';

type ProgressProps = {
  isSearching: boolean;
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Progress = ({ isSearching, setIsSearching }: ProgressProps) => {
  return isSearching 
    ? <SearchingProgress setIsSearching={setIsSearching} /> 
    : <CompletedProgress setIsSearching={setIsSearching} />;
};
