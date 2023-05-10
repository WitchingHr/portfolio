import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@/lib/dbConnect';
import User from '@/models/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  // connect to db
  await dbConnect();

  switch (method) {
    case 'POST':
      try {
        // find user
        const user = await User.findOne({ username: req.body.username });

        // if user not found
        if (!user) throw new Error('User not found');

        // compare passwords
        bcrypt.compare(req.body.password, user.password, (err, result) => {
          if (err) {
            throw new Error(err.message);
          }

          // password mismatch
          if (!result) {
            throw new Error('Password does not match');

          // password match
          } else {
            // create token
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
            res.status(200).json({ token });
          }
        });

      } catch (err: any) {
        res.status(400).json({ message: err.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}