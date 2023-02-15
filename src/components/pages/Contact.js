import React from 'react';

export default function Contact() {
  return (
<div style={{ "flexGrow":"1","minWidth":"300px","maxWidth":"800px","marginTop":"20px" }}>
      <div style={{"padding":"0 20px 60px","fontFamily":"Helvetica"}}>
        <h1 >Contact</h1>
        <p> This contact form is under construction. Check back for functionality soon.
        <a href="mailto:jacob.scobie@gmail.com"> Email Me!</a></p>
        <p><form style={{"display":"block","textAlign":"left","width":"300px","marginTop":"8px"}}>
        <label style={{"display":"block","textAlign":"left","width":"300px","marginTop":"8px"}}>
        Name:
        <input style={{"display":"block","textAlign":"left","width":"300px","marginTop":"8px"}} type="text" name="name" disabled />
        </label>
        <label style={{"display":"block","textAlign":"left","width":"300px","marginTop":"8px"}}>
        Email:
        <input style={{"display":"block","textAlign":"left","width":"300px","marginTop":"8px"}} type="email" name="email" disabled />
        </label>
        <label style={{"display":"block","textAlign":"left","width":"300px","marginTop":"8px"}}>
        Message:
        <input style={{"display":"block","textAlign":"left","width":"300px","marginTop":"8px"}} type="text" name="message" disabled />
        </label>
        <input style={{ marginTop: '20px', "backgroundColor":"#42c5f5","color":"white","border":"none","borderRadius":"4px","padding":"2px 20px 2px","whiteSpace":"nowrap" }} type="submit" value="Submit" disabled />
        </form>
        </p>
      </div>
    </div>
  );
}
