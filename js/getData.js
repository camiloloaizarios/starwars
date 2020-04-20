function search() {

  this.list_data = new Array();

  fetchPaginate.default("https://swapi.py4e.com/api/people", {
    items: page => page.results,
    params: true
  })
  .then(res => {
    res.data.forEach(records => {
      let newData = new Data(records);
      this.list_data.push(newData);
    })
  })
}


var count = 0
function Data(records)
{
  count+=1;
  console.log(records)
}