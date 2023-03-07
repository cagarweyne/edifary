export type ContactForm = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  phone: number | string;
  message: string;
};

export const validateContactForm = (data: ContactForm) => {
  const { firstName, lastName, email, subject, phone, message } = data;
  const fieldErrors: Partial<ContactForm> = {};

  if (!firstName) {
    fieldErrors.firstName = 'Required';
  }
  if (!lastName) {
    fieldErrors.lastName = 'Required';
  }

  if (!email) {
    fieldErrors.email = 'Required';
  } else if (
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    )
  ) {
    fieldErrors.email = 'Invalid email address';
  }

  if (!subject) {
    fieldErrors.subject = 'Required';
  }

  if (!phone) {
    fieldErrors.phone = 'Required';
  }

  if (!message) {
    fieldErrors.message = 'Required';
  }

  return fieldErrors;
};

export async function fetchFromAPI(endpoint: string, opts: any) {
  const { method = 'POST', body = {} } = {
    method: 'POST',
    body: null,
    ...opts,
  };
  const res = await fetch(`${endpoint}`, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  });

  if (res.status === 200) {
    return res.json();
  } else {
    throw new Error('Error occured');
  }
}
