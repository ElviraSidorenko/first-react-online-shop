import { loadStripe } from "@stripe/stripe-js";

const createCheckoutSession = async (priceId) => {
  console.log(import.meta.env);
  const response = await fetch(
    `${import.meta.env.VITE_REACT_APP_API_URL}/checkout-session`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity: 1,
        priceId,
      }),
    }
  );

  return await response.json();
};

const checkout = async (priceId) => {
  const { sessionId } = await createCheckoutSession(priceId);
  const stripe = await loadStripe(
    import.meta.env.VITE_REACT_APP_STRIPE_PUBLIC_KEY
  );
  await stripe.redirectToCheckout({
    sessionId,
  });
};

export { checkout };
