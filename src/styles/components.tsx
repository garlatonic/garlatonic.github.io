'use client';

import Link from 'next/link';
import styled, { css, keyframes } from 'styled-components';

const contentFocusIn = keyframes`
  from { opacity: 0.35; filter: blur(6px); }
  to { opacity: 1; filter: blur(0); }
`;

export const SiteShell = styled.div`
  display: grid;
  grid-template-columns: minmax(120px, 17%) minmax(0, 1fr) minmax(120px, 17%);
  column-gap: 40px;
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
  padding-block: 8px;
  padding-inline: 12px;
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
  font-size: 1.7857143rem;
  line-height: 2rem;
  font-weight: 400;
  letter-spacing: -0.1428571rem;
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
    padding-block-start: 24px;
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
    grid-column: 1 / -1;
    grid-row: 2;
  }
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const HomeContent = styled(PageContent)`
  font-size: 1rem;
  line-height: 1.7142857rem;
  p {
    margin: 0;
    word-break: keep-all;
  }
`;

export const Heading = styled.h1`
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

export const ScreenReaderHeading = Heading;

const proseStyles = css`
  font-size: 1rem;
  line-height: 1.75;
  p ~ p {
    margin: 12px 0 0;
  }
  a {
    text-decoration: underline;
  }
`;
export const Prose = styled.div`
  ${proseStyles}
`;

export const ContentSection = styled.section`
  margin-block-start: 60px;
  h2 {
    margin: 0;
    font-size: 1.1428571rem;
    font-weight: 500;
  }
  & > p {
    margin-block-start: 16px;
  }
`;

export const SkillsList = styled.dl`
  margin: 20px 0 0;
  & > div {
    display: grid;
    grid-template-columns: 88px minmax(0, 1fr);
    gap: 16px;
    margin-block-start: 8px;
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
    margin-block-start: 60px;
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
    font-size: 1rem;
  }
`;

const stackStyles = css`
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.7142857rem;
`;
export const ProjectStack = styled.div`
  ${stackStyles}
`;
export const ProjectMeta = styled.p`
  ${stackStyles}
`;

export const ProjectDetailBody = styled(Prose)`
  & > p:first-child {
    margin-block-start: 0;
  }
`;

export const ProjectLinks = styled.p`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 20px;
`;

const bulletListStyles = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-block-start: 20px;
  padding-inline-start: 12px;
  list-style: square;
  & > li {
    padding-inline-start: 2px;
  }
  & > li::marker {
    color: var(--line);
    font-size: 0.7142857rem;
  }
`;

export const RoleList = styled.ul`
  ${bulletListStyles}
  margin-block-start: 16px;
`;

export const Challenge = styled.section`
  margin-block-start: 32px;
  h3 {
    margin: 0;
    font-size: inherit;
    font-weight: 500;
  }
  p {
    margin-block-start: 16px;
  }
  strong {
    font-weight: 400;
    color: var(--muted);
  }
`;

export const BackLink = styled.p`
  padding-block-start: 32px;
`;

export const AboutList = styled.ul`
  margin-block-start: 20px;
  & > li + li {
    margin-block-start: 32px;
  }
  h3 {
    font-size: inherit;
    font-weight: 500;
    margin: 0;
  }
  & > li > p {
    margin-block-start: 8px;
  }
`;

export const ExperienceTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: 4px 20px;
  & > span {
    color: var(--muted);
    font-size: 1rem;
  }
`;

export const ExperienceMeta = styled.p`
  color: var(--muted);
  font-size: 1rem;
`;

export const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
`;

export const AboutContent = styled(PageContent)`
  && h1,
  && h2,
  && h3 {
    font-weight: 600;
  }
`;

export const CareerList = styled.ul`
  margin-block-start: 20px;
  & > li + li {
    margin-block-start: 4px;
  }
`;

const experienceRowStyles = css`
  display: flex;
  align-items: baseline;
  gap: 12px;
  padding-block: 4px;
  h3 {
    margin: 0;
    line-height: 1.6;
  }
  @media (max-width: 539px) {
    gap: 8px;
    h3 {
      font-size: 1rem;
    }
  }
`;

export const CareerHeading = styled.div`
  ${experienceRowStyles}
  margin-block-end: 12px;
`;

export const ProjectSummaryLink = styled(Link)`
  ${experienceRowStyles}
  h3 {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
  &:focus-visible {
    outline: 1px solid currentColor;
    outline-offset: 4px;
  }
  && {
    text-decoration: none;
  }
`;

export const CareerLeader = styled.span`
  flex: 1;
  min-width: 8px;
  align-self: center;
  border-bottom: 2px dotted var(--line);
`;

export const CareerPeriod = styled.span`
  flex-shrink: 0;
  font-size: 0.8571429rem;
  color: var(--muted);
  @media (max-width: 539px) {
    font-size: 0.8571429rem;
  }
`;

export const CareerBody = styled.div`
  padding-bottom: 28px;
  min-width: 0;
  font-size: 1rem;
  & > p:first-child {
    margin-block-start: 0;
  }
`;

export const CareerTasks = styled.ul`
  ${bulletListStyles}
  margin: 0;
`;

export const CompetencyList = styled.ul`
  ${bulletListStyles}
  gap: 8px;
  h3 {
    display: inline;
    margin: 0;
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-thickness: 1px;
  }
`;
