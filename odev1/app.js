import { getUserDataById } from "./getData.js";



const requestData = async () => {
    const data = await getUserDataById(1);
    console.log(data);
}

requestData();