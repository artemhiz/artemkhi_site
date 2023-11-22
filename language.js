function openLangAlert() {
    if (document.querySelector('.floatalert.l') == null) {
        document.querySelectorAll('.floatalert').forEach(i => {
            if (!i.className.includes('closed')) {
                i.className += ' closed';
            }
        });
        const mailalert = document.createElement('div');
        mailalert.className = 'floatalert l closed';
        document.body.appendChild(mailalert);
        setTimeout(() => {
            mailalert.className = 'floatalert l'
        }, 10);

        const image = document.createElement('img');
        image.src = '../media/lang.png';
        image.className = 'mailicon'
        mailalert.appendChild(image);

        const request = document.createElement('p');
        request.textContent = 'Выберите язык'
        mailalert.appendChild(request);

        const b1 = document.createElement('button');
        b1.textContent = 'Русский';
        mailalert.appendChild(b1);
        b1.addEventListener('click', () => {
            window.location = '../index.html'
        })

        const b2 = document.createElement('button');
        b2.textContent = 'English';
        mailalert.appendChild(b2);
        b2.addEventListener('click', () => {
            window.location = '../en/index.html'
        })

        const x = document.createElement('img');
        x.className = 'x';
        x.src = '../media/x.png';
        mailalert.appendChild(x);

        x.addEventListener('click', () => {
            mailalert.className = 'floatalert l closed';
        })
    } else if (document.querySelector('.floatalert.l.closed') != null) {
        document.querySelectorAll('.floatalert').forEach(i => {
            if (!i.className.includes('closed')) {
                i.className += ' closed';
            }
        });
        document.querySelector('.floatalert.l.closed').className = 'floatalert l';
    }
}
if (navigator.language == 'en') {
    window.location = 'en/index.html'
}