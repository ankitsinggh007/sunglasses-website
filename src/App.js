import { createUserWithEmailAndPassword , getAuth, signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Route,Routes,Navigate, useNavigate } from "react-router-dom";
// import MainBody from "./Component/MainBody";
import { query, where,getDoc } from "firebase/firestore";
import Navbar from "./Component/Navbar";
// import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MainBody from "./pages/MainBody";
// import Categories from "./pages/Categories"
import { useState,useEffect, createContext } from "react";
import { collection, addDoc } from "firebase/firestore";  
import DataBase from "./Component/Firbase"
import { getDocs } from 'firebase/firestore';
import Hero from "./pages/Hero";
import ProductList from "./Component/ProductList";
import Categories_page from "./pages/Categories_page";
import Details_page from "./pages/Details_page";
import Cart from "./pages/Cart";
// import Desciption from "./pages/Desciption";
// import Wishlist from "./pages/Wishlist";
export const User=createContext({});
function App() {
 const [Data, setData] = useState();
 const API_KEY=`AIzaSyCFwMBb4r146zfcv-IrdUn-vk8_asDkvck`;
  const Navigate=useNavigate();
  const [Creadential, setCreadential] = useState({fname:"",lname:"",email:"",Gender:"",Password:""});
  const [LoggedInUserData, setLoggedInUserData] = useState({id:"",firstName:"",lastName:"",email:"",Gender:"",isAuthrized:false,Cart:[],Purchased:[]});
  const [Message, setMessage] = useState("")
 const auth = getAuth();
//  Fetch Data
const FetchData= async (email)=>{
  console.log(email,"email")
  const citiesRef = collection(DataBase, "User");
  const q = query(citiesRef, where("email", "==", `${email}`));
  console.log(q,"q");
  const querySnapshot = await getDocs(q);
  console.log(querySnapshot,"querySnapshot")
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    setLoggedInUserData({...LoggedInUserData,...doc.data(),isAuthrized:true,id:doc.id});
  });
}
// Creat user in DataBase
   const CreateUserInDataBase = async ()=>{
    const DocRef= await addDoc(collection(DataBase,"User"),{
    email:Creadential.email,
    firstName:Creadential.fname,
    lastName:Creadential.lname,
    Gender:Creadential.Gender,
  }); 
  alert("you are successfully registered");
  Navigate("/login")
 }
// Create User
const createUser=async (email,password)=>{
     createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user,"user");
      CreateUserInDataBase();

  })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage,"error");
      setCreadential({...Creadential,message:errorCode.split("/")[1]})
      
  }); 
}
// Login User
const verifyCredential=async()=>{
  console.log("i am in verifyCredential")
   const res= await signInWithEmailAndPassword(auth, Creadential.email, Creadential.Password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user.email,"user");
      FetchData(user.email);
  alert("you are successfully login");
      
      Navigate("/")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage,"err");
      setCreadential({...Creadential,message:errorCode.split("/")[1]})

    });
  
}
console.log(LoggedInUserData);
console.log(Message);
 
  return (
    <User.Provider value={{Creadential,setCreadential,createUser,verifyCredential,LoggedInUserData,setLoggedInUserData,Message,setMessage}}>
      <Navbar/>
      
      
      <Routes>
      { !Creadential.isAuthrized && <Route path={'/login'} element={<Login/>}/>}
      {!Creadential.isAuthrized && <Route path={'/signup'} element={<Signup/>}/>}
      <Route path={'/'} element={<MainBody/>}/>
      
      {/* <Route path={'/cart'} element={<Cart/>}/> */}
      {/* <Route path={'/categories'} element={<Categories/>}/> */}
      {/* <Route path={'/wishlist'} element={<Wishlist />}/> */}
      {/* <Route path={'/*'} element={<Navigate to={"/"}/>}/> */}
      <Route path={'/categories/:value'} element={<Categories_page/>}/>
      <Route path={'/products/:id'} element={<Details_page/>}/>
{
      LoggedInUserData.isAuthrized &&<Route path={'/cart'} element={<Cart />}/>

}      
      </Routes>
    </User.Provider>
  );
}

export default App;
