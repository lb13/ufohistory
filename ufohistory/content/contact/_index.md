---
Title: Contact
---
If you want to get in touch, here's a form.

<form name="contact" method="POST" data-netlify="true">

<div class="field">
  <label for="name" class="label">Name</label>
  <div class="control">
    <input name="name" class="input" type="text" id="name" placeholder="What should we call you?">
  </div>
</div>

<div class="field">
  <label class="label">Email</label>
  <div class="control">
    <input name="email" for="email" class="input" type="email" id="email" placeholder="you@email.com" value="">
  </div>
</div>

<div class="field">
  <label for="message" class="label">Message</label>
  <div class="control">
    <textarea name="message" class="textarea" id="message" placeholder="I wanted to say..."></textarea>
  </div>
</div>


<div class="field is-grouped">
  <div class="control">
    <button class="button is-link">Submit</button>
  </div>
  <div class="control">
    <a href="#" class="button is-link is-light">Cancel</a>
  </div>
</div>

</form>