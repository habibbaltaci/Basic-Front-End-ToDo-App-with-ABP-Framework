import type { TodoItemDto } from './models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToDoAppService {
  apiName = 'Default';

  create = (text: string) =>
    this.restService.request<any, TodoItemDto>({
      method: 'POST',
      url: '/api/app/to-do-app',
      params: { text },
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/to-do-app/${id}`,
    },
    { apiName: this.apiName });

  getList = () =>
    this.restService.request<any, TodoItemDto[]>({
      method: 'GET',
      url: '/api/app/to-do-app',
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
