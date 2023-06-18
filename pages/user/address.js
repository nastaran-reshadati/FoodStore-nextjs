import React from "react";
import Layout from "../../components/profile/Layout";
import CreateAddress from "../../components/profile/address/createAddress/CreateAddress";
import EditAddress from "../../components/profile/address/EditAddress";
import useSWR from "swr";
import Loading from "../../components/profile/Loading";
const address = () => {
  
  const { data, error } = useSWR("http://localhost:3000/api/profile/address");

  if (error) {
    console.log(error);
  }


  return (
    <Layout>
      {data ? (
        <CreateAddress provinces={data.provinces} cities={data.cities} />
      ) : (
        <Loading />
      )}

      {data &&
        data.addresses.map((address, index) => (
          <EditAddress
            address={address}
            provinces={data.provinces}
            cities={data.cities}
            key={index}
          />
        ))}
    </Layout>
  );
};

export default address;
