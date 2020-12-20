let promises = [];
for (let i = 1; i <= 300; i++) {
  promises.push(fetch(`example.api/incomes/${i}`));
}
Promise.all(promises)
  .then(function handleData(data) {
    return fetch("example.api") // should be returned 1 time
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error(response.statusText);
      });
  })
  .catch(function handleError(error) {
    console.log("Error" + error);
  });
