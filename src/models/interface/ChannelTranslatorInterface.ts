import { ChannelMessage } from '../index';

export interface ChannelTranslatorInterface {
  translate(rawMessage: any): ChannelMessage;
}