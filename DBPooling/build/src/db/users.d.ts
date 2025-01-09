import mongoose from 'mongoose';
interface IUser {
    username: string;
    email: string;
    authentication: {
        password: string;
        salt: string;
    };
}
export declare const userModel: mongoose.Model<{
    username: string;
    email: string;
    authentication?: {
        password: string;
        salt: string;
        sessionToken?: string | null | undefined;
    } | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    username: string;
    email: string;
    authentication?: {
        password: string;
        salt: string;
        sessionToken?: string | null | undefined;
    } | null | undefined;
}> & {
    username: string;
    email: string;
    authentication?: {
        password: string;
        salt: string;
        sessionToken?: string | null | undefined;
    } | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    username: string;
    email: string;
    authentication?: {
        password: string;
        salt: string;
        sessionToken?: string | null | undefined;
    } | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    username: string;
    email: string;
    authentication?: {
        password: string;
        salt: string;
        sessionToken?: string | null | undefined;
    } | null | undefined;
}>> & mongoose.FlatRecord<{
    username: string;
    email: string;
    authentication?: {
        password: string;
        salt: string;
        sessionToken?: string | null | undefined;
    } | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export declare const getUsers: () => mongoose.Query<(mongoose.Document<unknown, {}, {
    username: string;
    email: string;
    authentication?: {
        password: string;
        salt: string;
        sessionToken?: string | null | undefined;
    } | null | undefined;
}> & {
    username: string;
    email: string;
    authentication?: {
        password: string;
        salt: string;
        sessionToken?: string | null | undefined;
    } | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
})[], mongoose.Document<unknown, {}, {
    username: string;
    email: string;
    authentication?: {
        password: string;
        salt: string;
        sessionToken?: string | null | undefined;
    } | null | undefined;
}> & {
    username: string;
    email: string;
    authentication?: {
        password: string;
        salt: string;
        sessionToken?: string | null | undefined;
    } | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, {}, {
    username: string;
    email: string;
    authentication?: {
        password: string;
        salt: string;
        sessionToken?: string | null | undefined;
    } | null | undefined;
}, "find", {}>;
export declare const getUserByEmail: (email: string) => mongoose.Query<(mongoose.Document<unknown, {}, {
    username: string;
    email: string;
    authentication?: {
        password: string;
        salt: string;
        sessionToken?: string | null | undefined;
    } | null | undefined;
}> & {
    username: string;
    email: string;
    authentication?: {
        password: string;
        salt: string;
        sessionToken?: string | null | undefined;
    } | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}) | null, mongoose.Document<unknown, {}, {
    username: string;
    email: string;
    authentication?: {
        password: string;
        salt: string;
        sessionToken?: string | null | undefined;
    } | null | undefined;
}> & {
    username: string;
    email: string;
    authentication?: {
        password: string;
        salt: string;
        sessionToken?: string | null | undefined;
    } | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, {}, {
    username: string;
    email: string;
    authentication?: {
        password: string;
        salt: string;
        sessionToken?: string | null | undefined;
    } | null | undefined;
}, "findOne", {}>;
export declare const getUserBySessionToken: (sessionToken: string) => mongoose.Query<(mongoose.Document<unknown, {}, {
    username: string;
    email: string;
    authentication?: {
        password: string;
        salt: string;
        sessionToken?: string | null | undefined;
    } | null | undefined;
}> & {
    username: string;
    email: string;
    authentication?: {
        password: string;
        salt: string;
        sessionToken?: string | null | undefined;
    } | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}) | null, mongoose.Document<unknown, {}, {
    username: string;
    email: string;
    authentication?: {
        password: string;
        salt: string;
        sessionToken?: string | null | undefined;
    } | null | undefined;
}> & {
    username: string;
    email: string;
    authentication?: {
        password: string;
        salt: string;
        sessionToken?: string | null | undefined;
    } | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, {}, {
    username: string;
    email: string;
    authentication?: {
        password: string;
        salt: string;
        sessionToken?: string | null | undefined;
    } | null | undefined;
}, "findOne", {}>;
export declare const getUserById: (id: string) => mongoose.Query<(mongoose.Document<unknown, {}, {
    username: string;
    email: string;
    authentication?: {
        password: string;
        salt: string;
        sessionToken?: string | null | undefined;
    } | null | undefined;
}> & {
    username: string;
    email: string;
    authentication?: {
        password: string;
        salt: string;
        sessionToken?: string | null | undefined;
    } | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}) | null, mongoose.Document<unknown, {}, {
    username: string;
    email: string;
    authentication?: {
        password: string;
        salt: string;
        sessionToken?: string | null | undefined;
    } | null | undefined;
}> & {
    username: string;
    email: string;
    authentication?: {
        password: string;
        salt: string;
        sessionToken?: string | null | undefined;
    } | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, {}, {
    username: string;
    email: string;
    authentication?: {
        password: string;
        salt: string;
        sessionToken?: string | null | undefined;
    } | null | undefined;
}, "findOne", {}>;
export declare const createUser: (values: IUser) => Promise<{
    username: string;
    email: string;
    authentication?: {
        password: string;
        salt: string;
        sessionToken?: string | null | undefined;
    } | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}>;
export declare const deleteUserById: (id: string) => mongoose.Query<(mongoose.Document<unknown, {}, {
    username: string;
    email: string;
    authentication?: {
        password: string;
        salt: string;
        sessionToken?: string | null | undefined;
    } | null | undefined;
}> & {
    username: string;
    email: string;
    authentication?: {
        password: string;
        salt: string;
        sessionToken?: string | null | undefined;
    } | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}) | null, mongoose.Document<unknown, {}, {
    username: string;
    email: string;
    authentication?: {
        password: string;
        salt: string;
        sessionToken?: string | null | undefined;
    } | null | undefined;
}> & {
    username: string;
    email: string;
    authentication?: {
        password: string;
        salt: string;
        sessionToken?: string | null | undefined;
    } | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, {}, {
    username: string;
    email: string;
    authentication?: {
        password: string;
        salt: string;
        sessionToken?: string | null | undefined;
    } | null | undefined;
}, "findOneAndDelete", {}>;
export declare const updateUserById: (id: string, values: Record<string, any>) => mongoose.Query<(mongoose.Document<unknown, {}, {
    username: string;
    email: string;
    authentication?: {
        password: string;
        salt: string;
        sessionToken?: string | null | undefined;
    } | null | undefined;
}> & {
    username: string;
    email: string;
    authentication?: {
        password: string;
        salt: string;
        sessionToken?: string | null | undefined;
    } | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}) | null, mongoose.Document<unknown, {}, {
    username: string;
    email: string;
    authentication?: {
        password: string;
        salt: string;
        sessionToken?: string | null | undefined;
    } | null | undefined;
}> & {
    username: string;
    email: string;
    authentication?: {
        password: string;
        salt: string;
        sessionToken?: string | null | undefined;
    } | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, {}, {
    username: string;
    email: string;
    authentication?: {
        password: string;
        salt: string;
        sessionToken?: string | null | undefined;
    } | null | undefined;
}, "findOneAndUpdate", {}>;
export {};
