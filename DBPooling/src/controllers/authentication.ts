import express from 'express';

import {createUser, getUserByEmail} from '../db/users';;
import {authentication, random} from '../helpers/index';

export const register = async(req: express.Request, res: express.Response) => {
    try{
        const{email, password, username} = req.body;

        if(!email || !password || !username){
            res.sendStatus(400);
            return;
        }

        const exisitngUser = await getUserByEmail(email);

        if(exisitngUser){
            res.sendStatus(409);
            return;
        }


        const salt = random();
        const user = await createUser({
            email: email,
            username: username,
            authentication:{
                salt: salt,  // No need to store salt
                password: authentication(salt, password)
            }
        });


        res.status(200).json(user).end();
        return;
    }
    catch(error){
        console.log(error);
        res.sendStatus(500);
        return;
    }
}