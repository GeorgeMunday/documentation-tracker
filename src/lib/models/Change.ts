import { Schema, model, models, Document, Model } from 'mongoose';

export interface IChange extends Document {
  id: string;
  doctype: string;
  title: string;
  description: string;
  date: Date;
}

const changeSchema: Schema<IChange> = new Schema<IChange>({
  id: { type: String, required: true },
  doctype: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Change: Model<IChange> = models.Change || model<IChange>('Change', changeSchema);

export default Change;