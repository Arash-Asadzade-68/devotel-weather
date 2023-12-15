class ErrorException extends Error  {
  statusCode:number;
  message: string;
  constructor(message: string = 'Internal Server Error', statusCode = 500) {
      super();
      this.message = message;
      this.statusCode = statusCode;
  }
}


export function errorHandler(statusCode:number, message:string){
  return new ErrorException(message, statusCode);
}