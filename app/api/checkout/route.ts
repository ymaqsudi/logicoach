import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-02-25.clover",
});

export async function POST(req: NextRequest) {
  const { priceId } = await req.json();

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [{ price: priceId, quantity: 1 }],
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?price_id=${priceId}`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/pricing`,
  });

  return NextResponse.json({ url: session.url });
}
