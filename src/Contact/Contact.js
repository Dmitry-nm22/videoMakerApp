import React from 'react';
import s from './Contact.module.css'




function Contact() {
    return (
        <div className={s.wraper} id='contact'>
            <form className={s.contactInfo}
                  action="https://formspree.io/xeqrlvpd"
                  method="POST"
            >

                <h4>ОТПРАВИТЬ СООБЩЕНИЕ</h4>
                <input type='text' name={'name'} placeholder='Имя'/>
                <input type='text' name={'phone'} placeholder='Ваш телефон' />
                <textarea className={s.messageArea} name={'message'} placeholder='опищите кратко запрос'/>
                <button type={'submit'} >Отправить</button>
            </form>
            <div className={s.contact}>
                <div className={s.text}>
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
                        <span><i className="fas fa-phone-square-alt"/><a href="tel:+375298886385">+375 (29) 888 63 85</a> </span>
                        <span><i className="fab fa-telegram"/> <a href="https://t.me/stasvoronko">+375 (29) 888 63 85</a></span>
                        <span><i className="fas fa-envelope"/>voronko.films@gmail.com</span>
                    </div>
                    {/*<div className={s.aboutInnerTwo}>*/}
                    {/*    <h4>ОТДЕЛ МАРКЕТИНГА</h4>*/}
                    {/*    <span><i className="fas fa-phone-square-alt"/>+375 (29)202 83 43</span>*/}
                    {/*    <span><i className="fab fa-telegram"/>+375 (29)202 83 43</span>*/}
                    {/*    <span><i className="fas fa-envelope"/>v-films@mail.ru</span>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )

}

export default Contact;
