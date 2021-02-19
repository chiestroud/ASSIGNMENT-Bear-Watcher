import '../styles/main.scss';
import { bears, bearBuilder } from './helpers/river';
import handleButtonClick from './components/bearForm';

const init = () => {
  bearBuilder(bears);
  handleButtonClick();
};

init();
