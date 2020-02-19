import * as bodyParser from 'body-parser';
import { Server } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { TranslatorService } from './services/translatorService';

class TranslatorServer extends Server {

  private readonly SERVER_STARTED = 'Example server started on: http://localhost:';
  private readonly translatorService: TranslatorService;

  constructor() {
    super(true);
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: true}));
    this.translatorService = new TranslatorService();
    this.init();
  }

  public init() {
    // First we listen for new messages added to queue on rabbitMQ
  }

  public start(port: number): void {
    this.app.get('*', (req, res) => {
      res.send(this.SERVER_STARTED + port);
    });
    this.app.listen(port, () => {
      Logger.Imp(this.SERVER_STARTED + port);
    });
  }
}

export default TranslatorServer;