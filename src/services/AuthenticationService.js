const ENDPOINT = 'http://localhost:8080/api/v1/login'

const login = async ({username,password}) =>{
    const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    })
    if (!res.ok)
        throw new Error('Response is not ok')
    const { jwt } = res

    return jwt
}

const logout = () =>{
    window.sessionStorage.removeItem('token')
}

export default {login,logout};