import jwt from 'jsonwebtoken';
import { findVideoIdByUser } from '../../lib/db/hasura';

export default async function stats(req, res) {
  if (req.method === 'POST') {
    try {
      const token = req.cookies.token;
      if (!token) {
        res.status(403).send({});
      } else {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        res.send({ msg: 'it works', decoded });

        const userId = decodedToken.issuer;
        const videoId = req.query.videoId;
        const findVideoId = await findVideoIdByUser(userId, videoId, token);
      }
    } catch (error) {
      console.error('Error occured /stats', error);
      res.status(500).send({ done: false, error: error?.message });
    }
  }
}