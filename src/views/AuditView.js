import React from 'react';
import { Wizard, useWizard } from 'react-use-wizard';
import { Row, Col, Form, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { Checkbox } from 'react-bootstrap4-form-validation';
const shop = {
  "shopAuditId": "",
  "audidId": "",
  "shopName": "Feeja Paan Shop",
  "shopId": "",
  "shopDistance": "200m",
  "shopStatus": "Opened",
  "shopImage": "",
  "auditorLat": "",
  "auditorLong": "",
  "hotSpotAvailable": "",
  "hotSpotType": "",
  "hotSpotImage": "",
  "evaluationStatus": "",
  "completionStatus": "",
  "dateTime": "",
  "shopBrands": [
    {
      "brandId": "",
      "brandName": "",
      "brandAvailabile": "",
      "pmiLocal": "",
      "pmiImport": "",
      "frontStockLocal": "",
      "backStockLocal": "",
      "frontStockImport": "",
      "backStockImport": ""
    },
    {
      "brandId": "",
      "brandName": "",
      "brandAvailabile": "",
      "pmiLocal": "",
      "pmiImport": "",
      "frontStockLocal": "",
      "backStockLocal": "",
      "frontStockImport": "",
      "backStockImport": ""
    }
  ],
  "brandPostersList": [
    {
      "brandId": "",
      "brandName": "",
      "quantity": "",
      "posterImage": ""
    },
    {
      "brandId": "",
      "brandName": "",
      "quantity": "",
      "posterImage": ""
    }
  ],
  "auditQuestionsList": [
    {
      "questionId": "",
      "questionText": "",
      "questionType": "",
      "answersList": [
        {
          "answerId": "",
          "answerText": ""
        },
        {
          "answerId": "",
          "answerText": ""
        }
      ]
    }
  ]
}

const withCheckBox = ({ horizontal }) => {

}
const infoBlock = ({ label, value,layout='row' }) => (<div className='d-flex'>
  <span className='text-muted mr-2'>{label}</span>
  <span className='text-dark font-weight-bold'>{value}</span>
  </div>)
const Step = ({ heading, children }) => {
  const { handleStep } = useWizard();
  handleStep(() => {
  });

  return <Card >
    <Card.Header >
      <div className='d-flex justify-content-between'>
        <h4 className='text-primary font-weight-bold'>{shop.shopName}</h4>
        <div>
          <span className="d-inline-block mx-2 text-muted">Status</span>
          <span className="text-success font-weight-bold">{shop.shopStatus}</span>
        </div>
      </div>
    </Card.Header>
    <Card.Body >
      <div className="d-flex justify-content-center">{children}</div>
      </Card.Body>
  </Card>;
};

const Footer = () => {
  const {
    nextStep,
    previousStep,
    isLoading,
    activeStep,
    stepCount,
    isLastStep,
    isFirstStep,
  } = useWizard();

  return (
    <code>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {/* <p>Has previous step: {!isFirstStep ? '✅' : '⛔'}</p>
        <br />
        <p>Has next step: {!isLastStep ? '✅' : '⛔'} </p>
        <br />
        <p>
          Active step: {activeStep + 1} <br />
        </p>
        <br />
        <p>
          Total steps: {stepCount} <br />
        </p> */}
      </div>
      <div>
        <button
          className='btn btn-secondary'
          onClick={() => previousStep()}
          disabled={isLoading || isFirstStep}
        >
          Previous
        </button>
        <button className='btn btn-primary' onClick={() => nextStep()} disabled={isLoading || isLastStep}>
          Next
        </button>
      </div>
    </code>
  );
};

const AuditView = () => {
  const { id } = useParams();
  return (
    <Form >
      <Wizard footer={<Footer />} >
        <Step number={1} heading="General" >
          <Row>
            <Col md={4}>
              <div className='position-relative w-100 mb-3'>
                <img src="https://images.unsplash.com/photo-1523821757808-8c895a0aba06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="shop picture"
                  className='w-100 border'
                  style={{ objectFit: 'contain' }} />
                <div className="overlay p-2 position-absolute w-100" style={{ bottom: 0, background: '#000a' }}>
                  <label className='m-0'>
                    <input type="checkbox" /> <span className="text-white">Correct</span>
                  </label>
                </div>
              </div>
              <span className='text-muted mr-2'>Distance</span>
              <span className='text-dark font-weight-bold'>{shop.shopDistance}</span>
            </Col>
            <Col md={8}></Col>
          </Row>
        </Step>
        <Step number={2} heading="Brands" >

        </Step>
        <Step number={3} heading="Poster List" >

        </Step>
        <Step number={4} heading="Audit Questions" >

        </Step>
      </Wizard>
    </Form>
  );
};
export default AuditView;
