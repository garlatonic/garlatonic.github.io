'use client';

import Link from 'next/link';
import styled, { css, keyframes } from 'styled-components';

const contentFocusIn = keyframes`
  from { opacity: 0.35; filter: blur(6px); }
  to { opacity: 1; filter: blur(0); }
`;

export const SiteShell = styled.div`
  display: grid;
  grid-template-columns: minmax(130px, 17%) minmax(0, 1fr) 90px;
  column-gap: 24px;
  min-height: calc(100svh - 2 * var(--page-y));
  align-items: start;
  @media (max-width: 899px) {
    grid-template-columns: 120px minmax(0, 1fr);
    row-gap: 56px;
    grid-template-rows: auto 1fr auto;
  }
  @media (max-width: 539px) {
    grid-template-columns: minmax(0, 1fr) auto;
    row-gap: 64px;
  }
`;

export const SkipLink = styled.a`
  position: fixed;
  z-index: 10;
  top: 8px;
  left: 8px;
  padding: 8px 12px;
  background: var(--background);
  transform: translateY(-160%);
  &:focus {
    transform: translateY(0);
  }
`;

export const SiteHeader = styled.header`
  display: contents;
`;

export const BrandLink = styled(Link)`
  font-family: var(--font-baskervville), Georgia, serif;
  grid-column: 1;
  grid-row: 1;
  position: sticky;
  top: var(--page-y);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
  text-decoration: none;
  &:hover {
    font-style: italic;
    text-decoration-thickness: 1px;
  }
  @media (max-width: 899px) {
    position: static;
  }
`;

export const BrandMonogram = styled.span`
  font-size: 25px;
  line-height: 28px;
  font-weight: 400;
  letter-spacing: -2px;
`;

export const SiteNav = styled.nav`
  grid-column: 3;
  grid-row: 1;
  position: sticky;
  top: var(--page-y);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  a {
    text-decoration: none;
  }
  a:hover,
  a[aria-current='page'] {
    text-decoration: underline;
  }
  @media (max-width: 899px) {
    position: static;
    grid-column: 2;
    justify-self: end;
  }
`;

export const SiteFooter = styled.footer`
  position: fixed;
  left: var(--page-x);
  bottom: var(--page-y);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  @media (max-width: 899px) {
    position: static;
    grid-column: 1;
    grid-row: 3;
    align-self: end;
  }
  @media (max-width: 539px) {
    padding-top: 24px;
  }
`;

export const TransitionFrame = styled.div`
  display: contents;
`;

export const PageContent = styled.main`
  grid-column: 2;
  grid-row: 1;
  min-width: 0;
  overflow-wrap: anywhere;
  animation: ${contentFocusIn} 480ms cubic-bezier(0.22, 1, 0.36, 1) both;
  @media (max-width: 899px) {
    grid-column: 2;
    grid-row: 2;
  }
  @media (max-width: 539px) {
    grid-column: 1 / -1;
  }
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const HomeContent = styled(PageContent)`
  font-size: 15px;
  line-height: 24px;
  p {
    margin: 0;
    word-break: keep-all;
  }
  @media (max-width: 899px) {
    max-width: 480px;
  }
`;

export const Heading = styled.h1`
  margin: 0 0 32px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
`;

export const ScreenReaderHeading = styled(Heading)`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

const proseStyles = css`
  font-size: 16px;
  line-height: 1.75;
  p {
    margin: 24px 0 0;
  }
  a {
    text-decoration: underline;
  }
`;
export const Prose = styled.div`
  ${proseStyles}
`;

export const ContentSection = styled.section`
  margin-top: 48px;
  h2 {
    margin: 0;
    font-size: inherit;
    font-weight: 500;
  }
  & > p {
    margin-top: 16px;
  }
`;

export const SkillsList = styled.dl`
  margin: 20px 0 0;
  & > div {
    display: grid;
    grid-template-columns: 88px minmax(0, 1fr);
    gap: 16px;
    margin-top: 8px;
  }
  dt {
    color: var(--muted);
  }
  dd {
    margin: 0;
  }
  @media (max-width: 539px) {
    & > div {
      grid-template-columns: 80px minmax(0, 1fr);
      gap: 12px;
    }
  }
`;

export const ProjectList = styled.ul`
  ${proseStyles}
  list-style: none;
  padding: 0;
  margin: 0;
  & > li + li {
    margin-top: 48px;
  }
  p {
    margin: 12px 0;
  }
`;

export const ProjectTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 4px 20px;
  h2 {
    font-size: inherit;
    font-weight: 500;
    margin: 0;
  }
  & > span {
    color: var(--muted);
    font-size: 14px;
  }
`;

const stackStyles = css`
  color: var(--muted);
  font-size: 14px;
  line-height: 24px;
`;
export const ProjectStack = styled.div`
  ${stackStyles}
`;
export const ProjectMeta = styled.p`
  ${stackStyles}
`;

export const ProjectDetailBody = styled(Prose)`
  & > p:first-child {
    margin-top: 0;
  }
`;

export const ProjectLinks = styled.p`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 20px;
`;

export const RoleList = styled.ul`
  padding-left: 20px;
  margin-top: 16px;
  list-style: disc;
  li + li {
    margin-top: 8px;
  }
`;

export const Challenge = styled.section`
  margin-top: 32px;
  h3 {
    margin: 0;
    font-size: inherit;
    font-weight: 500;
  }
  p {
    margin-top: 16px;
  }
  strong {
    font-weight: 400;
    color: var(--muted);
  }
`;

export const BackLink = styled.p`
  padding-top: 32px;
`;
