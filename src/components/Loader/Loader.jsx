import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

export default function LoaderSpiner() {
  return (
    <Loader
      type="BallTriangle"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={1000}
    />
  );
}
