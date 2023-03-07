import { useState } from "react";
import { useGetAssetsQuery } from "../redux/services/nftRanking";
import { NFTProps } from "../utils/interface";
import { Loader } from "./";

const Card = () => {
  const { data, isLoading } = useGetAssetsQuery(1);

  const postData = data?.assets;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container mt-4">
      <div>
        <div className="row mt-3">
          {postData?.map((item: NFTProps) => (
            <div className="col-sm-4" key={item.id}>
              <div className="card mb-3">
                <div className="card-body">
                  <img
                    className="card-img-top"
                    style={{ height: "300px" }}
                    src={item.image_url}
                    alt={item.name}
                  />
                  <h5 className="card-title mt-2 text-danger">{item.name}</h5>
                  <p className="card-text">
                    {item.asset_contract.description.slice(0, 100)}...
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
