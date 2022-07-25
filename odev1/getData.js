import axios from "axios"


export const getUserDataById = async (ID) => {
    try {
        const user = await (await getUserById(ID)).data;
        const posts = await (await getUsersPostById(ID)).data;
        return {
            user, posts
        }
    }
    catch {
        console.log('an error occured');
        return new Error();
    }

}



const getUserById = async (userID) => {
    return await axios("https://jsonplaceholder.typicode.com/users/" + userID);
}
const getUsersPostById = async (userID) => {
    return await axios("https://jsonplaceholder.typicode.com/posts?userId=" + userID);
}

