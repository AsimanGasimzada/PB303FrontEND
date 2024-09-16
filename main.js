// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);

// const id = urlParams.get('id');
// const name = urlParams.get('name');

// console.log(id, name);

const getData = async () => {
  const response = await fetch("https://api.tvmaze.com/shows");

  const json = await response.json();

  //   console.log(json);

  return json;
};

const renderList = (data, page) => {
  for (let i = (page-1)*10; i < page * 10; i++) {
    const element = data[i];
    const list = document.querySelector(".list");

    list.innerHTML += `
 
  <li>
  <a href="detail.html?id=${element.id}">
  <img class="img" src="${element.image.original}" />
  ${element.name}
  </a>
  </li>
  `;
  }
};

const data = await getData();

renderList(data, 1);
