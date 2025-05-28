export class ResponseMessage {
    private static readonly statusCode = {
      OK: 200,
      CREATED: 201,
      NO_CONTENT: 204,
      BAD_REQUEST: 400,
      UNAUTHORIZED: 401,
      FORBIDDEN: 403,
      NOT_FOUND: 404,
      METHOD_NOT_ALLOWED: 405,
      CONFLICT: 409,
      UNPROCESSABLE_ENTITY: 422,
      INTERNAL_SERVER_ERROR: 500,
      NOT_IMPLEMENTED: 501,
      BAD_GATEWAY: 502,
      SERVICE_UNAVAILABLE: 503,
      GATEWAY_TIMEOUT: 504,
    };
  
    private static template(success: boolean, message: string, statusCode: number, data?: any) {
      return { success, message, statusCode, data };
    }
  
    public static ok(message: string, data?: any) {
      return this.template(true, message, this.statusCode.OK, data);
    }
  
    public static created(message: string, data?: any) {
      return this.template(true, message, this.statusCode.CREATED, data);
    }
  
    public static badRequest(message = "Bad request", data?: any) {
      return this.template(false, message, this.statusCode.BAD_REQUEST, data);
    }
  
    public static unauthorized(message = "Unauthorized", data?: any) {
      return this.template(false, message, this.statusCode.UNAUTHORIZED, data);
    }
  
    public static forbidden(message = "Forbidden", data?: any) {
      return this.template(false, message, this.statusCode.FORBIDDEN, data);
    }
  
    public static notFound(message = "Not found", data?: any) {
      return this.template(false, message, this.statusCode.NOT_FOUND, data);
    }
  
    public static internalServerError(message = "Internal Server Error", data?: any) {
      return this.template(false, message, this.statusCode.INTERNAL_SERVER_ERROR, data);
    }
  
    public static serviceUnavailable(message = "Service Unavailable", data?: any) {
      return this.template(false, message, this.statusCode.SERVICE_UNAVAILABLE, data);
    }
  
    public static conflict(message = "data already exists", data?: any) {
      return this.template(false, message, this.statusCode.CONFLICT, data);
    }
  }
  