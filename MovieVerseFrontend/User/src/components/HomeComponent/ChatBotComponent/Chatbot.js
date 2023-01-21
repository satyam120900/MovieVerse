import React from 'react';
import ChatBot from 'react-simple-chatbot';
 
const steps = [
    {

        id: "0",
  
        message: "Hello, Welcome to MovieVerse",
  
        trigger: "1",
  
      },
      {

        id: "1",
  
        message: "I am Shinchan, Here to Help you!",
  
        trigger: "2",
  
      },
  
      {
  
        id: "2",
  
        message: "Please enter your name!",
  
        trigger: "3",
  
      },
  
      {
  
        id: "3",
  
        user: true,
  
        trigger: "4",
  
      },
  
      {
  
        id: "4",
  
        message: "Hi {previousValue}, Please select your issue",
  
        trigger: "issues",
  
      },
  
      {
  
        id: "issues",
  
        options: [
  
          {
  
            value: "Offers" , label: "Offers", trigger: "Offers",
  
          },
  
          { value: "Cashback", label: "Cashback", trigger: "Cashback" },
  
        ],
  
      },
  
      {
  
        id: "Offers",
  
        message:
  
          "Thanks for letting your issue, Our team will resolve your issue ASAP",
  
        end: true,
  
      },
  
      {
  
        id: "Cashback",
  
        message:
  
          "Thanks for letting your issue, Our team will resolve your issue ASAP",
  
        end: true,
  
      },
  
    ]; 
const Chatbot = () => {
  return (
    <div>
      <ChatBot headerTitle="ChatBot" speechSynthesis={{ enable: true, lang: 'en' }} recognitionEnable={true} steps={steps} />
    </div>
      
  )
}

export default Chatbot
