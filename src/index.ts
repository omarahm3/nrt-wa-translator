import 'reflect-metadata';
import TranslatorServer from './TranslatorServer';

const translatorServer = new TranslatorServer();
translatorServer.start(3001);