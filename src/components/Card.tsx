import { useState } from "react";
import {
  useGetAssetsQuery,
  useGetSingleAssetQuery,
} from "../redux/services/nftRanking";
import { NFTProps } from "../utils/interface";
import { Loader } from "./";
import { ModalComponent } from "./index";

const Card = () => {
  const [getId, setGetId] = useState("");
  const [getAddress, setGetAddress] = useState("");
  const { data, isLoading } = useGetAssetsQuery(1);
  const { data: singleAsset, isFetching } = useGetSingleAssetQuery({
    getAddress,
    getId,
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (id: string, address: string) => {
    setGetId(id);
    setGetAddress(address);

    if (singleAsset !== undefined) {
      setShow(true);
    }
  };

  const postData = data?.assets;

  if (isLoading) {
    return (
      <div className="mt-4">
        <Loader />;
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div>
        <div className="row mt-3">
          {postData?.map((item: NFTProps) => (
            <div className="col-sm-4" key={item.id}>
              <div
                className="card mb-3"
                onClick={() =>
                  handleShow(item.token_id, item.asset_contract.address)
                }
              >
                <div className="card-body">
                  <img
                    className="card-img-top"
                    style={{ height: "300px" }}
                    src={item.image_url}
                    alt={item.name}
                  />
                  <h5 className="card-title mt-2 text-danger">{item.name}</h5>
                  <p className="card-text">
                    {item.asset_contract.description.slice(0, 50)}...
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <ModalComponent
          show={show}
          handleClose={handleClose}
          singleAsset={singleAsset}
          isFetching={isFetching}
        />
      </div>
    </div>
  );
};

export default Card;
