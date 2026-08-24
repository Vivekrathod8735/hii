document.addEventListener("DOMContentLoaded",()=>{
 const menu=document.querySelector(".menu"),nav=document.querySelector("nav");
 if(menu) menu.addEventListener("click",()=>nav.classList.toggle("open"));
 document.querySelectorAll("#year").forEach(x=>x.textContent=new Date().getFullYear());
});

document.querySelectorAll('[data-demo-form]').forEach(form => {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputs = form.querySelectorAll('input');
    const textarea = form.querySelector('textarea');
    const msg = form.querySelector('.form-message');

    const name = inputs[0]?.value.trim() || '';
    const phone = inputs[1]?.value.trim() || '';
    const email = inputs[2]?.value.trim() || '';
    const subject = inputs[3]?.value.trim() || 'Website Enquiry';
    const message = textarea?.value.trim() || '';

    const emailSubject = encodeURIComponent(
      'Website Enquiry - ' + subject
    );

    const emailBody = encodeURIComponent(
`Name: ${name}
Mobile No.: ${phone}
Email: ${email}
Subject: ${subject}

Message:
${message}`
    );

    if (msg) {
      msg.textContent = 'Opening your email app with the enquiry details…';
    }

    window.location.href =
      'mailto:vr5957512@gmail.com?subject=' +
      emailSubject +
      '&body=' +
      emailBody;
  });
});
