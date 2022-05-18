import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response {
  serverTime: number;
}

@Injectable()
export class AppInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response> {
    const now = Date.now();
    return next.handle().pipe(map(() => ({ serverTime: Date.now() - now})));
  }
}
