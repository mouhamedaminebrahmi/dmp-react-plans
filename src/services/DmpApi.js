import axios from "axios";

// export async function getOrganizme(token) {
//   try {
//     const response = await axios.get("https://mocki.io/v1/fade6679-a726-4d00-b29d-2cb2fd67822e", {
//       withCredentials: true,
//       xsrfHeaderName: "X-XSRF-TOKEN",
//       headers: {
//         Bearer: `${token}`,
//       },
//     });
//     return response
//   } catch (error) {
//     console.error(error);
//   }
// }

export async function getDefaultModel(token) {
  try {
    const response = await axios.get("https://mocki.io/v1/eac1ebae-cd6a-414c-8be6-91502c5abe7c");
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getOrganisme(token) {
  try {
    const response = await axios.get("https://mocki.io/v1/fade6679-a726-4d00-b29d-2cb2fd67822e");
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getFunder(token) {
  try {
    const response = await axios.get("https://mocki.io/v1/eee52301-69a0-4d81-9b1f-3a28b563f6df");
    return response;
  } catch (error) {
    console.error(error);
  }
}
