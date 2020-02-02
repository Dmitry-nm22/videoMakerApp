import React from 'react';
import s from './Contact.module.css'





function Contact() {
    return (
        <div className={s.wraper} id='contact'>
            <div className={s.contactInfo}>
                <input type='text' name='name' placeholder='Name'/>
                <input type='text' name='email' placeholder='Email'/>
                <textarea className={s.messageArea} placeholder='опищите кратко запрос'></textarea>
                <button>Отправить</button>
            </div>
            <div className={s.contact}>
                <div>
                    <h4>СВЯЖИТЕСЬ С НАМИ</h4>
                    <span className={s.title}>Если вам нужна видео продакшн студия  для работы над вашим следующим проектом, мы готовы помочь
                        Отправьте нам сообщение, воспользовавшись формой обратной связи,
                        или просто напишите на наш адрес электронной почты, и мы ответим в течение нескольких часов.
                        Нам не терпится поработать с вами над вашим проектом.
                    </span>
                </div>
                <div className={s.about}>
                    <div className={s.aboutInner}>
                        <h4>КОНТАКТЫ</h4>
                        <span><i className="fas fa-phone-square-alt"></i> +7 777 789 78 78</span>
                        <span><i className="fab fa-telegram"></i>+7 777 789 78 78</span>
                        <span><i className="fas fa-envelope"></i>example@gmail.com</span>
                    </div>
                    <div className={s.aboutInnerTwo}>
                        <h4>НАШ АДРЕС</h4>
                        <span><i className="fas fa-map-marker-alt"></i> Jakubska 4</span>
                        <span>Prague, Czech Republic</span>
                        <span>Номер лицензии: 88213978</span>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Contact;
