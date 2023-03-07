// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from '../../utils/sendEmail';

type Data = {
  success: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { firstName, email, industry } = req.body;

    await sendEmail(
      email,
      'Cagaros contact saas app',
      {
        firstName,
        email,
        industry,
      },
      'contact.handlebars',
      true
    );
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(400).json({ success: false });
  }
}
