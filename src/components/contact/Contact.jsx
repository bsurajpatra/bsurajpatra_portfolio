import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import "react-toastify/dist/ReactToastify.css";
import {
    RiLinkedinBoxFill,
    RiTwitterXFill,
    RiInstagramFill,
    RiTelegramFill,
    RiWhatsappFill,
    RiMailFill
} from "react-icons/ri";

import { motion } from "framer-motion";

const Contact = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const contactLinks = [
        {
            id: 1,
            icon: <RiLinkedinBoxFill />,
            name: "LinkedIn",
            value: "b-suraj-patra",
            url: "https://www.linkedin.com/in/b-suraj-patra/",
            color: "#0077b5"
        },
        {
            id: 2,
            icon: <RiTwitterXFill />,
            name: "X (Twitter)",
            value: "@bsurajpatra",
            url: "https://x.com/bsurajpatra?t=LxiiiVr8RwoIUJHTbajsBg&s=09",
            color: "#000000"
        },
        {
            id: 3,
            icon: <RiInstagramFill />,
            name: "Instagram",
            value: "@suraj_patra_0",
            url: "https://www.instagram.com/suraj_patra_0/",
            color: "#E4405F"
        },
        {
            id: 4,
            icon: <RiTelegramFill />,
            name: "Telegram",
            value: "@bsurajpatra",
            url: "https://t.me/bsurajpatra",
            color: "#0088cc"
        },
        {
            id: 5,
            icon: <RiWhatsappFill />,
            name: "WhatsApp",
            value: "+91 8763232589",
            url: "https://wa.me/918763232589",
            color: "#25D366"
        },
        {
            id: 6,
            icon: <RiMailFill />,
            name: "Email",
            value: "ankitsuraj1111@gmail.com",
            url: "mailto:ankitsuraj1111@gmail.com",
            color: "#EA4335"
        }
    ];

    const submitHandler = async (e) => {
        e.preventDefault();
        if (!name || !email || !message) {
            return toast.error("Please complete the form above");
        }

        setLoading(true);

        emailjs
            .send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: name,
                    from_email: email,
                    message: message
                },
                process.env.REACT_APP_EMAILJS_PUBLIC_API
            )

            .then(
                (result) => {
                    setLoading(false);
                    toast.success(`Successfully sent email.`);
                },
                (error) => {
                    setLoading(false);
                    console.log(error);
                    toast.error(error.text);
                }
            );
    };

    return (
        <section className="contact container section" id="contact">
            <h2 className="section__title">Get In Touch</h2>

            <div className="contact__container grid">
                <motion.div
                    className="contact__info"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="contact__title">Let's Connect!</h3>
                    <p className="contact__details">
                        I'd love to hear from you! Whether you have a question or just want to chat, feel free to drop me a message. 👋
                    </p>

                    <div className="contact__socials">
                        <h4 className="contact__socials-title">Direct Contact</h4>
                        <div className="contact__links">
                            {contactLinks.map((link, index) => (
                                <motion.a
                                    key={link.id}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact__link"
                                    style={{ '--link-color': link.color }}
                                    title={`${link.name}: ${link.value}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <span className="contact__link-icon">{link.icon}</span>
                                    <div className="contact__link-info">
                                        <span className="contact__link-name">{link.name}</span>
                                        <span className="contact__link-value">{link.value}</span>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.form
                    onSubmit={submitHandler}
                    className="contact__form"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input
                                type="text"
                                className="contact__form-input"
                                placeholder="Insert your name"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="contact__form-div">
                            <input
                                type="email"
                                className="contact__form-input"
                                placeholder="Insert your email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            className="contact__form-input"
                            placeholder="Write your message"
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>

                    <button type="submit" className="btn">
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </motion.form>
                <ToastContainer position="bottom-right" theme={props.theme} />
            </div>
        </section>
    );
};

export default Contact;