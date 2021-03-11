import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../Environment';
import { HateoasLink } from './HateoasLink.model';

@Injectable({
  providedIn: 'root',
})
export class HateoasService {
  rootUri: string;

  constructor(private http: HttpClient) {
    this.rootUri = Environment.CONFIG.apiUrl;
  }

  getRoot(serviceStr = '') {
    return this.http.get(`${this.rootUri}/${serviceStr}`);
  }

  action(actionObj: {
    action: string,
    links: HateoasLink[],
    payload: any,
    urlParams: any,
    multipart: boolean,
    responseType: any,
    fullError: boolean,
    contentType: string
  }) {
    // actionObj: action, links, payload, urlParams, multipart, responseType
    const links = actionObj.payload && actionObj.payload.links
      ? actionObj.payload.links : actionObj.links;
    const link = links.find((iLink: HateoasLink) => iLink.rel === actionObj.action);

    if (link) {
      let { href } = link;
      if (actionObj.urlParams) {
        href = Object.keys(actionObj.urlParams).reduce((prev, currentKey, index) => `${prev + (index ? '&' : '?') + currentKey}=${actionObj.urlParams[currentKey]}`, href);
      }
      return this.request(
        link.method,
        href,
        actionObj.payload,
        actionObj.multipart,
        actionObj.fullError,
        actionObj.responseType,
        actionObj.contentType,
      );
    }

    // eslint-disable-next-line no-console
    console.error(actionObj);
    // return ($q.reject(`HATEOAS action [${actionObj.action}] not found in provided link list.`));
  }

  hasPermission(action: string, links: HateoasLink[]) {
    return !!links.find((link) => link.rel === action);
  }

  getActionUrl(action: string, links: HateoasLink[]) {
    const link = links.find((l) => l.rel === action);
    return link ? link.href : null;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  request(method: 'POST' | 'PUT' | 'GET' | 'DELETE', href: string, payload: any, multipart = false, fullError = false, responseType: string = null, contentType: string) {
    let config = {};
    if (responseType) {
      config = {
        responseType,
      };
    }
    if (multipart) {
      const fd = new FormData();
      Object.keys(payload).forEach((key) => {
        fd.append(key, payload[key]);
      });
      config = {
        // transformRequest: angular.identity,
        headers: { 'Content-Type': contentType || undefined },
      };
      payload = fd;
    }
    if (method === 'POST') {
      return this.http.post(href, payload, config);
    } if (method === 'PUT') {
      return this.http.put(href, payload, config);
    } if (method === 'GET' || !method) {
      return this.http.get(href, config);
    } if (method === 'DELETE') {
      return this.http.delete(href, config);
    }
  }
}
