import React,{ useEffect } from 'react';
import { Wizard, useWizard } from 'react-use-wizard';
import { Form, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
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
  "hotSpotAvailable": "Available",
  "hotSpotType": "Banner",
  "hotSpotImage": "",
  "evaluationStatus": "",
  "completionStatus": "",
  "dateTime": "",
  "shopBrands": [
    {
      "brandId": "",
      "brandName": "Brand Name1",
      "brandAvailabile": "Available",
      "pmiLocal": "",
      "pmiImport": "",
      "frontStockLocal": "",
      "backStockLocal": "",
      "frontStockImport": "25",
      "backStockImport": ""
    },
    {
      "brandId": "",
      "brandName": "Brand Name 2",
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
      "brandName": "Brand Poster 1",
      "quantity": "2",
      "posterImage": "https://images.unsplash.com/photo-1523821757808-8c895a0aba06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      "brandId": "",
      "brandName": "Brand poster 2",
      "quantity": "3",
      "posterImage": "https://images.unsplash.com/photo-1523821757808-8c895a0aba06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
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
  const { handleStep,activeStep,nextStep,previousStep } = useWizard();
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        nextStep();
      } else if (event.key === 'ArrowLeft') {
        previousStep();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  handleStep(() => {
  });
  return <Card >
    <Card.Header >
      <div className='d-flex justify-content-between'>
        <h4 className='text-primary font-weight-bold m-0' style={{ width:200 }}>{shop.shopName}
        <small className="text-muted d-block mt-2">+92 322 5331214</small>
        </h4>
        <div className='text-center'>
          <h4>{heading}</h4>
          <h6>00:10:20</h6>
        </div>
        <div className="text-right" style={{ width:200 }}>
          <span className="d-inline-block text-muted font-weight-bold">John Doe</span>
          <span className="text-dark font-weight-bold d-block">+92 234 2894234</span>
        </div>
      </div>
    </Card.Header>
    <Card.Body >
      <div className="d-flex justify-content-center">{children}</div>
      <div className="d-flex justify-content-center mt-3" style={{ gap:30 }}>
              <button className='btn btn-danger'
                        type='button'
              onClick={()=>{
                console.log('fail')
                nextStep()}
              }>&times;</button>
              <button className='btn btn-success'
                        type='button'
              onClick={()=>{
                console.log('pass')
                nextStep()
                }}>✓</button>
            </div>
      </Card.Body>
  </Card>;
};
const StepIndicator = ({ stepCount,activeStep }) => {
  const dotSize = 6
  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < stepCount; i++) {
      dots.push(<div key={i} className={`dot rounded-circle ${activeStep===i? 'bg-primary':'bg-secondary'}`} style={{ width:dotSize,height:dotSize }}></div>);
    }
    return dots;
  };

  return <div className="step-indicator d-flex justify-content-center my-3" style={{ gap:5 }}>{renderDots()}</div>;
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
      <div>
        <StepIndicator stepCount={stepCount} activeStep={activeStep} />
      </div>
      <div className='d-flex justify-content-center'>
        <button
          className='btn btn-secondary'
          type='button'
          onClick={() => previousStep()}
          disabled={isLoading || isFirstStep}
        >
          <i className="feather m-0 icon-chevron-left"></i>
        </button>
        <button className='btn btn-primary'
                  type='button'
        onClick={() => nextStep()} disabled={isLoading || isLastStep}>
          <i className="feather m-0 icon-chevron-right"></i>
        </button>
      </div>
    </code>
  );
};

const AuditView = () => {
  const { id } = useParams();

  return (
    <Form className='position-relative'>
      <Wizard footer={<Footer />} >
        <Step number={0} heading="Shop Status">
            <div className='d-flex flex-column align-items-center h3 my-5'>
              <small className="text-muted d-block">Shop Status</small>
              <strong className="text-dark font-weight-bold d-block">Opened</strong>
            </div>
        </Step>
        <Step number={1} heading="Shop Photos" >
            <div className='position-relative w-25 mb-3 mx-5 d-flex flex-column align-items-center'>
              <span className='p-3'>Original</span>
              <img src="https://images.unsplash.com/photo-1523821757808-8c895a0aba06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="shop picture"
                className='w-100 border'
                style={{ objectFit: 'contain' }} />
            </div>
            <div className='position-relative w-25 mb-3 mx-5 d-flex flex-column align-items-center'>
              <span className='p-3'>Test</span>
              <img src="https://images.unsplash.com/photo-1523821757808-8c895a0aba06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="shop picture"
                className='w-100 border'
                style={{ objectFit: 'contain' }} />
            </div>

        </Step>
        <Step number={2} heading="Location" >
            <div className='position-relative w-25 mb-3 mx-5 d-flex flex-column align-items-center'>
              <span className='p-3'>Original</span>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13595.801140667956!2d74.3939335!3d31.58041115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1686518523977!5m2!1sen!2s"
               loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{ border:0 }}></iframe>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-column">
              <div className="text-muted">Distance</div>
              <div className="text-dark font-weight-bold">200M</div>
            </div>
            <div className='position-relative w-25 mb-3 mx-5 d-flex flex-column align-items-center'>
              <span className='p-3'>Test</span>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13595.801140667956!2d74.3939335!3d31.58041115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1686518523977!5m2!1sen!2s"    loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{ border:0 }}></iframe>
            </div>
        </Step>
        <Step number={3} heading="Hot Spot" >
            <div className='position-relative w-25 mb-3 mx-5 d-flex flex-column align-items-center'>
              <span className='p-3'>Original</span>
              <img src="https://images.unsplash.com/photo-1523821757808-8c895a0aba06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="shop picture"
                className='w-100 border mb-3'
                style={{ objectFit: 'contain' }} />

                {infoBlock({label:'Hot Spot',value:shop.hotSpotAvailable})}
                {infoBlock({label:'Hot Spot Type',value:shop.hotSpotType})}
            </div>
            <div className='position-relative w-25 mb-3 mx-5 d-flex flex-column align-items-center'>
              <span className='p-3'>Test</span>
              <img src="https://images.unsplash.com/photo-1523821757808-8c895a0aba06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="shop picture"
                className='w-100 border mb-3'
                style={{ objectFit: 'contain' }} />
                {infoBlock({label:'Hot Spot',value:shop.hotSpotAvailable})}
                {infoBlock({label:'Hot Spot Type',value:'Poster'})}
            </div>
        </Step>
        {/* Shop Brands */}
        {shop.shopBrands.map(brand=>(
            <Step number={4} heading="Shop Brands" >
              <div className='text-center'>
                <div className="brand h3">{brand.brandName}</div>
                <div className="d-flex">
                  <div className='mb-3 mx-5 d-flex flex-column align-items-center'>
                    <span className='p-3'>Original</span>
                      {infoBlock({label:'Brand Available',value:brand.brandAvailabile})}
                      {infoBlock({label:'Front Stock Imported',value:brand.frontStockImport})}
                  </div>
                  <div className='mb-3 mx-5 d-flex flex-column align-items-center'>
                    <span className='p-3'>Test</span>
                      {infoBlock({label:'Brand Available',value:brand.brandAvailabile})}
                      {infoBlock({label:'Front Stock Imported',value:brand.frontStockImport})}
                  </div>
                </div>
              </div>
            </Step>
        ))}
        {/* Shop Brands */}
        {shop.brandPostersList.map(poster=>(
            <Step number={4} heading="Shop Posters" >
            <div className='d-flex flex-column align-items-center'>
                <h3>{poster.posterName}</h3>
              <div className='d-flex justify-content-center'>
                <div className='position-relative w-25 mb-3 mx-5 d-flex flex-column align-items-center'>
                    <span className='p-3'>Original</span>
                    <img src={poster.posterImage} alt="shop picture"
                      className='w-100 border mb-3'
                      style={{ objectFit: 'contain' }} />
                      {infoBlock({label:'Quantity',value:poster.quantity})}
                </div>
                <div className='position-relative w-25 mb-3 mx-5 d-flex flex-column align-items-center'>
                  <span className='p-3'>Test</span>
                  <img src={poster.posterImage} alt="shop picture"
                    className='w-100 border mb-3'
                    style={{ objectFit: 'contain' }} />
                    {infoBlock({label:'Quantity',value:poster.quantity})}
                </div>
              </div>
            </div>

          </Step>
        ))}

      </Wizard>
    </Form>
  );
};
export default AuditView;
