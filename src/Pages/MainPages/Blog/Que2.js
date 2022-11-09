import React from 'react';

const Que2 = () => {
  return (
    <div>
      <p className='font-medium'>JSON Web Token (JWT)  is an open standard used to share security information between two parties, a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. A JSON Web Token consists of 3 parts separated by a period, Header, Payload and Signature.</p>
      <p className='mt-2 font-medium'>Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using public key.</p>
      <ul className='mt-1 list-decimal ml-4 text-sm'>
        <li>User sign-in using username and password.</li>
        <li>Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.</li>
        <li>Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.</li>
        <li>Resource server then verifies the authenticity of the token using the secret salt/ public key.</li>
      </ul>
      <p className='mt-2 font-medium'>There are two type of tokens, Access Token and Refresh Token. Each authorized user will get an Access Token at a time and after a certain time it will be expired. Then the user needs to be logged in to get another Access Token, here the Refresh Token comes to make a connection between authorized access and the Access Token. The Refresh Token is permanently given to a user.</p>
    </div>
  );
};

export default Que2;