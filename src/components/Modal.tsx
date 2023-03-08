import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Loader } from ".";
import { ModalProps } from "../utils/interface";

const ModalComponent = ({
  show,
  handleClose,
  singleAsset,
  isFetching,
}: ModalProps) => {
  console.log(singleAsset);
  const LoadingComponent = () => {
    return (
      <div className="single-container">
        <h3 className="fw-medium text-black text-center">Please wait..</h3>
        <Loader />
      </div>
    );
  };
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
                    <p className="text-secondary fs-9">
                      {singleAsset?.collection.slug}
                    </p>
                  </h5>

                  <p className="card-text">
                    {singleAsset?.asset_contract?.description}
                  </p>

                  <div></div>
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
