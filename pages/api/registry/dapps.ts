import { NextApiRequest, NextApiResponse } from "next";

import dapps from "../../../data/dapps.json";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json(dapps);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
