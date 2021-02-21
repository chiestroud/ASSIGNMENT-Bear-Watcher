const bears = [
  {
    name: 'Panda',
    imgUrl: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80',
    id: 1,
    details: 'Panda is a very friendly bear.',
    tried: 15,
    caught: 8,
  },
  {
    name: 'Rabbit',
    imgUrl: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    id: 2,
    details: 'Rabbit runs really fast.',
    tried: 18,
    caught: 9,
  },
  {
    name: 'Tiger',
    imgUrl: 'https://images.unsplash.com/photo-1551336841-32a98a5917eb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=524&q=80',
    id: 3,
    details: 'Tiger has a good sense of smell.',
    tried: 20,
    caught: 12,
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
                    <img src="${item.imgUrl}" class="card-img-top" alt="">
                    <div class="card-body">
                      <h5 class="card-title">${item.name}</h5>
                      <p class="card-text">${item.details}</p>
                      <button class="btn btn-primary" id="tried-${i}">Tried to catch a fish</button>
                      <div class="hidden">Tried <span id="triedNum-${i}">${item.tried}</span> times</div>
                      <div class="triedBear" id="triedBear-${i}"></div>
                      <button type="increment" class="btn btn-primary mt-3" id="caught-${i}">Caught a fish</button>
                      <div class="hiddenAgain">Caught <span id="caughtNum-${i}">${item.caught}</span> times</div>
                      <div class="caughtBear" id="caughtBear-${i}"></div>
                    </div>
                  </div>`;
  });
  printToDom('#bearContainer', domString);
};
const getFattest = () => {
  const fattest = bears.reduce((a, b) => (a.caught > b.caught ? a : b), {});
  document.querySelector('.modal-body').innerHTML = `<div class="card text-warning bg-dark d-flex justify-content-center text-cetner" style="width: 100%;">
                                                      <h1 class="text-center">${fattest.name} won the Gold Medal</h1>
                                                      <img src="${fattest.imgUrl}" class="card-img-top" alt="${fattest.name}"
                                                      <h2>${fattest.name} ate ${fattest.caught} fish in Autumn.</h2>
                                                    </div>`;
};

export { bears, bearBuilder, getFattest };
