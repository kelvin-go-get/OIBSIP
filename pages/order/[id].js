import client from "../../lib/client";
import Layout from "../../components/Layout";
import css from "../../styles/Order.module.css";
import { UilBill, UilBox } from "@iconscout/react-unicons";
import Cooking from "../../assets/cooking.png";
import Onway from "../../assets/onway.png";
import Image from "next/image";
import Spinner from "../../assets/spinner.svg";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export const getServerSideProps = async ({ params }) => {
  const query = `*[_type == 'order' && _id == '${params.id}']`;
  const order = await client.fetch(query);

  return {
    props: {
      order: order.length > 0 ? order[0] : null,
    },
  };
};

export default function Orders({ order }) {
  const router = useRouter();
  const [currentStatus, setCurrentStatus] = useState(order ? order.status : 0);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!order || !isHydrated) return;

    if (currentStatus > 3) {
      localStorage.clear();
      router.push("/");
      return;
    }

    if (currentStatus < 4) {
      const timer = setTimeout(
        () => {
          setCurrentStatus((prevStatus) => prevStatus + 1);
        },
        currentStatus === 0 ? 2000 : 7000
      );

      return () => clearTimeout(timer);
    }
  }, [currentStatus, order, isHydrated, router]);

  if (!isHydrated || !order) {
    return (
      <Layout>
        <div className={css.container}>
          <span className={css.heading}>Loading...</span>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={css.container}>
        <span className={css.heading}>Order in process</span>
        <div className={css.details}>
          <div>
            <span>Order ID</span>
            <span>{order._id}</span>
          </div>
          <div>
            <span>Customer Name</span>
            <span>{order.name}</span>
          </div>
          <div>
            <span>Phone</span>
            <span>{order.phone}</span>
          </div>
          <div>
            <span>Method</span>
            <span>
              {order.method === 0
                ? "Cash on delivery"
                : "Online payment (paid)"}
            </span>
          </div>
          <div>
            <span>Total</span>
            <span>$ {order.total}</span>
          </div>
        </div>

        <div className={css.statusContainer}>
          <div className={css.status}>
            <Image src={Cooking} alt="" width={50} height={50} />
            <span>Cooking</span>
            {currentStatus === 1 && (
              <div className={css.spinner}>
                <Image src={Spinner} alt="" />
              </div>
            )}
            {currentStatus > 1 && (
              <span className={css.completed}>Completed</span>
            )}
          </div>

          <div className={css.status}>
            <Image src={Onway} alt="" width={50} height={50} />
            <span>OnWay</span>
            {currentStatus === 2 && (
              <div className={css.spinner}>
                <Image src={Spinner} alt="" />
              </div>
            )}
            {currentStatus > 2 && (
              <span className={css.completed}>Completed</span>
            )}
          </div>

          <div className={css.status}>
            <UilBox width={50} height={50} />
            <span>Delivered</span>
            {currentStatus === 3 && (
              <div className={css.spinner}>
                <Image src={Spinner} alt="" />
              </div>
            )}
            {currentStatus > 3 && (
              <span className={css.completed}>Completed</span>
            )}
          </div>

          <div className={css.status}>
            <UilBill width={50} height={50} />
            <span>Payment</span>
            {order.method === 0 && currentStatus < 4 ? (
              <span className={css.pending}>On Delivery</span>
            ) : (
              <span className={css.completed}>Completed</span>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
