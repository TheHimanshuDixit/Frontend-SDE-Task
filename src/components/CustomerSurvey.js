import React, { useEffect, useRef, useState } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import {
  Modal,
  Ripple,
  initTE,
} from "tw-elements";
import { useNavigate } from "react-router-dom"

const CustomerSurvey = () => {

  const navigate = useNavigate();
  useEffect(() => {
    initTE({ Modal, Ripple });
    // eslint-disable-next-line
  }, []);

  const [qstate, setQstate] = useState(0);
  const [answers, setAnswers] = useState({});

  const ref = useRef(null);

  const handleAnswer = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value })
  }

  const questions = [
    {
      qno: 1, questionText: 'How satisfied are you with our products?', options: 5
    },
    {
      qno: 2, questionText: 'How fair are the prices compared to similar retailers?', options: 5
    },
    {
      qno: 3, questionText: 'How satisfied are you with the value for money of your purchase?', options: 5
    },
    {
      qno: 4, questionText: 'On a scale of 1-10 how would you recommend us to your friends and family?', options: 10
    },
    {
      qno: 5, questionText: 'What could we do to improve our service?', type: "text"
    },
  ]

  const intialCheck = () => {
    if (localStorage.getItem('surveyData')) {
      const surveyData = JSON.parse(localStorage.getItem('surveyData'));
      setAnswers(surveyData.answers);
    }

    for (let i = 0; i < questions.length; i++) {
      answers["Q" + questions[i].qno] = "";
    }
    console.log(answers);
  }

  useEffect(() => {
    intialCheck();
    // eslint-disable-next-line
  }, [])


  return (
    <div className='bg-gradient-to-r from-blue-500 to-fuchsia-500 h-[100vh] py-10'>
      <img className="h-20 mx-auto" src="https://www.codeinbound.com/assets/images/main-logo/logo.png" alt="logo" />
      <h1 className='text-center my-12 text-5xl font-bold uppercase underline'>Customer Survey</h1>
      <div
        className="w-2/3 mx-auto my-20 border-2 block rounded-lg bg-transparent p-6 shadow-2xl">
        <h5
          className="mb-2 text-xl leading-tight text-neutral-800 text-center font-bold">
          Question : {questions[qstate].qno}/{questions.length}
        </h5>
        <h5
          className="mb-2 text-xl font-bold text-center leading-tight text-neutral-800">
          {questions[qstate].questionText}
        </h5>
        {questions[qstate].options ?
          <div className="flex justify-center">
            {[...Array(questions[qstate].options)].map((e, i) => <div key={i} className='flex justify-center align-middle mb-10 mr-4'>
              <input
                className='mx-2 h-7 w-10'
                id={i + 1}
                name={"Q" + questions[qstate].qno}
                type="radio"
                onChange={handleAnswer}
                value={i + 1}
                checked={answers["Q" + questions[qstate].qno] === (i + 1).toString()}
              />
              <label htmlFor={i + 1} className='font-bold text-xl' >{i + 1}</label>
            </div>)}
          </div>
          :
          <div className="flex justify-center mb-10">
            <textarea
              name={"Q" + questions[qstate].qno}
              onChange={handleAnswer}
              value={answers["Q" + questions[qstate].qno]}
              className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none bg-transparent"
              rows="4"
              placeholder="Enter your message..."
            />
          </div>
        }
        <div className='flex'>
          <button
            onClick={() => {
              if (qstate > 0)
                setQstate(qstate - 1);
            }}
            type="button"
            className="flex mx-auto rounded bg-gradient-to-r from-blue-900 to-fuchsia-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal hover:from-fuchsia-900 hover:to-blue-900  text-white">
            <BsArrowLeft className="mr-2 text-lg my-auto" /> Previous
          </button>
          <button
            onClick={() => {
              if (qstate < questions.length - 1)
                setQstate(qstate + 1);
              if (qstate === questions.length - 1) {
                ref.current.click();
              }
            }}
            type="button"
            className="flex mx-auto rounded bg-gradient-to-r from-blue-900 to-fuchsia-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal hover:from-fuchsia-900 hover:to-blue-900  text-white">
            Skip
          </button>
          <button
            onClick={() => {
              if (qstate < questions.length - 1)
                setQstate(qstate + 1);
              if (qstate === questions.length - 1) {
                ref.current.click();
              }
            }}
            type="button"
            className="flex mx-auto rounded bg-gradient-to-r from-blue-900 to-fuchsia-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal hover:from-fuchsia-900 hover:to-blue-900  text-white">
            Next <BsArrowRight className="ml-2 text-lg my-auto" />
          </button>

        </div>
      </div>

      <button
        ref={ref}
        type="button"
        className="hidden rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        data-te-toggle="modal"
        data-te-target="#staticBackdrop"
        data-te-ripple-init
        data-te-ripple-color="light">
        CLick
      </button>
      <div
        data-te-modal-init
        className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="staticBackdrop"
        data-te-backdrop="static"
        data-te-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true">
        <div
          data-te-modal-dialog-ref
          className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
          <div
            className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
            <div
              className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <h5
                className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                id="exampleModalLabel">
                Confirm it !!
              </h5>
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                data-te-modal-dismiss
                aria-label="Close">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div data-te-modal-body-ref className="relative p-4">Are you sure you want to submit the survey. </div>
            <div
              className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 ">
              <button
                type="button"
                className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                data-te-modal-dismiss
                data-te-ripple-init
                data-te-ripple-color="light">
                Deny
              </button>
              <button
                onClick={() => {
                  const sessionId = Math.floor((Math.random() * 1000000000000) + 1);
                  const surveyData = {
                    sessionId: sessionId,
                    answers: answers
                  }
                  localStorage.setItem('surveyData', JSON.stringify(surveyData));
                  setAnswers([]);
                  setQstate(0);
                  navigate('/thankyou');
                }}
                type="button"
                className="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] "
                data-te-modal-dismiss
                data-te-ripple-init
                data-te-ripple-color="light">
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerSurvey