

import { IPost } from "./IPost";
import { IComment } from "./IComment";

export interface IUser {
    _id: string;
    name: String;
    username: String;
    password: string;
    //picture: String;
    //dateCreated: object;
    //postLikes: number, min: 0;
    //posts: IPost[];
    // comments: IComment[];

}
