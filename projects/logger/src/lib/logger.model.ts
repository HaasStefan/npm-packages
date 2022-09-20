export abstract class Logger {
    abstract log(message: string): void;
    abstract info(message: string): void;
}