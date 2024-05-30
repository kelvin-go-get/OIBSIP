/*
 * defines a synchronous function named createOrder which facilitates
 * the creation of new orders by sending relevant details to server-side
 * endpoint and returning the identifier of the newly created order
 */
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
