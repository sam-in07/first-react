import React from 'react';

const ContactForm = () => {
    const [form, setForm] = React.useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted:', form);
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 480 }}>
            <h2>Contact Us</h2>

            <div>
                <label>Name</label>
                <input name="name" value={form.name} onChange={handleChange} required />
            </div>

            <div>
                <label>Email</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required />
            </div>

            <div>
                <label>Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} required />
            </div>

            <button type="submit">Send</button>
        </form>
    );
};

export default ContactForm;