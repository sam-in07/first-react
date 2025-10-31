import React from 'react';
import Demo from './component/Demo';
import Header from './component/Header';
import ContactForm from './component/ContactForm';
import Footer from './component/footer';
import Hero from './component/Hero';

const LoginStatusBtn=(Status)=>{
  if(Status){
    return <button>Logout</button>
  }
  else {
     return <button>Login</button>
  }
}

const App = () => {
  
  return (
    <div>
      {/* <Header />
      <Demo />
      <ContactForm />
      <Footer /> */}
      
      <h1>
        Login  Status  {LoginStatusBtn(true)}
      </h1>
      

     
      <Hero />

      

    </div>
  );
  // return korar process tai  rental 
};

export default App;


