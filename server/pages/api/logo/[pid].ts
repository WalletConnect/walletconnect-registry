import { NextApiRequest, NextApiResponse } from 'next';
import getConfig from 'next/config';
import { responseOnNoData } from '../../../util/responseUtils';


export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { serverRuntimeConfig } = getConfig();
  const { pid, size } = req.query;

  const imgData = size ?
    await fetch(`${serverRuntimeConfig.LOGO_BASE_URI}small/${pid}.jpeg`)
    :
    await fetch(`${serverRuntimeConfig.LOGO_BASE_URI}large/${pid}.jpeg`);


  const error = responseOnNoData(imgData, res);

  if (!error) {
    const imgBlob = await imgData.blob();
    const imgBuffer = await imgBlob.arrayBuffer();

    res.setHeader('Content-Type', 'image/jpeg');
    res.statusCode = 200;
    res.send(Buffer.from(imgBuffer));
  }
}

