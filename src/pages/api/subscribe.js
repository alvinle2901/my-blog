import fetch from 'isomorphic-unfetch';

export default async (req, res) => {
  const { email } = req.body;

  console.log({ email });

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const API_KEY = process.env.REVUE_API_KEY;
    const response = await fetch(`https://www.getrevue.co/api/v2/subscribers`, {
      method: 'POST',
      body: JSON.stringify({ email: email, double_opt_in: false }),
      headers: {
        Authorization: `Token ${API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    if (response.status >= 400) {
      const message = await response.json();
      console.log(message.error.email[0]);
      return res.status(400).json({ error: message.error.email[0] });
    }

    res.status(201).json({
      message: `Hey, ${email}, Please check your email and verify it. Can't wait to get you boarded.`,
      error: ''
    });
  } catch (err) {
    return res.status(500).json({ error: err.message || err.toString() });
  }
};
