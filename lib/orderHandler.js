<<<<<<< HEAD
=======
/*
 * defines a synchronous function named createOrder which facilitates
 * the creation of new orders by sending relevant details to server-side
 * endpoint and returning the identifier of the newly created order
 */
>>>>>>> 11c8edc9dd8ac1a8163bec0d56faccd193272507
export const createOrder = async ({
  name,
  phone,
  address,
  total,
  PaymentMethod,
}) => {
  const res = await fetch("/api/order", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      phone: phone,
      address: address,
      total: parseFloat(total),
      method: PaymentMethod,
      status: 1,
    }),
  });
  const id = await res.json();
  return id;
};
