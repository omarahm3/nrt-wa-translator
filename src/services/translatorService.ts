import { ChannelTranslatorInterface } from '../models/interface/ChannelTranslatorInterface';
import { ChannelMessage } from '../models';

/**
 * Main translator service, where we transform in & out messages
 */
export class TranslatorService implements ChannelTranslatorInterface {

  translate(rawMessage: any): ChannelMessage {
    const channelMessage = new ChannelMessage({
      id: '1',
      visitorId: '2',
      channelId: '3',
      campaignId: '4',
      agentId: '5',
      body: '6',
      type: 'incoming'
    });
    return channelMessage;
  }

}