export type ChannelMessageOptions = {
  id: string,
  visitorId: string,
  agentId: string,
  channelId: string,
  body: string,
  campaignId: string,
  type: ChannelMessageType
};

export type ChannelMessageType = 'incoming' | 'outgoing';