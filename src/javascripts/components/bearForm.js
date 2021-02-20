import { bearBuilder, bears } from '../helpers/river';

const triedButton = (taco) => {
  taco.forEach((item, i) => {
    document.querySelector(`#tried-${i}`).addEventListener('click', () => {
      const tried = {};
      tried.time = new Date();
      tried.type = 'Tried';
      const htmlSentence = `${tried.type} ${tried.time}`;
      document.querySelector(`#triedBear-${i}`).innerHTML = htmlSentence;
    });
  });
};

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
};

const handleButtonClick = () => {
  document.querySelector('#submitBear').addEventListener('click', getBearInfo);
  triedButton(bears);
};

export default handleButtonClick;
