import { ChannelMessageType, ChannelMessageOptions } from './types';
export class ChannelMessage {
  private _id: string;
  private _visitorId: string;
  private _agentId: string;
  private _channelId: string;
  private _body: string;
  private _campaignId: string;
  private _type: ChannelMessageType;

  constructor(rawOptions: ChannelMessageOptions) {
    this._id          = rawOptions.id;
    this._visitorId   = rawOptions.visitorId;
    this._agentId     = rawOptions.agentId;
    this._channelId   = rawOptions.channelId;
    this._body        = rawOptions.body;
    this._campaignId  = rawOptions.campaignId;
    this._type        = rawOptions.type;
  }

  get id() {
    return this._id;
  }

  get visitorId() {
    return this._visitorId;
  }

  get agentId() {
    return this._agentId;
  }

  get channelId() {
    return this._channelId;
  }

  get body() {
    return this._body;
  }

  get campaignId() {
    return this._campaignId;
  }

  get type() {
    return this._type;
  }
}