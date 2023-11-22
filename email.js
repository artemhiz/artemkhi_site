function openMailAlert() {
    if (document.querySelector('.floatalert:not(.l)') == null) {
        document.querySelectorAll('.floatalert').forEach(i => {
            if (!i.className.includes('closed')) {
                i.className += ' closed';
            }
        });
        const mailalert = document.createElement('div');
        mailalert.className = 'floatalert closed';
        document.body.appendChild(mailalert);
        setTimeout(() => {
            mailalert.className = 'floatalert'
        }, 10);

        const image = document.createElement('img');
        image.src = '../media/social/email.jpeg';
        image.className = 'mailicon'
        mailalert.appendChild(image);

        const request = document.createElement('p');
        request.textContent = 'Каким образом вам удобнее связаться?'
        mailalert.appendChild(request);

        const b1 = document.createElement('button');
        b1.textContent = 'Быстрая форма';
        mailalert.appendChild(b1);
        b1.addEventListener('click', openFormPage);

        const b2 = document.createElement('button');
        b2.textContent = 'Написать вручную';
        mailalert.appendChild(b2);
        b2.addEventListener('click', openMail);

        const x = document.createElement('img');
        x.className = 'x';
        x.src = '../media/x.png';
        mailalert.appendChild(x);

        x.addEventListener('click', () => {
            mailalert.className = 'floatalert closed';
        })
    } else if (document.querySelector('.floatalert:not(.l).closed') != null) {
        document.querySelectorAll('.floatalert').forEach(i => {
            if (!i.className.includes('closed')) {
                i.className += ' closed';
            }
        });
        document.querySelector('.floatalert:not(.l).closed').className = 'floatalert';
    }
}
function openFormPage() {
    window.location = '../email';
    document.querySelector('.floatalert:not(.l)').className = 'floatalert closed';
}
function openMail() {
    window.location = 'mailto: artemhiz@icloud.com';
    document.querySelector('.floatalert:not(.l)').className = 'floatalert closed';
}