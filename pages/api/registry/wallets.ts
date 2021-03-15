import { NextApiRequest, NextApiResponse } from "next";

import wallets from "../../../data/wallets.json";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json(wallets);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
