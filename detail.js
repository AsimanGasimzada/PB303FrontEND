const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const getData = async () => {
  const id = urlParams.get("id");


  console.log(id)

  const response = await fetch(
    `https://api.tvmaze.com/shows/${id}`
  );

  const json = await response.json();


  const output=document.querySelector(".output")


  output.innerHTML=`
  <img src="${json.image.original}" />
  <p>Name:
  ${json.name}
  </p>

  <p>
  status: ${json.status}
  </p>
  
  `

  console.log(json);
};

getData();