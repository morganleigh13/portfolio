import axios from "axios";

const messageService = {
  createMessage: async ({
    fullName, email, phone, message
  }) => {
    return await axios.post(
      `${import.meta.env.VITE_PORTFOLIO_SERVER}/messages`,
      {fullName, email, phone, message},
      {
        headers: {
          "Content-type": "application/json"     
        },
      }
    );
  },
//   getAllMessages: async () => {
//     return await axios.get(`${import.meta.env.VITE_PORTFOLIO_SERVER}/messages`);
//   },
//   getMessageDetails: async ({ messageId, authToken }) => {
//     return await axios.get(
//       `${import.meta.env.VITE_PORTFOLIO_SERVER}/messages/details/${messageId}`,
//       {
//         withCredentials: true,
//         headers: {
//           "Content-type": "application/json",
//           Authorization: `Bearer ${authToken}`,
//         },
//       }
//     )
//   },
};

export default messageService;
