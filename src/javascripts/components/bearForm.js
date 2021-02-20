import { bearBuilder, bears } from '../helpers/river';

const getBearInfo = (e) => {
  e.preventDefault();
  const name = document.querySelector('#bearName').value;
  const imgUrl = document.querySelector('#bearImage').value;
  const randomText = ['is a great animal', 'is a hairy bear', 'is good at swimming', 'is like a body builder', 'is an angry bear'];
  const text = randomText[Math.floor(Math.random() * randomText.length)];
  const details = `${name} ${text}`;
  const bearId = bears.map((bear) => bear.id).sort((a, b) => a - b);
  const id = bearId.length ? bearId[bearId.length - 1] + 1 : 1;
  const tried = Math.floor(Math.random() * 100);
  const caught = Math.floor(Math.random() * 50);
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
};

const handleButtonClick = () => {
  document.querySelector('#submitBear').addEventListener('click', getBearInfo);
};

export default handleButtonClick;
