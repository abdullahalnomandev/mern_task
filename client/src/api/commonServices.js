import axios from "axios";
import { API_BASE_URL, GET_USERS } from "./ApiConstant";


// USERS
 const getData = (api_url) => API.get(api_url);
//  const getData = async (URL) => await API.get(URL);

// const getData = async (URL) =>{
//     const response = await API.get(URL);
//     return response;
// }



//  const createPost = (newPost) => API.post("/posts", newPost);
//  const updatePost = (id, updatePost) =>  API.patch(`posts/${id}`, updatePost);
//  const deletePost = (id) => API.delete(`posts/${id}`);
//  const likePost = (id) => API.patch(`posts/${id}/likePost`);

export { getData };


//AUTH
 const signIn = (fromData) => API.post("/user/signIn", fromData);
 const signUp = (fromData) => API.post("/user/signUp", fromData);

export {signIn, signUp} ;