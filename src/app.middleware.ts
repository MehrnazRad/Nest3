import { Injectable, NestMiddleware } from '@nestjs/common';
import { log } from 'console';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const method = req.method;
    const url = `${req.headers.host}${req.baseUrl}`;
    const queryExist = Object.keys(req.query ?? {}).length ? '\x1b[32myes' : '\x1b[31mno';
    const paramsExist = Object.keys(req.params ?? {}).length ? '\x1b[32myes' : '\x1b[31mno';
    const bodyExist = Object.keys(req.body ?? {}).length ? '\x1b[32myes' : '\x1b[31mno';
    const headersExist = Object.keys(req.headers ?? {}).length ? '\x1b[32myes' : '\x1b[31mno';

    log(
      `\x1b[34m\x1b[4m${method}\x1b[0m`,
      `\x1b[33m${url}\x1b[0m`,
      `Q:\x1b[2m${queryExist}\x1b[0m`,
      `P:\x1b[33m${paramsExist}\x1b[0m`,
      `B:\x1b[33m${bodyExist}\x1b[0m`,
      `H:\x1b[33m${headersExist}\x1b[0m`,
    );
    
    log('IP:', req.ip);
    log('======================');
    log('H:', req.headers ?? {});
    log('======================');
    log('P:', req.params ?? {});
    log('======================');
    log('Q:', req.query ?? {});
    log('======================');
    log('B:', req.body ?? {});
    
    next();
  }
}