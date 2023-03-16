/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { alpha } from '@mui/material/styles';
import { colors } from '@mui/material';
import Link from '@mui/material/Link';
const mock = [
  {
    color: colors.lightBlue[500],
    title: 'Enterprise Software Development',
    link: '/services/enterprise-software-development',
    subtitle:
      'We are experts in Enterprise Software Development. Enterprise Software or Enterprise Software Application is generally used to satisfy the needs of an organization rather than individual users.',
    icon: (
      <svg
        height={55}
        width={55}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 512  512 "
        stroke="currentColor"
      >
        <g>
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="m66.15625 461.230469v-85.511719c0-9.652344-15-9.71875-15 0v85.511719c0 9.652343 15 9.71875 15 0zm0 0"
            fill="#000000"
            data-original="#000000"
            className=""
          ></path>
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="m113.683594 461.230469v-85.511719c0-9.652344-15-9.71875-15 0v85.511719c0 9.652343 15 9.71875 15 0zm0 0"
            fill="#000000"
            data-original="#000000"
            className=""
          ></path>
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="m45.046875 267.769531c-9.652344 0-9.667969 15 0 15 9.652344 0 9.667969-15 0-15zm0 0"
            fill="#000000"
            data-original="#000000"
            className=""
          ></path>
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="m82.421875 267.769531c-9.652344 0-9.667969 15 0 15 9.648437 0 9.667969-15 0-15zm0 0"
            fill="#000000"
            data-original="#000000"
            className=""
          ></path>
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="m119.789062 267.769531c-9.648437 0-9.667968 15 0 15 9.652344 0 9.671876-15 0-15zm0 0"
            fill="#000000"
            data-original="#000000"
            className=""
          ></path>
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="m222.496094 257.644531 22.273437-22.273437c6.824219-6.824219-3.769531-17.441406-10.609375-10.605469l-27.574218 27.578125c-2.929688 2.929688-2.929688 7.675781 0 10.605469l28.28125 28.285156c6.828124 6.824219 17.445312-3.769531 10.609374-10.605469zm0 0"
            fill="#000000"
            data-original="#000000"
            className=""
          ></path>
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="m348.769531 224.765625c-6.824219-6.824219-17.445312 3.769531-10.605469 10.605469l22.980469 22.980468-22.273437 22.277344c-6.824219 6.824219 3.769531 17.4375 10.605468 10.605469l27.578126-27.578125c2.929687-2.929688 2.929687-7.679688 0-10.605469zm0 0"
            fill="#000000"
            data-original="#000000"
            className=""
          ></path>
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="m309.125 222.769531c-3.714844-1.828125-8.210938-.292969-10.035156 3.425781l-28 57c-4.257813 8.664063 9.175781 15.335938 13.460937 6.613282l28-57c1.828125-3.71875.292969-8.214844-3.425781-10.039063zm0 0"
            fill="#000000"
            data-original="#000000"
            className=""
          ></path>
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="m418.890625 56.550781c-20.160156 0-36.5625 16.398438-36.5625 36.558594s16.402344 36.558594 36.5625 36.558594 36.558594-16.398438 36.558594-36.558594-16.398438-36.558594-36.558594-36.558594zm0 58.117188c-11.886719 0-21.5625-9.671875-21.5625-21.558594s9.675781-21.558594 21.5625-21.558594 21.558594 9.671875 21.558594 21.558594-9.671875 21.558594-21.558594 21.558594zm0 0"
            fill="#000000"
            data-original="#000000"
            className=""
          ></path>
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="m506.265625 113.359375c3.367187-.816406 5.734375-3.828125 5.734375-7.289063v-25.921874c0-9.652344-15-9.71875-15 0v20.023437l-19.59375 4.75c-2.550781.617187-4.59375 2.523437-5.382812 5.023437-.945313 2.988282-2.179688 5.953126-3.664063 8.8125-1.210937 2.332032-1.117187 5.121094.25 7.363282l10.503906 17.230468-9.984375 9.984376-17.226562-10.507813c-2.242188-1.367187-5.035156-1.460937-7.363282-.25-2.855468 1.484375-5.820312 2.71875-8.8125 3.664063-2.503906.792968-4.40625 2.832031-5.027343 5.382812l-4.75 19.59375h-14.121094l-4.75-19.59375c-.617187-2.550781-2.523437-4.589844-5.023437-5.382812-2.988282-.945313-5.953126-2.179688-8.8125-3.664063-2.328126-1.210937-5.121094-1.117187-7.363282.25l-17.226562 10.507813-9.984375-9.984376 10.503906-17.230468c1.367187-2.242188 1.460937-5.035156.25-7.363282-1.484375-2.859374-2.71875-5.824218-3.664063-8.8125-.789062-2.5-2.832031-4.40625-5.382812-5.023437l-19.59375-4.75v-14.121094l19.59375-4.75c2.550781-.621093 4.59375-2.527343 5.382812-5.027343.945313-2.988282 2.179688-5.953126 3.664063-8.8125 1.210937-2.328126 1.117187-5.121094-.25-7.363282l-10.503906-17.226562 9.984375-9.984375 17.226562 10.503906c2.242188 1.367187 5.035156 1.460937 7.363282.25 2.859374-1.484375 5.824218-2.714844 8.8125-3.664063 2.5-.789062 4.40625-2.832031 5.023437-5.382812l4.75-19.59375h14.121094l4.75 19.59375c.621093 2.550781 2.527343 4.59375 5.027343 5.382812 2.988282.949219 5.953126 2.179688 8.8125 3.664063 2.328126 1.210937 5.121094 1.117187 7.363282-.25l17.226562-10.503906 9.984375 9.984375-10.503906 17.226562c-1.367187 2.242188-1.460937 5.035156-.25 7.363282 1.484375 2.859374 2.71875 5.824218 3.664063 8.8125 2.910156 9.203124 17.230468 4.738281 14.300781-4.527344-.78125-2.464844-1.714844-4.914063-2.785157-7.320313l11.453126-18.78125c1.800781-2.957031 1.347656-6.761719-1.101563-9.210937l-18.324219-18.324219c-2.449218-2.449219-6.253906-2.90625-9.210937-1.101563l-18.78125 11.453126c-1.078125-.476563-2.160157-.929688-3.253907-1.351563l-5.183593-21.375c-.8125-3.367187-3.824219-5.734375-7.285157-5.734375h-25.917968c-3.464844 0-6.476563 2.367188-7.289063 5.734375l-5.183593 21.375c-1.09375.421875-2.179688.871094-3.253907 1.351563l-18.78125-11.453126c-2.957031-1.804687-6.761719-1.347656-9.210937 1.101563l-18.324219 18.324219c-2.449219 2.449218-2.902344 6.253906-1.101563 9.210937l11.453126 18.78125c-.480469 1.078125-.933594 2.164063-1.355469 3.253907l-21.371094 5.183593c-3.363281.816407-5.734375 3.828125-5.734375 7.289063v25.917968c0 3.460938 2.371094 6.472657 5.734375 7.289063l21.371094 5.179687c.425781 1.09375.875 2.179688 1.355469 3.253907l-2.96875 4.867187h-235.570313c-24.296875 0-44.0625 19.765625-44.0625 44.0625v12.050782h-43.386719c-15.578125 0-28.253906 12.675781-28.253906 28.253906v214.972656c0 9.652344 15 9.71875 15 0v-110.777344h134.839844v168.523438c0 7.308594-5.945313 13.253906-13.253906 13.253906h-108.332032c-7.308594 0-13.253906-5.945312-13.253906-13.253906v-17.746094c0-9.652344-15-9.71875-15 0v17.746094c0 15.578125 12.675781 28.253906 28.253906 28.253906h108.332032c15.578124 0 28.253906-12.675781 28.253906-28.253906v-42.183594h76.882812v55.1875h-55.710937c-9.652344 0-9.71875 15 0 15h211.617187c9.652344 0 9.71875-15 0-15h-55.714844v-55.1875h126.023438c24.296875 0 44.0625-19.769531 44.0625-44.066406v-226.773438c0-13.914062-6.367188-26.722656-17.46875-35.136718-1.050781-.796876-2.246094-1.269532-3.464844-1.445313l-7.527344-12.347656c.476563-1.078125.929688-2.164063 1.351563-3.253907zm-249.542969 383.390625v-54.125h70.191406v54.125zm-228.46875-298.976562h108.332032c7.308593 0 13.253906 5.945312 13.253906 13.253906v24.289062h-134.839844v-24.289062c0-7.308594 5.945312-13.253906 13.253906-13.253906zm-13.253906 102.449218v-49.90625h134.839844v49.90625zm482 54.019532h-58c-9.652344 0-9.71875 15 0 15h58v28.253906c0 16.027344-13.039062 29.0625-29.0625 29.0625h-303.097656v-57.316406h231.160156c9.652344 0 9.71875-15 0-15h-231.160156v-143.214844c0-15.582032-12.675782-28.253906-28.253906-28.253906h-49.945313v-12.050782c0-16.027344 13.035156-29.0625 29.0625-29.0625h226.546875c-1.121094 2.753906-.519531 5.964844 1.640625 8.125l18.324219 18.324219c2.449218 2.449219 6.253906 2.90625 9.210937 1.101563l18.78125-11.453126c1.074219.476563 2.160157.929688 3.253907 1.351563l5.183593 21.375c.8125 3.363281 3.824219 5.734375 7.289063 5.734375h25.917968c3.460938 0 6.472657-2.371094 7.289063-5.734375l5.179687-21.375c1.09375-.421875 2.179688-.875 3.253907-1.351563l18.785156 11.453126c2.957031 1.800781 6.761719 1.347656 9.207031-1.101563l15.28125-15.28125c3.960938 5.046875 6.152344 11.277344 6.152344 17.894531zm0 0"
            fill="#000000"
            data-original="#000000"
            className=""
          ></path>
        </g>
      </svg>
    ),
  },
  {
    color: colors.purple[500],
    title: 'Web Design & Development',
    link: '/services/web-development',
    subtitle:
      'Build the product you need on time with an experienced team that uses a clear and effective design process.',
    icon: (
      <svg
        height={55}
        width={55}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 512 512"
        stroke="currentColor"
      >
        <g>
          <g xmlns="http://www.w3.org/2000/svg">
            <path
              d="M472,56H40A32.042,32.042,0,0,0,8,88V360a32.042,32.042,0,0,0,32,32H204.9l-10.67,32H168a8,8,0,0,0-8,8v16H88a8,8,0,0,0,0,16H440a8,8,0,0,0,0-16H352V432a8,8,0,0,0-8-8H317.77L307.1,392H472a32.042,32.042,0,0,0,32-32V88A32.042,32.042,0,0,0,472,56ZM336,440v8H176v-8ZM211.1,424l10.67-32h68.46l10.67,32ZM488,360a16.021,16.021,0,0,1-16,16H40a16.021,16.021,0,0,1-16-16V344H488ZM143.66,256l-3,72h-9.32l-3-72Zm-14.22-16,5.34-32h2.44l5.34,32ZM136,192c-8.67,0-16-10.99-16-24,0-8.21,8.38-20.14,15.98-28.55C142.83,147.05,152,159.2,152,168,152,181.01,144.67,192,136,192Zm87.06-16,.94,1.89V184H192v-6.11l.94-1.89Zm-22.12-16L208,145.89,215.06,160ZM224,200V327a8.258,8.258,0,0,0,.07,1H191.93a8.258,8.258,0,0,0,.07-1V200Zm72-32h24v16h-8a8,8,0,0,0,0,16h8v16H296a8,8,0,0,0,0,16h24v16h-8a8,8,0,0,0,0,16h8v16H296a8,8,0,0,0,0,16h24v32H264V136h56v16H296a8,8,0,0,0,0,16Zm96,96v63a8.258,8.258,0,0,0,.07,1H359.93a8.258,8.258,0,0,0,.07-1V264Zm-32-16v-6.11l16-32,16,32V248Zm128,80H407.93a8.258,8.258,0,0,0,.07-1V240a8.081,8.081,0,0,0-.84-3.58l-24-48a8.009,8.009,0,0,0-14.32,0l-24,48A8.081,8.081,0,0,0,344,240v87a8.258,8.258,0,0,0,.07,1H336V128a8,8,0,0,0-8-8H256a8,8,0,0,0-8,8V328h-8.07a8.258,8.258,0,0,0,.07-1V176a8.081,8.081,0,0,0-.84-3.58l-24-48a8.009,8.009,0,0,0-14.32,0l-24,48A8.081,8.081,0,0,0,176,176V327a8.258,8.258,0,0,0,.07,1h-19.4l3.32-79.67c.01-.18,0-.36,0-.55v-.24a8.013,8.013,0,0,0-.1-.84v-.02l-7.4-44.41C161.78,195.26,168,182.52,168,168c0-20.56-23.83-43.33-26.55-45.86a8.017,8.017,0,0,0-10.9,0C127.83,124.67,104,147.44,104,168c0,14.52,6.22,27.26,15.51,34.27l-7.4,44.41v.02a8.013,8.013,0,0,0-.1.84v.24c0,.19-.01.37,0,.55L115.33,328H24V88A16.021,16.021,0,0,1,40,72H472a16.021,16.021,0,0,1,16,16Z"
              fill="#000000"
              data-original="#000000"
              className=""
            ></path>
            <path
              d="M96,352H48a8,8,0,0,0,0,16H96a8,8,0,0,0,0-16Z"
              fill="#000000"
              data-original="#000000"
              className=""
            ></path>
            <path
              d="M128,352h-8a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z"
              fill="#000000"
              data-original="#000000"
              className=""
            ></path>
            <path
              d="M208,208a8,8,0,0,0-8,8v88a8,8,0,0,0,16,0V216A8,8,0,0,0,208,208Z"
              fill="#000000"
              data-original="#000000"
              className=""
            ></path>
            <path
              d="M376,272a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V280A8,8,0,0,0,376,272Z"
              fill="#000000"
              data-original="#000000"
              className=""
            ></path>
            <path
              d="M48,104h64a8,8,0,0,0,0-16H48a8,8,0,0,0,0,16Z"
              fill="#000000"
              data-original="#000000"
              className=""
            ></path>
            <path
              d="M48,128H64a8,8,0,0,0,0-16H48a8,8,0,0,0,0,16Z"
              fill="#000000"
              data-original="#000000"
              className=""
            ></path>
            <path
              d="M432,312h32a8,8,0,0,0,0-16H432a8,8,0,0,0,0,16Z"
              fill="#000000"
              data-original="#000000"
              className=""
            ></path>
            <path
              d="M456,288h8a8,8,0,0,0,0-16h-8a8,8,0,0,0,0,16Z"
              fill="#000000"
              data-original="#000000"
              className=""
            ></path>
          </g>
        </g>
      </svg>
    ),
  },
  {
    color: colors.yellow[500],
    title: 'Mobile Application Development',
    link: '/services/mobile-application-development',
    subtitle:
      'Create an impactful mobile app that fits your brand and industry within a shorter time frame.',
    icon: (
      <svg
        height={55}
        width={55}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 512 512"
        stroke="currentColor"
      >
        <g>
          <g xmlns="http://www.w3.org/2000/svg">
            <path
              d="m360.209 0h-208.418c-21.816 0-39.565 17.749-39.565 39.564v432.871c0 21.816 17.749 39.564 39.565 39.564h208.419c21.816 0 39.565-17.749 39.565-39.564v-432.871c-.001-21.815-17.749-39.564-39.566-39.564zm-152.822 15h97.226v8.532c0 4.705-3.828 8.532-8.532 8.532h-80.161c-4.705 0-8.532-3.828-8.532-8.532v-8.532zm177.387 457.436c0 13.545-11.02 24.564-24.565 24.564h-208.418c-13.545 0-24.565-11.02-24.565-24.564v-432.872c0-13.545 11.02-24.564 24.565-24.564h40.597v8.532c0 12.976 10.557 23.532 23.532 23.532h80.161c12.976 0 23.532-10.557 23.532-23.532v-8.532h40.597c13.545 0 24.565 11.02 24.565 24.564v432.872z"
              fill="#000000"
              data-original="#000000"
              className=""
            ></path>
            <path
              d="m296.081 464.936h-80.161c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h80.161c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"
              fill="#000000"
              data-original="#000000"
              className=""
            ></path>
            <path
              d="m175.839 183.339h48.097c12.976 0 23.532-10.557 23.532-23.532v-64.13c0-12.976-10.557-23.532-23.532-23.532h-48.097c-12.976 0-23.532 10.557-23.532 23.532v64.129c0 12.976 10.556 23.533 23.532 23.533zm-8.532-87.662c0-4.705 3.828-8.532 8.532-8.532h48.097c4.705 0 8.532 3.828 8.532 8.532v64.129c0 4.705-3.828 8.532-8.532 8.532h-48.097c-4.705 0-8.532-3.828-8.532-8.532z"
              fill="#000000"
              data-original="#000000"
              className=""
            ></path>
            <path
              d="m288.064 87.145h48.097c4.705 0 8.532 3.828 8.532 8.532 0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5c0-12.976-10.557-23.532-23.532-23.532h-48.097c-12.976 0-23.532 10.557-23.532 23.532v64.129c0 12.976 10.557 23.532 23.532 23.532h48.097c12.976 0 23.532-10.557 23.532-23.532v-32.065c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v32.065c0 4.705-3.828 8.532-8.532 8.532h-48.097c-4.705 0-8.532-3.828-8.532-8.532v-64.129c0-4.704 3.828-8.532 8.532-8.532z"
              fill="#000000"
              data-original="#000000"
              className=""
            ></path>
            <path
              d="m175.839 311.597h48.097c12.976 0 23.532-10.557 23.532-23.532v-64.129c0-12.976-10.557-23.532-23.532-23.532h-48.097c-12.976 0-23.532 10.557-23.532 23.532v64.129c0 12.975 10.556 23.532 23.532 23.532zm-8.532-87.661c0-4.705 3.828-8.532 8.532-8.532h48.097c4.705 0 8.532 3.828 8.532 8.532v64.129c0 4.705-3.828 8.532-8.532 8.532h-48.097c-4.705 0-8.532-3.828-8.532-8.532z"
              fill="#000000"
              data-original="#000000"
              className=""
            ></path>
            <path
              d="m336.161 200.403h-48.097c-12.976 0-23.532 10.557-23.532 23.532v64.129c0 12.976 10.557 23.532 23.532 23.532h48.097c12.976 0 23.532-10.557 23.532-23.532v-64.129c0-12.975-10.556-23.532-23.532-23.532zm8.532 87.661c0 4.705-3.828 8.532-8.532 8.532h-48.097c-4.705 0-8.532-3.828-8.532-8.532v-64.129c0-4.705 3.828-8.532 8.532-8.532h48.097c4.705 0 8.532 3.828 8.532 8.532z"
              fill="#000000"
              data-original="#000000"
              className=""
            ></path>
            <path
              d="m247.468 416.323v-32.064c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v32.064c0 4.705-3.828 8.532-8.532 8.532h-48.097c-4.705 0-8.532-3.828-8.532-8.532v-64.129c0-4.705 3.828-8.532 8.532-8.532h48.097c4.705 0 8.532 3.828 8.532 8.532 0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5c0-12.976-10.557-23.532-23.532-23.532h-48.097c-12.976 0-23.532 10.557-23.532 23.532v64.129c0 12.976 10.557 23.532 23.532 23.532h48.097c12.975 0 23.532-10.557 23.532-23.532z"
              fill="#000000"
              data-original="#000000"
              className=""
            ></path>
            <path
              d="m336.161 328.661h-48.097c-12.976 0-23.532 10.557-23.532 23.532v64.129c0 12.976 10.557 23.532 23.532 23.532h48.097c12.976 0 23.532-10.557 23.532-23.532v-64.129c0-12.975-10.556-23.532-23.532-23.532zm8.532 87.662c0 4.705-3.828 8.532-8.532 8.532h-48.097c-4.705 0-8.532-3.828-8.532-8.532v-64.129c0-4.705 3.828-8.532 8.532-8.532h48.097c4.705 0 8.532 3.828 8.532 8.532z"
              fill="#000000"
              data-original="#000000"
              className=""
            ></path>
            <path
              d="m191.871 135.242h16.032c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-16.032c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"
              fill="#000000"
              data-original="#000000"
              className=""
            ></path>
            <path
              d="m320.129 232.468h-16.032c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h16.032c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"
              fill="#000000"
              data-original="#000000"
              className=""
            ></path>
            <path
              d="m191.871 376.758c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h16.032c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"
              fill="#000000"
              data-original="#000000"
              className=""
            ></path>
            <path
              d="m320.129 264.532h-16.032c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h16.032c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"
              fill="#000000"
              data-original="#000000"
              className=""
            ></path>
          </g>
        </g>
      </svg>
    ),
  },
  {
    color: colors.red[500],
    title: 'UX / UI Design',
    link: '/services/ui-ux-and-graphics-design',
    subtitle:
      'Build the product you need on time with an experienced team that uses a clear and effective design process.',
    icon: (
      <svg
        height={55}
        width={55}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 512 512"
        stroke="currentColor"
      >
        <g>
          <g xmlns="http://www.w3.org/2000/svg">
            <g>
              <path
                d="M474.427,46.09H230.951v15.029h243.476c12.43,0,22.544,10.113,22.544,22.544v222.935H229.448V85.59l-37.573-62.622    L154.301,85.59v221.009h-25.049V0H44.086v306.599H15.029V83.663c0-9.257,5.801-17.715,14.435-21.044l-5.409-14.022    C9.667,54.147,0,68.238,0,83.663v280.548c0,20.718,16.855,37.573,37.573,37.573h140.775v55.108h-22.544    c-15.193,0-27.554,12.36-27.554,27.554V512H383.75v-27.554c0-15.194-12.361-27.554-27.554-27.554h-22.544v-55.108h140.775    c20.718,0,37.573-16.855,37.573-37.573V83.663C512,62.945,495.145,46.09,474.427,46.09z M191.875,52.18l19.749,32.914    l-19.749,11.848l-19.749-11.849L191.875,52.18z M169.331,100.943l22.544,13.526l22.544-13.526v165.577h-45.088V100.943z     M169.331,281.55h45.088v25.049h-45.088V281.55z M59.115,288.564h36.571v-15.029H59.115v-15.029h20.54v-15.029h-20.54v-15.029    h36.571v-15.029H59.115v-15.029h20.54v-15.029h-20.54v-15.029h36.571v-15.029H59.115V138.27h20.54v-15.029h-20.54v-15.029h36.571    V93.182H59.115V78.153h20.54V63.123h-20.54V48.094h36.571V33.065H59.115V15.029h55.108v291.569H59.115V288.564z M356.196,471.922    c6.906,0,12.524,5.618,12.524,12.524v12.524H143.28v-12.524c0-6.906,5.618-12.524,12.524-12.524H356.196z M193.378,456.892    v-55.108h125.245v55.108H193.378z M496.971,364.211c0,12.431-10.114,22.544-22.544,22.544H37.573    c-12.43,0-22.544-10.113-22.544-22.544v-42.583h481.941V364.211z"
                fill="#000000"
                data-original="#000000"
                className=""
              ></path>
            </g>
          </g>
          <g xmlns="http://www.w3.org/2000/svg">
            <g>
              <path
                d="M306.599,76.149v85.166h175.342V76.149H306.599z M466.912,146.286H321.628V91.178h145.284V146.286z"
                fill="#000000"
                data-original="#000000"
                className=""
              ></path>
            </g>
          </g>
          <g xmlns="http://www.w3.org/2000/svg">
            <g>
              <path
                d="M306.599,176.344v55.108h80.157v-55.108H306.599z M371.726,216.423h-50.098v-25.049h50.098V216.423z"
                fill="#000000"
                data-original="#000000"
                className=""
              ></path>
            </g>
          </g>
          <g xmlns="http://www.w3.org/2000/svg">
            <g>
              <path
                d="M401.785,176.344v55.108h80.157v-55.108H401.785z M466.912,216.423h-50.098v-25.049h50.098V216.423z"
                fill="#000000"
                data-original="#000000"
                className=""
              ></path>
            </g>
          </g>
          <g xmlns="http://www.w3.org/2000/svg">
            <g>
              <polygon
                points="290.067,91.178 290.067,76.149 244.978,76.149 244.978,91.178 260.008,91.178 260.008,276.54 244.978,276.54     244.978,291.569 290.067,291.569 290.067,276.54 275.037,276.54 275.037,91.178   "
                fill="#000000"
                data-original="#000000"
                className=""
              ></polygon>
            </g>
          </g>
          <g xmlns="http://www.w3.org/2000/svg">
            <g>
              <rect
                x="248.485"
                y="346.677"
                width="15.029"
                height="15.029"
                fill="#000000"
                data-original="#000000"
                className=""
              ></rect>
            </g>
          </g>
          <g xmlns="http://www.w3.org/2000/svg">
            <g>
              <rect
                x="278.544"
                y="346.677"
                width="15.029"
                height="15.029"
                fill="#000000"
                data-original="#000000"
                className=""
              ></rect>
            </g>
          </g>
          <g xmlns="http://www.w3.org/2000/svg">
            <g>
              <rect
                x="218.427"
                y="346.677"
                width="15.029"
                height="15.029"
                fill="#000000"
                data-original="#000000"
                className=""
              ></rect>
            </g>
          </g>
          <g xmlns="http://www.w3.org/2000/svg">
            <g>
              <rect
                x="184.36"
                y="195.883"
                width="15.029"
                height="15.029"
                fill="#000000"
                data-original="#000000"
                className=""
              ></rect>
            </g>
          </g>
          <g xmlns="http://www.w3.org/2000/svg">
            <g>
              <rect
                x="184.36"
                y="225.941"
                width="15.029"
                height="25.049"
                fill="#000000"
                data-original="#000000"
                className=""
              ></rect>
            </g>
          </g>
          <g xmlns="http://www.w3.org/2000/svg">
            <g>
              <rect
                x="184.36"
                y="130.755"
                width="15.029"
                height="50.098"
                fill="#000000"
                data-original="#000000"
                className=""
              ></rect>
            </g>
          </g>
          <g xmlns="http://www.w3.org/2000/svg">
            <g>
              <rect
                x="364.211"
                y="251.491"
                width="15.029"
                height="15.029"
                fill="#000000"
                data-original="#000000"
                className=""
              ></rect>
            </g>
          </g>
          <g xmlns="http://www.w3.org/2000/svg">
            <g>
              <rect
                x="314.114"
                y="251.491"
                width="35.068"
                height="15.029"
                fill="#000000"
                data-original="#000000"
                className=""
              ></rect>
            </g>
          </g>
          <g xmlns="http://www.w3.org/2000/svg">
            <g>
              <rect
                x="409.299"
                y="251.491"
                width="35.068"
                height="15.029"
                fill="#000000"
                data-original="#000000"
                className=""
              ></rect>
            </g>
          </g>
          <g xmlns="http://www.w3.org/2000/svg">
            <g>
              <rect
                x="459.397"
                y="251.491"
                width="15.029"
                height="15.029"
                fill="#000000"
                data-original="#000000"
                className=""
              ></rect>
            </g>
          </g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
        </g>
      </svg>
    ),
  },
];

const Categories = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        {/* <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          Categories
        </Typography> */}
        <Typography
          variant="h4"
          align={'center'}
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Our Core Services
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          color={'text.secondary'}
          data-aos={'fade-up'}
        >
          {/* The best way to learn is by using skills.
          <br />
          Browse the available course categories, choose your favourite one and
          start learning. */}
          We Care deeply about our clients & their Project We believe in the
          Providing high Quality Service Until you satisfied completely.
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={4}>
          {mock.map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Box
                display={'block'}
                width={1}
                height={1}
                sx={{
                  textDecoration: 'none',
                  transition: 'all .2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Box
                  component={Card}
                  padding={4}
                  borderRadius={2}
                  width={1}
                  height={1}
                  data-aos={'fade-up'}
                  data-aos-delay={i * 100}
                  data-aos-offset={100}
                  data-aos-duration={600}
                >
                  <Box display={'flex'} flexDirection={'column'}>
                    <Box
                      component={Avatar}
                      width={60}
                      height={60}
                      marginBottom={2}
                      bgcolor={'#fff !important'}
                      color={'#000 !important'}
                      variant={'rounded'}
                      borderRadius={0}
                      sx={{
                        fontWeight: 500,
                        textAlign: 'center',
                        display: 'block',
                        width: '100%',
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography
                      variant={'h6'}
                      gutterBottom
                      sx={{ fontWeight: 700, textAlign: 'center' }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      sx={{
                        fontWeight: 500,
                        textAlign: 'center',
                        display: 'block',
                        width: '100%',
                      }}
                    >
                      {item.subtitle}
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box
                      marginTop={2}
                      display={'flex'}
                      justifyContent={'center'}
                    >
                      <Button
                        endIcon={
                          <Box
                            component={'svg'}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width={24}
                            height={24}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </Box>
                        }
                      >
                        <Link underline="none" href={item.link} component="a">
                          Learn more
                        </Link>
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Categories;