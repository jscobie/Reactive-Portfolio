import React from 'react';

export default function Contact() {
  return (
<div>
      <div>
        <h1 >Contact</h1>
        <p> This contact form is under construction. Check back for functionality soon.
        <a href="mailto:jacob.scobie@gmail.com"> Email Me!</a></p>
        <p><form>
        <label>
        Name:
        <input type="text" name="name" disabled />
        </label>
        <label>
        Email:
        <input type="email" name="email" disabled />
        </label>
        <label>
        Message:
        <input type="text" name="message" disabled />
        </label>
        <input style={{ marginTop: '20px' }} type="submit" value="Submit" disabled />
        </form>
        </p>
      </div>
    </div>
  );
}
