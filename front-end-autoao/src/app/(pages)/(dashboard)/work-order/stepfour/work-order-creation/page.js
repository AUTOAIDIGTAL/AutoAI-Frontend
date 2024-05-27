"use client";
import { Button, Col, Form, Row } from "react-bootstrap";

const WorkOrderCreation = () => {
  return (
    <>
      <div>
        <div class="fs-5 fw-semibold mb-3 pt-4">Brake Change</div>

        <Row className="border-layout pt-3">
          <Col
            xs={12}
            md={6}
            xxl={3}
            className="mb-3 d-flex justify-content-between"
          >
            <div className="fs-6 text-dark">Job Name</div>
            <div className="fs-6 text-dark fw-semibold">Oil Change</div>
          </Col>
          <Col
            xs={12}
            md={6}
            xxl={3}
            className="mb-3 d-flex justify-content-between"
          >
            <div className="fs-6 text-dark">Job Cost</div>
            <div className="fs-6 text-dark fw-semibold">Job Cost</div>
          </Col>
          <Col
            xs={12}
            md={6}
            xxl={3}
            className="mb-3 d-flex justify-content-between"
          >
            <div className="fs-6 text-dark">TIme</div>
            <div className="fs-6 text-dark fw-semibold">TIme</div>
          </Col>
          <Col
            xs={12}
            md={6}
            xxl={3}
            className="mb-3 d-flex justify-content-between"
          >
            <div className="fs-6 text-dark">Priority</div>
            <div className="fs-6 border py-1 px-2 rounded-2 bg-soft-danger-secondary d-inline-flex">
              High
            </div>
          </Col>
        </Row>

        <div className="bg-gray-100 p-3 rounded-ai-md">
          <div class="fs-5 fw-semibold mb-q">Parts Required</div>
          <div className="divider-list-wrap flex-wrap border-0">
            <div className="divider-list-wrap-flex">
              <div className="d-flex justify-content-between align-items-center">
                <div className="fs-6 text-muted">Part Name</div>
                <div className="fs-6 text-dark fw-semibold">Part Name</div>
              </div>
            </div>
            <div className="divider-list-wrap-auto">
              <div className="vr mx-3 d-none d-md-flex col-auto px-0" />
            </div>
            <div className="divider-list-wrap-flex">
              <div className="d-flex justify-content-between align-items-center">
                <div className="fs-6 text-muted">Cost</div>
                <div className="fs-6 text-dark fw-semibold">$99.00</div>
              </div>
            </div>
            <div className="divider-list-wrap-full-col mt-3 pt-3 border-top">
              <div className="fs-6 text-muted pb-2">Comment</div>
              <div className="fs-6 text-dark fw-semibold">
                Sunt tenetur est sit ea facere possimus consequatur
                necessitatibus. Autem illum perspiciatis consequatur est non.
                Sunt eveniet rerum. Quae culpa cupiditate est eius adipisci
                magni.
              </div>
            </div>
          </div>
        </div>

        <div className="divider-list mt-4">
          <div className="divider-list-wrap border-0">
            <div className="divider-list-wrap-flex">
              <div className="d-flex justify-content-between align-items-center">
                <div className="fs-6 text-muted">Assigned Mechanic</div>
                <div className="fs-6 text-dark fw-semibold">Miss Sadie Kerluke</div>
              </div>
            </div>
            <div className="divider-list-wrap-auto">
              <div className="vr mx-3 d-none d-md-flex col-auto px-0" />
            </div>
            <div className="divider-list-wrap-flex">
              <div className="d-flex justify-content-between align-items-center">
                <div className="fs-6 text-muted">Date</div>
                <div className="fs-6 text-dark fw-semibold d-flex align-items-center gap-2">
                22-12-2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkOrderCreation;
