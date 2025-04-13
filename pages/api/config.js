export default function handler(req, res) {
  return res.status(200).json({
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL || "",
    NEXT_PUBLIC_TOKEN: process.env.NEXT_PUBLIC_TOKEN || "",
  });
}
