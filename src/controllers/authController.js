

const signIn = async (req, res) => {
    res.json('signin');
};

const signUp = async (req, res) => {
    res.json('signup');
};

export default{
    signIn,
    signUp
}