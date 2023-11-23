import { ProgressBar } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => (
  <LoaderContainer>
    <ProgressBar
      height="80"
      width="80"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass="progress-bar-wrapper"
      borderColor="rgb(144, 206, 161)"
      barColor="rgb(1, 180, 228)"
    />
  </LoaderContainer>
);
