import { errorsNames } from "../constants/errors";

interface Error {
  originalStatus: number;
  error: string;
}

export class ServerError {
  error: Error;

  constructor(error: Error) {
    this.error = error;
  }

  getMessage() {
    if (this.error.originalStatus === 404) {
      return errorsNames.NOT_FOUND;
    }

    return this.error.error;
  }
}
