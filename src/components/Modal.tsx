import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Loader, Error } from ".";
import { ModalProps } from "../utils/interface";
import { FaDiscord, FaExternalLinkAlt } from "react-icons/fa";

const ModalComponent = ({
  show,
  handleClose,
  singleAsset,
  isFetching,
  errors,
}: ModalProps) => {
  const LoadingComponent = () => {
    return (
      <div className="single-container">
        <h3 className="fw-medium text-black text-center">Please wait..</h3>
        <Loader />
      </div>
    );
  };

  if (errors) {
    return <Error />;
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title style={{ fontFamily: "Lobster Two", fontSize: "1.8em" }}>
          Alturanft
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isFetching ? (
          LoadingComponent()
        ) : (
          <div className="row mt-3 single-container">
            <div className="col-sm-12" key={singleAsset?.id}>
              <div className="card mb-3">
                <div className="card-body">
                  <img
                    className="card-img-top"
                    style={{ height: "300px" }}
                    src={singleAsset?.image_url}
                    alt={singleAsset?.name}
                  />
                  <h5 className="card-title mt-2 text-danger">
                    {singleAsset?.name}
                    <p
                      className="text-secondary fw-semibold"
                      style={{ fontSize: "0.6em" }}
                    >
                      {singleAsset?.creator?.address}
                    </p>
                  </h5>

                  <p className="card-text">
                    {singleAsset?.asset_contract?.description}
                  </p>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <div>
                        <img
                          src={singleAsset?.creator?.profile_img_url}
                          alt={singleAsset?.name}
                          className="profile-image"
                        />
                      </div>

                      <div className="px-2 d-flex flex-column  mb-0">
                        <p className="text-secondary fs-4 mb-0 pb-0">
                          {singleAsset?.collection.slug}
                        </p>
                        <p className="text-primary fs-9">
                          @{singleAsset?.collection?.twitter_username}
                        </p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center click">
                      <a
                        href={singleAsset?.collection?.discord_url}
                        target="_blank"
                      >
                        <FaDiscord className="fs-4 mx-1" />
                      </a>
                      <a
                        href={singleAsset?.collection?.external_url}
                        target="_blank"
                      >
                        <FaExternalLinkAlt className="fs-6 text-danger click" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose} disabled={isFetching}>
          <a
            href={singleAsset?.permalink}
            target="_blank"
            className="text-white single-container text-decoration-none fs-5"
          >
            Purchase
          </a>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
