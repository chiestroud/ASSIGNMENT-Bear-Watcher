import '../styles/main.scss';
import { attemptButtonClick, bears, bearBuilder } from './helpers/river';
import handleButtonClick from './components/buttonFunction';

const init = () => {
  bearBuilder(bears);
  handleButtonClick();
  attemptButtonClick(bears);
};

init();
