import Head from 'next/head';
import { Fragment } from 'react/cjs/react.production.min';
import ContactForm from '../components/contact/ContactForm';

const ContactPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact me</title>
      </Head>
      <ContactForm />
    </Fragment>
  );
};

export default ContactPage;
