import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './User';

export interface SensorMap {
    mac: string;
    bizLocation: string;
}

export interface ISite extends Document {
    company: string;
    siteName: string;
    countryCode: string;
    city: string;
    topic: string;
    sensors: SensorMap[];
    creator: IUser;
}

export const SiteSchema = new Schema({
    company: {
        type: String,
        required: true
    },
    siteName: {
        type: String,
        required: true
    },
    countryCode: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    },
    sensors: [
        {
            mac: String,
            bizLocation: String
        }
    ],
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

export default mongoose.model<ISite>('Site', SiteSchema);
