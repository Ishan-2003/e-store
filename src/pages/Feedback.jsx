import React from 'react'

const Feedback = () => {
    return (
    <div className='feedback-wrapper'>
    <div className='container'>
    <h2>Feedback Form</h2>
    <form action="#" method="post">
        
      <label for="name">Your Name:</label>
      <input type="text" id="name" name="name" required/>

      <label for="email">Your Email:</label>
      <input type="email" id="email" name="email" required/>

      <label for="message">Feedback:</label>
      <textarea id="message" name="message" rows="4" required></textarea>

    </form>
    <button type="submit">Submit Feedback</button>
        </div>
    </div>
    )
}

export default Feedback
