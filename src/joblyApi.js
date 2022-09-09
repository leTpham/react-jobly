
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  // static token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
  //   "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
  //   "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";
  static token = null;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }


  static async requestChange(endpoint, data = {}, method = "post") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const body = (method === "post" || method === "patch")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, body, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }
  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get details on all companies. */

  static async getCompanies(name) {
    let res = await this.request(`companies`, { name });
    return res.companies;
  }

  /** Get details on a job by id. */

  static async getJob(id) {
    let res = await this.request(`jobs/${id}`);
    return res.job;
  }

  /** Get details on all jobs. */

  static async getJobs(title) {
    let res = await this.request(`jobs`, { title });
    return res.jobs;
  }

  /** Register a new user */

  static async register(data) {
    let res = await this.requestChange("auth/register", data, "post");
    return res.token;
  }

  /** Authenticate a user logging in */

  static async login(data) {
    let res = await this.requestChange("auth/token", data, "post");
    return res.token;
  }

  /** Get user's info */
  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  /** Edit a user's profile */
  static async editUser(username, data) {
    let res = await this.requestChange(`users/${username}`, data, "patch");
    return res.user;
  }

  static async applyJob(username, id) {
  let res = await this.requestChange(`users/${username}/jobs/${id}`);
  return res.applied;
  }

}

export default JoblyApi;

