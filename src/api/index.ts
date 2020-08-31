/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */
import { PeopleResponse, StarshipsResponse } from '../types';
import { repleceHttpToHttps } from '../utils';

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
    return this.get<PeopleResponse>(repleceHttpToHttps(url));
  }

  public getStarships(url: string) {
    return this.get<StarshipsResponse>(repleceHttpToHttps(url));
  }
}

export const api = new HttpClient();
