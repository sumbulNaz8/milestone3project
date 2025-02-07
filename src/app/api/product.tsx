import Products from "../dataa/page";

export default function handler( res:any) {
    res.status(200).json(Products); // Respond with the products data in JSON format
}
