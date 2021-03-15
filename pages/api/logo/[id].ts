import path from "path";
import { readFile } from "fs/promises";
import { NextApiRequest, NextApiResponse } from "next";

function getDirectory(_size?: string | string[]) {
  const size = _size?.toString().toLowerCase();
  return size === "small" ? "small" : "large";
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, size } = req.query;

  try {
    const data = await readFile(
      path.resolve("logos", getDirectory(size), `${id}.jpeg`)
    );
    res.status(200).send(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
