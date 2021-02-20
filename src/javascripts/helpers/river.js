const bears = [
  {
    name: 'Panda',
    imgUrl: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80',
    id: 1,
    details: 'Panda is a very friendly bear.',
    tried: 5,
    caught: 3,
    date: '',
  },
  {
    name: 'Rabbit',
    imgUrl: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    id: 2,
    details: 'Rabbit runs really fast.',
    tried: 20,
    caught: 10,
    date: '',
  },
  {
    name: 'Tiger',
    imgUrl: 'https://images.unsplash.com/photo-1551336841-32a98a5917eb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=524&q=80',
    id: 3,
    details: 'Tiger has a good sense of smell.',
    tried: 3,
    caught: 3,
    date: '',
  },
];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

const bearBuilder = (taco) => {
  let domString = '';
  taco.forEach((item, i) => {
    domString += `<div class="card text-danger" style="width: 16rem;" id="${i}">
                    <img src="${item.imgUrl}" class="card-img-top" alt="${item.name}">
                    <div class="card-body">
                      <h5 class="card-title">${item.name}</h5>
                      <p class="card-text">${item.details}</p>
                      <button class="btn btn-primary" id="catch${i}">Tried to catch a fish</button>
                      <p># of times ${item.name} tried to catch a fish <span id="tried">${item.tried}</span></p>
                      <div id="attemptsAndCatches-${i}"></div>
                      <button type="increment" class="btn btn-primary mt-3" id="caught${i}">Caught a fish</button>
                      <p># of times ${item.name} caught a fish <span id="caught">${item.caught}</span></p>
                      <p id="timeStampCatch"></p>                   
                    </div>
                  </div>`;
  });
  printToDom('#bearContainer', domString);
};

const attemptButtonClick = (taco) => {
  taco.forEach((item, i) => {
    document.querySelector(`#catch${i}`).addEventListener('click', () => {
      const attempts = {};
      attempts.time = new Date();
      attempts.type = 'Attempt';
      const htmlString = `${attempts.type} ${attempts.time}`;
      document.querySelector(`#attemptsAndCatches-${i}`).innerHTML = htmlString;
    });
  });
};

export { bears, bearBuilder, attemptButtonClick };
