import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    authentication: {
        password: { type: String, required: true, select: false },
        salt: { type: String, required: true, select: false },
        sessionToken: { type: String, select: false }
    }
});

interface IUser {
    username: string;
    email: string;
    authentication: {
        password: string;
        salt: string;
    }
};

export const userModel = mongoose.model('User', userSchema);

export const getUsers = () => userModel.find();
export const getUserByEmail = (email: string) => {
    if (!email) {
        throw new Error('Email is required');
    }
    return userModel.findOne({ email });
};


export const getUserBySessionToken = (sessionToken: string) => userModel.findOne({
    'authentication.sessionToken': sessionToken
});

export const getUserById = (id: string) => userModel.findById(id);
export const createUser = (values: IUser) => {
    let new_user = new userModel(values);
    return new_user.save().then((user) => user.toObject());
}

export const deleteUserById = (id: string) => userModel.findByIdAndDelete({ _id: id });
export const updateUserById = (id: string, values: Record<string, any>) => userModel.findByIdAndUpdate(id, values);


