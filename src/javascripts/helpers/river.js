const bears = [
  {
    name: 'Panda',
    imgUrl: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80',
    id: 1,
    details: 'Panda is a very friendly bear.',
  },
  {
    name: 'Rabbit',
    imgUrl: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    id: 2,
    details: 'Rabbit runs really fast.',
  },
  {
    name: 'Tiger',
    imgUrl: 'https://images.unsplash.com/photo-1551336841-32a98a5917eb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=524&q=80',
    id: 3,
    details: 'Tiger has a good sense of smell.',
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
                      <button class="btn btn-primary" id="${i}">Tried to catch a fish</button>
                      <button type="increment" class="btn btn-primary mt-3">Caught a fish</button>
                    </div>
                  </div>`;
  });
  printToDom('#bearContainer', domString);
};

export { bears, bearBuilder };
