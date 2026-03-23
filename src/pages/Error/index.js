import React from 'react';
import SearchForm from '../../services/components/SearchForm';
import Button from '../../services/components/Button';
import { Helmet } from 'react-helmet';
import {css, jsx} from "@emotion/react";
/** @jsxImportSource @emotion/react */

const gifsErrors = ['d2jjuAZzDSVLZ5kI', 'Bp3dFfoqpCKFyXuSzP', 'hv5AEBpH3ZyNoRnABG', 'hLwSzlKN8Fi6I'];

const pageErrorStyle= css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1 rem;
  text-align: center;
`;

const codeErrorStyle =css`
  font-size: 5rem;
  font-weight: bold;
  font-style: italic;
`;

const msgErrorStyle = css`
  font-size: 1.5rem;
  margin: 1rem 0;
`;

const gifErrorStyle = css({
  margin: "1rem auto",
  width: "250px",
  height: "250px",
  objectFit: "cover",
  "&:hover": {
    transform: "scale(1.4)"
  }
});

export default function ErrorPage() {
  const randomImage = () => {
    return `https://media.giphy.com/media/${gifsErrors[Math.floor(Math.random() * gifsErrors.length) + 1 ]}/giphy.gif`
  }

  return (
    <>
      <Helmet>
        <title>Error 404 | Giffy</title>
      </Helmet>
      <header className="o-header">
        <SearchForm />
      </header>
      <div className="App-wrapper">
        <div css={pageErrorStyle}>
            <span css={codeErrorStyle}>404</span>
            <span css={msgErrorStyle}>Sometimes gettings lost isn't that bad</span>
            <img css={gifErrorStyle} src={randomImage()} alt="alt-page-404"/>
            <Button href="/">Go Home</Button>
        </div>
      </div>
    </>
  );
}