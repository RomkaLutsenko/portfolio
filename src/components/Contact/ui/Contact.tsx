import React from 'react';
import cls from './Contact.module.scss'
import EMAIL from  '../../../assets/email.svg'

export const Contact = () => {
    return (
        <div id="block-contact" className="container">
            <div className={cls.contact}>
                <div className={cls.contact__title}>CONTACT</div>
                <div className={cls.contact__subtitle}>Don't be shy! Hit me up!</div>
                <div className={cls.contact__links}>
                    <div className={cls.links__item}>
                        <EMAIL className={cls.links__icon} />
                        <div className={cls.links__mail}>
                            <div className={cls.links__title}>Email</div>
                            <div className={cls.links__address}>RomanLutsenko2001@gmail.com</div>
                        </div>
                    </div>
                    <div className={cls.links__item}>
                        <EMAIL className={cls.links__icon} />
                        <div className={cls.links__mail}>
                            <div className={cls.links__title}>Email</div>
                            <div className={cls.links__address}>RomanLutsenko2001@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
