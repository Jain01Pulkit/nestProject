import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';

// diff between extends and implements is extend refers to inherit all its public and protected properties and methods,
// while implements is used to declare that class must provide implementations for all the properties and methods specified in interface.
export class SerializeInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    // Run something before a request is handled the request handler

    return next.handle().pipe(
      map((data: any) => {
        // Run something before the response is sent out
      }),
    );
  }
}
