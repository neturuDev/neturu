import Cookies from 'universal-cookie';
// import fetch from "node-fetch";
//import.meta

export default async function fetchAPI(query, { variables } = {}) {
  let res, json;

  const getData = async () => {
    res = await fetch('https://cloud.squidex.io/api/content/neturu/graphql', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjlTZWo3eXJYdGo1TzNDVV9JeG5EU2ciLCJ0eXAiOiJhdCtqd3QifQ.eyJzdWIiOiJuZXR1cnU6ZGVmYXVsdCIsIm9pX3Byc3QiOiJuZXR1cnU6ZGVmYXVsdCIsImNsaWVudF9pZCI6Im5ldHVydTpkZWZhdWx0Iiwib2lfdGtuX2lkIjoiOTYyNmMxYzAtZGVhZC00OTE5LWEyZTMtNWUxMDIyZmQyZGY4IiwiYXVkIjoic2NwOnNxdWlkZXgtYXBpIiwic2NvcGUiOiJzcXVpZGV4LWFwaSIsImV4cCI6MTY4MTY3MTAxNCwiaXNzIjoiaHR0cHM6Ly9jbG91ZC5zcXVpZGV4LmlvL2lkZW50aXR5LXNlcnZlciIsImlhdCI6MTY3OTA3OTAxNH0.menJ5IMQzLK0C5DKTxwJhExBPmLGAa9jtXE8FKGFfY9_JgkrHJjkEiD4WWylT_zW5M-FYkykEVwQJzs_YvD1WqSmcQrCg0nvUn6IYFwdY6XjjaHXNBU6q_bU2T6s1JjeJ4jeCSfs1wxgNrjRGT8eePlumts7YfK-XZr11uvQQVc15ke9pGL38ifDvBkjVu5AA9mbpGX7xmY4Z9wssM1H-EjPe9L5LTk7Y3Kgm2aC5gjuFEfuXEsGBbKe10t0c_f5dfaodlL-fBikvNpkvCdCh6s6oJweg2XzRkj_n2upyhHmQ5c_FswBt_DbyrBSoOM2HxLPimAjvJhEKVMnj81Gtg`
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });
    json = await res.json();
  };

  await getData();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  if (!json.data && json.message) {
    console.error(json.message);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

// export default async function fetchAPI(query, { variables } = {}) {
//     let res, json;

//     const updateToken = async () => {
//       const tokenData = await getToken();
//       const {access_token, expires_in} = tokenData;
//       token = access_token;
//       setTokenCooky(access_token, expires_in);
//     };

//     const getData = async () => {
//       res = await fetch(process.env.SQUIDEX_API_URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${token}`
//         },
//         body: JSON.stringify({
//           query,
//           variables,
//         }),
//       });
//       json = await res.json();
//     };

//     let token = getTokenCooky();

//     if (!token) {
//       await updateToken();
//     }

//     await getData();

//     if (!json.data && json.message === 'Unauthorized') {
//       await updateToken();
//       await getData();
//     }
  
//     if (json.errors) {
//       console.error(json.errors);
//       throw new Error("Failed to fetch API");
//     }

//     if (!json.data && json.message) {
//       console.error(json.message);
//       throw new Error("Failed to fetch API");
//     }
  
//     return json.data;
//   }

  // export async function fetchAsset(url) {
  //   const res = await fetch(url, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Authorization": token
  //     },
  //   });
  //   const json = await res.json();
  
  //   if (json.errors) {
  //     console.error(json.errors);
  //     throw new Error("Failed to fetch API");
  //   }
  
  //   return json.data;
  // }

  async function getToken() {
    const res = await fetch(process.env.SQUIDEX_TOKEN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: `grant_type=client_credentials&client_id=${process.env.SQUIDEX_CLIENTID}&client_secret=${process.env.SQUIDEX_CLIENTSECRET}&scope=squidex-api`
    });
    const json = await res.json();
  
    if (json.errors) {
      console.error(json.errors);
      throw new Error("Failed to fetch API");
    }

    return json;
  }

  function setTokenCooky(token, expires_in) {
    const d = new Date(expires_in);
    Cookies.set('neturu_token', token, { expires: d });
  }

  function getTokenCooky() {
    const cookieValue = Cookies.get('neturu_token');

     return cookieValue;
  }