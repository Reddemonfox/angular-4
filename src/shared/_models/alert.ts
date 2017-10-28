export class Alert {
  type: AlertType;
  message: string;
  duration: number;
  constructor(alert: any) {
    this.type = alert.type;
    this.message = alert.message;
    this.duration = alert.duration === AlertDuration.LENGTH_LONG ? 4000 : 2000;
  }
}

export enum AlertType {
  Success,
  Error,
  Info,
  Warning
}

export enum AlertDuration {
  LENGTH_SHORT,
  LENGTH_LONG
}
