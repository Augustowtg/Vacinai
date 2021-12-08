let username = 'imunizacao_public';
let password = 'qlto5t&7r_@+#Tlstigi';
let url = "http://dados.recife.pe.gov.br/pt_BR/api/3/action/datastore_search";
let headers = new Headers();

let data = new FormData();
data.append("resource_id", 'dbf660d2-1ee5-451a-94ca-7c316e50d0ad');

headers.append('Authorization', 'Basic' + (username + ":" + password));
fetch(url, {
    method: "POST",
    body: data
}).then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson.result.records);

        // this.setState({
        //     data: responseJson
        // })
    })
    .catch((error) => {
        console.error(error);
    });
