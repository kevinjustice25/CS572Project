

import { IPost } from "./IPost";
import { IComment } from "./IComment";

export interface IUser {
    userId: number;
    firstName: String;
    lastName: String;
    username: string;
    password: string;
    //picture: String;
    //dateCreated: object;
    //postLikes: number, min: 0;

    //posts: IPost[];

   // comments: IComment[];

}
