import React, { Fragment } from 'react';
import Link from 'next/link';

const ContactPage = () => {
  const contactDetails = {
    name: 'Matthew Morris',
    profession: 'Recruiter',
    contactNo: '+447721506666',
    contactEmail: 'mmfh2312@outlook.com',
  };

  return (
    <div>
      <ul className='flex flex-col items-center justify-center'>
        <Fragment>
          <li>Name: {contactDetails.name}</li>
          <li>Profession: {contactDetails.profession}</li>
          <li>Contact Number: {contactDetails.contactNo}</li>
          <li>
            Contact Email:
            <Link href={`mailto:${contactDetails.contactEmail}`} passHref>
              {' '}
              {contactDetails.contactEmail}
            </Link>
          </li>
        </Fragment>
      </ul>
    </div>
  );
};

export default ContactPage;
