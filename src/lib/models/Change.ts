import { Schema, model, models, Model } from 'mongoose';

export interface IChange {
  _id: string;
  id: string;
  doctype: string;
  title: string;
  description: string;
  date: string;
}

interface ChangeDocument {
  id: string;
  doctype: string;
  title: string;
  description: string;
  date: Date;
}

const changeSchema: Schema<ChangeDocument> = new Schema<ChangeDocument>({
  id: { type: String, required: true },
  doctype: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Change: Model<ChangeDocument> =
  models.Change || model<ChangeDocument>('Change', changeSchema);

export default Change;