import * as mongoose from 'mongoose';
import { DocumentQuery, Query } from 'mongoose';
import Database from '../../libs/Database';
import { idText } from 'typescript';

export default class VersioningRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
    public static generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }

private model: M;

constructor(model) {
    this.model = model;
}

public async create(options: any): Promise<D> {
    const id = VersioningRepository.generateObjectId();
    const model = new this.model({
        ...options,
        _id: idText,
        originalId: id
    });
    return await model.save();
}

public count(query: any): Query<number> {
    const finalQuery = { deletedAt: null, ...query };
    return this.model.countDocuments(finalQuery);
    }

protected getAll(query: any, projection: any = {}, options: any = {}): DocumentQuery<D[], D> {
    const finalQuery = { deletedAt: null, ...query };
    return this.model.find(finalQuery, projection, options);    
}

protected findOne(query: any): DocumentQuery<D, D> {
    const finalQuery = { deletedAt: null, ...query };
    return this.model.findOne(finalQuery);
}

protected find(query: any = {}, projection: any = {}, options: any = {}): DocumentQuery<D[], D> {
    const finalQuery = { deletedAt: null, ...query}
    return this.model.find(finalQuery, projection, options);
}

// protected invalidate(id): DocumentQuery<D, D> {
//     return this.model.update({ originalId: id, deletedAt: null}, { deletedAt: Date.now() })
// }

protected async update(data: any): Promise<D> {
    console.log('Looking for previous valid document');
    const prev = await this.findOne({ originalId: data.originalId, deletedAt: null});
    console.log('Prev: ', prev);

    // if(prev) {
    //     await this.invalidate(data.originalId);
    // }
    // else {
    //     return null;
    // }

    console.log('Data: ', data);
    const newData = Object.assign(JSON.parse(JSON.stringify(prev)), data);
    console.log('New Data:', newData);
    newData._id = VersioningRepository.generateObjectId();
    delete newData.deletedAt;

    const model = new this.model(newData);
    return model.save();
}
}