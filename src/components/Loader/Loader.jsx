import { ProgressBar } from 'react-loader-spinner';

export const Loader = () => {
  return (
<ProgressBar
    height="80"
    width="80"
    ariaLabel="progress-bar-loading"
    wrapperStyle={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 200,
            marginRight: 'auto',
            marginLeft: 'auto',
          }}
    wrapperClass="progress-bar-wrapper"
    borderColor = '#4169e1'
    barColor = '#4169e1'
/>  );
};