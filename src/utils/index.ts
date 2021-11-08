export const executeRequest = (api: string, login: string, password: string, queryParams: string = '') => {
  let base64 = require("base-64");
  let headers = new Headers();
  headers.append('Authorization', 'Basic' + base64.encode(login + ":" + password));
  
  return fetch(`${api}?${queryParams}`, {
    method: "GET",
    headers: headers,
  }).then(res => {
    if(res.ok) {
      return res.json()
    } else {
      throw new Error(res.statusText)
    }
  })
};
