import path from "path";
import { readFile } from "fs/promises";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, size } = req.query;
  let dir = "lg";
  switch (size?.toString().toLowerCase()) {
    case "sm":
    case "small":
      dir = "sm";
      break;
    case "md":
    case "medium":
      dir = "md";
      break;
    case "lg":
    case "large":
      dir = "lg";
      break;
    default:
      break;
  }
  try {
    const data = await readFile(path.resolve("logos", dir, `${id}.jpeg`));
    res.status(200).send(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
