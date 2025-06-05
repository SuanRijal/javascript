const checkLogin = (req, res, next) => {
    // login check logic
    // pass
    console.log("Login Successful", req.url)
    next()
}

module.exports ={
    checkLogin
}