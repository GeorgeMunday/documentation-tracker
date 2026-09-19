import { Schema, model, models, Model } from 'mongoose';

export interface ISubscriber {
  _id: string;
  email: string;
  verified: boolean;
  verificationToken: string;
  verificationTokenExpiry: Date;
}

export interface SubscriberDocument {
  email: string;
  verified: boolean;
  verificationToken: string;
  verificationTokenExpiry: Date;
}

const subscriberSchema: Schema<SubscriberDocument> = new Schema<SubscriberDocument>({
  email: { type: String, required: true, unique: true },
  verified: { type: Boolean, default: false },
  verificationToken: { type: String, required: true },
  verificationTokenExpiry: { type: Date, required: true },
});

const Subscriber: Model<SubscriberDocument> =
  models.Subscriber || model<SubscriberDocument>('Subscriber', subscriberSchema);

export default Subscriber;