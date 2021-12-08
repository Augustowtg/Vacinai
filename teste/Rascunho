let username = 'imunizacao_public';
let password = 'qlto5t&7r_@+#Tlstigi';
let headers = new Headers();


headers.append('Authorization', 'Basic ' + btoa(username + ":" + password));
fetch(url, {
 method: 'GET',
 headers: headers,
}).then((response) => response.json())
.then((responseJson) => {
 console.log(responseJson);

 this.setState({
    data: responseJson
 })
  })
   .catch((error) => {
 console.error(error);
   });