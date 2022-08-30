import React, { createContext, useState, ReactNode } from 'react';

interface Props {
    children?: ReactNode
    // any props that come into the component
}

interface Auth {
	user: any, 
	pwd: any, 
	roles: any, 
	accessToken: any
};

// const AuthContext = createContext({});
const AuthContext = createContext<any>({});
// const AuthContext = createContext<{auth: Auth}>({ });


export const AuthProvider = ({ children, ...props }: Props) => {
	const [auth, setAuth] = useState({});

	return (
		<AuthContext.Provider value={{ auth, setAuth }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
