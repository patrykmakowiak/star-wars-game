/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */
import { PeopleResponse, StarshipsResponse } from '../types';

class HttpClient {
  private get<T>(url: string): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      fetch(url)
        .then((response) => {
          if (!response.ok) throw Error(response.statusText);
          return response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  public getPeople(url: string) {
    return this.get<PeopleResponse>(url);
  }

  public getStarships(url: string) {
    return this.get<StarshipsResponse>(url);
  }
}

export const api = new HttpClient();
