import mongoose, { Schema, Document } from 'mongoose';
import { ISite } from './Site';

export interface IUser extends Document {
    email: string;
    password: string;
    createdSites: ISite[];
}

export const UserSchema: Schema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdSites: [{
        type: Schema.Types.ObjectId,
        ref: 'Site'
    }]
});

export default mongoose.model<IUser>('User', UserSchema);
