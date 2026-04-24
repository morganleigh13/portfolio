import messageModel from "./messageModel.js"

const messageCreate = async (req, res) => {
  const { fullName, email, phone, message } = req.body;

  try {
    if(
      (!fullName || fullName === "" ) || 
      (!email || email === "") || 
      (!message || message ==="")
    ) {
      res.status(500).json({ "message": "Message not complete." })
    }
    else {
      const newMessage = await messageModel.create({
       fullName, email, phone, message
      });
      res.status(200).json({ success: "message created", message: newMessage });
    }
  }catch(err){
    console.log(err)
    res.status(500).json({ success: 'negative', message: "Nope👽"})
  }
};

export default messageCreate;
