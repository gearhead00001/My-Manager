import React,{ createContext, useContext,useState, PropsWithChildren} from "react"

const AuthContext = createContext({isLoggedIn : false, doLogin :()=>{/**/}, doLogout:()=>{/**/}})

const AuthProvider = (props : PropsWithChildren)=>{
	const [ isLoggedIn, setIsLoggedIn] = useState(false)

	const doLogin=()=>{
		setIsLoggedIn(true)
	}

	const doLogout=()=>{
		setIsLoggedIn(false)
	}

	return(
		<AuthContext.Provider value={{isLoggedIn, doLogin, doLogout}}>
			{props.children}
		</AuthContext.Provider>
	)
}

const useAuthContext = ()=>useContext(AuthContext)

export { AuthProvider, useAuthContext }
