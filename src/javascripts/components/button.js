const triedButton = (taco) => {
  taco.forEach((item, i) => {
    document.querySelector(`#tried-${i}`).addEventListener('click', () => {
      const tried = {};
      tried.time = new Date();
      tried.type = 'Tried to catch @';
      tried.score = Number(`${item.tried}`);
      const triedScore = tried.score + 1;
      document.querySelector(`#triedNum-${i}`).textContent = triedScore;
      const htmlSentence = `${tried.type} ${tried.time}`;
      document.querySelector(`#triedBear-${i}`).innerHTML = htmlSentence;
    });
  });
};

const caughtButton = (taco) => {
  taco.forEach((item, i) => {
    document.querySelector(`#caught-${i}`).addEventListener('click', () => {
      const caught = {};
      caught.time = new Date();
      caught.type = 'Got fish @';
      caught.score = Number(`${item.caught}`);
      caught.score += 1;
      document.querySelector(`#caughtNum-${i}`).textContent = caught.score;
      const htmlSentence = `${caught.type} ${caught.time}`;
      document.querySelector(`#caughtBear-${i}`).innerHTML = htmlSentence;
    });
  });
};

export { triedButton, caughtButton };
