import {getusers} from "./axios";

export const getData = async () => {
    let response
     response = await getusers().get()
    return response.data
}