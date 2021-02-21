import { bearBuilder, bears, getFattest } from '../helpers/river';
import { triedButton, caughtButton } from './button';

const getBearInfo = (e) => {
  e.preventDefault();
  const name = document.querySelector('#bearName').value;
  const imgUrl = document.querySelector('#bearImage').value;
  const randomText = ['is a great animal', 'is a hairy bear', 'is good at swimming', 'is like a body builder', 'is an angry bear'];
  const text = randomText[Math.floor(Math.random() * randomText.length)];
  const details = `${name} ${text}`;
  const bearId = bears.map((bear) => bear.id).sort((a, b) => a - b);
  const id = bearId.length ? bearId[bearId.length - 1] + 1 : 1;
  const tried = Math.floor(Math.random() * 35);
  const caught = Math.floor(Math.random() * 15);
  const obj = {
    name,
    imgUrl,
    details,
    id,
    tried,
    caught,
  };
  bears.push(obj);
  bearBuilder(bears);
  document.querySelector('form').reset();
  triedButton(bears);
  caughtButton(bears);
};

const handleButtonClick = () => {
  document.querySelector('#submitBear').addEventListener('click', getBearInfo);
  triedButton(bears);
  caughtButton(bears);
  document.querySelector('#fattest').addEventListener('click', getFattest);
};

export default handleButtonClick;
