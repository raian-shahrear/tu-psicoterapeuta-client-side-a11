import React from 'react';

const Que4 = () => {
  return (
    <div>
      <p className='font-medium'>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
      <p className='mt-2 font-medium'>The basic components:</p>
      <ul className='mt-1 list-decimal ml-4 text-sm'>
        <li>A <b>callback function</b> (an event handler) is called when an event is triggered.</li>
        <li>An <b>event loop</b> that listens for event triggers and calls the corresponding event handler for that event.</li>
        <li>A function that listens for the triggering of an event is said to be an <b>observer</b>. It gets triggered when an event occurs.</li>
        <li>Most of the in-built modules of Node.js inherit from the <b>EventEmitter</b> class. The EventEmitter is a node module that allows objects to communicate with one another. The core of node;s asynchronous event-driven architecture is EventEmitter.</li>
      </ul>
      
    </div>
  );
};

export default Que4;