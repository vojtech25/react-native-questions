export default class gComm {
  static async getRequest(url, jsonBody) {
    try {
      return await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: await jsonBody,
      }).catch(function (error) {
        console.log("gComm fetch problem: " + error.message);
        // ADD THIS THROW error
        throw error;
      });
    } catch (e) {
      console.log(e);
    }
  }
}
