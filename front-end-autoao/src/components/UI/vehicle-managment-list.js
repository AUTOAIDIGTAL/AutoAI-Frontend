import Image from "next/image";
const VehicleManagmentList = () => {
  return (
    <>
      <div className="divider-list">
            <div className="divider-list-wrap">
              <div className="divider-list-wrap-flex">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="fs-6 text-dark">Car Make</div>
                  <div className="fs-6 text-dark fw-semibold">Car Make</div>
                </div>
              </div>
              <div className="divider-list-wrap-auto">
                <div className="vr mx-3 d-none d-md-flex col-auto px-0"></div>
              </div>
              <div className="divider-list-wrap-flex">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="fs-6 text-dark">Car Model</div>
                  <div className="fs-6 text-dark fw-semibold d-flex align-items-center gap-2">
                    Car Model
                  </div>
                </div>
              </div>
            </div>
            <div className="divider-list-wrap">
              <div className="divider-list-wrap-flex">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="fs-6 text-dark">Year of Manufacture</div>
                  <div className="fs-6 fw-medium text-dark d-flex align-items-center gap-2">
                    Year of Manufacture
                  </div>
                </div>
              </div>
              <div className="divider-list-wrap-auto">
                <div className="vr mx-3 d-none d-md-flex col-auto px-0"></div>
              </div>
              <div className="divider-list-wrap-flex">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="fs-6 text-dark">VIN</div>
                  <div className="fs-6 fw-medium text-dark d-flex align-items-center gap-2">
                    VIN Number
                  </div>
                </div>
              </div>
            </div>
            <div className="divider-list-wrap">
              <div className="divider-list-wrap-flex">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="fs-6 text-dark">Company</div>
                  <div className="fs-6 fw-medium text-dark d-flex align-items-center gap-2">
                    Company
                  </div>
                </div>
              </div>
              <div className="divider-list-wrap-auto">
                <div className="vr mx-3 d-none d-md-flex col-auto px-0"></div>
              </div>
              <div className="divider-list-wrap-flex">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="fs-6 text-dark">Owned By</div>
                  <div className="fs-6 fw-medium text-dark d-flex align-items-center gap-2">
                    Owned By
                  </div>
                </div>
              </div>
            </div>
            <div className="divider-list-wrap">
              <div className="divider-list-wrap-flex">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="fs-6 text-dark">Color</div>
                  <div className="fs-6 fw-medium text-dark d-flex align-items-center gap-2">
                    Blue
                  </div>
                </div>
              </div>
              <div className="divider-list-wrap-auto">
                <div className="vr mx-3 d-none d-md-flex col-auto px-0"></div>
              </div>
              <div className="divider-list-wrap-flex">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="fs-6 text-dark">Fuel</div>
                  <div className="fs-6 fw-medium text-dark d-flex align-items-center gap-2">
                    Petrol
                  </div>
                </div>
              </div>
              <div className="divider-list-wrap-auto">
                <div className="vr mx-3 d-none d-md-flex col-auto px-0"></div>
              </div>
              <div className="divider-list-wrap-flex">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="fs-6 text-dark">Owner Name</div>
                  <div className="fs-6 fw-medium text-dark d-flex align-items-center gap-2">
                    Make Modeil
                  </div>
                </div>
              </div>
            </div>
            <div className="divider-list-wrap">
              <div className="divider-list-wrap-flex">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="fs-6 text-dark">Mileage</div>
                  <div className="fs-6 fw-medium text-dark d-flex align-items-center gap-2">
                    Mileage
                  </div>
                </div>
              </div>
              <div className="divider-list-wrap-auto">
                <div className="vr mx-3 d-none d-md-flex col-auto px-0"></div>
              </div>
              <div className="divider-list-wrap-flex">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="fs-6 text-dark">Images</div>
                  <div className="fs-6 fw-medium text-dark d-flex align-items-center gap-2">
                    <div className="divider-list-wrap-img">
                      <Image
                        src="https://picsum.photos/200/200"
                        width={32}
                        height={32}
                        alt="Avatar"
                      ></Image>
                    </div>
                    <div className="divider-list-wrap-img">
                      <Image
                        src="https://picsum.photos/200/200"
                        width={32}
                        height={32}
                        alt="Avatar"
                      ></Image>
                    </div>
                    <div className="divider-list-wrap-img">
                      <Image
                        src="https://picsum.photos/200/200"
                        width={32}
                        height={32}
                        alt="Avatar"
                      ></Image>
                    </div>
                    <div className="divider-list-wrap-img">
                      <Image
                        src="https://picsum.photos/200/200"
                        width={32}
                        height={32}
                        alt="Avatar"
                      ></Image>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  );
};

export default VehicleManagmentList;
