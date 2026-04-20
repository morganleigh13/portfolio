

const messageCreate = async (req, res) => {
  const { fullName, email, phone, message } = req.body;
  console.log(fullName, email, phone, message);
};

export default messageCreate;
