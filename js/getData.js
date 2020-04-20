// var contenido = document.querySelector('#contenido')

function html_code(id,category,records){
  var code = "<div class='col-md-6' id='"+category+id+"'><div class='card text-white bg-secondary mb-3'>"+
              "<div class='card-header'>";

              if(category=='films'){
                code+="<h3 class=' p-2'>"+records.title+"</h3>";
              }
              else{
                code+="<h3 class=' p-2'>"+records.name+"</h3>";
              }
                  
              code+="<ul class='nav nav-tabs card-header-tabs'>"+
                      "<li class='nav-item'>"+
                          "<a class='nav-link' data-toggle='collapse' href='#basicInfo"+id+"' role='button'"+
                              "aria-expanded='false' aria-controls='collapse1'><b"+
                                  "class='d-inline-block mb-2 text-primary'>Basic Info</b></a>"+
                      "</li>";

                      for(i in records){
                        if (typeof(records[i])=='object' & records[i] != null){
                          if (records[i].length>0){
                            code+="<li class='nav-item'>"+
                            "<a class='nav-link' data-toggle='collapse' href='#"+i+id+"' role='button'"+
                                "aria-expanded='false' aria-controls='collapse2'><b"+
                                    "class='d-inline-block mb-2 text-primary'>"+i+"</b></a>"+
                              "</li>";

                          }

                        }
                      }


                code+="</ul>"+
              "</div>"+
              "<div class='card-body'>"+
                  "<div class='collapse py-1' id='basicInfo"+id+"'>"+
                      "<div class='card card-body'>"+
                          "<p><b class='d-inline-block mb-2 text-primary'>Basic Info</b></p>"+
                          "<table class='table-striped' style='width: 100%;'>"+
                              "<tbody>";

                                for(i in records){
                                  if (typeof(records[i])=='string'){
                                    code+="<tr>"+
                                    "<td><strong>"+i+"</strong></td>"+
                                      "<td>"+records[i]+"</td>"+
                                    "</tr>";
                                  }
                                }
                            code+="</tbody>"+
                          "</table>"+
                      "</div>"+
                  "</div>";
                  for(i in records){
                    if (typeof(records[i])=='object'){
                      code+="<div class='collapse py-1' id="+i+id+">"+
                              "<div class='card card-body'>"+
                                  "<b class='d-inline-block mb-2 text-primary'>"+i+"</b>"+
                                  "<table class='table-striped' style='width: 100%;'>"+
                                    "<tbody>";
                                    for(x in records[i]){
                                      code+="<tr>"+
                                        "<td>"+records[i][x]+"</td>"+
                                      "</tr>";
                                      }
                                  code+="</tbody>"+
                                " </table>"+
                              "</div>"+
                          "</div>";
                      }
                    }

        code+="</div>"+
          "</div>"+
      "</div>";

      return code
}

function search(category) {
  document.getElementById("box-content").innerHTML ="";

  this.list_data = new Array();

  fetchPaginate.default("https://swapi.py4e.com/api/"+category+"/", {
    items: page => page.results,
    params: true
  })
  .then(res => {
    res.data.forEach(records => {
      let newData = new Data(category,records);
      this.list_data.push(newData);
    })
  })
}


var count = 0
function Data(category,records)
{
  count+=1;
  document.getElementById("box-content").innerHTML += html_code(count,category,records);
  
}